import { useEffect, useMemo, useState } from 'react'
import clsx from 'clsx'
import { Menu, X } from 'lucide-react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import useNavScroll from '../../hooks/useNavScroll'
import { getSeasonalMode } from '../../utils/seasonalMode'

const navItems = [
  { label: 'Welcome', to: '/' },
  { label: 'Menus', to: '/menus' },
  { label: 'Events', to: '/events' },
  { label: 'Book a Table', to: '/book' },
  { label: 'Christmas', to: '/christmas' },
  { label: 'Contact', to: '/contact' },
]

export default function SiteNav() {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const { scrolled } = useNavScroll({ threshold: 80 })
  const seasonalMode = useMemo(() => getSeasonalMode(), [])
  const isChristmasMode = seasonalMode === 'christmas'

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  return (
    <header
      className={clsx(
        'fixed inset-x-0 top-0 z-[90] border-b transition-colors duration-300',
        scrolled
          ? 'border-[rgba(200,134,10,0.3)] bg-[#1a1208]'
          : 'border-transparent bg-transparent',
      )}
    >
      <div className="container">
        <div className="flex min-h-[78px] items-center justify-between gap-4">
          <Link to="/" className="group flex flex-col no-underline">
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[rgba(255,255,255,0.72)] transition-colors duration-200 group-hover:text-[var(--gold)]">
              The
            </span>
            <span className="font-display text-[26px] font-semibold leading-none tracking-[-0.01em] text-white">
              Hanging Gate
            </span>
          </Link>

          <div className="flex items-center gap-3">
            <nav className="hidden items-center gap-4 md:flex" aria-label="Main navigation">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    clsx(
                      'group relative px-1 py-2 text-[13px] font-medium uppercase tracking-[0.12em] text-[rgba(255,255,255,0.86)] transition-colors duration-200 hover:text-white',
                      isActive && 'text-[var(--gold)]',
                    )
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span>{item.label}</span>
                      <span className="absolute inset-x-0 -bottom-[2px] h-px origin-left scale-x-0 bg-[var(--gold)] transition-transform duration-200 group-hover:scale-x-100" />
                      {isActive ? <span className="absolute left-1/2 top-full mt-1 h-1 w-1 -translate-x-1/2 rounded-full bg-[var(--gold)]" /> : null}
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            <Link
              to="/book"
              className={clsx(
                'nav-reserve-link inline-flex min-h-[44px] items-center justify-center rounded-full bg-[var(--gold)] px-4 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#1a1208] no-underline shadow-[0_6px_18px_rgba(200,134,10,0.28)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--gold-muted)] md:min-h-[46px] md:px-6 md:text-[12px]',
                isChristmasMode && 'seasonal-reserve-pulse',
              )}
            >
              Reserve
            </Link>

            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(255,255,255,0.2)] bg-[rgba(8,6,4,0.32)] text-white transition-colors duration-200 hover:border-[var(--gold)] hover:text-[var(--gold)] md:hidden"
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
        className={clsx(
          'overflow-hidden border-t bg-[#1a1208] transition-all duration-300 md:hidden',
          menuOpen ? 'max-h-[420px] border-[rgba(200,134,10,0.3)] opacity-100' : 'max-h-0 border-transparent opacity-0',
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
                  'rounded-md px-2 py-3 text-[14px] font-semibold uppercase tracking-[0.12em] text-[rgba(255,255,255,0.9)] no-underline transition-colors duration-200 hover:text-[#e8c96b]',
                  isActive && 'text-[#c8860a]',
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
