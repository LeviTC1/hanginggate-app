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
    image: '/images/hero-christmas.jpg',
  },
  {
    key: 'halloween',
    label: 'Halloween',
    image: '/images/hero-halloween.jpg',
  },
  {
    key: 'year-round',
    label: 'Year Round',
    image: '/images/hero-year-round.jpg',
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
          backgroundImage: `url(${activeHero.image})`,
          animation: 'heroKenBurns 20s linear infinite alternate',
        }}
      />

      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(10,6,4,0.95)_0%,rgba(10,6,4,0.86)_40%,rgba(10,6,4,0.36)_70%,rgba(10,6,4,0.18)_100%)]" />
      <div className="grain-overlay" />

      <div className="relative z-10 w-full px-[5vw] pb-[8vh]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className="max-w-[760px]"
        >
          <p
            className="hero-eyebrow text-[11px] font-semibold uppercase tracking-[0.22em]"
            style={{ color: accentColor }}
          >
            {eyebrowText}
          </p>

          <h1 className="mt-4 font-display text-[clamp(44px,8vw,96px)] font-bold leading-[1.03] tracking-[-0.02em] text-white">
            Settle in. Something special awaits.
          </h1>

          <p className="mt-5 max-w-[640px] text-[clamp(16px,2.3vw,20px)] leading-[1.75] text-[rgba(245,240,232,0.9)]">
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
                  'hero-season-pill rounded-full border px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.1em] text-white transition-all duration-200',
                  activeSeason === season.key
                    ? 'border-transparent shadow-[0_6px_20px_rgba(0,0,0,0.3)]'
                    : 'border-[rgba(245,240,232,0.45)] bg-[rgba(26,18,8,0.42)] hover:border-[rgba(245,240,232,0.75)]',
                )}
                style={activeSeason === season.key ? { backgroundColor: accentColor, color: '#f5f0e8' } : undefined}
              >
                {season.label}
              </button>
            ))}
          </div>
        </motion.div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-[rgba(10,6,4,0.95)] via-[rgba(10,6,4,0.68)] to-transparent"
      />

      {siteSeasonMode === 'halloween' ? (
        <svg
          viewBox="0 0 240 240"
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-[78px] z-10 h-[220px] w-[220px] opacity-[0.15] md:h-[250px] md:w-[250px]"
          fill="none"
          stroke="#f5f0e8"
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
        .hero-eyebrow {
          transition: color 220ms var(--ease-standard);
        }
        .hero-season-pill:hover {
          border-color: ${accentHover};
        }
      `}</style>
    </section>
  )
}
