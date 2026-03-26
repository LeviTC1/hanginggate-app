import SEO from '../components/SEO'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'

export default function ChristmasMenuPage() {
  return (
    <div>
      <SEO path="/menus/christmas" description="Christmas menus 2025 at The Hanging Gate. Senior Christmas from £22.95, full Christmas menu from £33.95. Available from 19th November." />
      <PageHero title="Christmas Menus 2025" subtitle="Available from 19th November 2025 · Decorations up by 20th November" />
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '64px 24px' }}>
        <Link to="/menus" style={{ color: '#8B1A1A', textDecoration: 'none', fontSize: '14px', display: 'inline-flex', alignItems: 'center', gap: '6px', marginBottom: '40px' }}>
          ← Back to Menus
        </Link>

        <div style={{ backgroundColor: '#3D0808', color: 'white', borderRadius: '8px', padding: '20px 24px', marginBottom: '40px', textAlign: 'center' }}>
          <span style={{ fontSize: '20px' }}>🎄 </span>
          <strong style={{ color: '#E2C97E' }}>Decorations up by 20th November · Down 6th January</strong>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '14px', marginTop: '6px' }}>We are sorry but we are closed on Christmas Day</p>
        </div>

        {/* Senior Christmas */}
        <div style={{ marginBottom: '56px' }}>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '26px', color: '#8B1A1A', marginBottom: '8px' }}>
            Senior Citizens Christmas Menu 2025
          </h2>
          <p style={{ color: '#6B5E52', fontSize: '14px', marginBottom: '20px' }}>
            Served Wed 19th November 2025 – Tue 6th Jan 2026 · Available all day every day<br />
            <strong>£22.95 lunch only · £24.95 sing-alongs and evenings</strong>
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
            {[
              { course: 'Starters', items: ['Cream of Leek & Potato Soup — with roll and butter', 'Fan of Melon — with fresh fruit coulis', 'Black Pudding — topped with creamy pepper sauce', 'Home-Made Pâté — with red onion chutney', 'Deep Fried Breaded Brie — on a bed of chutney', 'Garlic Mushrooms — with French bread'] },
              { course: 'Main Courses', items: ['Traditional Roast Turkey — with new & roast potatoes, fresh vegetables', 'Beef Stroganoff — slow cooked in mushroom, mustard & white wine sauce', 'Deep Fried Scampi — with chips and salad', 'Chicken Paprikash — with a creamy paprika sauce', 'Gammon Steak & Egg — with chips & vegetables', 'Pepperpot Pork — chunks of pork in creamy pepper sauce', 'Cheesy Leek & Potato Bake — with salad and chips'] },
              { course: 'Desserts', items: ['Christmas Pudding — with brandy sauce', 'Traditional Trifle — with fresh cream', 'Profiteroles — choux pastry with cream & chocolate sauce', 'Apple & Caramel Crumble — with fresh cream', 'Ice Cream — with butterscotch sauce'] },
            ].map(({ course, items }) => (
              <div key={course} style={{ backgroundColor: '#FAF7F2', border: '1px solid #E8DFD0', borderRadius: '8px', padding: '20px' }}>
                <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '17px', color: '#8B1A1A', marginBottom: '12px' }}>{course}</h3>
                {items.map(i => (
                  <div key={i} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start', marginBottom: '8px' }}>
                    <span style={{ color: '#C9A84C', fontSize: '10px', flexShrink: 0, marginTop: '5px' }}>●</span>
                    <span style={{ color: '#4A3D34', fontSize: '14px', lineHeight: 1.5 }}>{i}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Full Christmas Menu */}
        <div style={{ marginBottom: '48px' }}>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '26px', color: '#8B1A1A', marginBottom: '8px' }}>
            Christmas Menu 2025
          </h2>
          <p style={{ color: '#6B5E52', fontSize: '14px', marginBottom: '20px' }}>
            Served from 19th Nov · Available all day every day 12–8pm<br />
            <strong>£33.95 Mon–Thu · £35.95 Fri–Sun</strong>
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
            {[
              { course: 'Starters', items: ['Cream of Leek & Potato Soup — with roll & butter', 'Home-Made Pâté — with red wine chutney', 'Black Pudding — with creamy pepper sauce', 'Fan of Melon — with fresh fruit coulis', 'Creamy Garlic Mushrooms — with French bread', 'Chicken Strips — with BBQ dip', 'Breaded Brie — on a bed of chutney'] },
              { course: 'Main Courses', items: ['Traditional Roast Turkey — with stuffing', 'Beef Stroganoff — slow cooked in mushroom, mustard & white wine sauce', 'Chicken Paprikash — with creamy paprika sauce', 'Deep Fried Scampi — with chips, peas & salad', 'Peppered Burger — 6oz bacon cheeseburger with pepper sauce', 'Cheesy Leek & Potato Bake — with chips & salad', 'Pepperpot Pork — in creamy pepper sauce', '10oz Rump Steak — £3 extra'] },
              { course: 'Desserts', items: ['Christmas Pudding — with brandy sauce', 'Traditional Trifle — topped with fresh cream', 'Apple & Caramel Crumble — with fresh cream', 'Ice Cream — with butterscotch sauce', 'Profiteroles — with fresh cream & chocolate sauce', 'Cheese & Biscuits — with crackers & pickles'] },
            ].map(({ course, items }) => (
              <div key={course} style={{ backgroundColor: '#FAF7F2', border: '1px solid #E8DFD0', borderRadius: '8px', padding: '20px' }}>
                <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '17px', color: '#8B1A1A', marginBottom: '12px' }}>{course}</h3>
                {items.map(i => (
                  <div key={i} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start', marginBottom: '8px' }}>
                    <span style={{ color: '#C9A84C', fontSize: '10px', flexShrink: 0, marginTop: '5px' }}>●</span>
                    <span style={{ color: '#4A3D34', fontSize: '14px', lineHeight: 1.5 }}>{i}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div style={{ backgroundColor: '#3D0808', borderRadius: '8px', padding: '28px', textAlign: 'center', color: 'white' }}>
          <p style={{ color: '#E2C97E', fontFamily: "'Playfair Display', Georgia, serif", fontSize: '20px', marginBottom: '12px' }}>
            Boxing Day & New Year's Eve
          </p>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '15px', marginBottom: '20px' }}>
            All menus available · Open from 10am for breakfasts
          </p>
          <a href="tel:01298812776" style={{ backgroundColor: '#E2C97E', color: '#3D0808', padding: '12px 28px', borderRadius: '4px', textDecoration: 'none', fontWeight: 700, fontSize: '16px', display: 'inline-block' }}>
            Call 01298 812776 to reserve
          </a>
        </div>
      </div>
    </div>
  )
}
