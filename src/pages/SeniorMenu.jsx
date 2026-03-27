import SEO from '../components/SEO'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'

function Course({ title, items }) {
  return (
    <div style={{ marginBottom: '32px' }}>
      <SEO path="/menus/senior" description="Senior citizen menu at The Hanging Gate. Two courses £15.95, three courses £17.50. Available Mon–Fri 12–7pm, Sat 12–5pm." />
      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '20px', color: 'var(--gold-light)', marginBottom: '12px', paddingBottom: '8px', borderBottom: '1px solid var(--border-default)' }}>
        {title}
      </h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '8px' }}>
        {items.map(item => (
          <div key={item.name} style={{ padding: '10px 14px', backgroundColor: 'var(--surface-card)', borderRadius: '6px', border: '1px solid var(--border-default)' }}>
            <div style={{ fontWeight: 500, color: 'var(--text-primary)', fontSize: '14px' }}>{item.name}</div>
            {item.desc && <div style={{ color: 'var(--text-secondary)', fontSize: '12px', marginTop: '3px' }}>{item.desc}</div>}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function SeniorMenu() {
  return (
    <div>
      <PageHero title="Senior Citizen Menu" subtitle="Mon–Fri 12–7pm · Sat 12–5pm · Excluding December & Bank Holidays" />
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '64px 24px' }}>
        <Link to="/menus" style={{ color: 'var(--gold-light)', textDecoration: 'none', fontSize: '14px', display: 'inline-flex', alignItems: 'center', gap: '6px', marginBottom: '40px' }}>
          ← Back to Menus
        </Link>

        <div style={{ display: 'flex', gap: '16px', marginBottom: '40px', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: '160px', backgroundColor: 'var(--surface-dark-2)', color: 'white', borderRadius: '8px', padding: '24px', textAlign: 'center' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '28px', fontWeight: 700 }}>£15.95</div>
            <div style={{ fontSize: '14px', marginTop: '4px', opacity: 0.85 }}>Two Courses</div>
          </div>
          <div style={{ flex: 1, minWidth: '160px', backgroundColor: 'var(--gold)', color: '#1a1208', borderRadius: '8px', padding: '24px', textAlign: 'center' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '28px', fontWeight: 700 }}>£17.50</div>
            <div style={{ fontSize: '14px', marginTop: '4px' }}>Three Courses</div>
          </div>
        </div>

        <Course title="Something to Start With" items={[
          { name: 'Soup of the Day', desc: 'Served with a roll and butter' },
          { name: 'Homemade Country Pâté', desc: 'Served with toast' },
          { name: 'Garlic Mushrooms', desc: 'Served with salad and roll & butter' },
          { name: 'Prawn Cocktail', desc: 'Served with brown bread' },
          { name: 'Chilled Melon', desc: 'Garnished with fruit' },
          { name: 'Black Pudding', desc: 'With a creamy pepper sauce' },
          { name: 'Smoked Haddock & Mozzarella Fishcake', desc: 'Served with sweet chilli' },
        ]} />

        <Course title="Main Courses" items={[
          { name: 'Chicken Curry', desc: 'Served with rice, chips and naan bread' },
          { name: 'Deep Fried Scampi', desc: 'Served with salad and chips' },
          { name: 'Roast Lamb or Turkey', desc: 'Served with vegetables, new & roast potatoes' },
          { name: 'Cheesy Leek and Potato Bake', desc: 'Served with salad and chips' },
          { name: 'Steak Pie', desc: 'Served with vegetables and chips' },
          { name: 'Gammon Steak & Egg', desc: 'Served with chips & vegetables' },
          { name: 'Cheese & Onion Flan', desc: 'Served with vegetables and chips' },
          { name: 'Farmhouse Platter', desc: 'Ham, cheese, pâté, French bread, pickles and a crisp salad' },
          { name: 'Pepper Chicken', desc: 'Served with chips, vegetables and pepper sauce' },
        ]} />

        <Course title="Desserts" items={[
          { name: 'Baileys Cheesecake', desc: 'Served with fresh cream' },
          { name: 'Apple & Caramel Crumble', desc: 'Served with cream' },
          { name: 'Sherry Trifle', desc: 'Served with cream and custard' },
          { name: 'Ice Cream', desc: 'With butterscotch sauce' },
          { name: 'Profiteroles', desc: 'Served with fresh cream' },
          { name: 'Banana & Butterscotch Meringue', desc: 'Served with fresh cream & ice cream' },
        ]} />

        <div style={{ backgroundColor: 'var(--surface-warm)', borderRadius: '8px', padding: '24px', textAlign: 'center' }}>
          <p style={{ color: 'var(--gold-light)', fontFamily: 'var(--font-display)', fontSize: '18px', marginBottom: '8px' }}>
            Reserve Your Table
          </p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '14px', marginBottom: '12px' }}>
            Entertainment also available for senior citizens coach parties if required.
          </p>
          <Link to="/book" className="btn btn-reserve">
            Book Online
          </Link>
        </div>
      </div>
    </div>
  )
}
