import { MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'

const exploreLinks = [
  { label: 'Welcome', to: '/' },
  { label: 'History', to: '/history' },
  { label: 'Facilities', to: '/facilities' },
  { label: 'Menus', to: '/menus' },
  { label: 'Events', to: '/events' },
  { label: 'Meet the Team', to: '/team' },
  { label: 'Christmas', to: '/christmas' },
  { label: 'Outside Catering', to: '/outside-catering' },
  { label: 'Get in Touch', to: '/contact' },
]

export default function SiteFooter() {
  return (
    <footer className="site-footer relative overflow-hidden text-[rgba(245,240,232,0.74)]">
      <div className="grain-overlay" />

      {/* ── Brand bar ──────────────────────────────────── */}
      <div className="relative border-b border-[rgba(245,240,232,0.06)]">
        <div className="container py-6 md:py-7">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-[62ch]">
              <Link to="/" className="group inline-flex flex-col no-underline">
                <span className="text-[9px] font-bold uppercase tracking-[0.35em] text-[rgba(245,240,232,0.45)] transition-colors duration-200 group-hover:text-[var(--gold)]">
                  The
                </span>
                <span className="font-display text-[32px] font-semibold leading-none tracking-[-0.01em] text-[var(--text-inverse)]">
                  Hanging Gate
                </span>
              </Link>
              <p className="mt-2 max-w-[56ch] text-[14px] leading-[1.65] text-[rgba(245,240,232,0.56)]">
                A family run pub and restaurant in Chapel-en-le-Frith, High Peak, Derbyshire. Warm welcomes, craft menus, and memorable occasions since 1991.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-[var(--radius-sm)] border border-[rgba(245,240,232,0.16)] text-[rgba(245,240,232,0.55)] no-underline transition-colors duration-200 hover:border-[var(--gold)] hover:text-[var(--gold)]"
                aria-label="The Hanging Gate on Facebook"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-[var(--radius-sm)] border border-[rgba(245,240,232,0.16)] text-[rgba(245,240,232,0.55)] no-underline transition-colors duration-200 hover:border-[var(--gold)] hover:text-[var(--gold)]"
                aria-label="The Hanging Gate on Instagram"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Column grid ────────────────────────────────── */}
      <div className="relative">
        <div className="container py-8 md:py-9">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">

            {/* Find Us */}
            <div>
              <p className="section-label section-label--dark mb-4">Find Us</p>
              <address className="not-italic text-[14px] leading-[1.8] text-[rgba(245,240,232,0.68)]">
                <span className="flex items-start gap-[10px]">
                  <MapPin size={14} className="mt-[5px] shrink-0 text-[var(--gold)]" />
                  <span>
                    Manchester Road
                    <br />
                    Chapel-en-le-Frith, High Peak, Derbyshire
                    <br />
                    SK23 9UH
                  </span>
                </span>
              </address>
              <a
                href="tel:01298812776"
                className="mt-4 inline-flex items-center gap-[10px] text-[14px] text-[rgba(245,240,232,0.68)] no-underline transition-colors duration-150 hover:text-[var(--text-inverse)]"
              >
                <Phone size={13} className="text-[var(--gold)]" />
                01298 812776
              </a>
            </div>

            {/* Opening Hours */}
            <div>
              <p className="section-label section-label--dark mb-4">Opening Hours</p>
              <div className="grid gap-[9px] text-[13px]">
                {[
                  { day: 'Every day', hours: '10am – 8pm' },
                  { day: 'Breakfasts', hours: '10am – 12 noon' },
                  { day: 'Afternoon Tea', hours: '3pm – 6pm Mon–Fri' },
                ].map(({ day, hours }) => (
                  <div key={day} className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-x-4">
                    <span className="whitespace-nowrap text-[rgba(245,240,232,0.74)]">{day}</span>
                    <span className="whitespace-nowrap text-right text-[rgba(245,240,232,0.48)]">{hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Explore */}
            <div>
              <p className="section-label section-label--dark mb-4">Explore</p>
              <nav className="grid gap-[8px]" aria-label="Footer navigation">
                {exploreLinks.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="text-[14px] leading-[1.35] text-[rgba(245,240,232,0.56)] no-underline transition-colors duration-150 hover:text-[rgba(245,240,232,0.88)]"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Visit */}
            <div>
              <p className="section-label section-label--dark mb-4">Visit</p>
              <div className="grid gap-3 text-[14px] leading-[1.6] text-[rgba(245,240,232,0.58)]">
                <p>Dogs welcome — please call ahead to book a dog-friendly table.</p>
                <p>1 mile from Chapel-en-le-Frith, High Peak, Derbyshire station. Bus stop outside.</p>
              </div>
              <Link to="/book" className="btn btn-primary mt-5 w-full max-w-[210px] justify-center text-[10px] tracking-[0.18em]">
                Reserve Your Table
              </Link>
            </div>

          </div>
        </div>
      </div>

      {/* ── Bottom strip ───────────────────────────────── */}
      <div className="relative border-t border-[rgba(245,240,232,0.05)] bg-[#0c130d]">
        <div className="container flex flex-wrap items-center justify-between gap-3 py-4">
          <p className="text-[11px] text-[rgba(245,240,232,0.38)]">
            © 2008–{new Date().getFullYear()} The Hanging Gate Pub and Restaurant
          </p>
          <p className="text-[11px] text-[rgba(245,240,232,0.30)]">
            Chapel-en-le-Frith, High Peak, Derbyshire
          </p>
        </div>
      </div>
    </footer>
  )
}
