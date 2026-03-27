import SEO from '../components/SEO'
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Clock3, Mail, MapPin, Phone } from 'lucide-react'
import PageHero from '../components/PageHero'

const openingHours = [
  ['Open every day', '10am – 8pm'],
  ['Breakfasts', '10am – 12noon'],
  ['Afternoon Tea', '3–6pm Mon–Fri'],
  ['Senior Menu', 'Mon–Fri 12–7pm'],
  ['Delivery', '10am–8pm daily'],
]

const partySizes = ['2–5', '6–10', '11–20', '21–50', '51–100', '100+']

const enquiryTypes = [
  'General enquiry',
  'Function / event booking',
  'Outside catering',
  'Wedding enquiry',
  'Christmas booking',
  'Accessibility requirements',
  'Other',
]

const EMPTY_FORM = {
  name: '',
  email: '',
  phone: '',
  date: '',
  partySize: '',
  subject: '',
  message: '',
}

const EMAIL_REGEX = /^\S+@\S+\.\S+$/

function parsePrefilledContactForm(search) {
  const params = new URLSearchParams(search)

  const partySize = (params.get('partySize') || '').trim()
  const subject = (params.get('subject') || '').trim()

  return {
    ...EMPTY_FORM,
    name: (params.get('name') || '').trim(),
    email: (params.get('email') || '').trim(),
    phone: (params.get('phone') || '').trim(),
    date: (params.get('date') || '').trim(),
    partySize: partySizes.includes(partySize) ? partySize : '',
    subject: enquiryTypes.includes(subject) ? subject : '',
    message: (params.get('message') || '').trim(),
  }
}

export default function Contact() {
  const location = useLocation()
  const [form, setForm] = useState(EMPTY_FORM)
  const [fieldErrors, setFieldErrors] = useState({ email: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  useEffect(() => {
    const prefilled = parsePrefilledContactForm(location.search)
    const hasPrefillData = Object.values(prefilled).some((value) => value !== '')

    if (!hasPrefillData) {
      return
    }

    setForm(prefilled)
    setFieldErrors({ email: '', subject: '', message: '' })
    setStatus('idle')
  }, [location.search])

  function handleChange(e) {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
    if (name === 'email' || name === 'subject' || name === 'message') {
      setFieldErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const nextErrors = { email: '', subject: '', message: '' }
    const emailValue = form.email.trim()
    const subjectValue = form.subject.trim()
    const messageValue = form.message.trim()

    if (!emailValue) {
      nextErrors.email = 'Email is required.'
    } else if (!EMAIL_REGEX.test(emailValue)) {
      nextErrors.email = 'Please enter a valid email address.'
    }

    if (!subjectValue) {
      nextErrors.subject = 'Please choose an enquiry type.'
    }

    if (!messageValue) {
      nextErrors.message = 'Message is required.'
    }

    if (nextErrors.email || nextErrors.subject || nextErrors.message) {
      setFieldErrors(nextErrors)
      setStatus('idle')
      return
    }

    setFieldErrors({ email: '', subject: '', message: '' })
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm(EMPTY_FORM)
        setFieldErrors({ email: '', subject: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <div>
      <SEO path="/contact" description="Contact The Hanging Gate pub & restaurant in Chapel-en-le-Frith, High Peak, Derbyshire. Book tables online or call 01298 812776. Manchester Road, SK23 9UH." />
      <PageHero title="Contact Us" subtitle="We'd love to hear from you" />
      <div className="container py-12 md:py-16">
        <div className="grid gap-7 lg:grid-cols-[minmax(0,0.94fr)_minmax(0,1.06fr)] lg:items-start xl:gap-11">
          <section className="space-y-5 lg:pr-1">
            <div className="rounded-[var(--radius-lg)] border border-[var(--border-default)] bg-[var(--surface-card)] p-6 shadow-[0_14px_32px_rgba(26,14,6,0.09)] md:p-7">
              <p className="section-label section-label--dark">Get in touch</p>
              <h2 className="mt-2 font-display text-[clamp(28px,3.2vw,38px)] text-[var(--wine)]">Get in Touch</h2>

              <div className="mt-6 grid gap-6">
                <div className="grid grid-cols-[18px_1fr] gap-4">
                  <MapPin className="mt-[2px] h-[18px] w-[18px] text-[var(--gold)]" />
                  <div>
                    <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-[var(--text-primary)]">Address</p>
                    <address className="mt-2 not-italic text-[clamp(17px,2.1vw,24px)] leading-[1.45] text-[var(--text-secondary)]" style={{ fontFamily: 'var(--font-editorial)' }}>
                      The Hanging Gate
                      <br />
                      Manchester Road
                      <br />
                      Chapel-en-le-Frith, High Peak, Derbyshire
                      <br />
                      SK23 9UH
                    </address>
                  </div>
                </div>

                <div className="grid grid-cols-[18px_1fr] gap-4">
                  <Phone className="mt-[2px] h-[18px] w-[18px] text-[var(--gold)]" />
                  <div>
                    <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-[var(--text-primary)]">Phone</p>
                    <a href="tel:01298812776" className="mt-2 block text-[26px] font-semibold text-[var(--wine)] no-underline transition-colors duration-200 hover:text-[var(--wine-deep)]">
                      01298 812776
                    </a>
                    <p className="mt-2 text-[13px] leading-[1.65] text-[var(--text-muted)]">
                      For table reservations, book online or call us directly.
                    </p>
                    <Link to="/book" className="btn btn-primary mt-4">
                      Reserve Your Table
                    </Link>
                  </div>
                </div>

                <div className="grid grid-cols-[18px_1fr] gap-4">
                  <Mail className="mt-[2px] h-[18px] w-[18px] text-[var(--gold)]" />
                  <div>
                    <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-[var(--text-primary)]">Email</p>
                    <a href="mailto:hanginggatechapel@gmail.com" className="mt-2 inline-block text-[17px] text-[var(--wine)] no-underline transition-colors duration-200 hover:text-[var(--wine-deep)]">
                      hanginggatechapel@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[var(--radius-lg)] border border-[var(--border-default)] bg-[var(--surface-card)] p-6 shadow-[0_14px_28px_rgba(26,14,6,0.07)] md:p-7">
              <div className="flex items-start gap-3">
                <Clock3 className="mt-[3px] h-[18px] w-[18px] text-[var(--gold)]" />
                <div className="w-full">
                  <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-[var(--text-primary)]">Opening Hours</p>
                  <div className="mt-3 grid gap-[9px] text-[14px]">
                    {openingHours.map(([label, val]) => (
                      <div key={label} className="grid grid-cols-[minmax(0,1fr)_auto] gap-x-5">
                        <span className="text-[var(--text-secondary)]">{label}</span>
                        <span className="text-[var(--wine)]">{val}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-5 rounded-[var(--radius-md)] border border-[rgba(200,144,26,0.26)] bg-[rgba(200,144,26,0.08)] px-4 py-3 text-[13px] leading-[1.6] text-[var(--text-secondary)]">
                <strong className="text-[var(--wine)]">Dogs welcome</strong> in the main pub bar — small area, booking essential.
              </div>
            </div>

            <div className="rounded-[var(--radius-lg)] border border-[var(--border-default)] bg-[var(--surface-card)] p-6 shadow-[0_14px_28px_rgba(26,14,6,0.07)] md:p-7">
              <p className="section-label section-label--dark">How to find us</p>
              <h2 className="mt-2 font-display text-[clamp(28px,3.2vw,36px)] text-[var(--wine)]">How to Find Us</h2>
              <p className="mt-4 text-[15px] leading-[1.8] text-[var(--text-secondary)]">
                Situated on the <strong>B5470</strong> in Chapel-en-le-Frith, High Peak, Derbyshire, near
                Whaley Bridge. Chapel-en-le-Frith, High Peak, Derbyshire — the capital of the Peak District — is set in a
                beautiful area overlooking Combs Reservoir, a popular location with walkers.
              </p>
              <p className="mt-4 text-[15px] leading-[1.8] text-[var(--text-secondary)]">
                A <strong>train station</strong> is just 1 mile away and a regular <strong>bus service</strong> stops right outside.
              </p>
              <div className="mt-5 overflow-hidden rounded-[var(--radius-md)] border border-[var(--border-strong)] bg-[var(--surface-stone)]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2381.5!2d-1.9185!3d53.3248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487a27c5f8a5c1a7%3A0x1234567890abcdef!2sThe%20Hanging%20Gate%2C%20Manchester%20Rd%2C%20Chapel-en-le-Frith%2C%20High%20Peak%2C%20Derbyshire%2C%20SK23%209UH!5e0!3m2!1sen!2suk!4v1234567890"
                  width="100%"
                  height="240"
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="The Hanging Gate location"
                />
              </div>
              <a
                href="https://maps.google.com/?q=The+Hanging+Gate,+Manchester+Road,+Chapel-en-le-Frith,+High+Peak,+Derbyshire,+SK23+9UH"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-[14px] font-semibold text-[var(--wine)] no-underline transition-colors duration-200 hover:text-[var(--wine-deep)]"
              >
                Open in Google Maps →
              </a>
            </div>
          </section>

          <section className="lg:self-start lg:pl-1">
            <div className="relative overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border-strong)] bg-[linear-gradient(180deg,var(--surface-card)_0%,var(--surface-page)_100%)] p-6 shadow-[0_18px_34px_rgba(26,14,6,0.14)] md:p-7 lg:sticky lg:top-[108px]">
              <span className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[rgba(200,144,26,0.85)] to-transparent" />

              <p className="section-label">Contact form</p>
              <h2 className="mt-2 font-display text-[clamp(30px,3.5vw,40px)] text-[var(--wine)]">Send an Enquiry</h2>

              <div className="mt-4 rounded-[var(--radius-md)] border border-[rgba(200,144,26,0.48)] bg-[rgba(200,144,26,0.1)] px-4 py-4 text-[15px] leading-[1.6] text-[var(--text-secondary)]">
                <strong>For table reservations, please use our online booking page.</strong> Use this form for general enquiries, event bookings and outside catering only.
                <div className="mt-3">
                  <Link to="/book" className="btn btn-primary">
                    Book Now
                  </Link>
                </div>
              </div>

              {status === 'success' ? (
                <div className="mt-6 rounded-[var(--radius-md)] border border-[rgba(81,120,76,0.45)] bg-[var(--surface-card)] p-8 text-center">
                  <p className="text-[44px]">✓</p>
                  <h3 className="mt-2 font-display text-[28px] text-[var(--gold)]">Message sent!</h3>
                  <p className="mt-3 text-[16px] leading-[1.7] text-[var(--text-secondary)]">
                    Thank you — a member of the team will get back to you as soon as possible.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="btn btn-secondary mt-6"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-5 grid gap-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label htmlFor="contact-name" className="mb-2 block text-[13px] font-semibold uppercase tracking-[0.12em] text-[var(--text-primary)]">Your name</label>
                      <input
                        id="contact-name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        className="input-base h-[56px] border-[var(--border-strong)] bg-[var(--surface-page)] text-[16px] placeholder:text-[var(--text-muted)]"
                        placeholder="Jane Smith"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-phone" className="mb-2 block text-[13px] font-semibold uppercase tracking-[0.12em] text-[var(--text-primary)]">Phone number</label>
                      <input
                        id="contact-phone"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        className="input-base h-[56px] border-[var(--border-strong)] bg-[var(--surface-page)] text-[16px] placeholder:text-[var(--text-muted)]"
                        placeholder="07700 000000"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="mb-2 block text-[13px] font-semibold uppercase tracking-[0.12em] text-[var(--text-primary)]">
                      Email address <span className="text-[var(--wine)]">*</span>
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      aria-invalid={Boolean(fieldErrors.email)}
                      aria-describedby={fieldErrors.email ? 'contact-email-error' : undefined}
                      className="input-base h-[56px] border-[var(--border-strong)] bg-[var(--surface-page)] text-[16px] placeholder:text-[var(--text-muted)]"
                      placeholder="you@example.com"
                    />
                    {fieldErrors.email ? (
                      <p id="contact-email-error" className="mt-2 text-[12px] text-[var(--gold-light)]">{fieldErrors.email}</p>
                    ) : null}
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label htmlFor="contact-date" className="mb-2 block text-[13px] font-semibold uppercase tracking-[0.12em] text-[var(--text-primary)]">Preferred date</label>
                      <input
                        id="contact-date"
                        name="date"
                        type="date"
                        value={form.date}
                        onChange={handleChange}
                        className="input-base h-[56px] border-[var(--border-strong)] bg-[var(--surface-page)] text-[16px]"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-party-size" className="mb-2 block text-[13px] font-semibold uppercase tracking-[0.12em] text-[var(--text-primary)]">Party size</label>
                      <select
                        id="contact-party-size"
                        name="partySize"
                        value={form.partySize}
                        onChange={handleChange}
                        className="input-base h-[56px] border-[var(--border-strong)] bg-[var(--surface-page)] text-[16px]"
                      >
                        <option value="">Select...</option>
                        {partySizes.map((s) => (
                          <option key={s} value={s}>{s} people</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-subject" className="mb-2 block text-[13px] font-semibold uppercase tracking-[0.12em] text-[var(--text-primary)]">
                      Subject <span className="text-[var(--wine)]">*</span>
                    </label>
                    <select
                      id="contact-subject"
                      name="subject"
                      required
                      value={form.subject}
                      onChange={handleChange}
                      aria-invalid={Boolean(fieldErrors.subject)}
                      aria-describedby={fieldErrors.subject ? 'contact-subject-error' : undefined}
                      className="input-base h-[56px] border-[var(--border-strong)] bg-[var(--surface-page)] text-[16px]"
                    >
                      <option value="">Select an enquiry type...</option>
                      {enquiryTypes.map((type) => (
                        <option key={type}>{type}</option>
                      ))}
                    </select>
                    {fieldErrors.subject ? (
                      <p id="contact-subject-error" className="mt-2 text-[12px] text-[var(--gold-light)]">{fieldErrors.subject}</p>
                    ) : null}
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="mb-2 block text-[13px] font-semibold uppercase tracking-[0.12em] text-[var(--text-primary)]">
                      Message <span className="text-[var(--wine)]">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={6}
                      value={form.message}
                      onChange={handleChange}
                      aria-invalid={Boolean(fieldErrors.message)}
                      aria-describedby={fieldErrors.message ? 'contact-message-error' : undefined}
                      className="input-base min-h-[170px] resize-y border-[var(--border-strong)] bg-[var(--surface-page)] text-[16px] placeholder:text-[var(--text-muted)]"
                      placeholder="Tell us how we can help…"
                    />
                    {fieldErrors.message ? (
                      <p id="contact-message-error" className="mt-2 text-[12px] text-[var(--gold-light)]">{fieldErrors.message}</p>
                    ) : null}
                  </div>

                  {status === 'error' && (
                    <div className="rounded-[var(--radius-md)] border border-[rgba(200,144,26,0.4)] bg-[rgba(200,144,26,0.12)] px-4 py-3 text-[14px] text-[var(--text-inverse)]">
                      Sorry, something went wrong sending your message. Please call us on <strong>01298 812776</strong> or email <strong>hanginggatechapel@gmail.com</strong>.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className={`btn btn-primary min-w-[190px] justify-center ${status === 'sending' ? 'cursor-not-allowed opacity-70' : ''}`}
                  >
                    {status === 'sending' ? 'Sending…' : 'Send Enquiry'}
                  </button>
                </form>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
