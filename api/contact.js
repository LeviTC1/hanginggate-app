import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, email, phone, date, partySize, subject, message } = req.body

  if (!email || !message) {
    return res.status(400).json({ error: 'Email and message are required' })
  }

  try {
    await resend.emails.send({
      from: 'Website Enquiry <noreply@hanginggate-chapel.co.uk>',
      to: ['hanginggatechapel@gmail.com'],
      replyTo: email,
      subject: `Website Enquiry: ${subject || 'General enquiry'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #8B1A1A; padding: 24px; text-align: center;">
            <h1 style="color: #E2C97E; margin: 0; font-family: Georgia, serif;">The Hanging Gate</h1>
            <p style="color: rgba(255,255,255,0.8); margin: 8px 0 0; font-size: 13px; letter-spacing: 2px;">NEW WEBSITE ENQUIRY</p>
          </div>
          <div style="background: #FAF7F2; padding: 32px; border: 1px solid #E8DFD0;">
            ${name ? `<p style="margin: 0 0 12px;"><strong>Name:</strong> ${name}</p>` : ''}
            <p style="margin: 0 0 12px;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            ${phone ? `<p style="margin: 0 0 12px;"><strong>Phone:</strong> ${phone}</p>` : ''}
            ${date ? `<p style="margin: 0 0 12px;"><strong>Preferred date:</strong> ${date}</p>` : ''}
            ${partySize ? `<p style="margin: 0 0 12px;"><strong>Party size:</strong> ${partySize}</p>` : ''}
            ${subject ? `<p style="margin: 0 0 12px;"><strong>Subject:</strong> ${subject}</p>` : ''}
            <hr style="border: none; border-top: 1px solid #E8DFD0; margin: 20px 0;" />
            <p style="margin: 0; white-space: pre-wrap;"><strong>Message:</strong><br/>${message}</p>
          </div>
          <div style="background: #5C0E0E; padding: 16px; text-align: center;">
            <p style="color: rgba(255,255,255,0.6); margin: 0; font-size: 12px;">
              Sent from the Hanging Gate website contact form
            </p>
          </div>
        </div>
      `,
    })

    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('Email send error:', err)
    return res.status(500).json({ error: 'Failed to send email' })
  }
}
