import clsx from 'clsx'
import { CalendarHeart, PartyPopper, Truck, UtensilsCrossed } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionWrapper from '../ui/SectionWrapper'
import RevealWrapper from '../ui/RevealWrapper'

type QuickLink = {
  title: string
  subtitle: string
  to: string
  icon: typeof ChefHat
}

const links: QuickLink[] = [
  {
    title: 'Explore the Menus',
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
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--gold-muted)]">Plan your visit</p>
        <h2 className="mt-3 font-display text-[var(--text-2xl)] text-[var(--text-primary)]">Everything You Need, Up Front</h2>
      </RevealWrapper>

      <RevealWrapper variant="stagger" className="mt-10 grid gap-4 md:grid-cols-2">
        {links.map(({ title, subtitle, to, icon: Icon }) => (
          <Link
            key={to}
            to={to}
            className={clsx(
              'group rounded-2xl border border-l-[3px] border-[rgba(27,20,15,0.12)] border-l-[#c8860a] bg-[#faf7f2] p-5 no-underline shadow-[0_2px_10px_rgba(27,20,15,0.05)] transition-all duration-300 ease-[var(--ease-spring)] hover:-translate-y-1 hover:border-l-[#e8c96b] hover:shadow-[0_8px_24px_rgba(200,134,10,0.12)]',
            )}
          >
            <Icon className="h-5 w-5 text-[#3d2b0e]" />
            <h3 className="mt-4 font-display text-[22px] text-[var(--text-primary)]">{title}</h3>
            <p className="mt-2 text-[13px] leading-[1.7] text-[var(--text-secondary)]">{subtitle}</p>
          </Link>
        ))}
      </RevealWrapper>
    </SectionWrapper>
  )
}
