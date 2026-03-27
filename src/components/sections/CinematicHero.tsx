import { useEffect, useMemo, useRef, useState, type PointerEventHandler } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import clsx from 'clsx'
import { ChevronDown } from 'lucide-react'
import { Link } from 'react-router-dom'

type Slide = {
  image: string
  alt: string
  eyebrow: string
  title: string
  subtitle: string
}

const AUTOPLAY_MS = 7000

const slides: Slide[] = [
  {
    image: '/images/pub-exterior.jpg',
    alt: 'The Hanging Gate pub exterior at dusk',
    eyebrow: 'Whittle-le-Woods, Lancashire',
    title: 'The Hanging Gate',
    subtitle: 'Warm light, honest food, and a setting made for evenings that linger.',
  },
  {
    image: '/images/christmas-restaurant.jpg',
    alt: 'Restaurant dining room at The Hanging Gate',
    eyebrow: 'Dining Rooms & Gatherings',
    title: 'Reserve Tonight',
    subtitle: 'From celebratory dinners to quiet catch-ups, every table feels considered.',
  },
  {
    image: '/images/christmas-lounge.jpg',
    alt: 'Cosy lounge with festive decor',
    eyebrow: 'Candlelit Atmosphere',
    title: 'Settle In',
    subtitle: 'Crafted menus, attentive service, and a pub atmosphere with character.',
  },
  {
    image: '/images/christmas-bar.jpg',
    alt: 'The Hanging Gate bar area',
    eyebrow: 'Seasonal Drinks',
    title: 'Raise A Glass',
    subtitle: 'Fine ales, balanced wines, and conversation that lasts well past dessert.',
  },
  {
    image: '/images/afternoon-tea.jpg',
    alt: 'Afternoon tea service',
    eyebrow: 'Every Day From 10am',
    title: 'Plan Your Visit',
    subtitle: 'Breakfast, lunch, afternoon tea, and evening dining under one roof.',
  },
]

const contentVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
}

export default function CinematicHero() {
  const [current, setCurrent] = useState(0)
  const [progress, setProgress] = useState(0)
  const pointerStart = useRef<number | null>(null)

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, AUTOPLAY_MS)

    let rafId = 0
    let startAt = performance.now()

    const animate = (timestamp: number) => {
      const elapsed = timestamp - startAt
      setProgress(Math.min(1, elapsed / AUTOPLAY_MS))

      if (elapsed < AUTOPLAY_MS) {
        rafId = window.requestAnimationFrame(animate)
      }
    }

    setProgress(0)
    rafId = window.requestAnimationFrame(animate)

    return () => {
      window.clearTimeout(timeout)
      window.cancelAnimationFrame(rafId)
      startAt = 0
    }
  }, [current])

  const slide = useMemo(() => slides[current], [current])

  const goTo = (index: number) => {
    setCurrent(index)
  }

  const handlePointerDown: PointerEventHandler<HTMLDivElement> = (event) => {
    pointerStart.current = event.clientX
  }

  const handlePointerUp: PointerEventHandler<HTMLDivElement> = (event) => {
    if (pointerStart.current == null) {
      return
    }

    const delta = event.clientX - pointerStart.current
    pointerStart.current = null

    if (Math.abs(delta) < 40) {
      return
    }

    if (delta < 0) {
      setCurrent((prev) => (prev + 1) % slides.length)
    } else {
      setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
    }
  }

  return (
    <section
      aria-label="The Hanging Gate cinematic hero"
      className="relative flex min-h-[100svh] items-end overflow-hidden pt-[78px] touch-pan-y"
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
    >
      {slides.map((item, index) => (
        <div
          key={item.image}
          className={clsx(
            'absolute inset-0 transition-opacity duration-[800ms] ease-[var(--ease-standard)]',
            index === current ? 'opacity-100' : 'opacity-0',
          )}
        >
          <div
            role="img"
            aria-label={item.alt}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${item.image})`,
              animation: 'heroKenBurns 20s linear infinite alternate',
            }}
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(12,7,4,0.92)_0%,transparent_40%),linear-gradient(to_bottom,rgba(12,7,4,0.55)_0%,transparent_30%),linear-gradient(135deg,rgba(123,19,19,0.18)_0%,transparent_60%)]" />
      <div className="grain-overlay" />

      <div className="relative z-10 w-full px-[5vw] pb-[8vh]">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${slide.image}-${current}`}
            variants={contentVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-[760px]"
          >
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.06 }}
              className="text-[11px] font-medium uppercase tracking-[0.22em] text-[var(--gold)]"
            >
              {slide.eyebrow}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.12 }}
              className="mt-4 font-display text-[var(--text-hero)] font-bold leading-[1] tracking-[-0.02em] text-white"
            >
              {slide.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 0.72, y: 0 }}
              transition={{ duration: 0.45, delay: 0.18 }}
              className="mt-4 max-w-[480px] text-[16px] font-light leading-[1.7] text-white"
            >
              {slide.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.24 }}
              className="mt-8 flex flex-wrap gap-4 max-[768px]:flex-col max-[768px]:items-start"
            >
              <Link to="/book" className="btn btn-primary">
                Reserve Your Table
              </Link>
              <Link to="/menus" className="btn btn-ghost-light">
                Explore The Menus
              </Link>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute bottom-10 right-[5vw] z-20 flex gap-2 max-[768px]:bottom-8">
        {slides.map((item, index) => (
          <button
            key={item.image}
            type="button"
            onClick={() => goTo(index)}
            aria-label={`Go to slide ${index + 1}`}
            className="relative h-[2px] w-10 overflow-hidden rounded-full bg-[rgba(255,255,255,0.4)]"
          >
            <span
              className={clsx(
                'absolute inset-y-0 left-0 bg-[var(--gold)] transition-[width] duration-150 ease-linear',
                index === current ? 'opacity-100' : 'opacity-0',
              )}
              style={{ width: `${index === current ? progress * 100 : 0}%` }}
            />
          </button>
        ))}
      </div>

      <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 text-white/80 max-[768px]:bottom-6">
        <ChevronDown className="h-5 w-5 animate-[softPulse_2.2s_ease-in-out_infinite]" aria-hidden="true" />
      </div>
    </section>
  )
}
