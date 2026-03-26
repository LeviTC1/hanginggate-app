import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const navItems = [
  { label: 'Welcome', to: '/' },
  { label: 'History', to: '/history' },
  { label: 'Facilities', to: '/facilities' },
  { label: 'Menus', to: '/menus' },
  { label: 'Children', to: '/children' },
  { label: 'Christmas', to: '/christmas' },
  { label: 'Outside Catering', to: '/outside-catering' },
  { label: 'Events', to: '/events' },
  { label: 'Meet the Team', to: '/team' },
  { label: 'Contact Us', to: '/contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header style={{ backgroundColor: '#8B1A1A', position: 'sticky', top: 0, zIndex: 50, boxShadow: '0 2px 12px rgba(0,0,0,0.35)' }}>
      {/* Top bar */}
      <div style={{ borderBottom: '1px solid rgba(255,255,255,0.15)', padding: '6px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '13px', color: 'rgba(255,255,255,0.75)' }}>
        <span>Open every day from 10am</span>
        <a href="tel:01298812776" style={{ color: '#E2C97E', fontWeight: 600, textDecoration: 'none', letterSpacing: '0.5px' }}>
          ☎ 01298 812776
        </a>
      </div>

      {/* Main nav */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '60px' }}>
        {/* Logo */}
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column' }}>
          <span style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '20px', fontWeight: 700, color: '#FAF7F2', letterSpacing: '0.5px', lineHeight: 1.1 }}>
            The Hanging Gate
          </span>
          <span style={{ fontSize: '11px', color: '#E2C97E', letterSpacing: '2px', textTransform: 'uppercase' }}>
            Pub & Restaurant
          </span>
        </Link>

        {/* Desktop menu */}
        <nav style={{ display: 'flex', gap: '4px', alignItems: 'center' }} className="desktop-nav">
          {navItems.map(item => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              style={({ isActive }) => ({
                color: isActive ? '#E2C97E' : 'rgba(255,255,255,0.88)',
                textDecoration: 'none',
                fontSize: '13px',
                fontWeight: 500,
                padding: '6px 10px',
                borderRadius: '4px',
                backgroundColor: isActive ? 'rgba(255,255,255,0.1)' : 'transparent',
                transition: 'all 0.15s',
                whiteSpace: 'nowrap',
              })}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Burger */}
        <button
          onClick={() => setOpen(o => !o)}
          className="burger-btn"
          aria-label="Toggle menu"
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px', color: 'white' }}
        >
          <div style={{ width: '22px', height: '2px', backgroundColor: 'white', margin: '4px 0', transition: 'all 0.2s', transform: open ? 'translateY(6px) rotate(45deg)' : 'none' }} />
          <div style={{ width: '22px', height: '2px', backgroundColor: 'white', margin: '4px 0', transition: 'all 0.2s', opacity: open ? 0 : 1 }} />
          <div style={{ width: '22px', height: '2px', backgroundColor: 'white', margin: '4px 0', transition: 'all 0.2s', transform: open ? 'translateY(-6px) rotate(-45deg)' : 'none' }} />
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div style={{ backgroundColor: '#6B0E0E', padding: '8px 0 16px' }} className="mobile-nav">
          {navItems.map(item => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              onClick={() => setOpen(false)}
              style={({ isActive }) => ({
                display: 'block',
                color: isActive ? '#E2C97E' : 'rgba(255,255,255,0.9)',
                textDecoration: 'none',
                fontSize: '15px',
                fontWeight: 500,
                padding: '12px 24px',
                borderBottom: '1px solid rgba(255,255,255,0.08)',
                backgroundColor: isActive ? 'rgba(255,255,255,0.08)' : 'transparent',
              })}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      )}

      <style>{`
        .desktop-nav { display: flex !important; }
        .burger-btn { display: none !important; }
        .mobile-nav { display: none; }
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .burger-btn { display: block !important; }
          .mobile-nav { display: block !important; }
        }
      `}</style>
    </header>
  )
}
