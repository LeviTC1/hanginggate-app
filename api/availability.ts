import type { VercelRequest, VercelResponse } from '@vercel/node'
import { getAvailability } from './_lib/bookingEngine'
import { assertMethod, getQueryValue, sendError } from './_lib/http'
import { availabilityQuerySchema } from './_lib/schemas'

export default async function handler(req: VercelRequest, res: VercelResponse): Promise<void> {
  if (!assertMethod(req, res, ['GET'])) {
    return
  }

  try {
    const parsed = availabilityQuerySchema.safeParse({
      date: getQueryValue(req.query.date),
      guests: getQueryValue(req.query.guests),
    })

    if (!parsed.success) {
      res.status(400).json({
        error: 'Invalid availability query',
        details: parsed.error.flatten(),
      })
      return
    }

    const result = await getAvailability(parsed.data.date, parsed.data.guests)
    res.status(200).json(result)
  } catch (error) {
    sendError(res, error)
  }
}
