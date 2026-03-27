import { useEffect, useState } from 'react'
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
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="site-topbar">
        <span>Open every day from 10am</span>
        <a href="tel:01298812776" className="animated-link" style={{ color: '#EAD6A6', fontWeight: 700, letterSpacing: '0.05em' }}>
          ☎ 01298 812776
        </a>
      </div>

      <div className="site-nav-shell">
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column' }}>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: 700, color: 'var(--surface-card)', letterSpacing: '0.5px', lineHeight: 1.1 }}>
            The Hanging Gate
          </span>
          <span style={{ fontSize: '11px', color: 'var(--gold-light)', letterSpacing: '2px', textTransform: 'uppercase' }}>
            Pub & Restaurant
          </span>
        </Link>

        <div className="desktop-nav-wrap">
          <nav className="desktop-nav" aria-label="Main navigation">
            {navItems.map(item => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) => `desktop-nav-link animated-link ${isActive ? 'active' : ''}`}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <Link to="/book" className="btn btn-reserve nav-reserve-btn">
            Book Now
          </Link>
        </div>

        <button
          onClick={() => setOpen(o => !o)}
          className="burger-btn"
          aria-label="Toggle menu"
        >
          <div style={{ width: '22px', height: '2px', backgroundColor: 'white', margin: '4px 0', transition: 'all 0.2s', transform: open ? 'translateY(6px) rotate(45deg)' : 'none' }} />
          <div style={{ width: '22px', height: '2px', backgroundColor: 'white', margin: '4px 0', transition: 'all 0.2s', opacity: open ? 0 : 1 }} />
          <div style={{ width: '22px', height: '2px', backgroundColor: 'white', margin: '4px 0', transition: 'all 0.2s', transform: open ? 'translateY(-6px) rotate(-45deg)' : 'none' }} />
        </button>
      </div>

      {open && (
        <div className="mobile-nav">
          <Link to="/book" className="btn btn-reserve mobile-reserve-btn">Reserve Your Table</Link>
          {navItems.map(item => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              onClick={() => setOpen(false)}
              style={({ isActive }) => ({
                display: 'block',
                color: isActive ? '#EAD6A6' : 'rgba(255,255,255,0.9)',
                textDecoration: 'none',
                fontSize: '15px',
                fontWeight: 500,
                padding: '12px 24px',
                borderBottom: '1px solid rgba(255,255,255,0.08)',
                backgroundColor: isActive ? 'rgba(216,181,108,0.08)' : 'transparent',
              })}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      )}

      <style>{`
        .site-header {
          position: sticky;
          top: 0;
          z-index: 70;
          background: linear-gradient(180deg, rgba(91, 13, 13, 0.96), rgba(67, 9, 9, 0.94));
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 10px 22px rgba(0,0,0,0.25);
          transition: background-color 0.32s ease, box-shadow 0.32s ease, backdrop-filter 0.32s ease, border-color 0.32s ease;
        }
        .site-header.scrolled {
          background: rgba(16, 12, 10, 0.8);
          backdrop-filter: blur(12px);
          border-bottom-color: rgba(216, 181, 108, 0.22);
          box-shadow: 0 12px 34px rgba(0,0,0,0.35);
        }
        .site-topbar {
          border-bottom: 1px solid rgba(255,255,255,0.12);
          padding: 6px 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 12px;
          color: rgba(255,255,255,0.72);
        }
        .site-nav-shell {
          max-width: 1240px;
          margin: 0 auto;
          padding: 0 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          min-height: 68px;
          gap: 18px;
        }
        .desktop-nav-wrap {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .desktop-nav {
          display: flex;
          gap: 4px;
          align-items: center;
        }
        .desktop-nav-link {
          color: rgba(255,255,255,0.88);
          font-size: 13px;
          font-weight: 500;
          padding: 6px 10px;
          border-radius: 6px;
          white-space: nowrap;
        }
        .desktop-nav-link.active {
          color: #EBDAB2;
          background-color: rgba(216,181,108,0.12);
        }
        .nav-reserve-btn {
          padding: 11px 16px;
          font-size: 12px;
          border-radius: 999px;
          letter-spacing: 0.08em;
          white-space: nowrap;
        }
        .burger-btn {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
          color: white;
        }
        .mobile-nav {
          display: none;
          background: linear-gradient(180deg, rgba(35, 12, 9, 0.98), rgba(17, 10, 8, 0.98));
          border-top: 1px solid rgba(216,181,108,0.2);
          padding: 10px 0 16px;
        }
        .mobile-reserve-btn {
          margin: 4px 20px 12px;
          width: calc(100% - 40px);
          border-radius: 10px;
        }
        @media (max-width: 1040px) {
          .desktop-nav-link {
            font-size: 12px;
            padding: 6px 8px;
          }
          .nav-reserve-btn {
            padding: 10px 12px;
          }
        }
        @media (max-width: 900px) {
          .site-topbar {
            font-size: 11px;
            padding: 6px 16px;
          }
          .site-nav-shell {
            min-height: 62px;
            padding: 0 16px;
          }
          .desktop-nav-wrap {
            display: none;
          }
          .burger-btn {
            display: block;
          }
          .mobile-nav {
            display: block;
          }
        }
      `}</style>
    </header>
  )
}
