import { ExternalLink, MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'

const exploreLinks = [
  { label: 'Welcome', to: '/' },
  { label: 'History', to: '/history' },
  { label: 'Facilities', to: '/facilities' },
  { label: 'Menus', to: '/menus' },
  { label: 'Events', to: '/events' },
  { label: 'Christmas', to: '/christmas' },
  { label: 'Outside Catering', to: '/outside-catering' },
  { label: 'Get in Touch', to: '/contact' },
]

export default function SiteFooter() {
  return (
    <footer className="site-footer relative overflow-hidden text-[rgba(255,255,255,0.84)]">
      <div className="grain-overlay" />
      <div className="relative container py-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-4">
          <div>
            <h3 className="font-display text-3xl text-white">The Hanging Gate</h3>
            <div className="mt-4 h-px w-10 bg-[var(--gold)]" />
            <p className="mt-5 max-w-[28ch] text-[14px] leading-7 text-[rgba(255,255,255,0.65)]">
              A family run pub and restaurant in the heart of the High Peak. Warm welcomes, craft menus, and memorable occasions.
            </p>
            <Link to="/book" className="btn btn-primary mt-6 px-7 text-[12px]">
              Reserve Your Table
            </Link>
          </div>

          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[rgba(212,168,50,0.5)]">Find us</p>
            <address className="mt-5 not-italic text-[14px] leading-7 text-[rgba(255,255,255,0.72)]">
              <span className="flex items-start gap-2">
                <MapPin size={16} className="mt-[5px] shrink-0 text-[var(--gold)]" />
                <span>
                  Manchester Road
                  <br />
                  Chapel-en-le-Frith
                  <br />
                  SK23 9UH
                </span>
              </span>
            </address>
            <a
              href="tel:01298812776"
              className="mt-5 inline-flex items-center gap-2 text-[14px] text-[rgba(255,255,255,0.74)] hover:text-[rgba(255,255,255,0.92)]"
            >
              <Phone size={15} className="text-[var(--gold)]" />
              01298 812776
            </a>
          </div>

          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[rgba(212,168,50,0.5)]">Opening hours</p>
            <div className="mt-5 grid gap-3 text-[14px]">
              <div className="flex items-center justify-between gap-6 text-[rgba(255,255,255,0.78)]">
                <span>Every day</span>
                <span className="text-[rgba(255,255,255,0.56)]">10am - 8pm</span>
              </div>
              <div className="flex items-center justify-between gap-6 text-[rgba(255,255,255,0.78)]">
                <span>Breakfasts</span>
                <span className="text-[rgba(255,255,255,0.56)]">10am - 12 noon</span>
              </div>
              <div className="flex items-center justify-between gap-6 text-[rgba(255,255,255,0.78)]">
                <span>Afternoon Tea</span>
                <span className="text-[rgba(255,255,255,0.56)]">3pm - 6pm Mon-Fri</span>
              </div>
            </div>
          </div>

          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[rgba(212,168,50,0.5)]">Explore</p>
            <nav className="mt-5 grid gap-2" aria-label="Footer navigation">
              {exploreLinks.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="text-[14px] text-[rgba(255,255,255,0.55)] no-underline transition-opacity duration-150 hover:text-[rgba(255,255,255,0.9)]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-[rgba(255,255,255,0.06)] pt-6">
          <p className="text-[12px] text-[rgba(255,255,255,0.52)]">© 2008-2026 The Hanging Gate Pub and Restaurant</p>
          <div className="flex items-center gap-4 text-[13px] text-[rgba(255,255,255,0.58)]">
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-[rgba(255,255,255,0.9)]">
              Facebook
              <ExternalLink size={13} />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-[rgba(255,255,255,0.9)]">
              Instagram
              <ExternalLink size={13} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
