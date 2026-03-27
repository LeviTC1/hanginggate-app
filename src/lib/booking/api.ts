import type { AdminBookingsResponse, AvailabilityResponse, BookingCreateResponse, BookingPayload, BookingRecord, BookingStatus } from './types'

export class BookingApiError extends Error {
  status: number
  code?: string
  details?: unknown

  constructor(message: string, status: number, code?: string, details?: unknown) {
    super(message)
    this.status = status
    this.code = code
    this.details = details
  }
}

async function request<T>(url: string, init?: RequestInit): Promise<T> {
  const response = await fetch(url, init)
  const text = await response.text()
  let payload: any = null

  if (text) {
    try {
      payload = JSON.parse(text)
    } catch {
      payload = { error: text }
    }
  }

  if (!response.ok) {
    throw new BookingApiError(
      payload?.error || 'Request failed',
      response.status,
      payload?.code,
      payload?.details,
    )
  }

  return payload as T
}

export function fetchAvailability(date: string, guests: number): Promise<AvailabilityResponse> {
  const query = new URLSearchParams({ date, guests: String(guests) })
  return request<AvailabilityResponse>(`/api/availability?${query.toString()}`)
}

export function createBooking(payload: BookingPayload): Promise<BookingCreateResponse> {
  return request<BookingCreateResponse>('/api/bookings', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
}

export function fetchAdminBookings(date: string, adminKey: string, status?: BookingStatus): Promise<AdminBookingsResponse> {
  const query = new URLSearchParams({ date })
  if (status) {
    query.set('status', status)
  }

  return request<AdminBookingsResponse>(`/api/bookings?${query.toString()}`, {
    headers: {
      'x-admin-key': adminKey,
    },
  })
}

export function updateBookingStatus(id: string, status: BookingStatus, adminKey: string): Promise<{ booking: BookingRecord }> {
  return request<{ booking: BookingRecord }>(`/api/bookings/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'x-admin-key': adminKey,
    },
    body: JSON.stringify({ status }),
  })
}
