import { Link } from 'react-router-dom'
import ReviewCard from '../cards/ReviewCard'
import RevealWrapper from '../ui/RevealWrapper'
import SectionWrapper from '../ui/SectionWrapper'

const reviews = [
  {
    name: 'Sarah M.',
    quote: 'Absolutely wonderful Sunday lunch. The roast beef was outstanding and the team made us feel genuinely looked after from start to finish.',
  },
  {
    name: 'David H.',
    quote: 'We hosted a birthday party for 60 guests and everything was smooth, warm, and beautifully done. Highly recommended for celebrations.',
  },
  {
    name: 'Karen T.',
    quote: 'Best pub food in the High Peak. The festive atmosphere is unforgettable and the quality is always consistent.',
  },
  {
    name: 'James R.',
    quote: 'Outside catering was brilliant value with generous portions and great communication. Everyone at our event was impressed.',
  },
]

const uniqueReviews = Array.from(new Map(reviews.map((review) => [review.name, review])).values())

type ReviewsSectionProps = {
  className?: string
}

export default function ReviewsSection({ className }: ReviewsSectionProps) {
  return (
    <SectionWrapper variant="light" py="lg" className={className}>
      <RevealWrapper className="text-center">
        <p className="section-label">What guests say</p>
        <h2 className="mt-3 font-display text-[var(--text-2xl)] text-[var(--wine)]">Guest Reviews</h2>
        <p className="mt-3 text-[15px] text-[var(--text-secondary)]">Rated 4.4 on Google with 200+ reviews</p>
      </RevealWrapper>

      <div className="mt-8 grid grid-flow-col auto-cols-[82%] gap-4 overflow-x-auto pb-3 md:grid-flow-row md:auto-cols-auto md:grid-cols-2 md:overflow-visible md:pb-0 xl:grid-cols-4">
        {uniqueReviews.map((review) => (
          <div key={review.name} className="snap-start">
            <RevealWrapper>
              <ReviewCard name={review.name} quote={review.quote} />
            </RevealWrapper>
          </div>
        ))}
      </div>

      <RevealWrapper className="mt-8 text-center">
        <a
          href="https://www.google.com/search?q=The+Hanging+Gate+reviews"
          target="_blank"
          rel="noreferrer"
          className="btn btn-secondary"
        >
          See what guests are saying
        </a>
        <div className="mt-4">
          <Link to="/book" className="text-[13px] font-semibold uppercase tracking-[0.1em] text-[var(--wine)] underline-offset-4 hover:underline">
            Book Now
          </Link>
        </div>
      </RevealWrapper>
    </SectionWrapper>
  )
}
