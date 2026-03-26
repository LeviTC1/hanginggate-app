import SEO from '../components/SEO'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'

const stats = [
  { number: '35,000', label: 'lights' },
  { number: '7,000+', label: 'baubles' },
  { number: '1,700', label: 'lengths of garland' },
  { number: '3+', label: 'weeks to put up' },
]

const gallery = [
  { src: '/images/christmas-fireplace.jpg', alt: 'Christmas decorations around the fireplace' },
  { src: '/images/christmas-snow-room.jpg', alt: 'The snow room' },
  { src: '/images/christmas-bear.jpg', alt: 'Christmas Bear' },
  { src: '/images/christmas-misc.jpg', alt: 'Christmas decorations at The Hanging Gate' },
  { src: '/images/christmas-window.jpg', alt: 'Red & gold themed Christmas decorations in the window' },
  { src: '/images/christmas-decorations.jpg', alt: 'Christmas decorations' },
]

export default function Christmas() {
  return (
    <div>
      <SEO path="/christmas" description="The Hanging Gate is famous for spectacular Christmas decorations — 35,000 lights, 7,000 baubles. As seen on BBC, ITV and NBC America." image="/images/christmas-fireplace.jpg" />
      <PageHero title="Christmas at The Hanging Gate" subtitle="As seen on BBC, ITV Granada Tonight & NBC America" />
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '64px 24px' }}>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '16px', marginBottom: '56px' }}>
          {stats.map(s => (
            <div key={s.label} style={{ backgroundColor: '#3D0808', borderRadius: '8px', padding: '24px 16px', textAlign: 'center', color: 'white' }}>
              <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '28px', fontWeight: 700, color: '#E2C97E' }}>{s.number}</div>
              <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.75)', marginTop: '6px' }}>{s.label}</div>
            </div>
          ))}
        </div>

        <div style={{ marginBottom: '56px' }}>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '28px', color: '#8B1A1A', marginBottom: '20px' }}>
            The Decorations
          </h2>
          <p style={{ color: '#4A3D34', fontSize: '16px', lineHeight: 1.8, marginBottom: '16px' }}>
            We are renowned for our Christmas decorations. In 2009 and 2012 we were featured live on
            <strong> Granada Tonight and BBC Northwest News</strong>. In 2014 we made it to the USA —
            NBC came to film the decorations and we were watched on TV all over America. We've also
            been featured in <em>The Daily Mail</em>, <em>The Telegraph</em> and <em>The Sun</em>.
          </p>
          <p style={{ color: '#4A3D34', fontSize: '16px', lineHeight: 1.8, marginBottom: '16px' }}>
            The decorations take us over three weeks to put up, and we build on them each year.
            Last year there were over 1,700 lengths of garland used on the ceilings and walls —
            that's five times the length of Old Trafford. Over 7,000 baubles were strung up, and
            most staggeringly of all, <strong>35,000 lights</strong> were used to illuminate the pub.
          </p>
          <p style={{ color: '#4A3D34', fontSize: '16px', lineHeight: 1.8 }}>
            We also dress the pub for <strong>Valentine's Day</strong>, <strong>Easter</strong>,
            and our Halloween decorations have received rave reviews too.
          </p>
        </div>

        {/* Photo gallery */}
        <div style={{ marginBottom: '56px' }}>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '24px', color: '#8B1A1A', marginBottom: '20px' }}>
            Photo Gallery
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '12px' }}>
            {gallery.map((img, i) => (
              <div key={i} style={{
                borderRadius: '8px',
                overflow: 'hidden',
                aspectRatio: i === 0 || i === 5 ? '16/9' : '4/3',
                gridColumn: i === 0 ? 'span 2' : undefined,
              }}>
                <img
                  src={img.src}
                  alt={img.alt}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>
            ))}
          </div>
        </div>

        <div style={{ backgroundColor: '#F0EBE0', borderRadius: '8px', padding: '28px', display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          <div>
            <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '20px', color: '#8B1A1A', marginBottom: '4px' }}>
              Decorations up by 20th November
            </h3>
            <p style={{ color: '#6B5E52', fontSize: '14px' }}>Down on 6th January · Closed Christmas Day</p>
          </div>
          <Link to="/menus/christmas" style={{
            backgroundColor: '#8B1A1A', color: 'white', padding: '12px 24px', borderRadius: '4px',
            textDecoration: 'none', fontWeight: 600, fontSize: '14px', whiteSpace: 'nowrap',
          }}>
            View Christmas Menus
          </Link>
        </div>
      </div>
    </div>
  )
}
