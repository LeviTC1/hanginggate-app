import SEO from '../components/SEO'
import PageHero from '../components/PageHero'

const menus = [
  {
    name: 'Menu 1',
    price: '£7.00 per head',
    items: [
      'Sliced home cooked silverside of beef',
      'Sliced home cooked ham',
      'French breads',
      'Pork pies & sausage rolls',
      'Cajun pasta',
      'Mini scotch eggs',
      'Mini sausages',
      'Mixed salad bowls',
      'Potato salad & home-made coleslaw',
      'Crisps & assorted dips',
    ],
    note: '** Mixed sandwiches available instead of sliced meats and bread if required @ £1 per head extra',
  },
  {
    name: 'Menu 2',
    price: '£9.00 per head',
    items: [
      'Everything in Menu 1, plus:',
      'Cheese and onion quiche',
      'Breaded chicken strips',
      'Cheese & biscuits',
      'Profiterole mountain',
    ],
  },
  {
    name: 'Menu 3',
    price: '£16.00 per head',
    items: [
      'Everything in Menu 2, plus:',
      'Tuna mayo vol au vents',
      'Mixed nachos with dips',
      'Homemade pâté & melba toast',
      'Cured meat selection',
      'Greek salad',
      'Prawns & Marie Rose',
    ],
  },
]

export default function OutsideCatering() {
  return (
    <div>
      <SEO path="/outside-catering" description="Outside catering & buffets from The Hanging Gate from £7 per head. Free delivery across Derbyshire & Cheshire. Vegan/vegetarian options available." />
      <PageHero title="Outside Catering & Buffets" subtitle="Free delivery across Derbyshire & Cheshire · From £7 per head" />
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '64px 24px' }}>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '16px', marginBottom: '56px' }}>
          {[
            { icon: '🚐', label: 'Free Delivery', sub: 'Derbyshire & Cheshire' },
            { icon: '👥', label: 'Min 30 People', sub: 'All functions welcome' },
            { icon: '🎂', label: 'All Occasions', sub: 'Weddings, birthdays, funerals' },
            { icon: '🥗', label: 'Plates & Cutlery', sub: 'Included with every order' },
          ].map(f => (
            <div key={f.label} style={{ backgroundColor: '#FAF7F2', border: '1px solid #E8DFD0', borderRadius: '8px', padding: '20px', textAlign: 'center' }}>
              <div style={{ fontSize: '28px', marginBottom: '8px' }}>{f.icon}</div>
              <div style={{ fontWeight: 600, color: '#8B1A1A', fontSize: '14px' }}>{f.label}</div>
              <div style={{ color: '#6B5E52', fontSize: '12px', marginTop: '4px' }}>{f.sub}</div>
            </div>
          ))}
        </div>

        <p style={{ color: '#4A3D34', fontSize: '16px', lineHeight: 1.8, marginBottom: '16px' }}>
          We are doing outside catering for all functions — weddings, birthdays, christenings & funerals.
          We can cater for all and deliver all over Derbyshire and Cheshire. Hot & cold buffets available,
          delivered to your chosen venue. All buffets and outside catering come with plates and cutlery
          and include <strong>free delivery — distance no object dependant on size of party</strong>.
        </p>
        <p style={{ color: '#4A3D34', fontSize: '16px', lineHeight: 1.8, marginBottom: '16px' }}>
          The menus below are our most popular samples. We can discuss your requirements and tailor-make
          menus to suit your budget. <strong>Vegan/vegetarian options also available.</strong>
        </p>
        <p style={{ color: '#4A3D34', fontSize: '15px', lineHeight: 1.8, marginBottom: '40px' }}>
          See our <strong>Facebook page</strong> for pictures of our catering in action.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px', marginBottom: '48px' }}>
          {menus.map((m, i) => (
            <div key={m.name} style={{
              backgroundColor: '#FAF7F2',
              border: `2px solid ${i === 1 ? '#8B1A1A' : '#E8DFD0'}`,
              borderRadius: '10px',
              overflow: 'hidden',
              position: 'relative',
            }}>
              {i === 1 && (
                <div style={{ backgroundColor: '#8B1A1A', color: 'white', textAlign: 'center', fontSize: '12px', fontWeight: 600, padding: '6px', letterSpacing: '1px' }}>
                  POPULAR CHOICE
                </div>
              )}
              <div style={{ padding: '24px' }}>
                <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '22px', color: '#8B1A1A', marginBottom: '4px' }}>{m.name}</div>
                <div style={{ color: '#C9A84C', fontWeight: 700, fontSize: '20px', marginBottom: '20px' }}>{m.price}</div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {m.items.map(item => (
                    <li key={item} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                      <span style={{ color: '#C9A84C', flexShrink: 0, marginTop: '3px', fontSize: '12px' }}>✦</span>
                      <span style={{ color: '#4A3D34', fontSize: '14px', lineHeight: 1.5 }}>{item}</span>
                    </li>
                  ))}
                </ul>
                {m.note && <p style={{ color: '#6B5E52', fontSize: '12px', marginTop: '16px', fontStyle: 'italic' }}>{m.note}</p>}
              </div>
            </div>
          ))}
        </div>

        <div style={{ backgroundColor: '#8B1A1A', borderRadius: '8px', padding: '32px', textAlign: 'center', color: 'white' }}>
          <p style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '22px', color: '#E2C97E', marginBottom: '8px' }}>
            Also available: Vegan & Vegetarian options
          </p>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '15px', marginBottom: '20px' }}>
            For more details or bespoke menu options, please contact Mark directly.
          </p>
          <a href="tel:01298812776" style={{ backgroundColor: '#E2C97E', color: '#3D0808', padding: '14px 32px', borderRadius: '4px', textDecoration: 'none', fontWeight: 700, fontSize: '16px', display: 'inline-block' }}>
            Call Mark: 01298 812776
          </a>
        </div>
      </div>
    </div>
  )
}
