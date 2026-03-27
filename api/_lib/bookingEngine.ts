import { getPool } from './db'
import { addMinutesToTime, buildSlotTimes, getUkNow, getWeekdayFromDate, isDateWithinAdvanceWindow, isTodayInUk, normalizeTime, timeToMinutes } from './time'
import { calculateRemainingCapacity } from './availabilityMath'
import type { CreateBookingInput } from './schemas'

type Queryable = {
  query: (text: string, values?: unknown[]) => Promise<{ rows: any[]; rowCount: number }>
}

export type BookingStatus = 'confirmed' | 'cancelled' | 'no_show' | 'seated'

export type AvailabilitySlot = {
  time: string
  available: boolean
  remaining: number
}

export type AvailabilityResult = {
  date: string
  slots: AvailabilitySlot[]
  closed?: boolean
  reason?: string
  message?: string
}

export type BookingSummary = {
  id: string
  reference: string
  date: string
  time: string
  guests: number
  firstName: string
  lastName: string
  email: string
  phone: string | null
  notes: string | null
  status: BookingStatus
  createdAt: string
}

export type CreateBookingResult =
  | {
      kind: 'created'
      booking: BookingSummary
    }
  | {
      kind: 'duplicate'
      booking: BookingSummary
    }

export class BookingError extends Error {
  statusCode: number
  code: string
  details?: unknown

  constructor(statusCode: number, code: string, message: string, details?: unknown) {
    super(message)
    this.statusCode = statusCode
    this.code = code
    this.details = details
  }
}

type SettingsRow = {
  max_capacity: number
  slot_duration_mins: number
  slot_interval_mins: number
  min_party_size: number
  max_party_size: number
  advance_days_min: number
  advance_days_max: number
}

type TimeSlotConfigRow = {
  day_of_week: number
  open_time: string
  close_time: string
  is_active: boolean
}

const DUPLICATE_WINDOW_MINUTES = 3
const REFERENCE_CHARS = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'

function asInteger(value: unknown, fallback = 0): number {
  const parsed = Number.parseInt(String(value), 10)
  return Number.isNaN(parsed) ? fallback : parsed
}

function asText(value: unknown): string {
  return String(value ?? '').trim()
}

function mapBookingRow(row: any): BookingSummary {
  return {
    id: asText(row.id),
    reference: asText(row.reference),
    date: asText(row.booking_date),
    time: asText(row.booking_time).slice(0, 5),
    guests: asInteger(row.guest_count),
    firstName: asText(row.first_name),
    lastName: asText(row.last_name),
    email: asText(row.email),
    phone: row.phone ? asText(row.phone) : null,
    notes: row.notes ? asText(row.notes) : null,
    status: asText(row.status) as BookingStatus,
    createdAt: row.created_at instanceof Date ? row.created_at.toISOString() : asText(row.created_at),
  }
}

function generateReference(): string {
  let ref = ''
  for (let i = 0; i < 8; i += 1) {
    ref += REFERENCE_CHARS[Math.floor(Math.random() * REFERENCE_CHARS.length)]
  }
  return ref
}

async function getSettings(client: Queryable): Promise<SettingsRow> {
  const existing = await client.query(
    `
      SELECT
        max_capacity,
        slot_duration_mins,
        slot_interval_mins,
        min_party_size,
        max_party_size,
        advance_days_min,
        advance_days_max
      FROM restaurant_settings
      ORDER BY id ASC
      LIMIT 1
    `,
  )

  if (existing.rowCount > 0) {
    const row = existing.rows[0]
    return {
      max_capacity: asInteger(row.max_capacity, 40),
      slot_duration_mins: asInteger(row.slot_duration_mins, 120),
      slot_interval_mins: asInteger(row.slot_interval_mins, 30),
      min_party_size: asInteger(row.min_party_size, 1),
      max_party_size: asInteger(row.max_party_size, 20),
      advance_days_min: asInteger(row.advance_days_min, 0),
      advance_days_max: asInteger(row.advance_days_max, 90),
    }
  }

  const inserted = await client.query(
    `
      INSERT INTO restaurant_settings (
        max_capacity,
        slot_duration_mins,
        slot_interval_mins,
        min_party_size,
        max_party_size,
        advance_days_min,
        advance_days_max
      )
      VALUES (40, 120, 30, 1, 20, 0, 90)
      RETURNING
        max_capacity,
        slot_duration_mins,
        slot_interval_mins,
        min_party_size,
        max_party_size,
        advance_days_min,
        advance_days_max
    `,
  )

  const row = inserted.rows[0]
  return {
    max_capacity: asInteger(row.max_capacity, 40),
    slot_duration_mins: asInteger(row.slot_duration_mins, 120),
    slot_interval_mins: asInteger(row.slot_interval_mins, 30),
    min_party_size: asInteger(row.min_party_size, 1),
    max_party_size: asInteger(row.max_party_size, 20),
    advance_days_min: asInteger(row.advance_days_min, 0),
    advance_days_max: asInteger(row.advance_days_max, 90),
  }
}

async function getSlotConfigForDate(client: Queryable, date: string): Promise<TimeSlotConfigRow | null> {
  const dayOfWeek = getWeekdayFromDate(date)
  const result = await client.query(
    `
      SELECT day_of_week, open_time::text AS open_time, close_time::text AS close_time, is_active
      FROM time_slot_config
      WHERE day_of_week = $1 AND is_active = TRUE
      LIMIT 1
    `,
    [dayOfWeek],
  )

  if (result.rowCount === 0) {
    return null
  }

  const row = result.rows[0]
  return {
    day_of_week: asInteger(row.day_of_week),
    open_time: asText(row.open_time),
    close_time: asText(row.close_time),
    is_active: Boolean(row.is_active),
  }
}

async function getBlockedDate(client: Queryable, date: string): Promise<{ reason: string | null; allDay: boolean } | null> {
  const result = await client.query(
    `
      SELECT reason, all_day
      FROM blocked_dates
      WHERE blocked_date = $1
      ORDER BY id DESC
      LIMIT 1
    `,
    [date],
  )

  if (result.rowCount === 0) {
    return null
  }

  const row = result.rows[0]
  return {
    reason: row.reason ? asText(row.reason) : null,
    allDay: Boolean(row.all_day),
  }
}

function validateBookingWindow(date: string, settings: SettingsRow): void {
  if (!isDateWithinAdvanceWindow(date, settings.advance_days_min, settings.advance_days_max)) {
    throw new BookingError(
      400,
      'OUTSIDE_BOOKING_WINDOW',
      `Bookings must be between ${settings.advance_days_min} and ${settings.advance_days_max} days in advance.`,
    )
  }
}

function validatePartySize(guests: number, settings: SettingsRow): void {
  if (guests < settings.min_party_size || guests > settings.max_party_size) {
    throw new BookingError(
      400,
      'INVALID_PARTY_SIZE',
      `Party size must be between ${settings.min_party_size} and ${settings.max_party_size}.`,
    )
  }
}

function buildClosedPayload(date: string, reason: string, message: string): AvailabilityResult {
  return {
    date,
    slots: [],
    closed: true,
    reason,
    message,
  }
}

export async function getAvailability(date: string, guests: number): Promise<AvailabilityResult> {
  const pool = getPool()
  const settings = await getSettings(pool)

  if (!isDateWithinAdvanceWindow(date, settings.advance_days_min, settings.advance_days_max)) {
    return buildClosedPayload(
      date,
      'outside_booking_window',
      `Bookings are available between ${settings.advance_days_min} and ${settings.advance_days_max} days in advance.`,
    )
  }

  const blocked = await getBlockedDate(pool, date)
  if (blocked?.allDay) {
    return buildClosedPayload(date, 'blocked_date', blocked.reason || 'Restaurant is closed on this date.')
  }

  const slotConfig = await getSlotConfigForDate(pool, date)
  if (!slotConfig) {
    return buildClosedPayload(date, 'closed_day', 'Restaurant is closed on this day.')
  }

  const slotTimes = buildSlotTimes(
    slotConfig.open_time,
    slotConfig.close_time,
    settings.slot_duration_mins,
    settings.slot_interval_mins,
  )

  if (!slotTimes.length) {
    return buildClosedPayload(date, 'no_service_window', 'No service window has been configured for this day.')
  }

  const bookingsResult = await pool.query(
    `
      SELECT booking_time::text AS booking_time, duration_mins, guest_count
      FROM bookings
      WHERE booking_date = $1
        AND status NOT IN ('cancelled', 'no_show')
    `,
    [date],
  )

  const bookings = bookingsResult.rows.map((row) => ({
    start: timeToMinutes(asText(row.booking_time)),
    end: timeToMinutes(asText(row.booking_time)) + asInteger(row.duration_mins, settings.slot_duration_mins),
    guests: asInteger(row.guest_count),
  }))

  const ukNow = getUkNow()

  const slots: AvailabilitySlot[] = slotTimes.map((slotTime) => {
    const start = timeToMinutes(slotTime)
    const end = start + settings.slot_duration_mins

    const remaining = calculateRemainingCapacity(bookings, start, end, settings.max_capacity)
    const isPastToday = isTodayInUk(date) && start <= ukNow.minutesSinceMidnight

    return {
      time: slotTime,
      remaining,
      available: !isPastToday && remaining >= guests,
    }
  })

  return {
    date,
    slots,
  }
}

export async function createBooking(payload: CreateBookingInput): Promise<CreateBookingResult> {
  const pool = getPool()
  const client = await pool.connect()

  const normalizedTime = normalizeTime(payload.time)
  const normalizedEmail = payload.email.trim().toLowerCase()
  const normalizedPhone = payload.phone?.trim() || null
  const normalizedNotes = payload.notes?.trim() || null

  try {
    await client.query('BEGIN')

    // Serialize booking writes per date so overlapping slots cannot overbook under concurrency.
    await client.query('SELECT pg_advisory_xact_lock(hashtext($1))', [payload.date])

    const settings = await getSettings(client)
    validateBookingWindow(payload.date, settings)
    validatePartySize(payload.guests, settings)

    const blocked = await getBlockedDate(client, payload.date)
    if (blocked?.allDay) {
      throw new BookingError(409, 'DATE_BLOCKED', blocked.reason || 'Restaurant is closed on this date.')
    }

    const slotConfig = await getSlotConfigForDate(client, payload.date)
    if (!slotConfig) {
      throw new BookingError(409, 'DATE_CLOSED', 'Restaurant is closed on this day.')
    }

    const allowedSlots = buildSlotTimes(
      slotConfig.open_time,
      slotConfig.close_time,
      settings.slot_duration_mins,
      settings.slot_interval_mins,
    )

    if (!allowedSlots.includes(normalizedTime)) {
      throw new BookingError(400, 'INVALID_SLOT', 'Selected time is outside the service window.')
    }

    if (isTodayInUk(payload.date)) {
      const ukNow = getUkNow()
      if (timeToMinutes(normalizedTime) <= ukNow.minutesSinceMidnight) {
        throw new BookingError(400, 'PAST_SLOT', 'This time is no longer available.')
      }
    }

    const duplicateResult = await client.query(
      `
        SELECT
          id,
          trim(reference) AS reference,
          booking_date::text AS booking_date,
          to_char(booking_time, 'HH24:MI') AS booking_time,
          guest_count,
          first_name,
          last_name,
          email,
          phone,
          notes,
          status,
          created_at
        FROM bookings
        WHERE lower(email) = $1
          AND booking_date = $2
          AND booking_time = $3::time
          AND guest_count = $4
          AND created_at > NOW() - ($5::text || ' minutes')::interval
        ORDER BY created_at DESC
        LIMIT 1
      `,
      [normalizedEmail, payload.date, normalizedTime, payload.guests, String(DUPLICATE_WINDOW_MINUTES)],
    )

    if ((duplicateResult.rowCount ?? 0) > 0) {
      await client.query('ROLLBACK')
      return {
        kind: 'duplicate',
        booking: mapBookingRow(duplicateResult.rows[0]),
      }
    }

    const requestedEnd = addMinutesToTime(normalizedTime, settings.slot_duration_mins)
    const occupancyResult = await client.query(
      `
        SELECT COALESCE(SUM(guest_count), 0)::int AS occupancy
        FROM bookings
        WHERE booking_date = $1
          AND status NOT IN ('cancelled', 'no_show')
          AND booking_time < $2::time
          AND (booking_time + make_interval(mins => duration_mins)) > $3::time
      `,
      [payload.date, requestedEnd, normalizedTime],
    )

    const occupancy = asInteger(occupancyResult.rows[0]?.occupancy, 0)
    const remaining = settings.max_capacity - occupancy

    if (remaining < payload.guests) {
      throw new BookingError(409, 'SLOT_UNAVAILABLE', 'This slot has just become unavailable. Please choose another time.')
    }

    let insertedBooking: BookingSummary | null = null
    let attempt = 0

    while (!insertedBooking && attempt < 6) {
      attempt += 1
      const reference = generateReference()

      try {
        const inserted = await client.query(
          `
            INSERT INTO bookings (
              reference,
              booking_date,
              booking_time,
              duration_mins,
              guest_count,
              first_name,
              last_name,
              email,
              phone,
              notes,
              source,
              status
            )
            VALUES (
              $1,
              $2,
              $3::time,
              $4,
              $5,
              $6,
              $7,
              $8,
              $9,
              $10,
              'website',
              'confirmed'
            )
            RETURNING
              id,
              trim(reference) AS reference,
              booking_date::text AS booking_date,
              to_char(booking_time, 'HH24:MI') AS booking_time,
              guest_count,
              first_name,
              last_name,
              email,
              phone,
              notes,
              status,
              created_at
          `,
          [
            reference,
            payload.date,
            normalizedTime,
            settings.slot_duration_mins,
            payload.guests,
            payload.firstName.trim(),
            payload.lastName.trim(),
            normalizedEmail,
            normalizedPhone,
            normalizedNotes,
          ],
        )

        insertedBooking = mapBookingRow(inserted.rows[0])
      } catch (error: any) {
        if (error?.code === '23505') {
          continue
        }
        throw error
      }
    }

    if (!insertedBooking) {
      throw new BookingError(500, 'REFERENCE_GENERATION_FAILED', 'Unable to generate booking reference')
    }

    await client.query('COMMIT')

    return {
      kind: 'created',
      booking: insertedBooking,
    }
  } catch (error) {
    try {
      await client.query('ROLLBACK')
    } catch (rollbackError) {
      console.error('Booking transaction rollback failed', rollbackError)
    }
    throw error
  } finally {
    client.release()
  }
}

export async function listBookingsForDate(date: string, status?: BookingStatus): Promise<{ bookings: BookingSummary[]; totalCovers: number }> {
  const pool = getPool()
  const params: unknown[] = [date]
  let filterSql = ''

  if (status) {
    params.push(status)
    filterSql = ' AND status = $2'
  }

  const bookingsResult = await pool.query(
    `
      SELECT
        id,
        trim(reference) AS reference,
        booking_date::text AS booking_date,
        to_char(booking_time, 'HH24:MI') AS booking_time,
        guest_count,
        first_name,
        last_name,
        email,
        phone,
        notes,
        status,
        created_at
      FROM bookings
      WHERE booking_date = $1
      ${filterSql}
      ORDER BY booking_time ASC, created_at ASC
    `,
    params,
  )

  const bookings = bookingsResult.rows.map(mapBookingRow)
  const totalCovers = bookings
    .filter((booking) => booking.status !== 'cancelled' && booking.status !== 'no_show')
    .reduce((sum, booking) => sum + booking.guests, 0)

  return {
    bookings,
    totalCovers,
  }
}

export async function updateBookingStatus(id: string, status: BookingStatus): Promise<BookingSummary> {
  const pool = getPool()
  const updated = await pool.query(
    `
      UPDATE bookings
      SET status = $2, updated_at = NOW()
      WHERE id = $1
      RETURNING
        id,
        trim(reference) AS reference,
        booking_date::text AS booking_date,
        to_char(booking_time, 'HH24:MI') AS booking_time,
        guest_count,
        first_name,
        last_name,
        email,
        phone,
        notes,
        status,
        created_at
    `,
    [id, status],
  )

  if (updated.rowCount === 0) {
    throw new BookingError(404, 'BOOKING_NOT_FOUND', 'Booking not found')
  }

  return mapBookingRow(updated.rows[0])
}
