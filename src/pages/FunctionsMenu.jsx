import SEO from '../components/SEO'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'

export default function FunctionsMenu() {
  return (
    <div>
      <SEO path="/menus/functions" description="Wedding, function and buffet menus at The Hanging Gate. From £29.95 per head, no room hire charge. Buffets from £13.95 per head." />
      <PageHero title="Weddings, Functions & Buffets" subtitle="No room hire charge · All rooms free" />
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '64px 24px' }}>
        <Link to="/menus" style={{ color: 'var(--gold-light)', textDecoration: 'none', fontSize: '14px', display: 'inline-flex', alignItems: 'center', gap: '6px', marginBottom: '40px' }}>
          ← Back to Menus
        </Link>

        <div style={{ backgroundColor: 'var(--surface-warm)', borderRadius: '8px', padding: '20px 24px', marginBottom: '40px', fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
          Your guests will be offered on the day the following menus. They can pick from any of the choices — <strong>no pre-ordering required</strong>. There is also <strong>no room hire charge</strong> for any function at the Hanging Gate. The following are sample menus — you can mix and match from our à la carte menu.
        </div>

        {/* Wedding menu */}
        <div style={{ marginBottom: '48px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '26px', color: 'var(--gold-light)', marginBottom: '20px' }}>
            Sample Wedding Menu — £29.95 per head
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', marginBottom: '20px' }}>
            {[
              { course: 'Starters', items: ['Home-made Soup', 'Home-made Pâté', 'Breaded Chicken Strips', 'Creamy Garlic Mushrooms', 'Chilled Melon'] },
              { course: 'Main Courses', items: ['Roast Beef with Yorkshire pudding', 'Chicken Breast with seasoning', 'Roast Lamb with mint sauce', 'All served with vegetables, new & roast potatoes', 'Vegetarian option available on request'] },
              { course: 'Desserts', items: ['Hot Chocolate Fudge Cake', 'Sherry Trifle', 'Fresh Fruit Salad', 'Apple & Caramel Crumble', 'All served with cream', 'Fresh Brewed Coffee'] },
            ].map(({ course, items }) => (
              <div key={course} style={{ backgroundColor: 'var(--surface-card)', border: '1px solid var(--border-default)', borderRadius: '8px', padding: '20px' }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '17px', color: 'var(--gold-light)', marginBottom: '12px' }}>{course}</h3>
                {items.map(i => (
                  <div key={i} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start', marginBottom: '6px' }}>
                    <span style={{ color: 'var(--gold)', fontSize: '10px', flexShrink: 0, marginTop: '5px' }}>●</span>
                    <span style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 1.5 }}>{i}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div style={{ backgroundColor: 'var(--surface-card)', border: '1px solid var(--border-default)', borderRadius: '8px', padding: '20px' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', color: 'var(--gold-light)', marginBottom: '16px' }}>Drinks Packages</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
              <div style={{ padding: '16px', backgroundColor: 'var(--surface-warm)', borderRadius: '6px' }}>
                <div style={{ fontWeight: 700, color: 'var(--gold-light)', marginBottom: '8px' }}>Menu 1 — £14.95 per head</div>
                <ul style={{ paddingLeft: '16px', fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                  <li>Asti & orange punch on arrival</li>
                  <li>Glass of house wine with meal</li>
                  <li>Glass of Asti for a toast</li>
                </ul>
              </div>
              <div style={{ padding: '16px', backgroundColor: 'var(--surface-warm)', borderRadius: '6px' }}>
                <div style={{ fontWeight: 700, color: 'var(--gold-light)', marginBottom: '8px' }}>Menu 2 — £21.95 per head</div>
                <ul style={{ paddingLeft: '16px', fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                  <li>Bucks Fizz on arrival</li>
                  <li>Two glasses of house wine with meal</li>
                  <li>Glass of Champagne for a toast</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Buffet */}
        <div style={{ marginBottom: '48px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '26px', color: 'var(--gold-light)', marginBottom: '8px' }}>
            Buffet Menus
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '15px', marginBottom: '20px' }}>£13.95 per head Mon–Thu · £15.95 per head Fri–Sun</p>
          <div style={{ backgroundColor: 'var(--surface-card)', border: '1px solid var(--border-default)', borderRadius: '8px', padding: '24px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '8px' }}>
              {[
                'Sliced home roasted ham', 'Sliced silverside of homecooked beef', 'Assorted French breads', 'Assorted chicken drumsticks',
                'Pork pies', 'Mini sausages', 'Cheese & onion quiche', 'Cajun pasta salad',
                'Salad bowls', 'Potato & chive salad', 'Home-made coleslaw', 'Sausage rolls',
                'Various dips', 'Cheese & biscuits', 'Profiterole mountain',
              ].map(i => (
                <div key={i} style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <span style={{ color: 'var(--gold)', flexShrink: 0 }}>✦</span>
                  <span style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>{i}</span>
                </div>
              ))}
            </div>
            <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid var(--border-default)' }}>
              <div style={{ fontWeight: 700, color: 'var(--gold-light)', marginBottom: '8px', fontSize: '14px' }}>Optional extras at additional cost:</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {['Roast Derbyshire Turkey', 'Coronation Chicken', 'Home-Made Pâté & Melba Toast', 'Chilled Melon', 'Egg Mayonnaise', 'Hot Vegetable Samosa', 'Hot New/Chipped Potatoes', 'Spicy Wedges', 'Charcuterie Board', 'Greek Salad', 'Nachos & Dips'].map(e => (
                  <span key={e} style={{ backgroundColor: 'var(--surface-warm)', color: 'var(--text-inverse)', padding: '4px 10px', borderRadius: '20px', fontSize: '13px' }}>{e}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Table plans */}
        <div style={{ backgroundColor: 'var(--surface-card)', border: '1px solid var(--border-default)', borderRadius: '8px', padding: '24px', marginBottom: '16px' }}>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '20px', color: 'var(--gold-light)', marginBottom: '12px' }}>Table Plans</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '15px', lineHeight: 1.7, marginBottom: '8px' }}>
            We will advise the best possible way to accommodate your guests in comfort and will expect you to supply the table plan thereafter.
          </p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '15px', lineHeight: 1.7 }}>
            All special requests will be accommodated to the best of our ability.
          </p>
        </div>

        {/* Flowers */}
        <div style={{ backgroundColor: 'var(--surface-card)', border: '1px solid var(--border-default)', borderRadius: '8px', padding: '24px', marginBottom: '16px' }}>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '20px', color: 'var(--gold-light)', marginBottom: '12px' }}>Flowers</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '15px', lineHeight: 1.7 }}>
            Table arrangements, bouquets, pedestals and baskets can be arranged at an extra cost.
          </p>
        </div>

        {/* Entertainment */}
        <div style={{ backgroundColor: 'var(--surface-card)', border: '1px solid var(--border-default)', borderRadius: '8px', padding: '24px', marginBottom: '24px' }}>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '20px', color: 'var(--gold-light)', marginBottom: '12px' }}>Entertainment</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '15px', lineHeight: 1.7 }}>
            We can cater for all parties including weddings, birthdays, funerals, anniversaries, works conferences and family parties. We have local DJs available and we also have contacts with local agencies if you should require something different, such as vocalists, jazz bands or a comedian etc. Please contact Mark for details.
          </p>
        </div>

        {/* Reservations */}
        <div style={{ backgroundColor: 'var(--surface-dark-2)', borderRadius: '8px', padding: '32px', color: 'white' }}>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', color: 'var(--gold-light)', marginBottom: '16px' }}>Reservations & Payment</h3>
          <ul style={{ fontSize: '14px', lineHeight: 2, opacity: 0.9, paddingLeft: '20px' }}>
            <li>A provisional reservation can be made and held for fourteen days — should written confirmation and a deposit not be received within this time, your reservation could be cancelled without further notice</li>
            <li>Final numbers should be confirmed 48 hours prior to the function — this being the minimum charged for</li>
            <li>Final payment is due on the day by cash or card</li>
            <li>All table linen and arrangements included in wedding packages</li>
          </ul>
          <a href="tel:01298812776" style={{ display: 'inline-block', marginTop: '20px', backgroundColor: 'var(--gold-light)', color: '#1a1208', padding: '12px 28px', borderRadius: '4px', fontWeight: 700, fontSize: '16px', textDecoration: 'none' }}>
            Call Mark: 01298 812776
          </a>
        </div>
      </div>
    </div>
  )
}
