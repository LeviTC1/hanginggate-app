import type { VercelRequest, VercelResponse } from '@vercel/node'
import { BookingError, createBooking, listBookingsForDate } from '../_lib/bookingEngine'
import { sendBookingEmails } from '../_lib/email'
import { assertMethod, getQueryValue, requireAdminKey, sendError } from '../_lib/http'
import { adminBookingsQuerySchema, createBookingSchema } from '../_lib/schemas'

function getRequestBody(req: VercelRequest): Record<string, unknown> {
  if (!req.body) {
    return {}
  }

  if (typeof req.body === 'string') {
    try {
      return JSON.parse(req.body)
    } catch {
      throw new BookingError(400, 'INVALID_JSON', 'Request body must be valid JSON')
    }
  }

  if (typeof req.body === 'object') {
    return req.body as Record<string, unknown>
  }

  return {}
}

export default async function handler(req: VercelRequest, res: VercelResponse): Promise<void> {
  if (!assertMethod(req, res, ['GET', 'POST'])) {
    return
  }

  if (req.method === 'GET') {
    try {
      requireAdminKey(req)

      const parsed = adminBookingsQuerySchema.safeParse({
        date: getQueryValue(req.query.date),
        status: getQueryValue(req.query.status),
      })

      if (!parsed.success) {
        res.status(400).json({
          error: 'Invalid bookings query',
          details: parsed.error.flatten(),
        })
        return
      }

      const result = await listBookingsForDate(parsed.data.date, parsed.data.status)
      res.status(200).json({
        date: parsed.data.date,
        totalCovers: result.totalCovers,
        bookings: result.bookings,
      })
    } catch (error) {
      sendError(res, error)
    }

    return
  }

  try {
    const parsed = createBookingSchema.safeParse(getRequestBody(req))

    if (!parsed.success) {
      res.status(400).json({
        error: 'Invalid booking payload',
        details: parsed.error.flatten(),
      })
      return
    }

    const result = await createBooking(parsed.data)

    if (result.kind === 'duplicate') {
      res.status(409).json({
        error: 'Duplicate booking submission detected. Your earlier booking is already saved.',
        code: 'DUPLICATE_SUBMISSION',
        booking: result.booking,
      })
      return
    }

    sendBookingEmails(result.booking).catch((emailError) => {
      console.error('Booking email send failed', {
        bookingId: result.booking.id,
        reference: result.booking.reference,
        error: emailError,
      })
    })

    res.status(201).json({
      booking: result.booking,
    })
  } catch (error) {
    sendError(res, error)
  }
}
