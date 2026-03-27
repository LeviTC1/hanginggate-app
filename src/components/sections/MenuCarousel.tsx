import { useCallback, useEffect, useMemo, useState } from 'react'
import clsx from 'clsx'
import { useNavigate } from 'react-router-dom'

type ViewportMode = 'desktop' | 'tablet' | 'mobile'

export type MenuCarouselItem = {
  to: string
  image: string
  title: string
  description: string
  category: string
  price?: string
}

type MenuCarouselProps = {
  items: MenuCarouselItem[]
}

function wrapIndex(index: number, length: number) {
  return (index + length) % length
}

function getViewportMode(): ViewportMode {
  if (window.innerWidth < 768) {
    return 'mobile'
  }

  if (window.innerWidth < 1100) {
    return 'tablet'
  }

  return 'desktop'
}

function offsetClass(offset: -2 | -1 | 0 | 1 | 2) {
  if (offset === 0) return 'is-active'
  if (offset === -1) return 'is-left-one'
  if (offset === 1) return 'is-right-one'
  if (offset === -2) return 'is-left-two'
  return 'is-right-two'
}

function offsetsForMode(mode: ViewportMode): Array<-2 | -1 | 0 | 1 | 2> {
  if (mode === 'desktop') {
    return [-2, -1, 0, 1, 2]
  }

  return [-1, 0, 1]
}

export default function MenuCarousel({ items }: MenuCarouselProps) {
  if (items.length === 0) {
    return null
  }

  const navigate = useNavigate()
  const [activeIndex, setActiveIndex] = useState(0)
  const [viewportMode, setViewportMode] = useState<ViewportMode>(() =>
    typeof window === 'undefined' ? 'desktop' : getViewportMode(),
  )
  const [pointerStartX, setPointerStartX] = useState<number | null>(null)
  const [isHovered, setIsHovered] = useState(false)

  const goPrevious = useCallback(() => {
    setActiveIndex((previous) => wrapIndex(previous - 1, items.length))
  }, [items.length])

  const goNext = useCallback(() => {
    setActiveIndex((previous) => wrapIndex(previous + 1, items.length))
  }, [items.length])

  useEffect(() => {
    const onResize = () => {
      setViewportMode(getViewportMode())
    }

    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    if (items.length <= 1 || isHovered) {
      return undefined
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return undefined
    }

    const timer = window.setInterval(goNext, 5400)
    return () => window.clearInterval(timer)
  }, [goNext, isHovered, items.length])

  const visibleOffsets = useMemo(() => offsetsForMode(viewportMode), [viewportMode])

  const visibleTiles = useMemo(
    () =>
      visibleOffsets.map((offset) => ({
        offset,
        index: wrapIndex(activeIndex + offset, items.length),
      })),
    [activeIndex, items.length, visibleOffsets],
  )

  return (
    <section
      className="hg-menu-carousel"
      aria-label="Menu carousel"
      aria-roledescription="carousel"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === 'ArrowLeft') {
          event.preventDefault()
          goPrevious()
        }

        if (event.key === 'ArrowRight') {
          event.preventDefault()
          goNext()
        }

        if (event.key === 'Enter') {
          event.preventDefault()
          navigate(items[activeIndex].to)
        }
      }}
    >
      <div
        className={clsx('hg-menu-carousel__stage', `is-${viewportMode}`)}
        onPointerDown={(event) => setPointerStartX(event.clientX)}
        onPointerUp={(event) => {
          if (pointerStartX === null) return
          const delta = event.clientX - pointerStartX
          if (Math.abs(delta) > 40) {
            if (delta > 0) {
              goPrevious()
            } else {
              goNext()
            }
          }
          setPointerStartX(null)
        }}
        onPointerCancel={() => setPointerStartX(null)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="hg-menu-carousel__track">
          {visibleTiles.map(({ offset, index }) => {
            const item = items[index]
            const active = offset === 0

            return (
              <button
                key={`${item.to}-${item.title}`}
                type="button"
                className={clsx('hg-menu-carousel__tile', offsetClass(offset))}
                onClick={() => {
                  if (active) {
                    navigate(item.to)
                    return
                  }
                  setActiveIndex(index)
                }}
                aria-label={active ? `Open ${item.title}` : `Show ${item.title}`}
              >
                <span className="hg-menu-carousel__tile-inner">
                  <img src={item.image} alt={item.title} loading="lazy" />
                  <span className="hg-menu-carousel__tile-overlay" />
                  <span className="hg-menu-carousel__tile-gloss" />

                  {item.price ? <span className="hg-menu-carousel__price">{item.price}</span> : null}

                  <span className="hg-menu-carousel__content">
                    <span className="hg-menu-carousel__category">{item.category}</span>
                    <span className="hg-menu-carousel__title">{item.title}</span>
                    <span className="hg-menu-carousel__description">{item.description}</span>
                  </span>
                </span>
              </button>
            )
          })}
        </div>
      </div>

      <div className="hg-menu-carousel__controls">
        <button type="button" className="hg-menu-carousel__arrow" onClick={goPrevious} aria-label="Previous menu">
          Prev
        </button>
        <button type="button" className="hg-menu-carousel__arrow" onClick={goNext} aria-label="Next menu">
          Next
        </button>
      </div>

      <div className="hg-menu-carousel__dots" role="tablist" aria-label="Menu carousel navigation">
        {items.map((item, index) => (
          <button
            key={item.to}
            type="button"
            role="tab"
            aria-selected={activeIndex === index}
            aria-label={`Go to ${item.title}`}
            className={clsx('hg-menu-carousel__dot', activeIndex === index && 'is-active')}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </section>
  )
}
