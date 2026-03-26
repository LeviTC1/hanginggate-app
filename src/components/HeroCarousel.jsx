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
    }, 400)
  }, [transitioning])

  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo])
  const prev = useCallback(() => goTo((current - 1 + slides.length) % slides.length), [current, goTo])

  useEffect(() => {
    const id = setInterval(next, 5000)
    return () => clearInterval(id)
  }, [next])

  const slide = slides[current]

  return (
    <section style={{ position: 'relative', minHeight: 'clamp(420px, 60vw, 640px)', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
      {/* Images — preload next */}
      {slides.map((s, i) => (
        <img
          key={s.src}
          src={s.src}
          alt={s.alt}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            opacity: i === current ? (transitioning ? 0 : 1) : 0,
            transition: 'opacity 0.8s ease',
            zIndex: i === current ? 1 : 0,
          }}
        />
      ))}

      {/* Overlay */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(160deg, rgba(61,8,8,0.82) 0%, rgba(139,26,26,0.7) 50%, rgba(92,48,16,0.72) 100%)', zIndex: 2 }} />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 3, maxWidth: '700px', margin: '0 auto', padding: 'clamp(48px, 8vw, 96px) 24px', textAlign: 'center', width: '100%' }}>
        <p style={{ color: '#E2C97E', fontSize: '13px', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '20px', fontWeight: 500 }}>
          Chapel-en-le-Frith · High Peak · Derbyshire
        </p>
        <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(36px, 7vw, 72px)', color: '#FAF7F2', lineHeight: 1.1, marginBottom: '16px', fontWeight: 700 }}>
          The Hanging Gate
        </h1>
        <p style={{ color: '#E2C97E', fontSize: '18px', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '24px' }}>
          Pub & Restaurant
        </p>
        <p style={{
          color: 'rgba(255,255,255,0.85)',
          fontSize: 'clamp(14px, 2.2vw, 17px)',
          lineHeight: 1.7,
          marginBottom: '12px',
          minHeight: '28px',
          transition: 'opacity 0.4s',
          opacity: transitioning ? 0 : 1,
          fontStyle: 'italic',
        }}>
          {slide.caption}
        </p>
        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 'clamp(14px, 2vw, 16px)', lineHeight: 1.7, marginBottom: '40px' }}>
          Open every day from 10am — a family run pub & restaurant set in the beautiful High Peak
        </p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/menus" style={{ backgroundColor: '#E2C97E', color: '#3D0808', padding: '14px 32px', borderRadius: '4px', textDecoration: 'none', fontWeight: 700, fontSize: '15px', letterSpacing: '0.5px' }}>
            View Our Menus
          </Link>
          <a href="tel:01298812776" style={{ backgroundColor: 'transparent', color: '#FAF7F2', padding: '14px 32px', borderRadius: '4px', textDecoration: 'none', fontWeight: 500, fontSize: '15px', border: '1px solid rgba(255,255,255,0.5)' }}>
            Reserve a Table
          </a>
        </div>
      </div>

      {/* Prev / Next arrows */}
      <button
        onClick={prev}
        aria-label="Previous image"
        style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', zIndex: 4, background: 'rgba(0,0,0,0.35)', border: 'none', color: 'white', width: '44px', height: '44px', borderRadius: '50%', cursor: 'pointer', fontSize: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        ‹
      </button>
      <button
        onClick={next}
        aria-label="Next image"
        style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', zIndex: 4, background: 'rgba(0,0,0,0.35)', border: 'none', color: 'white', width: '44px', height: '44px', borderRadius: '50%', cursor: 'pointer', fontSize: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        ›
      </button>

      {/* Dots */}
      <div style={{ position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)', zIndex: 4, display: 'flex', gap: '8px' }}>
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            style={{ width: i === current ? '24px' : '8px', height: '8px', borderRadius: '4px', border: 'none', cursor: 'pointer', backgroundColor: i === current ? '#E2C97E' : 'rgba(255,255,255,0.5)', transition: 'all 0.3s', padding: 0 }}
          />
        ))}
      </div>
    </section>
  )
}
