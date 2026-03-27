import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import clsx from 'clsx'
import { Link } from 'react-router-dom'
import { getSeasonalMode } from '../../utils/seasonalMode'

type SeasonalHero = {
  key: 'christmas' | 'halloween' | 'year-round'
  label: 'Christmas' | 'Halloween' | 'Year Round'
  image: string
}

const seasonalHeroes: SeasonalHero[] = [
  {
    key: 'christmas',
    label: 'Christmas',
    image: '/images/christmas-restaurant.jpg',
  },
  {
    key: 'halloween',
    label: 'Halloween',
    image: '/images/christmas-fireplace.jpg',
  },
  {
    key: 'year-round',
    label: 'Year Round',
    image: '/images/pub-exterior.jpg',
  },
]

export default function CinematicHero() {
  const [activeSeason, setActiveSeason] = useState<SeasonalHero['key']>('christmas')
  const siteSeasonMode = useMemo(() => getSeasonalMode(), [])

  const activeHero = useMemo(
    () => seasonalHeroes.find((season) => season.key === activeSeason) ?? seasonalHeroes[0],
    [activeSeason],
  )

  const isHalloween = activeSeason === 'halloween'
  const accentColor = isHalloween ? '#7a1c1c' : '#c8860a'
  const accentHover = isHalloween ? '#8f2525' : '#e8c96b'
  const eyebrowText = siteSeasonMode === 'christmas' ? "Voted the UK's most festive pub" : 'Award-winning atmosphere'

  return (
    <section aria-label="The Hanging Gate cinematic hero" className="relative flex min-h-[100svh] items-end overflow-hidden pt-[78px]">
      <div
        className="absolute inset-0 bg-cover bg-center transition-[background-image] duration-500 ease-[var(--ease-standard)]"
        style={{
          backgroundImage: `url(${activeHero.image}), url('/images/christmas-restaurant.jpg')`,
          backgroundColor: 'var(--surface-dark-2)',
          animation: 'heroKenBurns 28s linear infinite alternate',
        }}
      />

      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(7,12,8,0.97)_0%,rgba(7,12,8,0.9)_28%,rgba(7,12,8,0.72)_50%,rgba(7,12,8,0.38)_72%,rgba(7,12,8,0.14)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_100%_at_50%_100%,transparent_30%,rgba(7,12,8,0.55)_100%)]" />
      <div className="grain-overlay" />

      <div className="relative z-10 w-full px-[5vw] pb-[8vh]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className="max-w-[760px]"
        >
          <p
            className="section-label"
            style={{ color: accentColor, textShadow: '0 1px 8px rgba(0,0,0,0.5)' }}
          >
            {eyebrowText}
          </p>
          <span className="gold-rule" style={{ background: accentColor }} />

          <h1 className="mt-4 font-display text-[clamp(44px,8vw,96px)] font-bold leading-[1.03] tracking-[-0.02em] text-white">
            Settle in. Something special awaits.
          </h1>

          <p
            className="mt-5 max-w-[580px] text-[clamp(17px,2.1vw,21px)] leading-[1.8] text-[rgba(245,240,232,0.85)]"
            style={{ fontFamily: 'var(--font-editorial)', fontStyle: 'italic' }}
          >
            Crafted menus, attentive service, and seasonal decorations that have to be seen to be believed.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 max-[768px]:flex-col max-[768px]:items-start">
            <Link to="/book" className="btn btn-primary">
              Reserve Your Table
            </Link>
            <Link to="/menus" className="btn btn-ghost-light">
              Explore The Menus
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            {seasonalHeroes.map((season) => (
              <button
                key={season.key}
                type="button"
                onClick={() => setActiveSeason(season.key)}
                className={clsx(
                  'hero-season-pill rounded-[var(--radius-md)] border px-4 py-[7px] text-[12px] font-semibold uppercase tracking-[0.1em] text-white transition-all duration-200',
                  activeSeason === season.key
                    ? 'border-transparent shadow-[0_6px_20px_rgba(0,0,0,0.3)]'
                    : 'border-[rgba(241,244,236,0.45)] bg-[rgba(22,32,23,0.46)] hover:border-[rgba(241,244,236,0.78)]',
                )}
                style={activeSeason === season.key ? { backgroundColor: accentColor, color: 'var(--text-inverse)' } : undefined}
              >
                {season.label}
              </button>
            ))}
          </div>
        </motion.div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-[rgba(9,14,10,0.95)] via-[rgba(9,14,10,0.68)] to-transparent"
      />

      {siteSeasonMode === 'halloween' ? (
        <svg
          viewBox="0 0 240 240"
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-[78px] z-10 h-[220px] w-[220px] opacity-[0.15] md:h-[250px] md:w-[250px]"
          fill="none"
          stroke="var(--text-inverse)"
          strokeWidth="1.2"
        >
          <path d="M240 0H0" />
          <path d="M240 0V240" />
          <path d="M240 0L0 240" />
          <path d="M240 0Q170 70 100 140Q50 190 0 240" />
          <path d="M240 0Q180 90 120 180Q80 215 40 240" />
          <path d="M210 30Q120 120 30 210" />
          <path d="M180 60Q120 120 60 180" />
          <path d="M150 90Q120 120 90 150" />
        </svg>
      ) : null}
      <style>{`
        .hero-season-pill:hover {
          border-color: ${accentHover};
        }
      `}</style>
    </section>
  )
}
