import clsx from 'clsx'
import { MapPin, Star, Utensils } from 'lucide-react'

type TrustBarProps = {
  className?: string
}

export default function TrustBar({ className }: TrustBarProps) {
  return (
    <section className={clsx('border-y border-[rgba(200,144,26,0.2)] bg-[var(--surface-dark-2)] py-4 text-[var(--text-inverse)]', className)}>
      <div className="container">
        <div className="flex flex-wrap items-center justify-center gap-4 text-center text-[13px] font-medium tracking-[0.02em] text-[var(--text-inverse-muted)]">
          <span className="inline-flex items-center gap-2 text-[var(--gold)]">
            <span className="flex items-center gap-[2px]" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} size={14} fill="currentColor" strokeWidth={1.5} />
              ))}
            </span>
            Rated 4.4 on Google
          </span>
          <span className="inline-flex items-center gap-2">
            <Utensils size={14} className="text-[var(--gold)]" />
            200+ reviews
          </span>
          <span className="inline-flex items-center gap-2">
            <MapPin size={14} className="text-[var(--gold)]" />
            Chapel-en-le-Frith, High Peak, Derbyshire
          </span>
        </div>
      </div>
    </section>
  )
}
