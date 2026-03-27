import {
  Children,
  cloneElement,
  isValidElement,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from 'react'
import useReveal, { type RevealVariant } from '../../hooks/useReveal'

type RevealWrapperProps = {
  as?: ElementType
  className?: string
  children: ReactNode
  variant?: RevealVariant
}

function cx(...parts: Array<string | undefined | false>) {
  return parts.filter(Boolean).join(' ')
}

export default function RevealWrapper({
  as,
  className,
  children,
  variant = 'fade-up',
}: RevealWrapperProps) {
  const Component = as ?? 'div'
  const { ref, className: revealClass, visible } = useReveal({ variant })

  if (variant === 'stagger') {
    const staggeredChildren = Children.map(children, (child, index) => {
      if (!isValidElement(child)) {
        return child
      }

      const existingStyle = (child.props.style ?? {}) as CSSProperties
      const existingClassName = child.props.className as string | undefined

      return cloneElement(child, {
        'data-reveal-item': true,
        className: cx('reveal', 'reveal-fade-up', visible ? 'reveal-visible' : '', existingClassName),
        style: {
          ...existingStyle,
          '--reveal-delay': `${Math.min(index, 12) * 60}ms`,
        } as CSSProperties,
      })
    })

    return (
      <Component ref={ref} className={className}>
        {staggeredChildren}
      </Component>
    )
  }

  return (
    <Component ref={ref} className={cx(revealClass, className)}>
      {children}
    </Component>
  )
}
