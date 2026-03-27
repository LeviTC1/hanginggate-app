import { MapPin, Star } from 'lucide-react'
import RevealWrapper from '../ui/RevealWrapper'

const quotes = [
  "We've been regulars for over 20 years. The decorations are a sight to behold.",
  "It took 3 weeks to put up. The children's faces when they walked in — like a Father Christmas grotto.",
]

export default function SocialProofStrip() {
  return (
    <section className="bg-[#f5f0e8] py-16 md:py-20">
      <div className="container">
        <div className="grid gap-6 md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] md:items-stretch">
          <RevealWrapper className="rounded-2xl border border-[rgba(61,43,14,0.15)] bg-[#fbf7ef] p-6 md:p-8">
            <p className="font-display text-[clamp(44px,6vw,72px)] leading-none text-[#c8860a]">
              4.8{' '}
              <span className="text-[clamp(20px,3vw,34px)] align-middle">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="inline-block h-[0.95em] w-[0.95em]" fill="currentColor" strokeWidth={1.8} />
                ))}
              </span>
            </p>
            <p className="mt-3 text-[20px] font-semibold text-[#1a1208]">Rated 4.8 on Google</p>
            <p className="mt-1 text-[14px] font-medium text-[rgba(26,18,8,0.65)]">200+ reviews</p>
            <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-[rgba(61,43,14,0.25)] bg-white/60 px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.08em] text-[#3d2b0e]">
              <MapPin size={14} />
              Whittle-le-Woods
            </p>
          </RevealWrapper>

          <RevealWrapper variant="stagger" className="grid gap-4">
            {quotes.map((quote) => (
              <article
                key={quote}
                className="relative overflow-hidden rounded-2xl border border-[rgba(200,134,10,0.34)] bg-[#1a1208] px-6 py-6 text-[#f5f0e8] md:px-7"
              >
                <span className="absolute left-3 top-1 font-display text-[58px] leading-none text-[#c8860a]">“</span>
                <p className="relative z-10 pl-6 text-[16px] leading-[1.65]">{quote}</p>
              </article>
            ))}
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}
