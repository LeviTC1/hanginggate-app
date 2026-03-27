import { Resend } from 'resend'
import type { BookingSummary } from './bookingEngine'

const LARGE_PARTY_THRESHOLD = 8

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

function formatDate(date: string): string {
  const [year, month, day] = date.split('-').map((part) => Number.parseInt(part, 10))
  const utcDate = new Date(Date.UTC(year, month - 1, day))

  return new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/London',
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(utcDate)
}

function bookingSummaryHtml(booking: BookingSummary): string {
  return `
    <p style="margin: 0 0 8px;"><strong>Reference:</strong> ${booking.reference}</p>
    <p style="margin: 0 0 8px;"><strong>Date:</strong> ${formatDate(booking.date)}</p>
    <p style="margin: 0 0 8px;"><strong>Time:</strong> ${booking.time}</p>
    <p style="margin: 0 0 8px;"><strong>Guests:</strong> ${booking.guests}</p>
    <p style="margin: 0 0 8px;"><strong>Name:</strong> ${booking.firstName} ${booking.lastName}</p>
    <p style="margin: 0 0 8px;"><strong>Email:</strong> ${booking.email}</p>
    ${booking.phone ? `<p style="margin: 0 0 8px;"><strong>Phone:</strong> ${booking.phone}</p>` : ''}
    ${booking.notes ? `<p style="margin: 0;"><strong>Notes:</strong> ${booking.notes}</p>` : ''}
  `
}

export async function sendBookingEmails(booking: BookingSummary): Promise<void> {
  if (!resend) {
    console.warn('Booking email skipped: RESEND_API_KEY is not set')
    return
  }

  const from = process.env.BOOKING_FROM_EMAIL || 'Bridge 42 Bookings <bookings@bridge42.co.uk>'
  const adminEmail = process.env.BOOKING_ADMIN_EMAIL
  const restaurantPhone = process.env.BOOKING_CONTACT_PHONE || '01298 812776'

  const guestHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #E8DFD0;">
      <div style="background: #1B130E; padding: 24px; text-align: center;">
        <h1 style="color: #E2C97E; margin: 0; font-family: Georgia, serif;">Bridge 42</h1>
        <p style="color: rgba(255,255,255,0.8); margin: 8px 0 0; letter-spacing: 1px;">BOOKING CONFIRMATION</p>
      </div>
      <div style="background: #FAF7F2; padding: 24px; color: #1C1410;">
        <p style="margin-top: 0;">Hi ${booking.firstName},</p>
        <p>Thank you for booking with Bridge 42. Your reservation is confirmed.</p>
        <div style="background: #fff; border: 1px solid #E8DFD0; border-radius: 8px; padding: 16px; margin: 16px 0;">
          ${bookingSummaryHtml(booking)}
        </div>
        <p style="margin-bottom: 0;">If you need to change your booking, call us on <strong>${restaurantPhone}</strong> and quote your reference.</p>
      </div>
    </div>
  `

  const adminLargePartyLine = booking.guests >= LARGE_PARTY_THRESHOLD
    ? `<p style="margin: 0 0 12px; color: #8B1A1A;"><strong>Large party alert:</strong> ${booking.guests} guests</p>`
    : ''

  const adminHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #E8DFD0;">
      <div style="background: #5C0E0E; padding: 24px; text-align: center;">
        <h1 style="color: #E2C97E; margin: 0; font-family: Georgia, serif;">New Bridge 42 Booking</h1>
      </div>
      <div style="background: #FAF7F2; padding: 24px; color: #1C1410;">
        ${adminLargePartyLine}
        <div style="background: #fff; border: 1px solid #E8DFD0; border-radius: 8px; padding: 16px;">
          ${bookingSummaryHtml(booking)}
        </div>
      </div>
    </div>
  `

  const tasks: Promise<unknown>[] = [
    resend.emails.send({
      from,
      to: [booking.email],
      subject: `Bridge 42 booking confirmed (${booking.reference})`,
      html: guestHtml,
    }),
  ]

  if (adminEmail) {
    tasks.push(
      resend.emails.send({
        from,
        to: [adminEmail],
        replyTo: booking.email,
        subject: `New booking ${booking.reference} · ${booking.date} ${booking.time} · ${booking.guests} guests`,
        html: adminHtml,
      }),
    )
  } else {
    console.warn('Booking admin notification skipped: BOOKING_ADMIN_EMAIL is not set')
  }

  await Promise.all(tasks)
}
