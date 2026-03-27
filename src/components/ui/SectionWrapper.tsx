import type { ElementType, ReactNode } from 'react'
import RevealWrapper from './RevealWrapper'

type SectionVariant = 'light' | 'warm' | 'dark' | 'ink'
type SectionPadding = 'sm' | 'md' | 'lg' | 'xl'

type SectionWrapperProps = {
  as?: ElementType
  variant?: SectionVariant
  py?: SectionPadding
  container?: boolean
  reveal?: boolean
  className?: string
  children: ReactNode
}

const VARIANT_CLASS: Record<SectionVariant, string> = {
  light: 'bg-[var(--surface-card)]',
  warm: 'bg-[var(--surface-warm)]',
  dark: 'bg-gradient-to-b from-[#1a0e08] to-[#0e0804] text-[var(--text-inverse)]',
  ink: 'bg-[#0a0604] text-[var(--text-inverse)]',
}

const PADDING_CLASS: Record<SectionPadding, string> = {
  sm: 'py-12 md:py-16',
  md: 'py-16 md:py-24',
  lg: 'py-24 md:py-32',
  xl: 'py-32 md:py-44',
}

function cx(...parts: Array<string | undefined | false>) {
  return parts.filter(Boolean).join(' ')
}

export default function SectionWrapper({
  as,
  variant = 'light',
  py = 'md',
  container = true,
  reveal = false,
  className,
  children,
}: SectionWrapperProps) {
  const Component = as ?? 'section'

  const content = container ? <div className="container">{children}</div> : children

  return (
    <Component className={cx('relative', VARIANT_CLASS[variant], PADDING_CLASS[py], className)}>
      {reveal ? <RevealWrapper>{content}</RevealWrapper> : content}
    </Component>
  )
}
