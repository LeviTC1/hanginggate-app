import type { PropsWithChildren } from 'react'

type StepCardProps = PropsWithChildren<{
  title: string
  subtitle?: string
}>

export default function StepCard({ title, subtitle, children }: StepCardProps) {
  return (
    <section
      style={{
        background: 'linear-gradient(165deg, rgba(255,255,255,0.96), rgba(249,241,227,0.92))',
        border: '1px solid rgba(139,26,26,0.18)',
        borderRadius: '14px',
        padding: '24px',
        boxShadow: '0 16px 24px rgba(34,22,15,0.08)',
      }}
    >
      <header style={{ marginBottom: '16px' }}>
        <h2
          style={{
            color: '#7A1111',
            fontSize: 'clamp(24px, 4vw, 34px)',
            marginBottom: subtitle ? '6px' : 0,
          }}
        >
          {title}
        </h2>
        {subtitle && (
          <p style={{ color: '#6B5E52', fontSize: '14px', lineHeight: 1.6 }}>{subtitle}</p>
        )}
      </header>
      {children}
    </section>
  )
}
