import type { ButtonHTMLAttributes, ElementType, ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'ghost-light' | 'wine'

type ButtonProps = {
  as?: ElementType
  className?: string
  variant?: ButtonVariant
  children: ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>

const VARIANT_CLASS: Record<ButtonVariant, string> = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  'ghost-light': 'btn-ghost-light',
  wine: 'btn-wine',
}

function cx(...parts: Array<string | undefined | false>) {
  return parts.filter(Boolean).join(' ')
}

export default function Button({
  as,
  className,
  variant = 'primary',
  children,
  type,
  ...props
}: ButtonProps) {
  const Component = as ?? 'button'

  return (
    <Component
      className={cx('btn', VARIANT_CLASS[variant], className)}
      type={Component === 'button' ? type ?? 'button' : undefined}
      {...props}
    >
      {children}
    </Component>
  )
}
