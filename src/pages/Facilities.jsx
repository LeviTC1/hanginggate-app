import SEO from '../components/SEO'
import PageHero from '../components/PageHero'

const touches = [
  'Banners and balloons for birthdays, anniversaries or any occasion',
  'Champagne on ice on your table',
  'Tablecloths & table dressings',
  'Flower arrangements',
  'Entertainment (DJs, vocalists, jazz bands, comedians)',
]

const accessibility = [
  'Widened doorways throughout',
  'Accessible toilet facilities',
  'Ramps inside and out',
  'Exterior doorbell',
  'Guide dogs welcome',
  'Staff trained in accessibility & inclusion',
]

export default function Facilities() {
  return (
    <div>
      <SEO path="/facilities" description="Function rooms for up to 180 guests, free room hire. Weddings, christenings, funerals and birthdays. Fully accessible venue in Chapel-en-le-Frith." />
      <PageHero title="Facilities & Accessibility" subtitle="We cater for every occasion — and every guest" />
      <section style={{ maxWidth: '1000px', margin: '0 auto', padding: '64px 24px' }}>

        {/* Facilities photo */}
        <div style={{ marginBottom: '48px', borderRadius: '10px', overflow: 'hidden' }}>
          <img
            src="/images/facilities.jpg"
            alt="The Hanging Gate function facilities"
            style={{ width: '100%', maxHeight: '380px', objectFit: 'cover', display: 'block' }}
          />
        </div>

        {/* Functions */}
        <div style={{ marginBottom: '56px' }}>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '28px', color: '#8B1A1A', marginBottom: '16px' }}>
            Functions & Events
          </h2>
          <p style={{ color: '#4A3D34', fontSize: '16px', lineHeight: 1.8, marginBottom: '16px' }}>
            We can provide for many different functions here at the Hanging Gate — weddings, christenings,
            funerals & birthdays. We can accommodate up to <strong>180 guests</strong> and have various sized
            rooms to cater for parties of all sizes from 100 down to 2.
          </p>
          <p style={{ color: '#4A3D34', fontSize: '16px', lineHeight: 1.8 }}>
            We will advise the best and most comfortable way to accommodate your guests, ensuring we meet your
            requirements to the best of our ability.
          </p>
          <div style={{ marginTop: '24px', display: 'inline-block', backgroundColor: '#8B1A1A', color: 'white', padding: '12px 24px', borderRadius: '4px', fontWeight: 600, fontSize: '15px' }}>
            All rooms are FREE to hire
          </div>
        </div>

        {/* Special Touches */}
        <div style={{ backgroundColor: '#F0EBE0', borderRadius: '8px', padding: '36px', marginBottom: '48px' }}>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '26px', color: '#8B1A1A', marginBottom: '20px' }}>
            Special Touches
          </h2>
          <p style={{ color: '#4A3D34', fontSize: '15px', lineHeight: 1.7, marginBottom: '20px' }}>
            To customise your event, it's important to us that we can offer you a personalised service:
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '12px' }}>
            {touches.map(t => (
              <div key={t} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <span style={{ color: '#C9A84C', marginTop: '3px', flexShrink: 0 }}>✦</span>
                <span style={{ color: '#4A3D34', fontSize: '15px', lineHeight: 1.6 }}>{t}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Accessibility */}
        <div>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '28px', color: '#8B1A1A', marginBottom: '16px' }}>
            Accessibility
          </h2>
          <p style={{ color: '#4A3D34', fontSize: '16px', lineHeight: 1.8, marginBottom: '16px' }}>
            It is our intention at The Hanging Gate to make our pub as inclusive as possible.
            We recognise the Disability Discrimination Act (1995) and for those who need assistance we shall
            endeavour to provide support, remaining flexible to individual needs. We are currently training
            our staff in all aspects of accessibility and inclusion to ensure the best of service for all
            our customers.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '12px', marginBottom: '24px' }}>
            {accessibility.map(a => (
              <div key={a} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', backgroundColor: '#FAF7F2', padding: '14px 16px', borderRadius: '6px', border: '1px solid #E8DFD0' }}>
                <span style={{ color: '#5C7A4A', marginTop: '2px', flexShrink: 0, fontSize: '18px' }}>✓</span>
                <span style={{ color: '#4A3D34', fontSize: '15px' }}>{a}</span>
              </div>
            ))}
          </div>
          <p style={{ color: '#6B5E52', fontSize: '15px', lineHeight: 1.7, fontStyle: 'italic' }}>
            We invite and encourage you to ring or email in advance of your visit with us to discuss any
            requirements that may enhance your time here and so that we can greet you and be of assistance
            if required.
          </p>
        </div>

      </section>
    </div>
  )
}
