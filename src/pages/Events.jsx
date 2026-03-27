import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import PageHero from '../components/PageHero'

export default function Events() {
  return (
    <div>
      <SEO path="/events" description="Forthcoming events and special occasions at The Hanging Gate, Chapel-en-le-Frith. Book now for Easter 2026." />
      <PageHero title="Information & Forthcoming Events" subtitle="Stay up to date with what's on at The Hanging Gate" />

      <section style={{ maxWidth: '920px', margin: '0 auto', padding: '66px 24px' }}>
        <div className="fade-up" style={{ textAlign: 'center', marginBottom: '24px' }}>
          <p style={{ color: '#8E7042', fontSize: '12px', letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 700, marginBottom: '8px' }}>
            Happening Soon
          </p>
          <h2 style={{ color: '#7A1212', fontSize: 'clamp(28px, 4.5vw, 42px)' }}>Book Upcoming Events Early</h2>
        </div>

        <div className="fade-up" style={{
          background: 'linear-gradient(145deg, #18120D, #2A1B13)',
          border: '1px solid rgba(216,181,108,0.34)',
          borderRadius: '16px',
          padding: '38px 32px',
          textAlign: 'center',
          boxShadow: '0 24px 36px rgba(18,11,8,0.35)',
          marginBottom: '34px',
        }}>
          <div style={{ fontSize: '42px', marginBottom: '12px' }}>🐣</div>
          <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '30px', color: '#F7E9CC', marginBottom: '12px' }}>
            Easter 2026
          </h3>
          <p style={{ color: '#E2C57C', fontWeight: 700, fontSize: '15px', letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: '16px' }}>
            Friday 3rd April – Monday 6th April 2026
          </p>
          <p style={{ color: 'rgba(255,255,255,0.78)', fontSize: '15px', lineHeight: 1.8, marginBottom: '22px' }}>
            We are now taking bookings for Easter. The Easter Bunny will be joining us on
            <strong style={{ color: '#F8DFA7' }}> Sunday 5th April</strong> with eggs for all the children.
            Full bar & restaurant menu available all weekend, as well as our 3 course set menu
            and senior citizens menu.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}>
            <Link to="/book" className="btn btn-reserve">Reserve a Table</Link>
            <Link to="/menus" className="btn btn-outline-light">View Menus</Link>
          </div>
          <p className="urgency-note" style={{ marginTop: '18px' }}>Limited availability this weekend</p>
        </div>

        <div className="fade-up" style={{
          color: '#5C4A3C',
          fontSize: '15px',
          lineHeight: 1.8,
          textAlign: 'center',
          background: 'rgba(255,255,255,0.72)',
          border: '1px solid rgba(139,26,26,0.12)',
          borderRadius: '12px',
          padding: '20px 18px',
        }}>
          <p>Check back here for upcoming events, special offers and seasonal promotions.</p>
          <p style={{ marginTop: '6px' }}>
            Or follow us on Facebook for the latest news and pictures.
          </p>
        </div>
      </section>
    </div>
  )
}
