export default function PageHero({ title, subtitle, className = '', subtitleClassName = '' }) {
  return (
    <header className={`relative overflow-hidden border-b border-[rgba(212,168,50,0.2)] bg-[linear-gradient(140deg,#0f1b12_0%,#16261a_52%,#1f3223_100%)] pb-12 pt-32 text-center ${className}`}>
      <div className="grain-overlay" />

      <div className="relative container flex flex-col items-center text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[rgba(212,168,50,0.72)]">The Hanging Gate</p>
        <h1 className="mt-4 font-display text-[clamp(30px,5vw,52px)] font-semibold tracking-[-0.02em] text-white">{title}</h1>
        {subtitle ? (
          <p
            className={`mx-auto mt-3 max-w-[56ch] text-center text-[16px] leading-[1.75] text-[rgba(255,255,255,0.88)] ${subtitleClassName}`}
            style={{ textShadow: '0 1px 10px rgba(0,0,0,0.42)' }}
          >
            {subtitle}
          </p>
        ) : null}

        <div className="mt-7 flex items-center justify-center gap-3" aria-hidden="true">
          <span className="h-px w-12 bg-[rgba(212,168,50,0.5)]" />
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--gold)]" />
          <span className="h-px w-12 bg-[rgba(212,168,50,0.5)]" />
        </div>
      </div>
    </header>
  )
}
