export type BookingStatus = 'confirmed' | 'cancelled' | 'no_show' | 'seated'

export type AvailabilitySlot = {
  time: string
  available: boolean
  remaining: number
}

export type AvailabilityResponse = {
  date: string
  slots: AvailabilitySlot[]
  closed?: boolean
  reason?: string
  message?: string
}

export type BookingPayload = {
  date: string
  time: string
  guests: number
  firstName: string
  lastName: string
  email: string
  phone?: string
  notes?: string
}

export type BookingRecord = {
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

export type BookingCreateResponse = {
  booking: BookingRecord
  code?: string
  error?: string
}

export type AdminBookingsResponse = {
  date: string
  totalCovers: number
  bookings: BookingRecord[]
}
