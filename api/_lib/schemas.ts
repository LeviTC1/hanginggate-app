import { z } from 'zod'

const DATE_REGEX = /^\d{4}-\d{2}-\d{2}$/
const TIME_REGEX = /^\d{2}:\d{2}$/

export const availabilityQuerySchema = z.object({
  date: z.string().regex(DATE_REGEX, 'Date must be YYYY-MM-DD'),
  guests: z.coerce.number().int().min(1).max(50),
})

export const createBookingSchema = z.object({
  date: z.string().regex(DATE_REGEX, 'Date must be YYYY-MM-DD'),
  time: z.string().regex(TIME_REGEX, 'Time must be HH:mm'),
  guests: z.coerce.number().int().min(1).max(50),
  firstName: z.string().trim().min(1, 'First name is required').max(80),
  lastName: z.string().trim().min(1, 'Last name is required').max(80),
  email: z.string().trim().email('Valid email is required').max(255),
  phone: z.string().trim().max(30).optional().or(z.literal('')),
  notes: z.string().trim().max(800).optional().or(z.literal('')),
})

export const adminBookingsQuerySchema = z.object({
  date: z.string().regex(DATE_REGEX, 'Date must be YYYY-MM-DD'),
  status: z.enum(['confirmed', 'cancelled', 'no_show', 'seated']).optional(),
})

export const bookingStatusSchema = z.object({
  status: z.enum(['confirmed', 'cancelled', 'no_show', 'seated']),
})

export type CreateBookingInput = z.infer<typeof createBookingSchema>
