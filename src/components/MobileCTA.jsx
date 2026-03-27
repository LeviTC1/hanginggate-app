import { Link } from 'react-router-dom'

export default function MobileCTA() {
  return (
    <>
      <div className="mobile-cta">
        <a href="tel:01298812776" style={{ flex: 1, backgroundColor: 'var(--surface-dark-2)', color: 'white', textDecoration: 'none', textAlign: 'center', padding: '14px 8px', fontSize: '14px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
          <span style={{ fontSize: '16px' }}>☎</span> Call Us
        </a>
        <Link to="/book" style={{ flex: 1, backgroundColor: 'var(--gold)', color: '#1a1208', textDecoration: 'none', textAlign: 'center', padding: '14px 8px', fontSize: '14px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
          <span style={{ fontSize: '16px' }}>📅</span> Book Now
        </Link>
        <Link to="/menus" style={{ flex: 1, backgroundColor: 'var(--text-secondary)', color: 'white', textDecoration: 'none', textAlign: 'center', padding: '14px 8px', fontSize: '14px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
          <span style={{ fontSize: '16px' }}>🍽</span> Menus
        </Link>
      </div>
      <style>{`
        .mobile-cta {
          display: none;
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 100;
          box-shadow: 0 -2px 12px rgba(0,0,0,0.25);
        }
        @media (max-width: 768px) {
          .mobile-cta {
            display: flex;
          }
          body {
            padding-bottom: 56px;
          }
        }
      `}</style>
    </>
  )
}
