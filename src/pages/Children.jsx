import SEO from '../components/SEO'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'

export default function Children() {
  return (
    <div>
      <SEO path="/children" description="The Hanging Gate is officially Baby Friendly with a dedicated parent & baby room, colouring corner and children's menu in Chapel-en-le-Frith, High Peak, Derbyshire." />
      <PageHero title="Children's Amenities" subtitle="Officially Baby Friendly · Colouring Corner · Outdoor Play Area" />
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '64px 24px' }}>

        {/* Intro */}
        <p style={{ color: 'rgba(241,244,236,0.9)', fontSize: '17px', lineHeight: 1.9, marginBottom: '20px' }}>
          Here at the Hanging Gate we welcome children and believe that they are just as important
          (if not more so!) than the grown ups. It is our intention that they shall be catered for
          in as many ways as possible and that if we have satisfied kids then we will also have happy
          parents and carers, yey!!
        </p>
        <p style={{ color: 'rgba(241,244,236,0.9)', fontSize: '17px', lineHeight: 1.9, marginBottom: '48px' }}>
          Our Children's Menu has many children's favourites, and some that will please mum too!!
          To see what we have to offer, look at the special Children's Selection on our{' '}
          <Link to="/menus/bar-restaurant" style={{ color: 'var(--gold-light)', fontWeight: 600 }}>Bar/Restaurant menu</Link>.
        </p>

        {/* Photo strip */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '56px', borderRadius: '10px', overflow: 'hidden' }}>
          <img
            src="/images/children-play-area.jpg"
            alt="Children's play area at The Hanging Gate"
            style={{ width: '100%', height: '260px', objectFit: 'cover', display: 'block' }}
          />
          <img
            src="/images/children-play-area-2.gif"
            alt="Children's outdoor play area"
            style={{ width: '100%', height: '260px', objectFit: 'cover', display: 'block' }}
          />
        </div>

        {/* Feature cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px', marginBottom: '56px' }}>

          <div style={{ backgroundColor: 'var(--surface-card)', border: '1px solid var(--border-strong)', borderRadius: '10px', padding: '28px 24px' }}>
            <div style={{ fontSize: '36px', marginBottom: '12px' }}>👶</div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '20px', color: 'var(--gold-light)', marginBottom: '10px' }}>
              Officially Baby Friendly
            </h3>
            <p style={{ color: 'rgba(241,244,236,0.9)', fontSize: '14px', lineHeight: 1.8 }}>
              We are tremendously delighted to say that we are officially 'Baby Friendly', thanks to
              the very kind parent for nominating our parent and baby room to{' '}
              <em>Mother and Baby</em> magazine. The room has been decorated with baby in mind and
              includes some of the essentials such as nappies and wipes, along with some brightly
              coloured bits and pieces to take baby's mind off the job in hand! We also have
              complimentary jars of Heinz baby food available.
            </p>
          </div>

          <div style={{ backgroundColor: 'var(--surface-card)', border: '1px solid var(--border-strong)', borderRadius: '10px', padding: '28px 24px' }}>
            <div style={{ fontSize: '36px', marginBottom: '12px' }}>🎨</div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '20px', color: 'var(--gold-light)', marginBottom: '10px' }}>
              Colouring Corner
            </h3>
            <p style={{ color: 'rgba(241,244,236,0.9)', fontSize: '14px', lineHeight: 1.8 }}>
              To keep the little ones busy we have a colouring corner which boasts a range of
              activities including mazes, word searches, fun facts as well as the ever popular
              'colour me' picture — which our colouring co-ordinator Kieran judges monthly with
              prizes for the best.
            </p>
          </div>

          <div style={{ backgroundColor: 'var(--surface-card)', border: '1px solid var(--border-strong)', borderRadius: '10px', padding: '28px 24px' }}>
            <div style={{ fontSize: '36px', marginBottom: '12px' }}>🌳</div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '20px', color: 'var(--gold-light)', marginBottom: '10px' }}>
              Outdoor Play Area
            </h3>
            <p style={{ color: 'rgba(241,244,236,0.9)', fontSize: '14px', lineHeight: 1.8 }}>
              For the warmer months of the year we have an outdoor play area.{' '}
              <strong>(Currently out of use — please check with us for updates.)</strong>
            </p>
          </div>

          <div style={{ backgroundColor: 'var(--surface-card)', border: '1px solid var(--border-strong)', borderRadius: '10px', padding: '28px 24px' }}>
            <div style={{ fontSize: '36px', marginBottom: '12px' }}>🍽️</div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '20px', color: 'var(--gold-light)', marginBottom: '10px' }}>
              Children's Menu
            </h3>
            <p style={{ color: 'rgba(241,244,236,0.9)', fontSize: '14px', lineHeight: 1.8 }}>
              A dedicated children's menu with all their favourites — starters, mains and desserts.
              Available as part of our full bar & restaurant menu. Meals can be served with chips,
              jacket potato with beans, or vegetables.
            </p>
            <Link to="/menus/bar-restaurant" style={{ display: 'inline-block', marginTop: '12px', color: 'var(--gold-light)', fontWeight: 600, fontSize: '14px', textDecoration: 'none' }}>
              View the children's menu →
            </Link>
          </div>

        </div>

        <div style={{ backgroundColor: 'var(--surface-dark-2)', borderRadius: '10px', padding: '36px', textAlign: 'center', color: 'white' }}>
          <p style={{ fontFamily: 'var(--font-display)', fontSize: '22px', color: 'var(--gold-light)', marginBottom: '12px', fontStyle: 'italic' }}>
            "If we have satisfied kids, we will also have happy parents and carers — yey!!"
          </p>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '15px', lineHeight: 1.7 }}>
            Here at the Hanging Gate we welcome children and believe they are just as important as the grown-ups.
          </p>
        </div>
      </div>
    </div>
  )
}
