const reviews = [
  {
    name: 'Sarah M.',
    stars: 5,
    date: 'March 2025',
    text: 'Absolutely wonderful Sunday lunch — the roast beef was outstanding. Staff were incredibly friendly and nothing was too much trouble. Will definitely be back!',
  },
  {
    name: 'David H.',
    stars: 5,
    date: 'February 2025',
    text: 'We held my mother\'s birthday party here for 60 guests. The food was fantastic, the room looked beautiful and the whole team went above and beyond. Highly recommend for functions.',
  },
  {
    name: 'Karen T.',
    stars: 5,
    date: 'January 2025',
    text: 'Best pub food in the High Peak, hands down. The atmosphere at Christmas is truly magical — the decorations have to be seen to be believed. A real gem.',
  },
  {
    name: 'James R.',
    stars: 5,
    date: 'December 2024',
    text: 'We used The Hanging Gate for our Christmas buffet and everyone raved about it. Brilliant value, generous portions and free delivery was a bonus. 10/10.',
  },
]

function Stars({ count }) {
  return (
    <div style={{ display: 'flex', gap: '2px' }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} style={{ color: i < count ? '#F5C56A' : '#D1C5B8', fontSize: '18px' }}>★</span>
      ))}
    </div>
  )
}

export default function Reviews() {
  return (
    <section style={{ backgroundColor: '#FAF7F2', padding: '78px 24px' }}>
      <div style={{ maxWidth: '1120px', margin: '0 auto' }}>
        <div className="fade-up" style={{ textAlign: 'center', marginBottom: '48px' }}>
          <p style={{ color: '#9A7A3F', fontSize: '12px', letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 700, marginBottom: '10px' }}>What our guests say</p>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(24px, 4vw, 36px)', color: '#8B1A1A', marginBottom: '12px' }}>
            Guest Reviews
          </h2>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
            <div style={{ display: 'flex', gap: '2px' }}>
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} style={{ color: '#F5A623', fontSize: '22px' }}>★</span>
              ))}
            </div>
            <span style={{ color: '#4A3D34', fontSize: '16px', fontWeight: 700 }}>5.0</span>
            <span style={{ color: '#6B5E52', fontSize: '14px' }}>· Rated on Google</span>
          </div>
        </div>

        <div data-stagger-group style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', marginBottom: '36px' }}>
          {reviews.map((r) => (
            <div key={r.name} className="fade-up" style={{
              background: 'linear-gradient(165deg, rgba(255,255,255,0.95), rgba(251,245,236,0.9))',
              border: '1px solid rgba(139,26,26,0.14)',
              borderRadius: '12px',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              boxShadow: '0 16px 24px rgba(34,22,15,0.08)',
            }}>
              <Stars count={r.stars} />
              <p style={{ color: '#4A3D34', fontSize: '14px', lineHeight: 1.75, flex: 1, fontStyle: 'italic' }}>
                "{r.text}"
              </p>
              <div style={{ borderTop: '1px solid #E8DFD0', paddingTop: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontWeight: 700, color: '#1C1410', fontSize: '14px' }}>{r.name}</span>
                <span style={{ color: '#9B8E84', fontSize: '12px' }}>{r.date}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="fade-up" style={{ textAlign: 'center' }}>
          <a
            href="https://www.google.com/search?q=The+Hanging+Gate+Chapel-en-le-Frith+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-wine"
            style={{ fontSize: '12px' }}
          >
            Read all reviews on Google
          </a>
        </div>
      </div>
    </section>
  )
}
