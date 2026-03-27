import { Link } from 'react-router-dom'
import BookingFlow from '../components/booking/BookingFlow'
import PageHero from '../components/PageHero'
import SEO from '../components/SEO'

export default function Book() {
  return (
    <div>
      <SEO
        path="/book"
        title="Book a Table"
        description="Reserve your table at Bridge 42 with instant online availability and confirmation."
      />
      <PageHero title="Book a Table" subtitle="Live availability · Instant confirmation" />

      <section style={{ maxWidth: '1120px', margin: '0 auto', padding: '64px 24px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '26px',
          alignItems: 'start',
        }}>
          <BookingFlow />

          <aside style={{ display: 'grid', gap: '12px' }}>
            <div style={{
              background: 'linear-gradient(160deg, #1B130E, #2B1A11)',
              border: '1px solid rgba(216,181,108,0.32)',
              borderRadius: '14px',
              padding: '20px',
              color: '#F9ECCE',
            }}>
              <p style={{ color: '#E2C97E', fontSize: '12px', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '8px', fontWeight: 700 }}>
                Need help?
              </p>
              <h3 style={{ fontSize: '22px', marginBottom: '8px' }}>Call the team</h3>
              <p style={{ color: 'rgba(255,255,255,0.74)', fontSize: '14px', lineHeight: 1.7, marginBottom: '14px' }}>
                If you’re booking for a large party or need accessibility help, call us directly.
              </p>
              <a href="tel:01298812776" className="btn btn-outline-light" style={{ width: 'fit-content' }}>
                01298 812776
              </a>
            </div>

            <div style={{
              background: 'rgba(255,255,255,0.76)',
              border: '1px solid rgba(139,26,26,0.16)',
              borderRadius: '12px',
              padding: '18px',
            }}>
              <p style={{ color: '#7B1515', fontSize: '15px', fontWeight: 700, marginBottom: '8px' }}>Planning a private event?</p>
              <p style={{ color: '#5E4D40', fontSize: '14px', lineHeight: 1.7, marginBottom: '12px' }}>
                For weddings, buffets and larger function bookings, visit our functions page.
              </p>
              <Link to="/menus/functions" className="animated-link" style={{ color: '#7B1515', fontWeight: 700 }}>
                View function packages
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </div>
  )
}
