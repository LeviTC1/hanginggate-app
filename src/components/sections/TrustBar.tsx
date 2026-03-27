import clsx from 'clsx'
import { MapPin, Star, Utensils } from 'lucide-react'

type TrustBarProps = {
  className?: string
}

export default function TrustBar({ className }: TrustBarProps) {
  return (
    <section className={clsx('border-y border-[rgba(212,168,50,0.2)] bg-[#130b07] py-4 text-white', className)}>
      <div className="container">
        <div className="flex flex-wrap items-center justify-center gap-4 text-center text-[13px] font-medium tracking-[0.02em] text-[rgba(255,255,255,0.8)]">
          <span className="inline-flex items-center gap-2 text-[var(--gold)]">
            <span className="flex items-center gap-[2px]" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} size={14} fill="currentColor" strokeWidth={1.5} />
              ))}
            </span>
            Rated 4.8 on Google
          </span>
          <span className="inline-flex items-center gap-2">
            <Utensils size={14} className="text-[var(--gold)]" />
            200+ reviews
          </span>
          <span className="inline-flex items-center gap-2">
            <MapPin size={14} className="text-[var(--gold)]" />
            Whittle-le-Woods
          </span>
        </div>
      </div>
    </section>
  )
}
