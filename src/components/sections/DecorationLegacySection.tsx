import { Link } from 'react-router-dom'
import RevealWrapper from '../ui/RevealWrapper'

const legacyStats = [
  { value: '35,000', label: 'Christmas lights' },
  { value: '6,000', label: 'Hand-tied ornaments' },
  { value: '3 weeks', label: 'To put it all up' },
  { value: '1 year', label: 'Some tables booked in advance' },
]

const galleryImages = [
  { src: '/images/christmas-fireplace.jpg', alt: 'Christmas decorations around the fireplace' },
  { src: '/images/christmas-snow-room.jpg', alt: 'The snow room at The Hanging Gate' },
  { src: '/images/christmas-bear.jpg', alt: 'Christmas bear display at The Hanging Gate' },
  { src: '/images/christmas-misc.jpg', alt: 'Christmas decorations inside The Hanging Gate' },
  { src: '/images/christmas-window.jpg', alt: 'Red and gold Christmas decorations in the window' },
  { src: '/images/christmas-decorations.jpg', alt: 'Christmas decorations at The Hanging Gate' },
]

const uniqueGalleryImages = Array.from(new Map(galleryImages.map((image) => [image.src, image])).values())

export default function DecorationLegacySection() {
  return (
    <section className="bg-[var(--surface-dark-2)] py-16 text-[var(--text-inverse)] md:py-24">
      <div className="container">
        <RevealWrapper className="text-center">
          <h2 className="font-display text-[clamp(32px,4.5vw,54px)] leading-[1.12] text-[var(--text-inverse)]">
            The decorations. A destination in themselves.
          </h2>
        </RevealWrapper>

        <RevealWrapper variant="stagger" className="mt-10 grid gap-4 md:grid-cols-4">
          {legacyStats.map((stat) => (
            <article
              key={stat.label}
              className="rounded-[var(--radius-md)] border border-[rgba(232,201,107,0.22)] bg-[rgba(36,49,37,0.46)] px-4 py-5 text-center"
            >
              <p className="font-display text-[clamp(34px,5vw,56px)] leading-none text-[#e8c96b]">{stat.value}</p>
              <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.11em] text-[var(--text-inverse)]">{stat.label}</p>
            </article>
          ))}
        </RevealWrapper>

        <RevealWrapper className="mt-10 md:mt-14">
          <blockquote className="relative mx-auto max-w-[920px] rounded-[var(--radius-md)] border border-[rgba(200,134,10,0.32)] bg-[rgba(36,49,37,0.44)] px-6 py-8 md:px-10">
            <span className="pointer-events-none absolute left-3 top-0 font-display text-[78px] leading-none text-[#c8860a]">“</span>
            <p
              className="relative z-10 pl-7 text-[clamp(19px,2.5vw,32px)] italic leading-[1.45] text-[var(--text-inverse)]"
              style={{ fontFamily: 'var(--font-editorial)' }}
            >
              Every square inch covered with something festive. Like nothing you&apos;ve ever seen before.
            </p>
            <footer className="mt-4 pl-7 text-[13px] font-semibold uppercase tracking-[0.1em] text-[#e8c96b]">— NBC News</footer>
          </blockquote>
        </RevealWrapper>

        <RevealWrapper className="mt-10 md:mt-12">
          <div className="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 md:hidden">
            {uniqueGalleryImages.map((image) => (
              <div key={image.src} className="min-w-[76%] snap-start overflow-hidden rounded-[var(--radius-sm)] border border-[rgba(232,201,107,0.22)] bg-[var(--surface-peat)]">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-[190px] w-full object-cover"
                  loading="lazy"
                  onError={(e) => { (e.target as HTMLImageElement).style.opacity = '0' }}
                />
              </div>
            ))}
          </div>

          <div className="hidden gap-4 md:grid md:grid-cols-3">
            {uniqueGalleryImages.map((image) => (
              <div key={image.src} className="overflow-hidden rounded-[var(--radius-sm)] border border-[rgba(232,201,107,0.22)] bg-[var(--surface-peat)]">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-[210px] w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                  loading="lazy"
                  onError={(e) => { (e.target as HTMLImageElement).style.opacity = '0' }}
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
            Book Now →
          </Link>
        </RevealWrapper>
      </div>
    </section>
  )
}
