import { useEffect, useState } from 'react'

type UseNavScrollOptions = {
  threshold?: number
}

export default function useNavScroll({ threshold = 60 }: UseNavScrollOptions = {}) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let rafId: number | null = null

    const update = () => {
      const current = Math.min(1, window.scrollY / threshold)
      setProgress((previous) => (Math.abs(previous - current) > 0.01 ? current : previous))
      rafId = null
    }

    const onScroll = () => {
      if (rafId == null) {
        rafId = window.requestAnimationFrame(update)
      }
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      if (rafId != null) {
        window.cancelAnimationFrame(rafId)
      }
      window.removeEventListener('scroll', onScroll)
    }
  }, [threshold])

  return {
    progress,
    scrolled: progress >= 1,
  }
}
