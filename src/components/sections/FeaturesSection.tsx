import FeatureCard from '../cards/FeatureCard'
import RevealWrapper from '../ui/RevealWrapper'
import SectionWrapper from '../ui/SectionWrapper'

const highlights = [
  {
    title: 'All-Day Dining',
    body: 'Breakfasts, lunches, afternoon teas and evening meals served every day from 10am.',
  },
  {
    title: 'Function Rooms',
    body: 'Celebrate with up to 180 guests across flexible spaces with no room hire fee.',
  },
  {
    title: 'Outside Catering',
    body: 'Full menu delivery across Derbyshire and Cheshire, seven days a week.',
  },
  {
    title: 'Family Friendly',
    body: 'Baby-friendly facilities, welcoming lounges, and a relaxed, inclusive atmosphere.',
  },
  {
    title: 'Dog Friendly Bar',
    body: 'Dogs are welcome in the main bar so everyone can enjoy the visit together.',
  },
  {
    title: 'Seasonal Moments',
    body: 'Known for festive atmosphere and warm décor that guests return for each year.',
  },
]

type FeaturesSectionProps = {
  className?: string
}

export default function FeaturesSection({ className }: FeaturesSectionProps) {
  return (
    <SectionWrapper variant="warm" py="lg" className={className}>
      <RevealWrapper className="text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--gold-muted)]">Why visit us</p>
        <h2 className="mt-3 font-display text-[var(--text-2xl)] text-[var(--wine)]">Everything That Makes Us Special</h2>
      </RevealWrapper>

      <RevealWrapper variant="stagger" className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {highlights.map((item, index) => (
          <FeatureCard key={item.title} number={String(index + 1).padStart(2, '0')} title={item.title} body={item.body} />
        ))}
      </RevealWrapper>
    </SectionWrapper>
  )
}
