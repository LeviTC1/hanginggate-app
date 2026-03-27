import SEO from '../components/SEO'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'

export default function AfternoonTea() {
  return (
    <div>
      <SEO path="/menus/afternoon-tea" description="Cream tea £8.95 and afternoon tea £13.95 at The Hanging Gate. Served Monday to Friday 3–6pm only." />
      <PageHero title="Cream & Afternoon Teas" subtitle="Mon–Fri only · 3:00pm – 6:00pm" />
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '64px 24px' }}>
        <Link to="/menus" style={{ color: 'var(--gold-light)', textDecoration: 'none', fontSize: '14px', display: 'inline-flex', alignItems: 'center', gap: '6px', marginBottom: '40px' }}>
          ← Back to Menus
        </Link>

        {/* Place setting photo */}
        <div style={{ marginBottom: '40px', borderRadius: '10px', overflow: 'hidden' }}>
          <img
            src="/images/afternoon-tea.jpg"
            alt="Place setting at The Hanging Gate"
            style={{ width: '100%', maxHeight: '340px', objectFit: 'cover', display: 'block' }}
          />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px', marginBottom: '40px' }}>
          <div style={{ backgroundColor: 'var(--surface-card)', border: '2px solid var(--gold)', borderRadius: '12px', padding: '32px', textAlign: 'center' }}>
            <div style={{ fontSize: '40px', marginBottom: '12px' }}>☕</div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', color: 'var(--gold-light)', marginBottom: '12px' }}>Cream Tea</h3>
            <div style={{ color: 'var(--gold)', fontFamily: 'var(--font-display)', fontSize: '28px', fontWeight: 700, marginBottom: '16px' }}>£8.95</div>
            <ul style={{ listStyle: 'none', color: 'var(--text-secondary)', fontSize: '15px', lineHeight: 2 }}>
              <li>Pot of tea for one</li>
              <li>Scone</li>
              <li>Cream and jam</li>
            </ul>
          </div>
          <div style={{ backgroundColor: 'var(--surface-dark-2)', border: '2px solid var(--surface-dark-2)', borderRadius: '12px', padding: '32px', textAlign: 'center', color: 'white' }}>
            <div style={{ fontSize: '40px', marginBottom: '12px' }}>🍰</div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', color: 'var(--gold-light)', marginBottom: '12px' }}>Afternoon Tea</h3>
            <div style={{ color: 'var(--gold-light)', fontFamily: 'var(--font-display)', fontSize: '28px', fontWeight: 700, marginBottom: '16px' }}>£13.95</div>
            <ul style={{ listStyle: 'none', fontSize: '15px', lineHeight: 2, opacity: 0.9 }}>
              <li>Pot of tea for one</li>
              <li>Sandwich of your choice</li>
              <li>Scone with cream and jam</li>
            </ul>
          </div>
        </div>
        <div style={{ backgroundColor: 'var(--surface-warm)', borderRadius: '8px', padding: '24px', textAlign: 'center' }}>
          <p style={{ color: 'var(--gold-light)', fontFamily: 'var(--font-display)', fontSize: '16px', marginBottom: '8px' }}>
            🎵 Entertainment available for senior citizens coach parties if required
          </p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '14px', marginBottom: '16px' }}>Served Monday to Friday, 3:00pm – 6:00pm only</p>
          <Link to="/book" className="btn btn-reserve">
            Reserve Your Table
          </Link>
        </div>
      </div>
    </div>
  )
}
