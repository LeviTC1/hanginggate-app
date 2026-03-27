import { Link } from 'react-router-dom'
import MenuCard from '../components/cards/MenuCard'
import CinematicHero from '../components/sections/CinematicHero'
import CTABand from '../components/sections/CTABand'
import DecorationLegacySection from '../components/sections/DecorationLegacySection'
import EventsTeaser from '../components/sections/EventsTeaser'
import FeaturesSection from '../components/sections/FeaturesSection'
import QuickLinks from '../components/sections/QuickLinks'
import ReviewsSection from '../components/sections/ReviewsSection'
import SocialProofStrip from '../components/sections/SocialProofStrip'
import StorySection from '../components/sections/StorySection'
import TrustBar from '../components/sections/TrustBar'
import RevealWrapper from '../components/ui/RevealWrapper'
import SectionWrapper from '../components/ui/SectionWrapper'
import SEO from '../components/SEO'

const menuPreview = [
  {
    to: '/menus/bar-restaurant',
    image: '/images/christmas-restaurant.jpg',
    category: 'Served Daily',
    title: 'Bar & Restaurant Menu',
    description: 'Breakfasts, classics, roasts, steaks, seafood, vegetarian dishes and desserts.',
    price: 'Full Menu',
  },
  {
    to: '/menus/set-menu',
    image: '/images/christmas-lounge.jpg',
    category: 'All Day',
    title: 'Three Course Set Menu',
    description: 'A complete set menu designed for relaxed lunches and evening celebrations.',
    price: '£27.95',
  },
  {
    to: '/menus/afternoon-tea',
    image: '/images/afternoon-tea.jpg',
    category: 'Mon - Fri',
    title: 'Afternoon Tea',
    description: 'Cream teas and classic afternoon tea service for calm midweek moments.',
    price: 'From £8.95',
  },
]

export default function Home() {
  return (
    <div>
      <SEO
        path="/"
        description="Family run pub and restaurant in Chapel-en-le-Frith, High Peak, Derbyshire. Open every day from 10am with breakfasts, lunches, afternoon teas, evening meals, and event hosting."
        image="/images/pub-exterior.jpg"
      />

      <CinematicHero />
      <DecorationLegacySection />
      <TrustBar />
      <QuickLinks />
      <SocialProofStrip />
      <StorySection />

      <SectionWrapper variant="ink" py="lg">
        <RevealWrapper className="text-center">
          <p className="section-label">Menus</p>
          <h2 className="mt-3 font-display text-[var(--text-2xl)] text-white">Choose Your Dining Experience</h2>
          <p className="mt-3 text-[15px] text-[rgba(255,255,255,0.68)]">From everyday dining to special occasions, there is a menu for every visit.</p>
        </RevealWrapper>

        <RevealWrapper variant="stagger" className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {menuPreview.map((menu) => (
            <MenuCard
              key={menu.to}
              to={menu.to}
              image={menu.image}
              category={menu.category}
              title={menu.title}
              description={menu.description}
              price={menu.price}
            />
          ))}
        </RevealWrapper>

        <RevealWrapper className="mt-10 text-center">
          <Link to="/menus" className="btn btn-ghost-light">
            Explore Menus
          </Link>
        </RevealWrapper>
      </SectionWrapper>

      <CTABand />
      <FeaturesSection />
      <ReviewsSection />
      <EventsTeaser />
    </div>
  )
}
