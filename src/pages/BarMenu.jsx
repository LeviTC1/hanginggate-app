import SEO from '../components/SEO'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'

function Section({ title, children }) {
  return (
    <div style={{ marginBottom: '48px' }}>
      <SEO path="/menus/bar-restaurant" description="Full bar & restaurant menu at The Hanging Gate. Breakfasts from 10am, steaks, fish, roasts, vegetarian options, children's menu and desserts." />
      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '24px', color: 'var(--gold-light)', marginBottom: '6px', paddingBottom: '12px', borderBottom: '2px solid var(--border-default)' }}>
        {title}
      </h2>
      {children}
    </div>
  )
}

function MenuItem({ name, price, desc }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', padding: '14px 0', borderBottom: '1px solid var(--surface-warm)', gap: '16px' }}>
      <div>
        <div style={{ fontWeight: 500, color: 'var(--text-primary)', fontSize: '15px' }}>{name}</div>
        {desc && <div style={{ color: 'var(--text-secondary)', fontSize: '13px', marginTop: '3px', lineHeight: 1.5 }}>{desc}</div>}
      </div>
      {price && <div style={{ color: 'var(--gold-light)', fontWeight: 700, fontSize: '15px', flexShrink: 0 }}>{price}</div>}
    </div>
  )
}

export default function BarMenu() {
  return (
    <div>
      <PageHero title="Bar & Restaurant Menu" subtitle="Served every day from 10am" />
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '64px 24px' }}>
        <Link to="/menus" style={{ color: 'var(--gold-light)', textDecoration: 'none', fontSize: '14px', display: 'inline-flex', alignItems: 'center', gap: '6px', marginBottom: '40px' }}>
          ← Back to Menus
        </Link>

        <Section title="🍳 Breakfasts — Available 10am–12noon only">
          <MenuItem name="Full English Breakfast" price="£15.50" desc="2 bacon, 2 sausage, egg, beans, mushrooms, tomatoes, fried bread and toast" />
          <MenuItem name="Bonanza Breakfast" price="£17.50" desc="3 bacon, 2 egg, 2 sausage, 2 hash browns, 2 black pudding, fried bread, mushrooms, beans, tomatoes & toast" />
          <MenuItem name="Ultimate Bonanza" price="£19.50" desc="4 bacon, 3 sausage, 2 eggs, 3 hash browns, 2 black pudding, sautéed potatoes, fried bread, mushrooms, tomatoes, beans and 2 toast" />
          <MenuItem name="Veggie Breakfast" price="£14.50" desc="Vegi sausage, hash browns, egg, fried bread, beans, mushrooms, tomatoes and toast" />
          <MenuItem name="Bacon or Sausage Sandwich" price="£6.95" />
          <MenuItem name="Bacon & Egg Sandwich" price="£7.50" />
          <MenuItem name="Bacon, Egg & Sausage Sandwich" price="£7.95" />
          <MenuItem name="Beans on Toast" price="£6.95" />
        </Section>

        <Section title="🥗 Starters">
          <MenuItem name="Southern Style Breaded Chicken Strips" price="£7.95" desc="Served with salad and a sweet chilli dip" />
          <MenuItem name="Soup of the Day" price="£6.95" desc="Served with French bread" />
          <MenuItem name="Home-Made Pâté" price="£7.95" desc="Garnished with salad and served with French bread" />
          <MenuItem name="Classic Prawn Cocktail" price="£8.25" desc="Prawns on crispy lettuce with home-made Marie rose sauce, served with brown bread" />
          <MenuItem name="Garlic Mushrooms" price="£7.95" desc="Mushrooms in a creamy garlic sauce, served with French bread and salad" />
          <MenuItem name="Thai Style King Prawns" price="£7.75" desc="King prawns in filo pastry, deep fried, garnished with salad and sweet chilli" />
          <MenuItem name="Black Pudding" price="£7.75" desc="Topped with a creamy pepper sauce" />
          <MenuItem name="9″ Garlic Bread" price="£6.75" />
          <MenuItem name="9″ Garlic Bread with Cheese" price="£7.75" />
          <MenuItem name="Chilled Melon" price="£6.50" desc="Garnished with fresh fruit" />
          <MenuItem name="Smoked Salmon" price="£8.95" desc="Garnished with side salad and brown bread" />
          <MenuItem name="Breaded Mushrooms" price="£7.95" desc="Served with salad and a garlic mayo dip" />
          <MenuItem name="Haddock & Salmon Fish Cakes" price="£8.25" desc="Garnished with side salad and sweet chilli sauce" />
        </Section>

        <Section title="🥧 Firm Favourites">
          <MenuItem name="Home-Made Steak Pie" price="£17.95" desc="Homemade with short crust pastry, served with veg and chips" />
          <MenuItem name="Home-Made Cheese & Onion Flan" price="£16.95" desc="Served with salad, chips and peas" />
          <MenuItem name="Lasagne" price="£16.95" desc="Served with salad and chips" />
          <MenuItem name="Cajun Chicken Stack" price="£16.95" desc="Chicken breast topped with smoked bacon and melted cheese in a soft bap with salad and chips" />
          <MenuItem name="The Ultimate Wrap" price="£20.95" desc="6oz rump steak and a full chicken breast, pan fried with fried onions in a creamy pepper sauce, served in a tortilla with salad and chips" />
          <MenuItem name="6oz Cheese & Bacon Burger" price="£16.95" />
          <MenuItem name="Ultimate Burger" price="£20.95" desc="6oz burger, 6oz chicken, bacon, melted cheese, onion rings on a soft muffin with salad and chips" />
        </Section>

        <Section title="🥖 Baguettes — Available until 6pm only">
          <div style={{ color: 'var(--text-secondary)', fontSize: '13px', marginBottom: '8px', fontStyle: 'italic' }}>All baguettes served on wholemeal or white with salad & chips</div>
          <MenuItem name="Beef, Onion & Horseradish" price="£11.95" />
          <MenuItem name="Tuna Mayonnaise" price="£11.95" />
          <MenuItem name="Ham, Mature Cheddar & Branston" price="£11.95" />
          <MenuItem name="Turkey & Cranberry" price="£11.95" />
          <MenuItem name="Prawn & Marie Rose" price="£12.95" />
          <MenuItem name="Smoked Salmon & Cream Cheese" price="£12.95" />
        </Section>

        <Section title="🥔 Jacket Potatoes — Available until 6pm only">
          <div style={{ color: 'var(--text-secondary)', fontSize: '13px', marginBottom: '8px', fontStyle: 'italic' }}>All jackets served with a generous salad & coleslaw</div>
          <MenuItem name="Cheese or Beans" price="£11.95" />
          <MenuItem name="Garlic Mushrooms" price="£12.75" />
          <MenuItem name="Prawns & Marie Rose Sauce" price="£12.95" />
          <MenuItem name="Tuna Mayonnaise" price="£12.50" />
        </Section>

        <Section title="🥩 Steaks & Grills">
          <div style={{ color: 'var(--text-secondary)', fontSize: '13px', marginBottom: '8px', fontStyle: 'italic' }}>All steaks cooked to your liking and served with mushrooms, onion rings, fresh vegetables and choice of potatoes</div>
          <MenuItem name="8oz Sirloin Steak" price="£24.95" />
          <MenuItem name="10oz Fillet Steak" price="£28.95" />
          <MenuItem name="24oz T-Bone Steak" price="£28.95" />
          <MenuItem name="12oz Gammon Steak & Egg" price="£20.95" desc="Served with peas, onion rings & chips" />
          <MenuItem name="Mixed Grill" price="£28.95" desc="Rump steak, chicken breast, gammon, lamb chop, pork chop, sausage, liver, black pudding & fried egg" />
          <MenuItem name="Chicken Breast" price="£19.50" desc="With choice of garlic or pepper sauce, onion rings, vegetables and chips" />
          <div style={{ marginTop: '16px', padding: '16px', backgroundColor: 'var(--surface-warm)', borderRadius: '6px' }}>
            <div style={{ fontWeight: 700, color: 'var(--gold-light)', marginBottom: '8px', fontSize: '14px' }}>Add a Home-Made Sauce — £4.50</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '6px', fontSize: '13px', color: 'var(--text-secondary)' }}>
              <span><strong>Garlic</strong> — garlic, cream & white wine</span>
              <span><strong>Pepper</strong> — pepper, cream & brandy</span>
              <span><strong>Diane</strong> — French mustard, tomato, cream, onions & mushrooms</span>
              <span><strong>Stilton</strong> — Stilton cheese, cream & white wine</span>
            </div>
          </div>
        </Section>

        <Section title="🐟 Fish & Seafood">
          <MenuItem name="Deep Fried Scampi" price="£18.95" desc="Breaded wholetail scampi served with salad and chips" />
          <MenuItem name="Fresh Salmon with Hollandaise" price="£20.95" desc="Steamed and topped with hollandaise sauce, with fresh market vegetables & new potatoes" />
          <MenuItem name="Fresh Haddock" price="£20.50" desc="Steamed with fresh market vegetables, new potatoes, topped with lemon and parsley butter" />
        </Section>

        <Section title="🍖 Roast Dishes">
          <MenuItem name="Home Cooked Roast Beef" price="£16.95" desc="Served with Yorkshire pudding, new & roast potatoes and fresh vegetables" />
          <MenuItem name="Marinated Lamb" price="£20.50" desc="1lb shoulder of lamb marinated in mint and herbs, served with fresh vegetables and roast potatoes" />
          <MenuItem name="Home Cooked Roast Lamb" price="£17.95" desc="Hand carved with minty gravy, fresh market vegetables, new and roast potatoes" />
          <MenuItem name="Chicken Breast with Seasoning" price="£16.95" desc="Served with fresh vegetables, new and roast potatoes" />
        </Section>

        <Section title="🥗 Salad Platters">
          <MenuItem name="Combination Platter" price="£19.95" desc="Beef, ham, turkey, prawns, smoked salmon and mixed cheeses with a fruity salad, dips and wholemeal bread" />
          <MenuItem name="Roast Beef or Ham" price="£17.95" />
          <MenuItem name="Prawn or Smoked Salmon" price="£19.50" />
          <MenuItem name="Farmhouse Platter" price="£17.95" desc="Mixed cheeses, pâté, ham, pork pie, scotch egg, French bread, pickles and branston with salad" />
          <MenuItem name="Hot Chicken & Bacon Salad" price="£17.95" desc="Cajun chicken & smoked bacon on a fresh crisp salad with honey & mustard dressing and French bread" />
        </Section>

        <Section title="🌿 Vegetarian Selection">
          <MenuItem name="Vegetable Shepherd's Pie" price="£17.95" desc="Fresh vegetables, lentils & beans topped with char grilled cherry tomatoes and goats cheese mash" />
          <MenuItem name="Mushroom & 4 Cheese Pasta Bake" price="£17.95" desc="Served with salad and chips" />
          <MenuItem name="Vegetarian Lasagne" price="£17.95" desc="Butternut squash and spinach lasagne served with salad and chips" />
          <MenuItem name="Cheesy Leek & Potato Bake" price="£17.95" desc="Leeks and potatoes in a creamy cheese sauce with garlic, served with chips and salad" />
          <MenuItem name="Vegan Sweet Potato & Spinach Curry" price="£17.95" desc="Served with rice and chips" />
          <MenuItem name="Vegan Moving Mountain Burger" price="£17.95" desc="On a toasted pretzel roll with salad and chips" />
        </Section>

        <Section title="🧁 Desserts">
          <MenuItem name="Chocolate Sundae" price="£7.95" desc="Chocolate & vanilla ice cream, chocolate fudge cake, maltesers, topped with fresh cream" />
          <MenuItem name="Toasted Chocolate Waffle" price="£8.25" desc="Milk and white chocolate pieces, maltesers, crunchie pieces, chocolate and vanilla ice cream" />
          <MenuItem name="Toasted Banana Waffles" price="£7.95" desc="With sliced banana, butterscotch sauce, vanilla ice cream and chocolate sauce" />
          <MenuItem name="Apple & Caramel Crumble" price="£7.25" desc="Home-made, served with cream, ice cream or custard" />
          <MenuItem name="Banana Split" price="£7.75" desc="With fresh fruit, fresh cream and ice cream — not currently available" />
          <MenuItem name="Banana & Butterscotch Meringue" price="£7.50" desc="Banana in a meringue nest topped with butterscotch sauce, ice cream and fresh cream" />
          <MenuItem name="Vegan & Gluten Free Blackcurrant Crumble" price="£7.50" desc="Topped with a scoop of vegan ice cream" />
          <MenuItem name="Fresh Profiteroles" price="£7.25" desc="Served with fresh cream" />
          <MenuItem name="Hot Chocolate Fudge Cake" price="£7.50" desc="Served with fresh cream or ice cream" />
          <MenuItem name="Baileys Cheesecake" price="£7.50" desc="Home-made, served with fresh cream and drizzled with chocolate sauce" />
          <MenuItem name="Sherry Trifle" price="£7.25" desc="Served with custard and fresh cream" />
          <MenuItem name="Gluten Free Chocolate Brownie" price="£7.50" desc="Served with fresh cream" />
          <MenuItem name="Cheese & Biscuits" price="£7.95" desc="Assorted cheeses with crackers and pickles" />
          <MenuItem name="Vanilla Ice Cream" price="£5.95" desc="With chocolate, butterscotch or strawberry sauce" />
          <MenuItem name="Strawberry Ice Cream" price="£6.50" desc="Topped with strawberry sauce" />
          <MenuItem name="Chocolate Ice Cream" price="£6.50" desc="Topped with chocolate sauce" />
          <div style={{ marginTop: '16px', padding: '12px 16px', backgroundColor: 'var(--surface-warm)', borderRadius: '6px', fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
            <div>* Apple & Caramel Crumble, Profiteroles, Hot Chocolate Fudge Cake, Baileys Cheesecake, Sherry Trifle and Gluten Free Chocolate Brownie available as a child's portion — <strong>£4.95</strong></div>
            <div>** Vanilla Ice Cream, Strawberry Ice Cream and Chocolate Ice Cream available as a child's portion — <strong>£3.95</strong></div>
          </div>
        </Section>

        <Section title="☕ Coffees">
          <MenuItem name="Fresh Brewed Coffee" price="£3.15" />
          <MenuItem name="Speciality Coffee" price="£7.25" desc="Served with 35ml spirit of your choice" />
          <MenuItem name="Decaffeinated Coffee" price="£3.15" />
          <MenuItem name="Espresso Coffee" price="£3.15" />
          <MenuItem name="Large Cappuccino" price="£3.75" />
          <MenuItem name="Café Latte" price="£3.25" />
          <MenuItem name="Hot Chocolate" price="£3.50" desc="Topped with whipped cream" />
          <MenuItem name="Pot of Tea for One" price="£3.15" />
          <MenuItem name="Speciality Teas" price="£3.25" />
        </Section>

        <Section title="👶 Children's Menu">
          <div style={{ marginBottom: '12px' }}>
            <div style={{ fontWeight: 700, color: 'var(--gold-light)', marginBottom: '8px', fontSize: '14px' }}>Starters</div>
            <MenuItem name="Chilled Melon" price="£4.50" desc="Garnished with fresh fruits" />
            <MenuItem name="Garlic Mushrooms" price="£4.50" desc="Served with salad and French bread" />
            <MenuItem name="Soup of the Day" price="£4.50" desc="Served with French bread" />
          </div>
          <div style={{ marginBottom: '12px' }}>
            <div style={{ fontWeight: 700, color: 'var(--gold-light)', marginBottom: '8px', fontSize: '14px' }}>Main Courses</div>
            <MenuItem name="Roast Beef & Yorkshire" price="£8.50" desc="Served with fresh vegetables, new and roast potatoes" />
            <MenuItem name="Home-Made Lasagne" price="£7.50" desc="Served with salad and chips" />
            <MenuItem name="Cheese & Tomato Pizza" price="£8.25" desc="Served with salad and chips" />
            <div style={{ color: 'var(--text-secondary)', fontSize: '13px', marginTop: '8px', marginBottom: '4px', fontStyle: 'italic' }}>The following can be served with chips or jacket with beans or vegetables:</div>
            {['Steak Pie £8.25', 'Cheese & Onion Flan £8.25', 'Deep Fried Scampi £8.25', 'Jumbo Fishfinger £8.25', 'Sausages £8.25', 'Chicken Nuggets £8.25', 'Beefburger £8.25', 'Cheeseburger £8.75', 'Bacon Cheeseburger £9.25'].map(item => {
              const [name, price] = item.split(' £')
              return <MenuItem key={name} name={name} price={`£${price}`} />
            })}
          </div>
        </Section>

        <Section title="➕ Side Orders">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '0' }}>
            {[
              ['Boat of Au Poivre Sauce', '£4.50'], ['Boat of Diane Sauce', '£4.50'],
              ['Button Mushrooms', '£4.50'], ['Crispy Roast Potatoes', '£4.50'],
              ['Home-Made Coleslaw', '£3.75'], ['Jacket Potato', '£4.50'],
              ['Chips', '£4.50'], ['Onion Rings', '£4.50'],
              ['Side Salad', '£4.50'], ['Yorkshire Pudding', '£1.50'],
              ['Fried Egg', '£1.50'], ['Roll & Butter', '£0.95'],
            ].map(([name, price]) => (
              <MenuItem key={name} name={name} price={price} />
            ))}
          </div>
        </Section>
      </div>
    </div>
  )
}
