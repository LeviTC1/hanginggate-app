import { Link } from 'react-router-dom'
import MenuCarousel from '../components/sections/MenuCarousel'
import PageHero from '../components/PageHero'
import RevealWrapper from '../components/ui/RevealWrapper'
import SectionWrapper from '../components/ui/SectionWrapper'
import SEO from '../components/SEO'

const menus = [
  {
    to: '/menus/bar-restaurant',
    title: 'Bar & Restaurant Menu',
    description: 'Breakfasts, starters, mains, steaks, fish, roasts, vegetarian dishes and desserts.',
    price: 'Full Menu',
    category: 'Served daily from 10am',
    image: '/images/christmas-restaurant.jpg',
  },
  {
    to: '/menus/senior',
    title: 'Senior Citizen Menu',
    description: 'Two courses from £15.95 and three courses from £17.50, available Monday to Saturday.',
    price: 'From £15.95',
    category: 'Mon - Sat',
    image: '/images/christmas-bar.jpg',
  },
  {
    to: '/menus/set-menu',
    title: 'Three Course Set Menu',
    description: 'A three-course menu offered all day, every day outside seasonal service windows.',
    price: '£27.95',
    category: 'All day, every day',
    image: '/images/christmas-lounge.jpg',
  },
  {
    to: '/menus/functions',
    title: 'Weddings, Functions & Buffets',
    description: 'Tailored celebration menus with no room hire fee and flexible options for groups.',
    price: 'Free room hire',
    category: 'Events & celebrations',
    image: '/images/christmas-window.jpg',
  },
  {
    to: '/menus/christmas',
    title: 'Christmas Menus',
    description: 'Seasonal dining from November to January including festive set menus and classics.',
    price: 'Seasonal',
    category: 'Available Nov - Jan',
    image: '/images/christmas-decorations.jpg',
  },
  {
    to: '/menus/afternoon-tea',
    title: 'Cream & Afternoon Teas',
    description: 'Classic cream tea and afternoon tea service available weekdays in the afternoon.',
    price: 'From £8.95',
    category: 'Mon - Fri · 3pm - 6pm',
    image: '/images/afternoon-tea.jpg',
  },
  {
    to: '/outside-catering',
    title: 'Outside Catering',
    description: 'Large-party catering delivered across Derbyshire and Cheshire from £7 per head.',
    price: 'From £7',
    category: 'Regional delivery',
    image: '/images/pub-exterior.jpg',
  },
]

export default function Menus() {
  return (
    <div>
      <SEO
        path="/menus"
        description="All menus at The Hanging Gate: bar and restaurant, senior dining, set menus, functions, Christmas, afternoon tea and outside catering."
      />

      <PageHero title="See Our Menus" subtitle="Something for every occasion, appetite and budget" />

      <SectionWrapper variant="ink" py="lg">
        <RevealWrapper className="mx-auto flex max-w-[62rem] flex-col items-center text-center">
          <p className="section-label">Explore</p>
          <h2 className="mt-3 font-display text-[var(--text-2xl)] text-[var(--text-inverse)]">Choose Your Dining Experience</h2>
          <p className="mt-3 max-w-[58ch] text-center text-[15px] leading-[1.8] text-[rgba(241,244,236,0.9)]">
            Swipe, click, or use arrow keys to browse. Select the centred card to open a menu.
          </p>
        </RevealWrapper>

        <RevealWrapper className="mt-10">
          <MenuCarousel items={menus} />
        </RevealWrapper>

        <RevealWrapper className="mt-12 rounded-3xl border border-[rgba(212,168,50,0.34)] bg-[linear-gradient(145deg,#162017,#243125)] p-8 text-center shadow-[var(--shadow-lg)]">
          <p className="font-display text-[26px] text-[rgba(255,255,255,0.95)]">Need something tailored?</p>
          <p className="mt-3 text-[14px] leading-[1.7] text-[rgba(255,255,255,0.72)]">
            We can build bespoke menus to suit your event, guest list, and budget.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link to="/book" className="btn btn-primary">
              Reserve Your Table
            </Link>
            <Link to="/contact" className="btn btn-ghost-light">
              Send Enquiry
            </Link>
          </div>
        </RevealWrapper>
      </SectionWrapper>
    </div>
  )
}
