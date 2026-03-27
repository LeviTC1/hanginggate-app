export const UK_TIME_ZONE = 'Europe/London'

export type UkNow = {
  date: string
  time: string
  minutesSinceMidnight: number
}

const DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/
const TIME_PATTERN = /^\d{2}:\d{2}(:\d{2})?$/

function getFormatter() {
  return new Intl.DateTimeFormat('en-GB', {
    timeZone: UK_TIME_ZONE,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  })
}

export function getUkNow(now: Date = new Date()): UkNow {
  const parts = getFormatter().formatToParts(now)
  const bag = Object.fromEntries(parts.filter((part) => part.type !== 'literal').map((part) => [part.type, part.value]))

  const date = `${bag.year}-${bag.month}-${bag.day}`
  const time = `${bag.hour}:${bag.minute}`
  const minutesSinceMidnight = Number.parseInt(bag.hour, 10) * 60 + Number.parseInt(bag.minute, 10)

  return {
    date,
    time,
    minutesSinceMidnight,
  }
}

export function assertDateString(value: string): boolean {
  return DATE_PATTERN.test(value)
}

export function assertTimeString(value: string): boolean {
  return TIME_PATTERN.test(value)
}

export function normalizeTime(value: string): string {
  if (!assertTimeString(value)) {
    throw new Error(`Invalid time: ${value}`)
  }

  const [hour, minute] = value.split(':')
  return `${hour}:${minute}`
}

export function timeToMinutes(value: string): number {
  const normalized = normalizeTime(value)
  const [hourRaw, minuteRaw] = normalized.split(':')
  const hour = Number.parseInt(hourRaw, 10)
  const minute = Number.parseInt(minuteRaw, 10)

  if (Number.isNaN(hour) || Number.isNaN(minute) || hour < 0 || hour > 23 || minute < 0 || minute > 59) {
    throw new Error(`Invalid time: ${value}`)
  }

  return hour * 60 + minute
}

export function minutesToTime(totalMinutes: number): string {
  const minutes = ((totalMinutes % (24 * 60)) + 24 * 60) % (24 * 60)
  const hour = Math.floor(minutes / 60)
  const minute = minutes % 60

  return `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`
}

export function addMinutesToTime(time: string, minutesToAdd: number): string {
  return minutesToTime(timeToMinutes(time) + minutesToAdd)
}

export function getWeekdayFromDate(date: string): number {
  if (!assertDateString(date)) {
    throw new Error(`Invalid date: ${date}`)
  }

  const [year, month, day] = date.split('-').map((part) => Number.parseInt(part, 10))
  return new Date(Date.UTC(year, month - 1, day)).getUTCDay()
}

function dateToEpochDay(date: string): number {
  if (!assertDateString(date)) {
    throw new Error(`Invalid date: ${date}`)
  }

  const [year, month, day] = date.split('-').map((part) => Number.parseInt(part, 10))
  return Math.floor(Date.UTC(year, month - 1, day) / 86400000)
}

export function addDays(date: string, days: number): string {
  const epochDay = dateToEpochDay(date) + days
  const dateObj = new Date(epochDay * 86400000)
  const year = dateObj.getUTCFullYear()
  const month = String(dateObj.getUTCMonth() + 1).padStart(2, '0')
  const day = String(dateObj.getUTCDate()).padStart(2, '0')

  return `${year}-${month}-${day}`
}

export function isDateWithinAdvanceWindow(date: string, minDays: number, maxDays: number, now: Date = new Date()): boolean {
  const todayUk = getUkNow(now).date
  const delta = dateToEpochDay(date) - dateToEpochDay(todayUk)
  return delta >= minDays && delta <= maxDays
}

export function isTodayInUk(date: string, now: Date = new Date()): boolean {
  return getUkNow(now).date === date
}

export function buildSlotTimes(openTime: string, closeTime: string, durationMins: number, intervalMins: number): string[] {
  if (durationMins <= 0 || intervalMins <= 0) {
    return []
  }

  const openMins = timeToMinutes(openTime)
  const closeMins = timeToMinutes(closeTime)

  if (closeMins <= openMins) {
    return []
  }

  const latestStart = closeMins - durationMins
  if (latestStart < openMins) {
    return []
  }

  const slots: string[] = []
  for (let minute = openMins; minute <= latestStart; minute += intervalMins) {
    slots.push(minutesToTime(minute))
  }

  return slots
}
