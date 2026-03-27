import { describe, expect, it } from 'vitest'
import { calculateRemainingCapacity, intervalsOverlap } from './availabilityMath'

describe('intervalsOverlap', () => {
  it('returns true for overlapping intervals', () => {
    expect(intervalsOverlap(12 * 60, 14 * 60, 13 * 60, 15 * 60)).toBe(true)
  })

  it('returns false when one interval ends exactly at start of another', () => {
    expect(intervalsOverlap(12 * 60, 14 * 60, 14 * 60, 16 * 60)).toBe(false)
  })
})

describe('calculateRemainingCapacity', () => {
  it('subtracts overlapping covers only', () => {
    const bookings = [
      { start: 12 * 60, end: 14 * 60, guests: 10 },
      { start: 13 * 60, end: 15 * 60, guests: 8 },
      { start: 16 * 60, end: 18 * 60, guests: 12 },
    ]

    const remaining = calculateRemainingCapacity(bookings, 13 * 60 + 30, 15 * 60 + 30, 40)
    expect(remaining).toBe(22)
  })
})
