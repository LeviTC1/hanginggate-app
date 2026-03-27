import { Link } from 'react-router-dom'
import EventCard from '../cards/EventCard'
import RevealWrapper from '../ui/RevealWrapper'
import SectionWrapper from '../ui/SectionWrapper'

type EventsTeaserProps = {
  className?: string
}

export default function EventsTeaser({ className }: EventsTeaserProps) {
  return (
    <SectionWrapper variant="dark" py="lg" className={className}>
      <RevealWrapper className="text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--gold)]">Events</p>
        <h2 className="mt-3 font-display text-[var(--text-2xl)] text-white">Forthcoming Moments</h2>
      </RevealWrapper>

      <RevealWrapper className="mt-10">
        <EventCard
          title="Easter 2026"
          date="Friday 3 April - Monday 6 April"
          description="The Easter Bunny joins us on Sunday with eggs for all children. Full bar and restaurant menu available all weekend."
          to="/events"
        />
      </RevealWrapper>

      <RevealWrapper className="mt-8 flex flex-wrap justify-center gap-3">
        <Link to="/events" className="btn btn-ghost-light">
          View Events
        </Link>
        <Link to="/book" className="btn btn-primary">
          Reserve Your Table
        </Link>
      </RevealWrapper>
    </SectionWrapper>
  )
}
