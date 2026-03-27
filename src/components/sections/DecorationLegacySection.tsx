import { Link } from 'react-router-dom'
import RevealWrapper from '../ui/RevealWrapper'

const legacyStats = [
  { value: '35,000', label: 'Christmas lights' },
  { value: '6,000', label: 'Hand-tied ornaments' },
  { value: '3 weeks', label: 'To put it all up' },
  { value: '1 year', label: 'Some tables booked in advance' },
]

const galleryImages = [
  '/images/dec-1.jpg',
  '/images/dec-2.jpg',
  '/images/dec-3.jpg',
  '/images/dec-4.jpg',
  '/images/dec-5.jpg',
  '/images/dec-6.jpg',
]

export default function DecorationLegacySection() {
  return (
    <section className="bg-[#1a1208] py-16 text-[#f5f0e8] md:py-24">
      <div className="container">
        <RevealWrapper className="text-center">
          <h2 className="font-display text-[clamp(32px,4.5vw,54px)] leading-[1.12] text-[#f5f0e8]">
            The decorations. A destination in themselves.
          </h2>
        </RevealWrapper>

        <RevealWrapper variant="stagger" className="mt-10 grid gap-4 md:grid-cols-4">
          {legacyStats.map((stat) => (
            <article
              key={stat.label}
              className="rounded-xl border border-[rgba(232,201,107,0.22)] bg-[rgba(61,43,14,0.26)] px-4 py-5 text-center"
            >
              <p className="font-display text-[clamp(34px,5vw,56px)] leading-none text-[#e8c96b]">{stat.value}</p>
              <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.11em] text-[#f5f0e8]">{stat.label}</p>
            </article>
          ))}
        </RevealWrapper>

        <RevealWrapper className="mt-10 md:mt-14">
          <blockquote className="relative mx-auto max-w-[920px] rounded-2xl border border-[rgba(200,134,10,0.32)] bg-[rgba(61,43,14,0.26)] px-6 py-8 md:px-10">
            <span className="pointer-events-none absolute left-3 top-0 font-display text-[78px] leading-none text-[#c8860a]">“</span>
            <p className="relative z-10 pl-7 text-[clamp(19px,2.5vw,32px)] italic leading-[1.45] text-[#f5f0e8]">
              Every square inch covered with something festive. Like nothing you&apos;ve ever seen before.
            </p>
            <footer className="mt-4 pl-7 text-[13px] font-semibold uppercase tracking-[0.1em] text-[#e8c96b]">— NBC News</footer>
          </blockquote>
        </RevealWrapper>

        <RevealWrapper className="mt-10 md:mt-12">
          <div className="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 md:hidden">
            {galleryImages.map((image, index) => (
              <div key={image} className="min-w-[76%] snap-start overflow-hidden rounded-xl border border-[rgba(232,201,107,0.22)]">
                <img
                  src={image}
                  alt={`Seasonal decorations at The Hanging Gate ${index + 1}`}
                  className="h-[190px] w-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          <div className="hidden gap-4 md:grid md:grid-cols-3">
            {galleryImages.map((image, index) => (
              <div key={image} className="overflow-hidden rounded-xl border border-[rgba(232,201,107,0.22)]">
                <img
                  src={image}
                  alt={`Seasonal decorations at The Hanging Gate ${index + 1}`}
                  className="h-[210px] w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </RevealWrapper>

        <RevealWrapper className="mt-10 text-center">
          <Link
            to="/book"
            className="inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.12em] text-[#c8860a] no-underline transition-colors duration-200 hover:text-[#e8c96b]"
          >
            Book your Christmas table →
          </Link>
        </RevealWrapper>
      </div>
    </section>
  )
}
