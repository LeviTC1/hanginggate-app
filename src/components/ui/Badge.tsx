import type { ReactNode } from 'react'

type BadgeVariant = 'price' | 'category' | 'urgency'

type BadgeProps = {
  children: ReactNode
  variant?: BadgeVariant
  className?: string
}

const VARIANT_CLASS: Record<BadgeVariant, string> = {
  price: 'inline-flex items-center rounded-[var(--radius-sm)] border border-[var(--border-gold)] bg-black/50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--gold)] backdrop-blur-sm',
  category: 'inline-flex items-center text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--gold)]',
  urgency: 'inline-flex items-center rounded-[var(--radius-sm)] border border-[var(--border-gold)] bg-[rgba(212,168,50,0.12)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--gold)]',
}

function cx(...parts: Array<string | undefined | false>) {
  return parts.filter(Boolean).join(' ')
}

export default function Badge({ children, variant = 'price', className }: BadgeProps) {
  return <span className={cx(VARIANT_CLASS[variant], className)}>{children}</span>
}
