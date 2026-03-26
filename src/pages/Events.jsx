import SEO from '../components/SEO'
import PageHero from '../components/PageHero'

export default function Events() {
  return (
    <div>
      <SEO path="/events" description="Forthcoming events and special occasions at The Hanging Gate, Chapel-en-le-Frith. Book now for Easter 2026." />
      <PageHero title="Information & Forthcoming Events" subtitle="Stay up to date with what's on at The Hanging Gate" />
      <div style={{ maxWidth: '700px', margin: '0 auto', padding: '64px 24px', textAlign: 'center' }}>

        {/* Easter current event */}
        <div style={{ backgroundColor: '#FAF7F2', border: '2px solid #8B1A1A', borderRadius: '10px', padding: '36px', marginBottom: '40px' }}>
          <div style={{ fontSize: '40px', marginBottom: '12px' }}>🐣</div>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '26px', color: '#8B1A1A', marginBottom: '12px' }}>
            Easter 2026
          </h2>
          <p style={{ color: '#C9A84C', fontWeight: 600, fontSize: '16px', marginBottom: '16px' }}>
            Friday 3rd April – Monday 6th April 2026
          </p>
          <p style={{ color: '#4A3D34', fontSize: '15px', lineHeight: 1.8, marginBottom: '20px' }}>
            We are now taking bookings for Easter. The Easter Bunny will be joining us on
            <strong> Sunday 5th April</strong> with eggs for all the children.
            Full bar & restaurant menu available all weekend, as well as our 3 course set menu
            & senior citizens menu.
          </p>
          <a href="tel:01298812776" style={{
            backgroundColor: '#8B1A1A',
            color: 'white',
            padding: '12px 28px',
            borderRadius: '4px',
            textDecoration: 'none',
            fontWeight: 600,
            fontSize: '15px',
          }}>
            Call 01298 812776 to book
          </a>
        </div>

        <div style={{ color: '#6B5E52', fontSize: '15px', lineHeight: 1.7 }}>
          <p>Check back here for upcoming events, special offers and seasonal promotions.</p>
          <p style={{ marginTop: '12px' }}>
            Or follow us on Facebook for the latest news and pictures.
          </p>
        </div>
      </div>
    </div>
  )
}
