import { Link } from 'react-router-dom'

const links = [
  { label: 'Welcome', to: '/' },
  { label: 'History', to: '/history' },
  { label: 'Facilities', to: '/facilities' },
  { label: 'Menus', to: '/menus' },
  { label: 'Christmas', to: '/christmas' },
  { label: 'Outside Catering', to: '/outside-catering' },
  { label: 'Meet the Team', to: '/team' },
  { label: 'Contact Us', to: '/contact' },
]

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#5C0E0E', color: 'rgba(255,255,255,0.8)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '48px 24px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', marginBottom: '40px' }}>
          {/* Brand */}
          <div>
            <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '22px', color: '#FAF7F2', marginBottom: '8px' }}>
              The Hanging Gate
            </h3>
            <p style={{ fontSize: '12px', color: '#E2C97E', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>
              Pub & Restaurant
            </p>
            <p style={{ fontSize: '14px', lineHeight: '1.6' }}>
              A family run pub & restaurant in the heart of the High Peak, open every day from 10am.
            </p>
          </div>

          {/* Address */}
          <div>
            <h4 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '16px', color: '#E2C97E', marginBottom: '16px' }}>Find Us</h4>
            <address style={{ fontStyle: 'normal', fontSize: '14px', lineHeight: '1.8' }}>
              Manchester Road<br />
              Chapel-en-le-Frith<br />
              SK23 9UH
            </address>
            <div style={{ marginTop: '12px', fontSize: '14px' }}>
              <a href="tel:01298812776" style={{ color: '#E2C97E', textDecoration: 'none', display: 'block', marginBottom: '4px' }}>
                ☎ 01298 812776
              </a>
              <a href="mailto:hanginggatechapel@gmail.com" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '13px' }}>
                hanginggatechapel@gmail.com
              </a>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '16px', color: '#E2C97E', marginBottom: '16px' }}>Opening Hours</h4>
            <div style={{ fontSize: '14px', lineHeight: '2' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Every day</span>
                <span style={{ color: 'rgba(255,255,255,0.6)' }}>10am – 8pm</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Breakfasts</span>
                <span style={{ color: 'rgba(255,255,255,0.6)' }}>10am – 12noon</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Afternoon Tea</span>
                <span style={{ color: 'rgba(255,255,255,0.6)' }}>3pm – 6pm Mon–Fri</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '16px', color: '#E2C97E', marginBottom: '16px' }}>Explore</h4>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {links.map(l => (
                <Link key={l.to} to={l.to} style={{ color: 'rgba(255,255,255,0.75)', textDecoration: 'none', fontSize: '14px', transition: 'color 0.15s' }}>
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
          <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)' }}>
            © 2008–2026 The Hanging Gate Pub and Restaurant
          </p>
          <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)' }}>
            Chapel-en-le-Frith, High Peak, Derbyshire
          </p>
        </div>
      </div>
    </footer>
  )
}
