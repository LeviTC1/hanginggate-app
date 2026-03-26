import SEO from '../components/SEO'
import PageHero from '../components/PageHero'

export default function History() {
  return (
    <div>
      <SEO path="/history" description="The history of The Hanging Gate dates back over 400 years — from a shoemaker's workshop to one of the Peak District's most beloved pubs." />
      <PageHero title="Our History" subtitle="Over 400 years in the making" />
      <section style={{ maxWidth: '760px', margin: '0 auto', padding: '64px 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '40px' }}>
          <div style={{ height: '1px', flex: 1, backgroundColor: '#E8DFD0' }} />
          <span style={{ color: '#C9A84C', fontSize: '20px' }}>✦</span>
          <div style={{ height: '1px', flex: 1, backgroundColor: '#E8DFD0' }} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          <div style={{ borderLeft: '3px solid #8B1A1A', paddingLeft: '24px' }}>
            <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '22px', color: '#8B1A1A', marginBottom: '12px' }}>
              The Origins
            </h3>
            <p style={{ color: '#4A3D34', fontSize: '16px', lineHeight: 1.8 }}>
              The history of The Hanging Gate can be dated back to over four hundred years ago when it was a
              shoemakers workshop owned by John Barratt and his wife Sarah. The building didn't open as a
              public house until <strong>1836</strong>.
            </p>
          </div>

          <div style={{ borderLeft: '3px solid #C9A84C', paddingLeft: '24px' }}>
            <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '22px', color: '#8B1A1A', marginBottom: '12px' }}>
              The Hanging Gate
            </h3>
            <p style={{ color: '#4A3D34', fontSize: '16px', lineHeight: 1.8 }}>
              At the time the road had a large gate across it so that a toll could be charged to travellers —
              hence 'The Hanging Gate'. The pub has grown in size since these times, but the
              <em> 'half a yard wide'</em> walls from the original structure are the very same walls within
              which we welcome you today.
            </p>
          </div>

          <div style={{ borderLeft: '3px solid #8B1A1A', paddingLeft: '24px' }}>
            <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '22px', color: '#8B1A1A', marginBottom: '12px' }}>
              Today
            </h3>
            <p style={{ color: '#4A3D34', fontSize: '16px', lineHeight: 1.8 }}>
              In the last 65 years the pub has had no fewer than 17 different landlords. The most recent,
              <strong> Mark Thomas</strong>, is the longest serving licensee at 35 years — and he loves his
              job as much today as when he started in 1991.
            </p>
          </div>
        </div>

        <div style={{ marginTop: '56px', backgroundColor: '#F0EBE0', borderRadius: '8px', padding: '32px', textAlign: 'center' }}>
          <p style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '22px', fontStyle: 'italic', color: '#8B1A1A' }}>
            "The same walls that once sheltered a shoemaker now shelter friends, families and memorable meals."
          </p>
        </div>
      </section>
    </div>
  )
}
