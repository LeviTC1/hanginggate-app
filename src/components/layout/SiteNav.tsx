import { useEffect, useMemo, useRef, useState } from 'react'
import clsx from 'clsx'
import { Menu, X } from 'lucide-react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import useNavScroll from '../../hooks/useNavScroll'
import { getSeasonalMode } from '../../utils/seasonalMode'

const navItems = [
  { label: 'Welcome', to: '/' },
  { label: 'Menus', to: '/menus' },
  { label: 'Children', to: '/children' },
  { label: 'Events', to: '/events' },
  { label: 'Team', to: '/team' },
  { label: 'Book', to: '/book' },
  { label: 'Christmas', to: '/christmas' },
  { label: 'Contact', to: '/contact' },
]

export default function SiteNav() {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const headerRef = useRef<HTMLElement | null>(null)
  const { scrolled } = useNavScroll({ threshold: 80 })
  const seasonalMode = useMemo(() => getSeasonalMode(), [])
  const isChristmasMode = seasonalMode === 'christmas'

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) {
        setMenuOpen(false)
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('keydown', handleEscape)

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('keydown', handleEscape)
    }
  }, [])

  useEffect(() => {
    if (!menuOpen) {
      return
    }

    function closeOnOutside(event: MouseEvent | TouchEvent) {
      const target = event.target as Node
      if (headerRef.current && !headerRef.current.contains(target)) {
        setMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', closeOnOutside)
    document.addEventListener('touchstart', closeOnOutside)

    return () => {
      document.removeEventListener('mousedown', closeOnOutside)
      document.removeEventListener('touchstart', closeOnOutside)
    }
  }, [menuOpen])

  return (
    <header
      ref={headerRef}
      className={clsx(
        'fixed inset-x-0 top-0 z-[90] border-b border-[rgba(200,144,26,0.22)] bg-[#121910]/96 backdrop-blur-sm transition-colors duration-300',
        scrolled
          ? 'border-[rgba(200,144,26,0.22)] bg-[#121910]/95 backdrop-blur-sm'
          : 'border-[rgba(200,144,26,0.18)] bg-[#121910]/96 backdrop-blur-sm',
      )}
    >
      <div className="container">
        <div className="flex min-h-[82px] items-center justify-between gap-3">
          <Link to="/" className="group flex flex-col no-underline">
            <span
              className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--text-inverse)] transition-colors duration-200 group-hover:text-[var(--gold-light)]"
              style={{ textShadow: '0 1px 6px rgba(0,0,0,0.45)' }}
            >
              The
            </span>
            <span
              className="font-display text-[24px] font-semibold leading-none tracking-[-0.01em] text-[var(--text-inverse)] transition-colors duration-200 group-hover:text-[var(--gold-light)]"
              style={{ textShadow: '0 1px 8px rgba(0,0,0,0.45)' }}
            >
              Hanging Gate
            </span>
          </Link>

          <div className="flex items-center gap-2">
            <nav className="hidden items-center gap-1 lg:flex xl:gap-2" aria-label="Main navigation">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    clsx(
                      'relative inline-flex items-center whitespace-nowrap rounded-[var(--radius-sm)] px-2 py-3 font-display text-[11px] font-semibold uppercase tracking-[0.1em] !text-[var(--gold-light)] drop-shadow-[0_1px_6px_rgba(0,0,0,0.55)] transition-colors duration-200 hover:!text-[var(--text-inverse)] no-underline',
                      isActive
                        ? '!text-[var(--text-inverse)] border-b border-[var(--gold)]'
                        : 'border-b border-transparent',
                    )
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <Link
              to="/book"
              className={clsx(
                'nav-reserve-link btn btn-primary font-display min-h-[42px] px-4 text-[10px] md:min-h-[44px] md:px-5',
                isChristmasMode && 'seasonal-reserve-pulse',
              )}
            >
              Book Now
            </Link>

            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-[var(--radius-md)] border border-[rgba(255,255,255,0.2)] bg-[rgba(15,20,13,0.48)] text-white transition-colors duration-200 hover:border-[var(--gold)] hover:text-[var(--gold)] lg:hidden"
              aria-expanded={menuOpen}
              aria-controls="mobile-main-nav"
              aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      <div
        id="mobile-main-nav"
        aria-hidden={!menuOpen}
        className={clsx(
          'overflow-hidden border-t bg-[#162017] transition-all duration-300 md:hidden',
          menuOpen
            ? 'pointer-events-auto max-h-[420px] border-[rgba(200,144,26,0.26)] opacity-100'
            : 'pointer-events-none max-h-0 border-transparent opacity-0',
        )}
      >
        <nav className="container flex flex-col gap-1 py-4" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                clsx(
                  'rounded-[var(--radius-sm)] px-2 py-3 font-display text-[14px] font-semibold uppercase tracking-[0.12em] text-[rgba(255,255,255,0.9)] no-underline transition-colors duration-200 hover:text-[var(--gold-light)]',
                  isActive && 'text-[var(--gold)]',
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
