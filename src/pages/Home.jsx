import SEO from '../components/SEO'
import { Link } from 'react-router-dom'
import HeroCarousel from '../components/HeroCarousel'
import Reviews from '../components/Reviews'

const highlights = [
  { icon: '🍳', label: 'All-Day Dining', desc: 'Breakfasts, lunches, afternoon teas & evening meals every day from 10am' },
  { icon: '🎉', label: 'Function Rooms', desc: 'Up to 180 guests — free room hire always, no pre-ordering required' },
  { icon: '🚗', label: 'Free Delivery', desc: 'Full menu delivery across Derbyshire & Cheshire, 7 days, 10am–8pm' },
  { icon: '👶', label: 'Baby Friendly', desc: 'Officially accredited — dedicated parent & baby room' },
  { icon: '🐕', label: 'Dog Friendly', desc: 'Dogs welcome in the main bar (booking essential)' },
  { icon: '🎄', label: 'Famous Decorations', desc: 'As seen on BBC, ITV Granada Tonight & NBC America' },
]

const quickLinks = [
  {
    label: 'See Our Menus', to: '/menus', color: '#8B1A1A', sub: 'From breakfasts to evening meals',
    svg: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11l19-9-9 19-2-8-8-2z"/></svg>,
  },
  {
    label: 'Book a Table', to: '/contact', color: '#6B5E52', sub: 'Call or send an enquiry',
    svg: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
  },
  {
    label: 'Functions & Events', to: '/facilities', color: '#5C7A4A', sub: 'Up to 180 guests, free rooms',
    svg: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  },
  {
    label: 'Outside Catering', to: '/outside-catering', color: '#4A5C7A', sub: 'Free delivery, from £7/head',
    svg: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13" rx="1"/><path d="M16 8h4l3 3v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>,
  },
]

export default function Home() {
  return (
    <div>
      <SEO path="/" description="Family run pub & restaurant in Chapel-en-le-Frith, High Peak. Open every day from 10am — breakfasts, lunches, afternoon teas & evening meals. Function rooms, outside catering, baby friendly." image="/images/pub-exterior.jpg" />
      <HeroCarousel />

      {/* Easter banner */}
      <section style={{
        backgroundColor: '#FAF7F2',
        borderBottom: '1px solid #E8DFD0',
        padding: '20px 24px',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '22px' }}>🐣</span>
          <div>
            <strong style={{ color: '#8B1A1A', fontFamily: "'Playfair Display', Georgia, serif", fontSize: '18px' }}>Easter 2026 — Fri 3rd to Mon 6th April</strong>
            <p style={{ color: '#6B5E52', fontSize: '14px', marginTop: '4px' }}>
              The Easter Bunny joins us Sunday 5th April with eggs for all the children. Full bar & restaurant menu available all weekend.
            </p>
          </div>
          <a href="tel:01298812776" style={{
            backgroundColor: '#8B1A1A', color: 'white', padding: '10px 20px', borderRadius: '4px',
            textDecoration: 'none', fontSize: '14px', fontWeight: 600, whiteSpace: 'nowrap',
          }}>
            Book Now
          </a>
        </div>
      </section>

      {/* Quick links */}
      <section style={{ backgroundColor: '#F0EBE0', padding: '36px 24px', borderTop: '1px solid #E8DFD0', borderBottom: '1px solid #E8DFD0' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '14px' }}>
          {quickLinks.map(q => (
            <Link key={q.to} to={q.to} className="quick-link-card" style={{
              backgroundColor: 'white',
              border: `1px solid ${q.color}30`,
              borderLeft: `3px solid ${q.color}`,
              borderRadius: '8px',
              textDecoration: 'none',
              padding: '18px 20px',
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
              transition: 'transform 0.15s, box-shadow 0.15s',
            }}>
              <div style={{ color: q.color, flexShrink: 0 }}>{q.svg}</div>
              <div>
                <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '15px', fontWeight: 600, color: '#1C1410', marginBottom: '2px' }}>{q.label}</div>
                <div style={{ fontSize: '12px', color: '#6B5E52' }}>{q.sub}</div>
              </div>
            </Link>
          ))}
        </div>
        <style>{`
          .quick-link-card:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(0,0,0,0.08); }
        `}</style>
      </section>

      {/* Welcome text + interior photo */}
      <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '72px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '56px', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(24px, 4vw, 38px)', color: '#8B1A1A', marginBottom: '20px' }}>
              Welcome to<br />The Hanging Gate
            </h2>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
              <div style={{ height: '1px', width: '48px', backgroundColor: '#C9A84C' }} />
              <div style={{ width: '6px', height: '6px', backgroundColor: '#C9A84C', borderRadius: '50%' }} />
            </div>
            <p style={{ color: '#4A3D34', fontSize: '16px', lineHeight: 1.8, marginBottom: '16px' }}>
              We are a family run restaurant set in the heart of the beautiful High Peak.
              We open every day from 10am and serve breakfasts, lunches, afternoon teas and evening meals.
            </p>
            <p style={{ color: '#4A3D34', fontSize: '16px', lineHeight: 1.8, marginBottom: '16px' }}>
              We have different sized function rooms available and cater for funerals, christenings, weddings and birthdays.
              All rooms are <strong style={{ color: '#8B1A1A' }}>free to hire</strong> with extensive menus to suit all requirements and budgets.
            </p>
            <p style={{ color: '#4A3D34', fontSize: '16px', lineHeight: 1.8 }}>
              We also do <strong style={{ color: '#8B1A1A' }}>deliveries</strong> of our full menu — seven days a week from 10am–8pm
              to Chapel, Whaley, Dove, Chinley, Buxworth & Furness.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
            <img
              src="/images/christmas-bar.jpg"
              alt="The bar area at The Hanging Gate"
              style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '6px' }}
            />
            <img
              src="/images/christmas-lounge.jpg"
              alt="The lounge at The Hanging Gate"
              style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '6px' }}
            />
            <img
              src="/images/christmas-restaurant.jpg"
              alt="The upstairs restaurant"
              style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '6px', gridColumn: 'span 2' }}
            />
          </div>
        </div>
      </section>

      {/* Highlights grid */}
      <section style={{ backgroundColor: '#F0EBE0', padding: '72px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(22px, 4vw, 34px)', color: '#8B1A1A', marginBottom: '8px' }}>
              Why Visit Us?
            </h2>
            <p style={{ color: '#6B5E52', fontSize: '15px' }}>Everything that makes The Hanging Gate special</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
            {highlights.map(h => (
              <div key={h.label} style={{
                backgroundColor: '#FAF7F2', borderRadius: '8px', padding: '28px 24px',
                border: '1px solid #E8DFD0', display: 'flex', gap: '16px', alignItems: 'flex-start',
              }}>
                <span style={{ fontSize: '28px', flexShrink: 0 }}>{h.icon}</span>
                <div>
                  <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '18px', color: '#1C1410', marginBottom: '6px' }}>{h.label}</h3>
                  <p style={{ color: '#6B5E52', fontSize: '14px', lineHeight: 1.6 }}>{h.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Reviews />

      {/* CTA strip */}
      <section style={{
        backgroundColor: '#8B1A1A',
        backgroundImage: 'linear-gradient(90deg, #5C0E0E, #8B1A1A)',
        padding: '56px 24px',
        textAlign: 'center',
      }}>
        <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(22px, 4vw, 34px)', color: '#FAF7F2', marginBottom: '12px' }}>
          Ready to visit or book?
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '16px', marginBottom: '28px' }}>
          Call us directly — we'd love to hear from you.
        </p>
        <a href="tel:01298812776" style={{
          backgroundColor: '#E2C97E', color: '#3D0808', padding: '16px 40px', borderRadius: '4px',
          textDecoration: 'none', fontWeight: 700, fontSize: '18px', letterSpacing: '0.5px', display: 'inline-block',
        }}>
          01298 812776
        </a>
      </section>
    </div>
  )
}
