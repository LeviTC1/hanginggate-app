import { useEffect, useMemo, useState } from 'react'
import { BookingApiError, fetchAdminBookings, updateBookingStatus } from '../lib/booking/api'
import { addDays, formatDateLong, formatTimeLabel, getTodayUkDate } from '../lib/booking/date'
import type { BookingRecord, BookingStatus } from '../lib/booking/types'
import PageHero from '../components/PageHero'
import SEO from '../components/SEO'

const STORAGE_KEY = 'bridge42-admin-key'

type StatusFilter = 'all' | BookingStatus

export default function Admin() {
  const today = useMemo(() => getTodayUkDate(), [])
  const [adminKeyInput, setAdminKeyInput] = useState('')
  const [adminKey, setAdminKey] = useState<string>('')
  const [date, setDate] = useState(today)
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('all')
  const [bookings, setBookings] = useState<BookingRecord[]>([])
  const [totalCovers, setTotalCovers] = useState(0)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [updatingId, setUpdatingId] = useState<string | null>(null)

  useEffect(() => {
    const stored = sessionStorage.getItem(STORAGE_KEY)
    if (stored) {
      setAdminKey(stored)
      setAdminKeyInput(stored)
    }
  }, [])

  useEffect(() => {
    if (!adminKey) {
      return
    }

    setLoading(true)
    setError('')

    fetchAdminBookings(date, adminKey, statusFilter === 'all' ? undefined : statusFilter)
      .then((result) => {
        setBookings(result.bookings)
        setTotalCovers(result.totalCovers)
      })
      .catch((fetchError: unknown) => {
        if (fetchError instanceof BookingApiError && fetchError.status === 401) {
          setError('Invalid admin key. Please sign in again.')
          setAdminKey('')
          sessionStorage.removeItem(STORAGE_KEY)
          return
        }

        setError(fetchError instanceof Error ? fetchError.message : 'Could not load bookings')
      })
      .finally(() => {
        setLoading(false)
      })
  }, [adminKey, date, statusFilter])

  function handleSignIn() {
    if (!adminKeyInput.trim()) {
      setError('Enter your admin key to continue.')
      return
    }

    sessionStorage.setItem(STORAGE_KEY, adminKeyInput.trim())
    setAdminKey(adminKeyInput.trim())
    setError('')
  }

  function handleSignOut() {
    sessionStorage.removeItem(STORAGE_KEY)
    setAdminKey('')
    setAdminKeyInput('')
    setBookings([])
  }

  async function handleStatusUpdate(bookingId: string, status: BookingStatus) {
    if (!adminKey) {
      return
    }

    setUpdatingId(bookingId)
    setError('')

    try {
      const updated = await updateBookingStatus(bookingId, status, adminKey)
      setBookings((prev) => prev.map((booking) => (booking.id === bookingId ? updated.booking : booking)))
    } catch (updateError) {
      setError(updateError instanceof Error ? updateError.message : 'Could not update booking status')
    } finally {
      setUpdatingId(null)
    }
  }

  return (
    <div>
      <SEO
        path="/admin"
        title="Admin Bookings"
        description="Bridge 42 bookings admin day view"
      />
      <PageHero title="Bookings Admin" subtitle="Day view and status controls" />

      <section style={{ maxWidth: '1120px', margin: '0 auto', padding: '56px 24px' }}>
        {!adminKey ? (
          <div style={{
            maxWidth: '520px',
            margin: '0 auto',
            background: 'linear-gradient(165deg, rgba(255,255,255,0.96), rgba(249,241,227,0.92))',
            border: '1px solid rgba(139,26,26,0.18)',
            borderRadius: '14px',
            padding: '24px',
          }}>
            <h2 style={{ fontSize: 'clamp(24px, 4vw, 34px)', color: '#7A1111', marginBottom: '8px' }}>Admin access</h2>
            <p style={{ color: '#6B5E52', fontSize: '14px', marginBottom: '16px' }}>
              Enter your admin key to load today’s bookings.
            </p>
            <input
              type="password"
              value={adminKeyInput}
              onChange={(event) => setAdminKeyInput(event.target.value)}
              placeholder="Admin key"
              style={{
                width: '100%',
                padding: '12px 14px',
                border: '1px solid rgba(139,26,26,0.24)',
                borderRadius: '8px',
                fontSize: '15px',
                marginBottom: '12px',
              }}
            />
            {error && (
              <p style={{ color: '#8B1A1A', fontSize: '13px', marginBottom: '10px' }}>{error}</p>
            )}
            <button type="button" className="btn btn-reserve" onClick={handleSignIn}>
              Access admin view
            </button>
          </div>
        ) : (
          <div style={{ display: 'grid', gap: '16px' }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              gap: '10px',
              flexWrap: 'wrap',
              alignItems: 'center',
              background: 'rgba(255,255,255,0.7)',
              border: '1px solid rgba(139,26,26,0.14)',
              borderRadius: '12px',
              padding: '14px',
            }}>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <button type="button" className="btn btn-outline-light" onClick={() => setDate(addDays(date, -1))} style={{ color: '#4B3B2F', borderColor: 'rgba(139,26,26,0.2)', background: '#fff' }}>
                  Previous day
                </button>
                <button type="button" className="btn btn-outline-light" onClick={() => setDate(today)} style={{ color: '#4B3B2F', borderColor: 'rgba(139,26,26,0.2)', background: '#fff' }}>
                  Today
                </button>
                <button type="button" className="btn btn-outline-light" onClick={() => setDate(addDays(date, 1))} style={{ color: '#4B3B2F', borderColor: 'rgba(139,26,26,0.2)', background: '#fff' }}>
                  Next day
                </button>
              </div>

              <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
                <label style={{ color: '#4A3D34', fontSize: '13px', fontWeight: 700 }}>
                  Date
                  <input
                    type="date"
                    value={date}
                    onChange={(event) => setDate(event.target.value)}
                    style={{ marginLeft: '8px', padding: '8px 10px', borderRadius: '8px', border: '1px solid rgba(139,26,26,0.2)' }}
                  />
                </label>

                <select
                  value={statusFilter}
                  onChange={(event) => setStatusFilter(event.target.value as StatusFilter)}
                  style={{ padding: '8px 10px', borderRadius: '8px', border: '1px solid rgba(139,26,26,0.2)', background: '#fff' }}
                >
                  <option value="all">All statuses</option>
                  <option value="confirmed">Confirmed</option>
                  <option value="seated">Seated</option>
                  <option value="cancelled">Cancelled</option>
                  <option value="no_show">No-show</option>
                </select>

                <button type="button" className="btn btn-outline-light" onClick={handleSignOut} style={{ color: '#4B3B2F', borderColor: 'rgba(139,26,26,0.2)', background: '#fff' }}>
                  Sign out
                </button>
              </div>
            </div>

            <div style={{
              background: 'linear-gradient(165deg, #1B130E, #2B1A11)',
              border: '1px solid rgba(216,181,108,0.35)',
              borderRadius: '12px',
              color: '#F5E7C6',
              padding: '16px',
            }}>
              <p style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.08em', opacity: 0.8, marginBottom: '6px' }}>
                Day view
              </p>
              <p style={{ fontSize: '22px', fontWeight: 700, marginBottom: '4px' }}>{formatDateLong(date)}</p>
              <p style={{ color: '#E2C97E', fontWeight: 700 }}>{totalCovers} covers</p>
            </div>

            {error && (
              <div style={{
                borderRadius: '10px',
                border: '1px solid rgba(139,26,26,0.26)',
                background: 'rgba(139,26,26,0.08)',
                color: '#7D1B1B',
                padding: '12px 14px',
                fontSize: '13px',
              }}>
                {error}
              </div>
            )}

            {loading ? (
              <p style={{ color: '#6B5E52' }}>Loading bookings…</p>
            ) : bookings.length === 0 ? (
              <div style={{
                borderRadius: '10px',
                border: '1px solid rgba(139,26,26,0.14)',
                background: 'rgba(255,255,255,0.76)',
                color: '#5E4D40',
                padding: '16px',
              }}>
                No bookings for this day.
              </div>
            ) : (
              <div style={{ display: 'grid', gap: '10px' }}>
                {bookings.map((booking) => (
                  <article
                    key={booking.id}
                    style={{
                      borderRadius: '12px',
                      border: '1px solid rgba(139,26,26,0.16)',
                      background: 'rgba(255,255,255,0.8)',
                      padding: '14px',
                      display: 'grid',
                      gap: '10px',
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', gap: '8px', flexWrap: 'wrap' }}>
                      <div>
                        <p style={{ fontSize: '16px', color: '#2B1D14', fontWeight: 800 }}>
                          {formatTimeLabel(booking.time)} · {booking.guests} guests
                        </p>
                        <p style={{ color: '#5E4D40', fontSize: '14px' }}>
                          {booking.firstName} {booking.lastName} · {booking.email}
                        </p>
                        {booking.phone && (
                          <p style={{ color: '#6B5E52', fontSize: '13px' }}>{booking.phone}</p>
                        )}
                        {booking.notes && (
                          <p style={{ color: '#6B5E52', fontSize: '13px', marginTop: '4px' }}>Notes: {booking.notes}</p>
                        )}
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <p style={{ color: '#7A1111', fontWeight: 800, letterSpacing: '0.08em', fontSize: '13px' }}>{booking.reference}</p>
                        <p style={{
                          display: 'inline-block',
                          marginTop: '6px',
                          borderRadius: '999px',
                          border: '1px solid rgba(139,26,26,0.2)',
                          padding: '3px 10px',
                          fontSize: '11px',
                          textTransform: 'uppercase',
                          color: '#6C1A1A',
                          background: 'rgba(139,26,26,0.08)',
                        }}>
                          {booking.status.replace('_', ' ')}
                        </p>
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                      <button
                        type="button"
                        className="btn btn-outline-light"
                        disabled={updatingId === booking.id}
                        onClick={() => handleStatusUpdate(booking.id, 'confirmed')}
                        style={{ color: '#4B3B2F', borderColor: 'rgba(139,26,26,0.2)', background: '#fff', padding: '8px 12px', fontSize: '11px' }}
                      >
                        Confirmed
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-light"
                        disabled={updatingId === booking.id}
                        onClick={() => handleStatusUpdate(booking.id, 'seated')}
                        style={{ color: '#4B3B2F', borderColor: 'rgba(139,26,26,0.2)', background: '#fff', padding: '8px 12px', fontSize: '11px' }}
                      >
                        Seated
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-light"
                        disabled={updatingId === booking.id}
                        onClick={() => handleStatusUpdate(booking.id, 'no_show')}
                        style={{ color: '#4B3B2F', borderColor: 'rgba(139,26,26,0.2)', background: '#fff', padding: '8px 12px', fontSize: '11px' }}
                      >
                        No-show
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-light"
                        disabled={updatingId === booking.id}
                        onClick={() => handleStatusUpdate(booking.id, 'cancelled')}
                        style={{ color: '#7D1B1B', borderColor: 'rgba(139,26,26,0.24)', background: 'rgba(139,26,26,0.06)', padding: '8px 12px', fontSize: '11px' }}
                      >
                        Cancel
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        )}
      </section>
    </div>
  )
}
