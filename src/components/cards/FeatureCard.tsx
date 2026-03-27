import clsx from 'clsx'

type FeatureCardProps = {
  number: string
  title: string
  body: string
  className?: string
}

export default function FeatureCard({ number, title, body, className }: FeatureCardProps) {
  return (
    <article
      className={clsx(
        'group relative overflow-hidden rounded-2xl border border-[var(--border-default)] bg-[var(--surface-card)] p-6 shadow-[var(--shadow-sm)]',
        className,
      )}
    >
      <span className="pointer-events-none absolute right-4 top-0 font-display text-[64px] leading-none text-[rgba(27,20,15,0.06)]">
        {number}
      </span>

      <span className="mb-4 block h-0 w-[2px] bg-[var(--gold)] transition-[height] duration-300 ease-[var(--ease-spring)] group-hover:h-9" />
      <h3 className="font-display text-[20px] font-semibold text-[var(--text-primary)]">{title}</h3>
      <p className="mt-3 text-[14px] leading-[1.7] text-[var(--text-secondary)]">{body}</p>
    </article>
  )
}
