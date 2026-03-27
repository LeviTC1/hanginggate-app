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
    <footer className="site-footer" style={{ color: 'rgba(255,255,255,0.8)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '54px 24px 24px' }}>
        <div className="fade-up" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '40px', marginBottom: '40px' }}>
          <div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '24px', color: 'var(--surface-card)', marginBottom: '8px' }}>
              The Hanging Gate
            </h3>
            <p style={{ fontSize: '12px', color: 'var(--gold-light)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>
              Pub & Restaurant
            </p>
            <p style={{ fontSize: '14px', lineHeight: 1.7, marginBottom: '18px' }}>
              A family run pub & restaurant in the heart of the High Peak, open every day from 10am.
            </p>
            <Link to="/book" className="btn btn-reserve" style={{ fontSize: '12px' }}>
              Reserve Your Table
            </Link>
          </div>

          <div>
            <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '17px', color: 'var(--gold-light)', marginBottom: '16px' }}>Find Us</h4>
            <address style={{ fontStyle: 'normal', fontSize: '14px', lineHeight: '1.8' }}>
              Manchester Road<br />
              Chapel-en-le-Frith, High Peak, Derbyshire<br />
              SK23 9UH
            </address>
            <div style={{ marginTop: '12px', fontSize: '14px' }}>
              <a href="tel:01298812776" className="animated-link" style={{ color: 'var(--gold-light)', textDecoration: 'none', display: 'block', marginBottom: '6px', width: 'fit-content' }}>
                ☎ 01298 812776
              </a>
              <a href="mailto:hanginggatechapel@gmail.com" className="animated-link" style={{ color: 'rgba(255,255,255,0.72)', textDecoration: 'none', fontSize: '13px', width: 'fit-content' }}>
                hanginggatechapel@gmail.com
              </a>
            </div>
          </div>

          <div>
            <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '17px', color: 'var(--gold-light)', marginBottom: '16px' }}>Opening Hours</h4>
            <div style={{ fontSize: '14px', lineHeight: 2 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px' }}>
                <span>Every day</span>
                <span style={{ color: 'rgba(255,255,255,0.6)' }}>10am – 8pm</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px' }}>
                <span>Breakfasts</span>
                <span style={{ color: 'rgba(255,255,255,0.6)' }}>10am – 12noon</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px' }}>
                <span>Afternoon Tea</span>
                <span style={{ color: 'rgba(255,255,255,0.6)' }}>3pm – 6pm Mon–Fri</span>
              </div>
            </div>
          </div>

          <div>
            <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '17px', color: 'var(--gold-light)', marginBottom: '16px' }}>Explore</h4>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {links.map(l => (
                <Link key={l.to} to={l.to} className="footer-link animated-link">
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.16)', paddingTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
          <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.56)' }}>
            © 2008–2026 The Hanging Gate Pub and Restaurant
          </p>
          <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.44)' }}>
            Chapel-en-le-Frith, High Peak, Derbyshire
          </p>
        </div>
      </div>
    </footer>
  )
}
