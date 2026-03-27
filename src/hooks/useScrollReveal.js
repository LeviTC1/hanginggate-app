import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const STAGGER_GROUP_SELECTOR = '[data-stagger-group]'
const REVEAL_SELECTOR = '.fade-up'

export default function useScrollReveal() {
  const location = useLocation()

  useEffect(() => {
    const staggerGroups = document.querySelectorAll(STAGGER_GROUP_SELECTOR)
    staggerGroups.forEach((group) => {
      const revealItems = group.querySelectorAll(REVEAL_SELECTOR)
      revealItems.forEach((item, index) => {
        if (!item.style.getPropertyValue('--reveal-delay')) {
          item.style.setProperty('--reveal-delay', `${Math.min(index, 10) * 80}ms`)
        }
      })
    })

    const revealElements = document.querySelectorAll(REVEAL_SELECTOR)
    if (!revealElements.length) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -8% 0px',
      },
    )

    revealElements.forEach((element) => observer.observe(element))

    return () => {
      observer.disconnect()
    }
  }, [location.pathname])
}
