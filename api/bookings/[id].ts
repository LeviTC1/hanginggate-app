import type { VercelRequest, VercelResponse } from '@vercel/node'
import { updateBookingStatus } from '../_lib/bookingEngine'
import { assertMethod, getQueryValue, requireAdminKey, sendError } from '../_lib/http'
import { bookingStatusSchema } from '../_lib/schemas'

const UUID_PATTERN = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i

export default async function handler(req: VercelRequest, res: VercelResponse): Promise<void> {
  if (!assertMethod(req, res, ['PUT'])) {
    return
  }

  try {
    requireAdminKey(req)

    const bookingId = getQueryValue(req.query.id)
    if (!bookingId || !UUID_PATTERN.test(bookingId)) {
      res.status(400).json({ error: 'Invalid booking id' })
      return
    }

    let body: unknown = req.body
    if (typeof req.body === 'string') {
      try {
        body = JSON.parse(req.body)
      } catch {
        res.status(400).json({ error: 'Request body must be valid JSON' })
        return
      }
    }
    const parsed = bookingStatusSchema.safeParse(body)
    if (!parsed.success) {
      res.status(400).json({
        error: 'Invalid status payload',
        details: parsed.error.flatten(),
      })
      return
    }

    const updated = await updateBookingStatus(bookingId, parsed.data.status)
    res.status(200).json({ booking: updated })
  } catch (error) {
    sendError(res, error)
  }
}
