export type CapacityBooking = {
  start: number
  end: number
  guests: number
}

export function intervalsOverlap(existingStart: number, existingEnd: number, requestedStart: number, requestedEnd: number): boolean {
  return existingStart < requestedEnd && existingEnd > requestedStart
}

export function calculateRemainingCapacity(
  bookings: CapacityBooking[],
  slotStart: number,
  slotEnd: number,
  maxCapacity: number,
): number {
  const occupancy = bookings.reduce((total, booking) => {
    return intervalsOverlap(booking.start, booking.end, slotStart, slotEnd)
      ? total + booking.guests
      : total
  }, 0)

  return Math.max(0, maxCapacity - occupancy)
}
