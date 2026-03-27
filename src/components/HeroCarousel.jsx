import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'

const slides = [
  {
    src: '/images/pub-exterior.jpg',
    alt: 'The Hanging Gate pub exterior, Chapel-en-le-Frith',
    caption: 'A landmark in the High Peak since 1901',
  },
  {
    src: '/images/christmas-restaurant.jpg',
    alt: 'The upstairs restaurant at The Hanging Gate',
    caption: 'Dining for every occasion',
  },
  {
    src: '/images/christmas-lounge.jpg',
    alt: 'The cosy lounge at The Hanging Gate',
    caption: 'Warm, welcoming & family friendly',
  },
  {
    src: '/images/christmas-bar.jpg',
    alt: 'The bar at The Hanging Gate',
    caption: 'Fine ales, wines & spirits',
  },
  {
    src: '/images/afternoon-tea.jpg',
    alt: 'Afternoon tea at The Hanging Gate',
    caption: 'Breakfast, lunch, afternoon tea & evening meals',
  },
]

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0)
  const [transitioning, setTransitioning] = useState(false)

  const goTo = useCallback((idx) => {
    if (transitioning) return
    setTransitioning(true)
    setTimeout(() => {
      setCurrent(idx)
      setTransitioning(false)
    }, 420)
  }, [transitioning])

  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo])
  const prev = useCallback(() => goTo((current - 1 + slides.length) % slides.length), [current, goTo])

  useEffect(() => {
    const id = setInterval(next, 5000)
    return () => clearInterval(id)
  }, [next])

  const slide = slides[current]

  return (
    <section className="hero-section" aria-label="The Hanging Gate intro hero">
      {slides.map((s, i) => (
        <img
          key={s.src}
          src={s.src}
          alt={s.alt}
          className="hero-image"
          style={{
            opacity: i === current ? (transitioning ? 0 : 1) : 0,
            transition: 'opacity 0.9s ease',
            zIndex: i === current ? 1 : 0,
          }}
        />
      ))}

      <div className="hero-overlay" />

      <div className="hero-content">
        <p className="hero-reveal" style={{ color: '#E2C97E', fontSize: '13px', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '20px', fontWeight: 500, ['--hero-delay']: '80ms' }}>
          Chapel-en-le-Frith · High Peak · Derbyshire
        </p>
        <h1 className="hero-reveal" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(36px, 7vw, 72px)', color: '#FAF7F2', lineHeight: 1.1, marginBottom: '16px', fontWeight: 700, ['--hero-delay']: '160ms' }}>
          The Hanging Gate
        </h1>
        <p className="hero-reveal" style={{ color: '#E2C97E', fontSize: '18px', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '24px', ['--hero-delay']: '220ms' }}>
          Pub & Restaurant
        </p>
        <p
          className="hero-reveal"
          style={{
            color: 'rgba(255,255,255,0.86)',
            fontSize: 'clamp(14px, 2.2vw, 17px)',
            lineHeight: 1.7,
            marginBottom: '12px',
            minHeight: '28px',
            transition: 'opacity 0.4s',
            opacity: transitioning ? 0 : 1,
            fontStyle: 'italic',
            ['--hero-delay']: '280ms',
          }}
        >
          {slide.caption}
        </p>
        <p className="hero-reveal" style={{ color: 'rgba(255,255,255,0.72)', fontSize: 'clamp(14px, 2vw, 16px)', lineHeight: 1.7, marginBottom: '34px', ['--hero-delay']: '340ms' }}>
          Open every day from 10am — a family run pub & restaurant set in the beautiful High Peak
        </p>
        <div className="hero-reveal" style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', ['--hero-delay']: '420ms' }}>
          <Link to="/menus" className="btn btn-gold">
            View Our Menus
          </Link>
          <Link to="/book" className="btn btn-outline-light">
            Reserve a Table
          </Link>
        </div>
        <div className="hero-reveal" style={{ ['--hero-delay']: '480ms' }}>
          <p className="urgency-note">Limited availability this weekend</p>
        </div>
      </div>

      <button
        onClick={prev}
        aria-label="Previous image"
        className="hero-control"
        style={{ left: '16px' }}
      >
        ‹
      </button>
      <button
        onClick={next}
        aria-label="Next image"
        className="hero-control"
        style={{ right: '16px' }}
      >
        ›
      </button>

      <div style={{ position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)', zIndex: 4, display: 'flex', gap: '8px' }}>
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="hero-dot"
            style={{
              width: i === current ? '24px' : '8px',
              height: '8px',
              backgroundColor: i === current ? '#E2C97E' : 'rgba(255,255,255,0.5)',
            }}
          />
        ))}
      </div>
    </section>
  )
}
