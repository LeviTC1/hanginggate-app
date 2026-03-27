import SEO from '../components/SEO'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'

export default function SetMenu() {
  return (
    <div>
      <SEO path="/menus/set-menu" description="3 course set menu at The Hanging Gate for £27.95 per head. Available all day every day (excluding December and certain dates)." />
      <PageHero title="3 Course Set Menu" subtitle="£27.95 per head · Available all day, every day" />
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '64px 24px' }}>
        <Link to="/menus" style={{ color: 'var(--gold-light)', textDecoration: 'none', fontSize: '14px', display: 'inline-flex', alignItems: 'center', gap: '6px', marginBottom: '40px' }}>
          ← Back to Menus
        </Link>

        <div style={{ backgroundColor: 'var(--surface-warm)', borderRadius: '8px', padding: '16px 24px', marginBottom: '40px', fontSize: '14px', color: 'var(--text-secondary)' }}>
          <strong style={{ color: 'var(--gold-light)' }}>Please note:</strong> Excluding December, Valentine's Day, Mothering Sunday, and the first week of January.
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          {[
            {
              course: 'Starters',
              items: [
                'Soup of the Day — served with roll and butter',
                'Home-Made Pâté — served with toast',
                'Deep Fried Mozzarella Sticks — served with sweet chilli',
                'Creamy Garlic Mushrooms — salad & crusty roll',
                'Black Pudding — with creamy pepper sauce',
                'Crispy Breaded Chicken Strips — with sweet chilli',
              ]
            },
            {
              course: 'Main Courses',
              items: [
                '8oz Rump Steak — served with chips & vegetables',
                'Pepper Chicken — 8oz chicken breast in a creamy pepper sauce, chips & veg',
                'Creamy Cheese Leek Bake — salad and chips',
                '8oz Gammon Steak — topped with fried egg, served with peas, onion rings & chips',
                'Farmhouse Platter — assorted cheese, ham, pâté, salad, pork pie, scotch egg, French bread & pickles',
                'Bonanza Burger — 6oz burger, crispy chicken strips, smoked bacon & melted cheese, chips & salad',
                'Cajun Salmon — fresh salmon with cajun butter, mashed potato and vegetables',
                'Mixed Roast — hand carved roast beef & turkey with new potatoes, roast potatoes, vegetables, stuffing & Yorkshire pudding',
              ]
            },
            {
              course: 'Desserts',
              items: [
                'Banana & Butterscotch Meringue — fresh cream & ice cream',
                'Baileys Cheesecake — with fresh cream',
                'Apple & Caramel Crumble — fresh cream, ice cream or custard',
                'Profiteroles — filled with fresh cream',
                'Ice Cream — with butterscotch sauce',
                'Cheese & Biscuits',
              ]
            }
          ].map(({ course, items }) => (
            <div key={course}>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', color: 'var(--gold-light)', marginBottom: '16px', paddingBottom: '10px', borderBottom: '2px solid var(--border-default)' }}>
                {course}
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {items.map(item => (
                  <div key={item} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', padding: '12px 16px', backgroundColor: 'var(--surface-card)', borderRadius: '6px', border: '1px solid var(--border-default)' }}>
                    <span style={{ color: 'var(--gold)', flexShrink: 0, marginTop: '2px' }}>✦</span>
                    <span style={{ color: 'var(--text-primary)', fontSize: '15px', lineHeight: 1.5 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '48px', backgroundColor: 'var(--surface-dark-2)', borderRadius: '8px', padding: '32px', textAlign: 'center', color: 'white' }}>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '36px', fontWeight: 700, color: 'var(--gold-light)', marginBottom: '8px' }}>£27.95</div>
          <div style={{ fontSize: '16px', marginBottom: '20px', opacity: 0.9 }}>per head · 3 courses</div>
          <Link to="/book" className="btn btn-reserve">
            Reserve Your Table
          </Link>
        </div>
      </div>
    </div>
  )
}
