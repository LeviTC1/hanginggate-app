import SEO from '../components/SEO'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'

const inputStyle = {
  width: '100%',
  padding: '12px 16px',
  border: '1px solid #D4C8B5',
  borderRadius: '6px',
  fontSize: '15px',
  backgroundColor: '#FAF7F2',
  color: '#1C1410',
  outline: 'none',
  boxSizing: 'border-box',
  fontFamily: 'inherit',
}

const labelStyle = {
  display: 'block',
  fontWeight: 500,
  color: '#1C1410',
  marginBottom: '6px',
  fontSize: '14px',
}

export default function Contact() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', date: '', partySize: '', subject: '', message: '',
  })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  function handleChange(e) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', phone: '', date: '', partySize: '', subject: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <div>
      <SEO path="/contact" description="Contact The Hanging Gate pub & restaurant in Chapel-en-le-Frith. Book tables online or call 01298 812776. Manchester Road, SK23 9UH." />
      <PageHero title="Contact Us" subtitle="We'd love to hear from you" />
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '64px 24px' }}>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px' }}>

          {/* Left: contact details */}
          <div>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '24px', color: '#8B1A1A', marginBottom: '24px' }}>
              Get in Touch
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '22px', flexShrink: 0, marginTop: '2px' }}>📍</span>
                <div>
                  <div style={{ fontWeight: 600, color: '#1C1410', marginBottom: '4px' }}>Address</div>
                  <address style={{ fontStyle: 'normal', color: '#4A3D34', fontSize: '15px', lineHeight: 1.7 }}>
                    The Hanging Gate<br />
                    Manchester Road<br />
                    Chapel-en-le-Frith<br />
                    SK23 9UH
                  </address>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '22px', flexShrink: 0, marginTop: '2px' }}>📞</span>
                <div>
                  <div style={{ fontWeight: 600, color: '#1C1410', marginBottom: '4px' }}>Phone</div>
                  <a href="tel:01298812776" style={{ color: '#8B1A1A', textDecoration: 'none', fontSize: '20px', fontWeight: 700 }}>
                    01298 812776
                  </a>
                  <p style={{ color: '#6B5E52', fontSize: '13px', marginTop: '4px' }}>
                    For table reservations, book online or call us directly.
                  </p>
                  <Link to="/book" className="btn btn-reserve" style={{ marginTop: '10px', fontSize: '12px' }}>
                    Book a Table
                  </Link>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '22px', flexShrink: 0, marginTop: '2px' }}>✉️</span>
                <div>
                  <div style={{ fontWeight: 600, color: '#1C1410', marginBottom: '4px' }}>Email</div>
                  <a href="mailto:hanginggatechapel@gmail.com" style={{ color: '#8B1A1A', textDecoration: 'none', fontSize: '15px' }}>
                    hanginggatechapel@gmail.com
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '22px', flexShrink: 0, marginTop: '2px' }}>🕐</span>
                <div>
                  <div style={{ fontWeight: 600, color: '#1C1410', marginBottom: '8px' }}>Opening Hours</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '14px', color: '#4A3D34' }}>
                    {[
                      ['Open every day', '10am – 8pm'],
                      ['Breakfasts', '10am – 12noon'],
                      ['Afternoon Tea', '3–6pm Mon–Fri'],
                      ['Senior Menu', 'Mon–Fri 12–7pm'],
                      ['Delivery', '10am–8pm daily'],
                    ].map(([label, val]) => (
                      <div key={label} style={{ display: 'flex', justifyContent: 'space-between', gap: '24px' }}>
                        <span>{label}</span>
                        <span style={{ color: '#8B1A1A', fontWeight: 500 }}>{val}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div style={{ backgroundColor: '#F0EBE0', borderRadius: '8px', padding: '14px 16px', fontSize: '13px', color: '#6B5E52', lineHeight: 1.6 }}>
                <strong style={{ color: '#8B1A1A' }}>🐕 Dogs welcome</strong> in the main pub bar — small area, booking essential.
              </div>
            </div>

            {/* How to find us */}
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '22px', color: '#8B1A1A', margin: '36px 0 16px' }}>
              How to Find Us
            </h2>
            <p style={{ color: '#4A3D34', fontSize: '15px', lineHeight: 1.8, marginBottom: '16px' }}>
              Situated on the <strong>B5470</strong> on the outskirts of Chapel-en-le-Frith, near to
              Whaley Bridge. Chapel-en-le-Frith — the capital of the Peak District — is set in a
              beautiful area overlooking Combs Reservoir, a popular location with walkers.
            </p>
            <p style={{ color: '#4A3D34', fontSize: '15px', lineHeight: 1.8, marginBottom: '20px' }}>
              A <strong>train station</strong> is just 1 mile away and a regular <strong>bus service</strong> stops right outside.
            </p>
            <div style={{ borderRadius: '8px', overflow: 'hidden', border: '1px solid #D4C8B5' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2381.5!2d-1.9185!3d53.3248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487a27c5f8a5c1a7%3A0x1234567890abcdef!2sThe%20Hanging%20Gate%2C%20Manchester%20Rd%2C%20Chapel-en-le-Frith%2C%20SK23%209UH!5e0!3m2!1sen!2suk!4v1234567890"
                width="100%" height="240" style={{ border: 0, display: 'block' }}
                allowFullScreen="" loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="The Hanging Gate location"
              />
            </div>
            <a href="https://maps.google.com/?q=The+Hanging+Gate,+Manchester+Road,+Chapel-en-le-Frith,+SK23+9UH"
              target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-block', marginTop: '10px', color: '#8B1A1A', fontSize: '14px', textDecoration: 'none', fontWeight: 500 }}>
              Open in Google Maps →
            </a>
          </div>

          {/* Right: enquiry form */}
          <div>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '24px', color: '#8B1A1A', marginBottom: '8px' }}>
              Send an Enquiry
            </h2>
            <div style={{ backgroundColor: '#FFF8E7', border: '1px solid #C9A84C', borderRadius: '6px', padding: '12px 16px', marginBottom: '24px', fontSize: '13px', color: '#7A5C00', lineHeight: 1.6 }}>
              ⚠️ <strong>For table reservations, please use our online booking page.</strong> Use this form for general enquiries, event bookings and outside catering only.
              <div style={{ marginTop: '10px' }}>
                <Link to="/book" className="btn btn-reserve" style={{ fontSize: '11px' }}>
                  Open Booking
                </Link>
              </div>
            </div>

            {status === 'success' ? (
              <div style={{ backgroundColor: '#F0F7F0', border: '1px solid #5C7A4A', borderRadius: '8px', padding: '32px', textAlign: 'center' }}>
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>✅</div>
                <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '22px', color: '#5C7A4A', marginBottom: '8px' }}>
                  Message sent!
                </h3>
                <p style={{ color: '#4A3D34', fontSize: '15px', lineHeight: 1.7 }}>
                  Thank you — a member of the team will get back to you as soon as possible.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  style={{ marginTop: '20px', background: 'none', border: '1px solid #5C7A4A', color: '#5C7A4A', padding: '10px 24px', borderRadius: '6px', cursor: 'pointer', fontSize: '14px' }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div>
                    <label style={labelStyle}>Your name</label>
                    <input name="name" value={form.name} onChange={handleChange} style={inputStyle} placeholder="Jane Smith" />
                  </div>
                  <div>
                    <label style={labelStyle}>Phone number</label>
                    <input name="phone" value={form.phone} onChange={handleChange} style={inputStyle} placeholder="07700 000000" />
                  </div>
                </div>
                <div>
                  <label style={labelStyle}>Email address <span style={{ color: '#8B1A1A' }}>*</span></label>
                  <input name="email" type="email" required value={form.email} onChange={handleChange} style={inputStyle} placeholder="you@example.com" />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div>
                    <label style={labelStyle}>Preferred date</label>
                    <input name="date" type="date" value={form.date} onChange={handleChange} style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Party size</label>
                    <select name="partySize" value={form.partySize} onChange={handleChange} style={inputStyle}>
                      <option value="">Select...</option>
                      {['2–5', '6–10', '11–20', '21–50', '51–100', '100+'].map(s => (
                        <option key={s} value={s}>{s} people</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label style={labelStyle}>Subject <span style={{ color: '#8B1A1A' }}>*</span></label>
                  <select name="subject" required value={form.subject} onChange={handleChange} style={inputStyle}>
                    <option value="">Select an enquiry type...</option>
                    <option>General enquiry</option>
                    <option>Function / event booking</option>
                    <option>Outside catering</option>
                    <option>Wedding enquiry</option>
                    <option>Christmas booking</option>
                    <option>Accessibility requirements</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label style={labelStyle}>Message <span style={{ color: '#8B1A1A' }}>*</span></label>
                  <textarea name="message" required rows={5} value={form.message} onChange={handleChange}
                    style={{ ...inputStyle, resize: 'vertical' }}
                    placeholder="Tell us how we can help…" />
                </div>

                {status === 'error' && (
                  <div style={{ backgroundColor: '#FFF0F0', border: '1px solid #C0392B', borderRadius: '6px', padding: '12px 16px', fontSize: '14px', color: '#C0392B' }}>
                    Sorry, something went wrong sending your message. Please call us on <strong>01298 812776</strong> or email <strong>hanginggatechapel@gmail.com</strong>.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  style={{
                    backgroundColor: status === 'sending' ? '#B5856B' : '#8B1A1A',
                    color: 'white',
                    padding: '14px 28px',
                    borderRadius: '6px',
                    border: 'none',
                    fontWeight: 600,
                    fontSize: '16px',
                    cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                    alignSelf: 'flex-start',
                    fontFamily: 'inherit',
                    transition: 'background-color 0.15s',
                  }}
                >
                  {status === 'sending' ? 'Sending…' : 'Send Enquiry'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
