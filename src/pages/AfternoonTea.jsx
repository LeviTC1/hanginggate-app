import SEO from '../components/SEO'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'

export default function AfternoonTea() {
  return (
    <div>
      <SEO path="/menus/afternoon-tea" description="Cream tea £8.95 and afternoon tea £13.95 at The Hanging Gate. Served Monday to Friday 3–6pm only." />
      <PageHero title="Cream & Afternoon Teas" subtitle="Mon–Fri only · 3:00pm – 6:00pm" />
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '64px 24px' }}>
        <Link to="/menus" style={{ color: '#8B1A1A', textDecoration: 'none', fontSize: '14px', display: 'inline-flex', alignItems: 'center', gap: '6px', marginBottom: '40px' }}>
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
          <div style={{ backgroundColor: '#FAF7F2', border: '2px solid #C9A84C', borderRadius: '12px', padding: '32px', textAlign: 'center' }}>
            <div style={{ fontSize: '40px', marginBottom: '12px' }}>☕</div>
            <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '22px', color: '#8B1A1A', marginBottom: '12px' }}>Cream Tea</h3>
            <div style={{ color: '#C9A84C', fontFamily: "'Playfair Display', Georgia, serif", fontSize: '28px', fontWeight: 700, marginBottom: '16px' }}>£8.95</div>
            <ul style={{ listStyle: 'none', color: '#4A3D34', fontSize: '15px', lineHeight: 2 }}>
              <li>Pot of tea for one</li>
              <li>Scone</li>
              <li>Cream and jam</li>
            </ul>
          </div>
          <div style={{ backgroundColor: '#8B1A1A', border: '2px solid #8B1A1A', borderRadius: '12px', padding: '32px', textAlign: 'center', color: 'white' }}>
            <div style={{ fontSize: '40px', marginBottom: '12px' }}>🍰</div>
            <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '22px', color: '#E2C97E', marginBottom: '12px' }}>Afternoon Tea</h3>
            <div style={{ color: '#E2C97E', fontFamily: "'Playfair Display', Georgia, serif", fontSize: '28px', fontWeight: 700, marginBottom: '16px' }}>£13.95</div>
            <ul style={{ listStyle: 'none', fontSize: '15px', lineHeight: 2, opacity: 0.9 }}>
              <li>Pot of tea for one</li>
              <li>Sandwich of your choice</li>
              <li>Scone with cream and jam</li>
            </ul>
          </div>
        </div>
        <div style={{ backgroundColor: '#F0EBE0', borderRadius: '8px', padding: '24px', textAlign: 'center' }}>
          <p style={{ color: '#8B1A1A', fontFamily: "'Playfair Display', Georgia, serif", fontSize: '16px', marginBottom: '8px' }}>
            🎵 Entertainment available for senior citizens coach parties if required
          </p>
          <p style={{ color: '#6B5E52', fontSize: '14px', marginBottom: '16px' }}>Served Monday to Friday, 3:00pm – 6:00pm only</p>
          <a href="tel:01298812776" style={{ color: '#8B1A1A', fontWeight: 700, fontSize: '18px', textDecoration: 'none' }}>
            01298 812776
          </a>
        </div>
      </div>
    </div>
  )
}
