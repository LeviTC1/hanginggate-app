import type { VercelRequest, VercelResponse } from '@vercel/node'
import { BookingError } from './bookingEngine'

export function getQueryValue(value: string | string[] | undefined): string | undefined {
  if (Array.isArray(value)) {
    return value[0]
  }
  return value
}

export function assertMethod(req: VercelRequest, res: VercelResponse, methods: string[]): boolean {
  if (req.method && methods.includes(req.method)) {
    return true
  }

  res.setHeader('Allow', methods)
  res.status(405).json({ error: 'Method not allowed' })
  return false
}

export function requireAdminKey(req: VercelRequest): void {
  const configuredSecret = process.env.ADMIN_SECRET
  if (!configuredSecret) {
    throw new BookingError(500, 'ADMIN_SECRET_NOT_CONFIGURED', 'ADMIN_SECRET is not configured on the server')
  }

  const key = req.headers['x-admin-key']
  const provided = Array.isArray(key) ? key[0] : key

  if (!provided || provided !== configuredSecret) {
    throw new BookingError(401, 'UNAUTHORIZED', 'Invalid admin key')
  }
}

export function sendError(res: VercelResponse, error: unknown): void {
  if (error instanceof BookingError) {
    res.status(error.statusCode).json({
      error: error.message,
      code: error.code,
      details: error.details,
    })
    return
  }

  console.error('Unhandled API error', error)
  res.status(500).json({ error: 'Internal server error' })
}
