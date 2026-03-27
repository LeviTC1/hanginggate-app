import { Link } from 'react-router-dom'
import SectionWrapper from '../ui/SectionWrapper'
import RevealWrapper from '../ui/RevealWrapper'

const storyBlocks = [
  'We are a family run restaurant set in the heart of the High Peak. We open every day from 10am and serve breakfasts, lunches, afternoon teas and evening meals.',
  'Our function rooms host funerals, christenings, weddings and birthdays, with no room hire fee and flexible menus for every budget.',
  'We also deliver our full menu seven days a week across Chapel, Whaley, Dove, Chinley, Buxworth and Furness.',
]

const storyPills = ['17+ Years Experience', 'Seasonal Menus', 'Local Ingredients', 'Independent Restaurant']

type StorySectionProps = {
  className?: string
}

export default function StorySection({ className }: StorySectionProps) {
  return (
    <SectionWrapper variant="light" py="lg" className={className}>
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_460px] lg:items-start">
        <RevealWrapper variant="stagger" className="space-y-5">
          <div>
            <p className="section-label">Our story</p>
            <h2 className="mt-3 font-display text-[var(--text-2xl)] text-[var(--wine)]">Welcome to The Hanging Gate</h2>
          </div>

          {storyBlocks.map((copy) => (
            <article
              key={copy}
              className="rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--surface-card)] p-6 shadow-[var(--shadow-sm)]"
            >
              <p className="text-[15px] leading-[1.8] text-[var(--text-secondary)]" style={{ fontFamily: 'var(--font-editorial)' }}>
                {copy}
              </p>
            </article>
          ))}

          <div className="flex flex-wrap gap-3">
            {storyPills.map((pill) => (
              <span
                key={pill}
                className="rounded-[var(--radius-sm)] border border-[rgba(212,168,50,0.36)] bg-[rgba(212,168,50,0.12)] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--gold-muted)]"
              >
                {pill}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link to="/book" className="btn btn-primary">
              Reserve Your Table
            </Link>
            <p className="text-[13px] font-semibold uppercase tracking-[0.08em] text-[var(--text-muted)]">Limited weekend availability</p>
          </div>
        </RevealWrapper>

        <RevealWrapper variant="stagger" className="grid grid-cols-2 gap-3">
          <div className="overflow-hidden rounded-[var(--radius-md)]">
            <img src="/images/christmas-bar.jpg" alt="Bar seating at The Hanging Gate" className="h-[220px] w-full object-cover" loading="lazy" />
          </div>
          <div className="overflow-hidden rounded-[var(--radius-md)]">
            <img src="/images/christmas-lounge.jpg" alt="Lounge seating at The Hanging Gate" className="h-[220px] w-full object-cover" loading="lazy" />
          </div>
          <div className="col-span-2 overflow-hidden rounded-[var(--radius-md)]">
            <img
              src="/images/christmas-restaurant.jpg"
              alt="Restaurant dining room at The Hanging Gate"
              className="h-[260px] w-full object-cover"
              loading="lazy"
            />
          </div>
        </RevealWrapper>
      </div>
    </SectionWrapper>
  )
}
