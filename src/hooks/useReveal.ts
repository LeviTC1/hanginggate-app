import { useEffect, useMemo, useRef, useState } from 'react'

export type RevealVariant = 'fade-up' | 'fade-in' | 'slide-right' | 'scale-in' | 'stagger'

type UseRevealOptions = {
  variant?: RevealVariant
  threshold?: number
  rootMargin?: string
  once?: boolean
}

export default function useReveal({
  variant = 'fade-up',
  threshold = 0.15,
  rootMargin = '0px 0px -8% 0px',
  once = true,
}: UseRevealOptions = {}) {
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) {
      return undefined
    }

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) {
      setVisible(true)
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)

            if (variant === 'stagger') {
              const targets = node.querySelectorAll<HTMLElement>('[data-reveal-item]')
              targets.forEach((child, index) => {
                child.style.setProperty('--reveal-delay', `${Math.min(index, 12) * 60}ms`)
              })
            }

            if (once) {
              observer.unobserve(entry.target)
            }
          } else if (!once) {
            setVisible(false)
          }
        })
      },
      {
        threshold,
        rootMargin,
      },
    )

    observer.observe(node)

    return () => {
      observer.disconnect()
    }
  }, [once, rootMargin, threshold, variant])

  const appliedVariant = variant === 'stagger' ? 'fade-up' : variant
  const className = useMemo(
    () => [
      'reveal',
      `reveal-${appliedVariant}`,
      visible ? 'reveal-visible' : '',
    ].filter(Boolean).join(' '),
    [appliedVariant, visible],
  )

  return {
    ref,
    visible,
    className,
  }
}
