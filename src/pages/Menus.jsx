import SEO from '../components/SEO'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'

const menus = [
  {
    to: '/menus/bar-restaurant',
    title: 'Bar & Restaurant Menu',
    desc: 'Breakfasts, starters, mains, steaks, fish, roasts, vegetarian & desserts',
    badge: 'Full menu',
    accent: '#8B1A1A',
    svg: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 11l19-9-9 19-2-8-8-2z"/>
      </svg>
    ),
  },
  {
    to: '/menus/senior',
    title: 'Senior Citizen Menu',
    desc: '2 courses £15.95 · 3 courses £17.50 · Mon–Fri 12–7pm, Sat 12–5pm',
    badge: 'From £15.95',
    accent: '#5C7A4A',
    svg: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/>
      </svg>
    ),
  },
  {
    to: '/menus/set-menu',
    title: '3 Course Set Menu',
    desc: '£27.95 per head · Available all day, every day (excl. December)',
    badge: '£27.95 p/h',
    accent: '#4A5C7A',
    svg: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
      </svg>
    ),
  },
  {
    to: '/menus/functions',
    title: 'Weddings, Functions & Buffets',
    desc: 'From £29.95 p/h for weddings · Buffets from £13.95 · No room hire charge',
    badge: 'Free room hire',
    accent: '#7A4A5C',
    svg: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
  },
  {
    to: '/menus/christmas',
    title: 'Christmas Menus',
    desc: 'Senior Christmas from £22.95 · Full Christmas menu from £33.95 · Nov–Jan',
    badge: 'Seasonal',
    accent: '#8B1A1A',
    svg: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
  },
  {
    to: '/menus/afternoon-tea',
    title: 'Cream & Afternoon Teas',
    desc: 'Cream tea £8.95 · Afternoon tea £13.95 · Served Mon–Fri 3–6pm',
    badge: 'From £8.95',
    accent: '#7A5C4A',
    svg: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 8h1a4 4 0 1 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4z"/><line x1="6" y1="2" x2="6" y2="4"/><line x1="10" y1="2" x2="10" y2="4"/><line x1="14" y1="2" x2="14" y2="4"/>
      </svg>
    ),
  },
  {
    to: '/outside-catering',
    title: 'Outside Catering',
    desc: 'From £7 per head · Free delivery across Derbyshire & Cheshire · Min 30 people',
    badge: 'From £7 p/h',
    accent: '#4A6B5C',
    svg: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" rx="1"/><path d="M16 8h4l3 3v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
      </svg>
    ),
  },
]

export default function Menus() {
  return (
    <div>
      <SEO path="/menus" description="All menus at The Hanging Gate — bar & restaurant, senior citizen, set menu, functions, Christmas, afternoon tea and outside catering." />
      <PageHero title="See Our Menus" subtitle="Something for every occasion, appetite and budget" />
      <section style={{ maxWidth: '1040px', margin: '0 auto', padding: '56px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px', marginBottom: '40px' }}>
          {menus.map(m => (
            <Link
              key={m.to}
              to={m.to}
              className="menu-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: 'white',
                border: '1px solid #E8DFD0',
                borderRadius: '10px',
                overflow: 'hidden',
                textDecoration: 'none',
                transition: 'transform 0.18s, box-shadow 0.18s',
              }}
            >
              <div style={{ backgroundColor: m.accent, padding: '20px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ color: 'rgba(255,255,255,0.9)' }}>{m.svg}</div>
                <span style={{ backgroundColor: 'rgba(255,255,255,0.18)', color: 'white', fontSize: '11px', fontWeight: 600, padding: '4px 10px', borderRadius: '20px', letterSpacing: '0.5px' }}>
                  {m.badge}
                </span>
              </div>
              <div style={{ padding: '20px 24px', flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '18px', color: '#1C1410', lineHeight: 1.3 }}>{m.title}</h3>
                <p style={{ color: '#6B5E52', fontSize: '13px', lineHeight: 1.6, flex: 1 }}>{m.desc}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: m.accent, fontSize: '13px', fontWeight: 600, marginTop: '4px' }}>
                  View menu <span style={{ fontSize: '16px' }}>›</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div style={{ backgroundColor: '#F0EBE0', borderRadius: '10px', padding: '28px', textAlign: 'center', border: '1px solid #E8DFD0' }}>
          <p style={{ color: '#8B1A1A', fontFamily: "'Playfair Display', Georgia, serif", fontSize: '18px', marginBottom: '8px' }}>
            Can't find what you're looking for?
          </p>
          <p style={{ color: '#6B5E52', fontSize: '14px', marginBottom: '16px' }}>
            We can tailor-make menus to suit your budget and requirements.
          </p>
          <a href="tel:01298812776" style={{ color: '#8B1A1A', fontWeight: 700, fontSize: '20px', textDecoration: 'none' }}>
            01298 812776
          </a>
        </div>
      </section>
      <style>{`
        .menu-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.10);
        }
      `}</style>
    </div>
  )
}
