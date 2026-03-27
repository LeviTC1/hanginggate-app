import clsx from 'clsx'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

type EventCardProps = {
  title: string
  date: string
  description: string
  to: string
  className?: string
}

export default function EventCard({ title, date, description, to, className }: EventCardProps) {
  return (
    <article
      className={clsx(
        'rounded-2xl border border-[rgba(255,255,255,0.14)] bg-[rgba(255,255,255,0.04)] p-6 shadow-[var(--shadow-sm)] backdrop-blur-sm',
        className,
      )}
    >
      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--gold)]">{date}</p>
      <h3 className="mt-3 font-display text-[26px] font-semibold text-white">{title}</h3>
      <p className="mt-3 text-[14px] leading-[1.7] text-[rgba(255,255,255,0.72)]">{description}</p>
      <Link
        to={to}
        className="mt-5 inline-flex items-center gap-1 text-[13px] font-semibold uppercase tracking-[0.1em] text-[var(--gold)] transition-opacity duration-200 hover:opacity-85"
      >
        Learn More
        <ArrowUpRight size={14} />
      </Link>
    </article>
  )
}
