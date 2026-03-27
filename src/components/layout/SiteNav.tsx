import { useEffect, useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import clsx from 'clsx'
import { Menu, X } from 'lucide-react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import useNavScroll from '../../hooks/useNavScroll'

const navItems = [
  { label: 'Welcome', to: '/' },
  { label: 'History', to: '/history' },
  { label: 'Facilities', to: '/facilities' },
  { label: 'Menus', to: '/menus' },
  { label: 'Children', to: '/children' },
  { label: 'Christmas', to: '/christmas' },
  { label: 'Outside Catering', to: '/outside-catering' },
  { label: 'Events', to: '/events' },
  { label: 'Meet The Team', to: '/team' },
  { label: 'Get In Touch', to: '/contact' },
]

export default function SiteNav() {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const { progress } = useNavScroll({ threshold: 60 })

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  return (
    <header
      className={clsx(
        'fixed inset-x-0 top-0 z-[90] border-b transition-all duration-300',
        progress > 0
          ? 'border-[rgba(212,168,50,0.22)] bg-[rgba(18,10,6,0.82)] backdrop-blur-[24px] backdrop-saturate-[1.8] shadow-[0_14px_34px_rgba(10,6,4,0.38)]'
          : 'border-transparent bg-transparent',
      )}
    >
      <div className="container">
        <div className="flex min-h-[78px] items-center justify-between gap-6">
          <Link to="/" className="group flex flex-col no-underline">
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[rgba(255,255,255,0.72)] transition-colors duration-200 group-hover:text-[var(--gold)]">
              The
            </span>
            <span className="font-display text-[26px] font-semibold leading-none tracking-[-0.01em] text-white">
              Hanging Gate
            </span>
          </Link>

          <div className="hidden items-center gap-6 min-[901px]:flex">
            <nav className="flex items-center gap-4" aria-label="Main navigation">
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
              className="btn btn-secondary border-[1.5px] border-[var(--gold)] bg-transparent !px-6 !text-[12px] !font-semibold !tracking-[0.12em] !text-[var(--gold)] hover:!bg-[var(--gold)] hover:!text-[var(--surface-dark)] hover:!shadow-[0_0_18px_rgba(216,181,108,0.35)]"
            >
              Reserve
            </Link>
          </div>

          <Dialog.Root open={menuOpen} onOpenChange={setMenuOpen}>
            <Dialog.Trigger asChild>
              <button
                type="button"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(255,255,255,0.2)] bg-[rgba(8,6,4,0.28)] text-white transition-colors duration-200 hover:border-[var(--gold)] hover:text-[var(--gold)] min-[901px]:hidden"
                aria-label="Open navigation"
              >
                <Menu size={20} />
              </button>
            </Dialog.Trigger>

            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 z-[95] bg-black/70 backdrop-blur-sm" />
              <Dialog.Content className="fixed inset-0 z-[100] flex flex-col bg-[#0a0604] px-7 py-8 text-white">
                <div className="flex items-center justify-between">
                  <Dialog.Title className="font-display text-[30px] leading-none">The Hanging Gate</Dialog.Title>
                  <Dialog.Close asChild>
                    <button
                      type="button"
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(255,255,255,0.22)] text-[rgba(255,255,255,0.88)] transition-colors duration-200 hover:border-[var(--gold)] hover:text-[var(--gold)]"
                      aria-label="Close navigation"
                    >
                      <X size={18} />
                    </button>
                  </Dialog.Close>
                </div>

                <nav className="mt-12 flex flex-col gap-2" aria-label="Mobile navigation">
                  {navItems.map((item, index) => (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      end={item.to === '/'}
                      className={({ isActive }) =>
                        clsx(
                          'animate-[riseIn_0.45s_var(--ease-spring)_both] py-2 font-display text-[clamp(32px,8vw,48px)] leading-[1.03] tracking-[-0.02em] text-[rgba(255,255,255,0.92)]',
                          isActive && 'text-[var(--gold)]',
                        )
                      }
                      style={{ animationDelay: `${index * 40}ms` }}
                    >
                      {item.label}
                    </NavLink>
                  ))}
                </nav>

                <div className="mt-auto border-t border-[rgba(255,255,255,0.12)] pt-6">
                  <Link to="/book" className="btn btn-primary w-full justify-center">
                    Reserve Your Table
                  </Link>
                  <p className="mt-4 text-[12px] uppercase tracking-[0.12em] text-[rgba(255,255,255,0.54)]">
                    Open every day from 10am · 01298 812776
                  </p>
                </div>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </div>
    </header>
  )
}
