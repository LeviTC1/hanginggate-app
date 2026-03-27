import clsx from 'clsx'

type ReviewCardProps = {
  quote: string
  name: string
  stars?: number
  className?: string
}

function Stars({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-[2px]" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <svg
          key={index}
          viewBox="0 0 24 24"
          className={clsx('h-4 w-4', index < count ? 'text-[var(--gold)]' : 'text-[rgba(27,20,15,0.2)]')}
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12 2.5l2.87 5.82 6.43.93-4.65 4.53 1.1 6.4L12 17.16l-5.75 3.02 1.1-6.4L2.7 9.25l6.43-.93L12 2.5z" />
        </svg>
      ))}
    </div>
  )
}

export default function ReviewCard({ quote, name, stars = 5, className }: ReviewCardProps) {
  return (
    <article
      className={clsx(
        'group relative overflow-hidden rounded-2xl border border-[var(--border-default)] bg-[var(--surface-card)] p-6 shadow-[var(--shadow-sm)] transition-all duration-300 ease-[var(--ease-spring)] hover:-translate-y-1 hover:shadow-[var(--shadow-md)]',
        className,
      )}
    >
      <div className="absolute inset-0 opacity-40">
        <div className="grain-overlay opacity-50" />
      </div>

      <span className="pointer-events-none absolute left-4 top-0 font-display text-[96px] leading-none text-[rgba(212,168,50,0.2)]">“</span>

      <div className="relative z-10 flex h-full flex-col">
        <Stars count={stars} />
        <p className="mt-4 flex-1 font-display text-[16px] italic leading-[1.75] text-[var(--ink-700)]">
          {quote}
        </p>

        <div className="mt-5 flex items-end justify-between gap-4 border-t border-[var(--border-default)] pt-4">
          <p className="text-[13px] font-semibold uppercase tracking-[0.1em] text-[var(--text-primary)]">{name}</p>
          <p className="flex items-center gap-1 text-[12px] text-[var(--text-secondary)]">
            <span className="text-[var(--gold)]">G</span>
            Google Review
          </p>
        </div>
      </div>
    </article>
  )
}
