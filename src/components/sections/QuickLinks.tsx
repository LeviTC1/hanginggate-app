import clsx from 'clsx'
import { CalendarDays, ChefHat, PartyPopper, Truck } from 'lucide-react'
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
    subtitle: 'Breakfast to evening dining, all day from 10am',
    to: '/menus',
    icon: ChefHat,
  },
  {
    title: 'Reserve Your Table',
    subtitle: 'Live availability and instant confirmation online',
    to: '/book',
    icon: CalendarDays,
  },
  {
    title: 'Plan a Celebration',
    subtitle: 'Function rooms for birthdays, weddings, and more',
    to: '/facilities',
    icon: PartyPopper,
  },
  {
    title: 'Outside Catering',
    subtitle: 'Delivered across Derbyshire and Cheshire',
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

      <RevealWrapper variant="stagger" className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {links.map(({ title, subtitle, to, icon: Icon }) => (
          <Link
            key={to}
            to={to}
            className={clsx(
              'group rounded-2xl border border-[rgba(27,20,15,0.1)] bg-[rgba(255,255,255,0.75)] p-5 no-underline shadow-[var(--shadow-sm)] transition-all duration-300 ease-[var(--ease-spring)] hover:-translate-y-1 hover:border-[rgba(212,168,50,0.34)] hover:shadow-[var(--shadow-md)]',
            )}
          >
            <Icon className="h-5 w-5 text-[var(--wine)]" />
            <h3 className="mt-4 font-display text-[22px] text-[var(--text-primary)]">{title}</h3>
            <p className="mt-2 text-[13px] leading-[1.7] text-[var(--text-secondary)]">{subtitle}</p>
          </Link>
        ))}
      </RevealWrapper>
    </SectionWrapper>
  )
}
