import { MapPin, Star } from 'lucide-react'
import RevealWrapper from '../ui/RevealWrapper'

const quotes = [
  "We've been regulars for over 20 years. The decorations are a sight to behold.",
  "It took 3 weeks to put up. The children's faces when they walked in — like a Father Christmas grotto.",
]

export default function SocialProofStrip() {
  return (
    <section className="bg-[var(--surface-stone)] py-16 md:py-20">
      <div className="container">
        <div className="grid gap-6 md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] md:items-stretch">
          <RevealWrapper className="rounded-[var(--radius-xl)] border border-[var(--border-default)] bg-[var(--surface-card)] p-6 md:p-8">
            <p className="font-display text-[clamp(44px,6vw,72px)] leading-none text-[var(--gold)]">
              4.4{' '}
              <span className="text-[clamp(20px,3vw,34px)] align-middle">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="inline-block h-[0.95em] w-[0.95em]" fill="currentColor" strokeWidth={1.8} />
                ))}
              </span>
            </p>
            <p className="mt-3 text-[20px] font-semibold text-[var(--text-primary)]">Rated 4.4 on Google</p>
            <p className="mt-1 text-[14px] font-medium text-[var(--text-muted)]">200+ reviews</p>
            <p className="mt-5 inline-flex items-center gap-2 rounded-[var(--radius-sm)] border border-[var(--border-strong)] bg-[var(--surface-warm)] px-3 py-[6px] text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--text-secondary)]">
              <MapPin size={14} />
              Chapel-en-le-Frith, High Peak, Derbyshire
            </p>
          </RevealWrapper>

          <RevealWrapper variant="stagger" className="grid gap-4">
            {quotes.map((quote) => (
              <article
                key={quote}
                className="relative overflow-hidden rounded-[var(--radius-md)] border border-[rgba(200,144,26,0.22)] bg-[var(--surface-dark-2)] px-6 py-6 text-[var(--text-inverse)] md:px-7"
              >
                <span className="absolute left-3 top-1 font-display text-[58px] leading-none text-[var(--gold)]">“</span>
                <p
                  className="relative z-10 pl-6 text-[16px] italic leading-[1.65]"
                  style={{ fontFamily: 'var(--font-editorial)' }}
                >
                  {quote}
                </p>
              </article>
            ))}
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}
