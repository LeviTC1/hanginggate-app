import clsx from 'clsx'
import { CalendarHeart, PartyPopper, Truck, UtensilsCrossed, type LucideIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionWrapper from '../ui/SectionWrapper'
import RevealWrapper from '../ui/RevealWrapper'

type QuickLink = {
  title: string
  subtitle: string
  to: string
  icon: LucideIcon
}

const links: QuickLink[] = [
  {
    title: 'Explore Menus',
    subtitle: 'From a proper Full English to an evening meal worth the drive',
    to: '/menus',
    icon: UtensilsCrossed,
  },
  {
    title: 'Reserve Your Table',
    subtitle: 'Book ahead — especially at Christmas and Halloween',
    to: '/book',
    icon: CalendarHeart,
  },
  {
    title: 'Plan a Celebration',
    subtitle: 'Function rooms for birthdays, christenings, weddings and more',
    to: '/facilities',
    icon: PartyPopper,
  },
  {
    title: 'Outside Catering',
    subtitle: 'Free delivery across Derbyshire & Cheshire from £7 per head',
    to: '/outside-catering',
    icon: Truck,
  },
]

type QuickLinksProps = {
  className?: string
}

export default function QuickLinks({ className }: QuickLinksProps) {
  return (
    <SectionWrapper variant="warm" py="md" className={className}>
      <RevealWrapper className="text-center">
        <p className="section-label">Plan your visit</p>
        <h2 className="mt-3 font-display text-[var(--text-2xl)] text-[var(--text-primary)]">Everything You Need, Up Front</h2>
      </RevealWrapper>

      <RevealWrapper variant="stagger" className="mt-7 grid gap-4 md:grid-cols-2">
        {links.map(({ title, subtitle, to, icon: Icon }) => (
          <Link
            key={to}
            to={to}
            className={clsx(
              'group relative overflow-hidden rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--surface-card)] p-6 no-underline shadow-[var(--shadow-sm)] transition-all duration-200 ease-[var(--ease-standard)] hover:-translate-y-[2px] hover:shadow-[var(--shadow-md)] hover:border-[rgba(200,144,26,0.22)]',
            )}
          >
            <span className="absolute inset-x-0 top-0 h-[2px] w-[40px] bg-[var(--gold)] transition-[width] duration-300 group-hover:w-[64px]" />
            <Icon className="h-5 w-5 text-[var(--gold)]" />
            <h3 className="mt-4 font-display text-[22px] text-[var(--text-primary)]">{title}</h3>
            <p className="mt-2 text-[13px] leading-[1.7] text-[var(--text-secondary)]">{subtitle}</p>
            <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--gold)] transition-colors duration-200 group-hover:text-[var(--gold-light)]">
              Explore →
            </p>
          </Link>
        ))}
      </RevealWrapper>
    </SectionWrapper>
  )
}
