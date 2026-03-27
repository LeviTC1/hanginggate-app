import { useEffect, useMemo, useState } from 'react'
import type { CSSProperties, FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { BookingApiError, createBooking } from '../../lib/booking/api'
import { addDays, formatDateLong, formatTimeLabel, getTodayUkDate } from '../../lib/booking/date'
import type { BookingPayload, BookingRecord } from '../../lib/booking/types'
import { useAvailability } from '../../hooks/booking/useAvailability'
import SlotGrid from './SlotGrid'
import StepCard from './StepCard'

type Step = 1 | 2 | 3 | 4 | 5

type DetailsForm = {
  firstName: string
  lastName: string
  email: string
  phone: string
  notes: string
}

const STEP_LABELS: Array<{ step: Step; title: string }> = [
  { step: 1, title: 'Guests' },
  { step: 2, title: 'Date' },
  { step: 3, title: 'Time' },
  { step: 4, title: 'Details' },
  { step: 5, title: 'Done' },
]

const DEFAULT_MAX_ADVANCE_DAYS = 90
const DEFAULT_GUESTS = 2

const inputStyle: CSSProperties = {
  width: '100%',
  padding: '12px 14px',
  border: '1px solid var(--border-strong)',
  borderRadius: '8px',
  fontSize: '15px',
  backgroundColor: 'var(--surface-card)',
  color: 'var(--text-primary)',
  fontFamily: 'inherit',
}

function mapGuestsToPartySize(guestCount: number): string {
  if (guestCount <= 5) return '2–5'
  if (guestCount <= 10) return '6–10'
  if (guestCount <= 20) return '11–20'
  if (guestCount <= 50) return '21–50'
  if (guestCount <= 100) return '51–100'
  return '100+'
}

function validateDetails(form: DetailsForm): Partial<Record<keyof DetailsForm, string>> {
  const errors: Partial<Record<keyof DetailsForm, string>> = {}

  if (!form.firstName.trim()) {
    errors.firstName = 'First name is required'
  }
  if (!form.lastName.trim()) {
    errors.lastName = 'Last name is required'
  }

  const email = form.email.trim()
  if (!email) {
    errors.email = 'Email is required'
  } else if (!/^\S+@\S+\.\S+$/.test(email)) {
    errors.email = 'Enter a valid email'
  }

  if (form.phone.trim().length > 30) {
    errors.phone = 'Phone number is too long'
  }

  if (form.notes.trim().length > 800) {
    errors.notes = 'Notes can be at most 800 characters'
  }

  return errors
}

export default function BookingFlow() {
  const today = useMemo(() => getTodayUkDate(), [])
  const [step, setStep] = useState<Step>(1)
  const [guests, setGuests] = useState<number>(DEFAULT_GUESTS)
  const [date, setDate] = useState<string>(today)
  const [time, setTime] = useState<string>('')
  const [details, setDetails] = useState<DetailsForm>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    notes: '',
  })
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<keyof DetailsForm, string>>>({})
  const [stepError, setStepError] = useState<string>('')
  const [submitError, setSubmitError] = useState<string>('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [confirmation, setConfirmation] = useState<BookingRecord | null>(null)
  const [contactRequestReady, setContactRequestReady] = useState(false)

  const { data: availability, slots, loading: availabilityLoading, error: availabilityError } = useAvailability(date, guests)

  useEffect(() => {
    if (!time || !slots.length) {
      return
    }

    const selectedSlot = slots.find((slot) => slot.time === time)
    if (!selectedSlot || !selectedSlot.available) {
      setTime('')
    }
  }, [slots, time])

  function goToStep(nextStep: Step) {
    setStep(nextStep)
    setStepError('')
    setSubmitError('')
  }

  function handleGuestsNext() {
    if (!Number.isInteger(guests) || guests < 1 || guests > 20) {
      setStepError('Please choose a party size between 1 and 20 guests.')
      return
    }

    goToStep(2)
  }

  function handleDateNext() {
    if (!date) {
      setStepError('Please choose a date to continue.')
      return
    }

    goToStep(3)
  }

  function handleTimeNext() {
    if (!time) {
      if (noSlotsForDate || availability?.closed) {
        goToStep(4)
        return
      }

      setStepError('Please select an available time slot.')
      return
    }

    goToStep(4)
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitError('')

    const errors = validateDetails(details)
    setFieldErrors(errors)

    if (Object.keys(errors).length > 0) {
      setSubmitError('Please fix the highlighted fields.')
      return
    }

    if (isContactRequestMode) {
      setContactRequestReady(true)
      goToStep(5)
      return
    }

    const payload: BookingPayload = {
      date,
      time,
      guests,
      firstName: details.firstName.trim(),
      lastName: details.lastName.trim(),
      email: details.email.trim(),
      phone: details.phone.trim() || undefined,
      notes: details.notes.trim() || undefined,
    }

    setIsSubmitting(true)

    try {
      const response = await createBooking(payload)
      setConfirmation(response.booking)
      goToStep(5)
    } catch (error) {
      if (error instanceof BookingApiError) {
        if (error.status === 409 && error.code === 'DUPLICATE_SUBMISSION') {
          setSubmitError('This booking was already submitted moments ago. Please check your inbox for confirmation.')
        } else {
          setSubmitError(error.message)
        }
      } else {
        setSubmitError('Could not complete booking. Please try again.')
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  const minDate = today
  const maxDate = addDays(today, DEFAULT_MAX_ADVANCE_DAYS)
  const contactPrefillHref = useMemo(() => {
    const params = new URLSearchParams()
    const fullName = `${details.firstName} ${details.lastName}`.trim()
    const prefillMessage = [
      'Hello, I would like help with a table booking request.',
      '',
      `Guests: ${guests}`,
      `Preferred date: ${formatDateLong(date)}`,
      time ? `Preferred time: ${formatTimeLabel(time)}` : '',
      details.notes.trim() ? `Booking notes: ${details.notes.trim()}` : '',
      '',
      'Please contact me to confirm availability.',
    ]
      .filter(Boolean)
      .join('\n')

    if (fullName) params.set('name', fullName)
    if (details.email.trim()) params.set('email', details.email.trim())
    if (details.phone.trim()) params.set('phone', details.phone.trim())

    params.set('date', date)
    params.set('partySize', mapGuestsToPartySize(guests))
    params.set('subject', 'General enquiry')
    params.set('message', prefillMessage)

    return `/contact?${params.toString()}`
  }, [date, details.email, details.firstName, details.lastName, details.notes, details.phone, guests, time])
  const hasAnyAvailableSlots = slots.some((slot) => slot.available)
  const noSlotsForDate = !availabilityLoading && !availability?.closed && !hasAnyAvailableSlots
  const isContactRequestMode = (noSlotsForDate || Boolean(availability?.closed)) && !time

  return (
    <div style={{ display: 'grid', gap: '18px' }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(5, minmax(0, 1fr))',
        gap: '8px',
      }}>
        {STEP_LABELS.map((item) => {
          const active = step === item.step
          const complete = step > item.step

          return (
            <div
              key={item.step}
              style={{
                borderRadius: '999px',
                padding: '8px 10px',
                textAlign: 'center',
                fontSize: '12px',
                letterSpacing: '0.04em',
                fontWeight: 700,
                textTransform: 'uppercase',
                border: active ? '1px solid var(--gold-light)' : '1px solid var(--border-default)',
                background: active
                  ? 'linear-gradient(160deg, #182217, #253322)'
                  : complete
                    ? 'rgba(200,144,26,0.12)'
                    : 'rgba(22,38,26,0.9)',
                color: active ? 'var(--text-inverse)' : 'var(--text-secondary)',
              }}
            >
              {item.title}
            </div>
          )
        })}
      </div>

      <div
        style={{
          borderRadius: '10px',
          border: '1px solid rgba(216,181,108,0.34)',
          background: 'rgba(216,181,108,0.08)',
          padding: '12px 14px',
          fontSize: '13px',
          color: 'var(--text-secondary)',
          lineHeight: 1.6,
        }}
      >
        Need help with this request?{' '}
        <Link to={contactPrefillHref} style={{ color: 'var(--gold)', fontWeight: 700, textDecoration: 'none' }}>
          Send this booking info to our contact form →
        </Link>
      </div>

      {step === 1 && (
        <StepCard title="How many guests?" subtitle="We’ll show times that fit your party size.">
          <div style={{ display: 'grid', gap: '18px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
              <button
                type="button"
                className="btn btn-outline-light"
                onClick={() => setGuests((prev) => Math.max(1, prev - 1))}
                style={{ minWidth: '48px', padding: '12px 0', color: 'var(--text-secondary)', borderColor: 'var(--border-strong)', background: 'var(--surface-card)' }}
              >
                −
              </button>
              <input
                type="number"
                min={1}
                max={20}
                value={guests}
                onChange={(event) => setGuests(Math.max(1, Math.min(20, Number.parseInt(event.target.value || '1', 10))))}
                style={{ ...inputStyle, width: '120px', textAlign: 'center', fontSize: '24px', fontWeight: 700 }}
              />
              <button
                type="button"
                className="btn btn-outline-light"
                onClick={() => setGuests((prev) => Math.min(20, prev + 1))}
                style={{ minWidth: '48px', padding: '12px 0', color: 'var(--text-secondary)', borderColor: 'var(--border-strong)', background: 'var(--surface-card)' }}
              >
                +
              </button>
            </div>

            <button type="button" className="btn btn-reserve" onClick={handleGuestsNext}>
              Continue
            </button>
          </div>
        </StepCard>
      )}

      {step === 2 && (
        <StepCard title="Choose a date" subtitle="Bookings are available up to 90 days ahead.">
          <div style={{ display: 'grid', gap: '16px' }}>
            <label style={{ color: 'var(--text-secondary)', fontSize: '14px', fontWeight: 600 }}>
              Date
              <input
                type="date"
                value={date}
                min={minDate}
                max={maxDate}
                onChange={(event) => setDate(event.target.value)}
                style={{ ...inputStyle, marginTop: '8px' }}
              />
            </label>

            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <button type="button" className="btn btn-outline-light" onClick={() => goToStep(1)} style={{ color: 'var(--text-secondary)', borderColor: 'var(--border-strong)', background: 'var(--surface-card)' }}>
                Back
              </button>
              <button type="button" className="btn btn-reserve" onClick={handleDateNext}>
                Continue
              </button>
            </div>
          </div>
        </StepCard>
      )}

      {step === 3 && (
        <StepCard
          title="Pick a time"
          subtitle={`Availability for ${formatDateLong(date)} · ${guests} guest${guests > 1 ? 's' : ''}`}
        >
          <div style={{ display: 'grid', gap: '16px' }}>
            {availabilityLoading && <p style={{ color: 'var(--text-secondary)' }}>Loading available times…</p>}
            {availabilityError && <p style={{ color: 'var(--gold)' }}>{availabilityError}</p>}

            {!availabilityLoading && availability?.closed && (
              <div style={{
                padding: '14px 16px',
                borderRadius: '10px',
                border: '1px solid rgba(200,144,26,0.32)',
                background: 'rgba(200,144,26,0.1)',
                color: 'var(--text-inverse)',
                fontSize: '14px',
              }}>
                {availability.message || 'This date is currently closed.'}
              </div>
            )}

            {!availabilityLoading && !availability?.closed && (
              <SlotGrid slots={slots} selected={time} onSelect={setTime} />
            )}

            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <button type="button" className="btn btn-outline-light" onClick={() => goToStep(2)} style={{ color: 'var(--text-secondary)', borderColor: 'var(--border-strong)', background: 'var(--surface-card)' }}>
                Back
              </button>
              {noSlotsForDate || availability?.closed ? (
                <button type="button" className="btn btn-reserve" onClick={handleTimeNext}>
                  Continue to Details
                </button>
              ) : (
                <button type="button" className="btn btn-reserve" onClick={handleTimeNext}>
                  Continue
                </button>
              )}
            </div>
          </div>
        </StepCard>
      )}

      {step === 4 && (
        <StepCard title="Your details" subtitle="We’ll send your booking confirmation by email.">
          <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '14px' }}>
            <div style={{
              borderRadius: '10px',
              background: 'rgba(216,181,108,0.12)',
              border: '1px solid rgba(216,181,108,0.32)',
              padding: '12px 14px',
              color: 'var(--text-secondary)',
              fontSize: '13px',
              lineHeight: 1.6,
            }}>
              <strong>Booking summary:</strong> {formatDateLong(date)} {time ? `at ${formatTimeLabel(time)} ` : ''}for {guests} guest{guests > 1 ? 's' : ''}
              {isContactRequestMode ? ' · no online slots available, we will pass this as a contact request.' : ''}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '10px' }}>
              <label style={{ color: 'var(--text-secondary)', fontSize: '13px', fontWeight: 600 }}>
                First name
                <input
                  value={details.firstName}
                  onChange={(event) => setDetails((prev) => ({ ...prev, firstName: event.target.value }))}
                  style={{ ...inputStyle, marginTop: '6px' }}
                />
                {fieldErrors.firstName && <span style={{ color: 'var(--gold)', fontSize: '12px' }}>{fieldErrors.firstName}</span>}
              </label>
              <label style={{ color: 'var(--text-secondary)', fontSize: '13px', fontWeight: 600 }}>
                Last name
                <input
                  value={details.lastName}
                  onChange={(event) => setDetails((prev) => ({ ...prev, lastName: event.target.value }))}
                  style={{ ...inputStyle, marginTop: '6px' }}
                />
                {fieldErrors.lastName && <span style={{ color: 'var(--gold)', fontSize: '12px' }}>{fieldErrors.lastName}</span>}
              </label>
            </div>

            <label style={{ color: 'var(--text-secondary)', fontSize: '13px', fontWeight: 600 }}>
              Email
              <input
                type="email"
                value={details.email}
                onChange={(event) => setDetails((prev) => ({ ...prev, email: event.target.value }))}
                style={{ ...inputStyle, marginTop: '6px' }}
              />
              {fieldErrors.email && <span style={{ color: 'var(--gold)', fontSize: '12px' }}>{fieldErrors.email}</span>}
            </label>

            <label style={{ color: 'var(--text-secondary)', fontSize: '13px', fontWeight: 600 }}>
              Phone (optional)
              <input
                value={details.phone}
                onChange={(event) => setDetails((prev) => ({ ...prev, phone: event.target.value }))}
                style={{ ...inputStyle, marginTop: '6px' }}
              />
              {fieldErrors.phone && <span style={{ color: 'var(--gold)', fontSize: '12px' }}>{fieldErrors.phone}</span>}
            </label>

            <label style={{ color: 'var(--text-secondary)', fontSize: '13px', fontWeight: 600 }}>
              Notes / allergies (optional)
              <textarea
                value={details.notes}
                onChange={(event) => setDetails((prev) => ({ ...prev, notes: event.target.value }))}
                rows={4}
                style={{ ...inputStyle, marginTop: '6px', resize: 'vertical' }}
              />
              {fieldErrors.notes && <span style={{ color: 'var(--gold)', fontSize: '12px' }}>{fieldErrors.notes}</span>}
            </label>

            {submitError && (
              <div style={{
                padding: '12px 14px',
                borderRadius: '8px',
                background: 'rgba(200,144,26,0.12)',
                border: '1px solid rgba(200,144,26,0.32)',
                color: 'var(--text-inverse)',
                fontSize: '13px',
              }}>
                {submitError}
              </div>
            )}

            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <button type="button" className="btn btn-outline-light" onClick={() => goToStep(3)} style={{ color: 'var(--text-secondary)', borderColor: 'var(--border-strong)', background: 'var(--surface-card)' }}>
                Back
              </button>
              <button type="submit" className="btn btn-reserve" disabled={isSubmitting}>
                {isContactRequestMode ? 'Finalise Contact Request' : isSubmitting ? 'Confirming…' : 'Confirm Booking'}
              </button>
            </div>
          </form>
        </StepCard>
      )}

      {step === 5 && confirmation && (
        <StepCard title="Booking confirmed" subtitle="Your table is reserved.">
          <div style={{ display: 'grid', gap: '14px' }}>
            <div style={{
              background: 'linear-gradient(165deg, #182217, #253322)',
              border: '1px solid rgba(216,181,108,0.35)',
              borderRadius: '12px',
              padding: '18px',
              color: 'var(--text-inverse)',
            }}>
              <p style={{ fontSize: '13px', opacity: 0.86, marginBottom: '6px' }}>Reference</p>
              <p style={{ fontSize: '28px', fontWeight: 800, letterSpacing: '0.08em' }}>{confirmation.reference}</p>
            </div>

            <p style={{ color: 'var(--text-secondary)', fontSize: '15px', lineHeight: 1.7 }}>
              We’ve emailed confirmation to <strong>{confirmation.email}</strong>.
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
              {formatDateLong(confirmation.date)} at {formatTimeLabel(confirmation.time)} · {confirmation.guests} guest{confirmation.guests > 1 ? 's' : ''}
            </p>

            <Link to="/" className="btn btn-reserve" style={{ width: 'fit-content' }}>
              Back to Home
            </Link>
          </div>
        </StepCard>
      )}

      {step === 5 && !confirmation && contactRequestReady && (
        <StepCard title="Request ready" subtitle="Your booking details are prepared for the contact form.">
          <div style={{ display: 'grid', gap: '14px' }}>
            <div style={{
              background: 'linear-gradient(165deg, #182217, #253322)',
              border: '1px solid rgba(216,181,108,0.35)',
              borderRadius: '12px',
              padding: '18px',
              color: 'var(--text-inverse)',
            }}>
              <p style={{ fontSize: '13px', opacity: 0.86, marginBottom: '6px' }}>Request summary</p>
              <p style={{ fontSize: '17px', lineHeight: 1.6 }}>
                {formatDateLong(date)} {time ? `at ${formatTimeLabel(time)} ` : ''}for {guests} guest{guests > 1 ? 's' : ''}
              </p>
            </div>

            <p style={{ color: 'var(--text-secondary)', fontSize: '15px', lineHeight: 1.7 }}>
              We couldn’t complete this booking online for the selected date/time. You can now send this as a prefilled enquiry.
            </p>

            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <Link to={contactPrefillHref} className="btn btn-reserve">
                Finalise Contact Request
              </Link>
              <button
                type="button"
                className="btn btn-outline-light"
                onClick={() => goToStep(4)}
                style={{ color: 'var(--text-secondary)', borderColor: 'var(--border-strong)', background: 'var(--surface-card)' }}
              >
                Back to Details
              </button>
            </div>
          </div>
        </StepCard>
      )}

      {stepError && (
        <div
          style={{
            borderRadius: '10px',
            border: '1px solid rgba(200,144,26,0.32)',
            background: 'rgba(200,144,26,0.12)',
            color: 'var(--text-inverse)',
            padding: '12px 14px',
            fontSize: '13px',
          }}
        >
          {stepError}
        </div>
      )}
    </div>
  )
}
