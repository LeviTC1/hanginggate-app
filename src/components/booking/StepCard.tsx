import type { PropsWithChildren } from 'react'

type StepCardProps = PropsWithChildren<{
  title: string
  subtitle?: string
}>

export default function StepCard({ title, subtitle, children }: StepCardProps) {
  return (
    <section
      style={{
        background: 'linear-gradient(165deg, rgba(22,38,26,0.96), rgba(19,33,23,0.94))',
        border: '1px solid var(--border-default)',
        borderRadius: '14px',
        padding: '24px',
        boxShadow: '0 16px 24px rgba(4,8,5,0.28)',
      }}
    >
      <header style={{ marginBottom: '16px' }}>
        <h2
          style={{
            color: 'var(--gold)',
            fontSize: 'clamp(24px, 4vw, 34px)',
            marginBottom: subtitle ? '6px' : 0,
          }}
        >
          {title}
        </h2>
        {subtitle && (
          <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 1.6 }}>{subtitle}</p>
        )}
      </header>
      {children}
    </section>
  )
}
