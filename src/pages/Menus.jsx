import SEO from '../components/SEO'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'

const menus = [
  {
    to: '/menus/bar-restaurant',
    title: 'Bar & Restaurant Menu',
    desc: 'Our full menu — breakfasts, starters, mains, steaks, fish, roasts, vegetarian & desserts',
    icon: '🍽️',
  },
  {
    to: '/menus/senior',
    title: 'Senior Citizen Menu',
    desc: '2 courses £15.95 · 3 courses £17.50 · Available Mon–Fri 12–7pm, Sat 12–5pm',
    icon: '🫖',
  },
  {
    to: '/menus/set-menu',
    title: '3 Course Set Menu',
    desc: '£27.95 per head · Available all day, every day (excl. December & certain dates)',
    icon: '✨',
  },
  {
    to: '/menus/functions',
    title: 'Weddings, Functions & Buffets',
    desc: 'From £29.95 per head for weddings · Buffets from £13.95 · No room hire charge',
    icon: '🥂',
  },
  {
    to: '/menus/christmas',
    title: 'Christmas Menus',
    desc: 'Senior Christmas from £22.95 · Full Christmas menu from £33.95 · Available Nov–Jan',
    icon: '🎄',
  },
  {
    to: '/menus/afternoon-tea',
    title: 'Cream & Afternoon Teas',
    desc: 'Cream tea £8.95 · Afternoon tea £13.95 · Served Mon–Fri 3–6pm',
    icon: '🍰',
  },
  {
    to: '/outside-catering',
    title: 'Outside Catering',
    desc: 'From £7 per head · Free delivery across Derbyshire & Cheshire · Min 30 people',
    icon: '🚐',
  },
]

export default function Menus() {
  return (
    <div>
      <SEO path="/menus" description="All menus at The Hanging Gate — bar & restaurant, senior citizen, set menu, functions, Christmas, afternoon tea and outside catering." />
      <PageHero title="See Our Menus" subtitle="Something for every occasion, appetite and budget" />
      <section style={{ maxWidth: '900px', margin: '0 auto', padding: '64px 24px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {menus.map(m => (
            <Link
              key={m.to}
              to={m.to}
              style={{
                display: 'flex',
                gap: '20px',
                alignItems: 'center',
                backgroundColor: '#FAF7F2',
                border: '1px solid #E8DFD0',
                borderRadius: '8px',
                padding: '24px',
                textDecoration: 'none',
                transition: 'border-color 0.15s, box-shadow 0.15s',
              }}
            >
              <span style={{ fontSize: '36px', flexShrink: 0 }}>{m.icon}</span>
              <div>
                <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '20px', color: '#8B1A1A', marginBottom: '6px' }}>{m.title}</h3>
                <p style={{ color: '#6B5E52', fontSize: '14px', lineHeight: 1.6 }}>{m.desc}</p>
              </div>
              <span style={{ marginLeft: 'auto', color: '#C9A84C', fontSize: '24px', flexShrink: 0 }}>›</span>
            </Link>
          ))}
        </div>
        <div style={{ marginTop: '40px', backgroundColor: '#F0EBE0', borderRadius: '8px', padding: '24px', textAlign: 'center' }}>
          <p style={{ color: '#8B1A1A', fontFamily: "'Playfair Display', Georgia, serif", fontSize: '18px', marginBottom: '8px' }}>
            Can't find what you're looking for?
          </p>
          <p style={{ color: '#6B5E52', fontSize: '14px', marginBottom: '16px' }}>
            We can tailor-make menus to suit your budget and requirements. Just give us a call.
          </p>
          <a href="tel:01298812776" style={{ color: '#8B1A1A', fontWeight: 700, fontSize: '18px', textDecoration: 'none' }}>
            01298 812776
          </a>
        </div>
      </section>
    </div>
  )
}
