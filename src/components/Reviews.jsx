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
        <span key={i} style={{ color: i < count ? '#F5A623' : '#D1C5B8', fontSize: '18px' }}>★</span>
      ))}
    </div>
  )
}

export default function Reviews() {
  return (
    <section style={{ backgroundColor: '#FAF7F2', padding: '72px 24px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <p style={{ color: '#C9A84C', fontSize: '13px', letterSpacing: '3px', textTransform: 'uppercase', fontWeight: 600, marginBottom: '12px' }}>What our guests say</p>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(22px, 4vw, 34px)', color: '#8B1A1A', marginBottom: '12px' }}>
            Guest Reviews
          </h2>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
            <div style={{ display: 'flex', gap: '2px' }}>
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} style={{ color: '#F5A623', fontSize: '22px' }}>★</span>
              ))}
            </div>
            <span style={{ color: '#4A3D34', fontSize: '16px', fontWeight: 600 }}>5.0</span>
            <span style={{ color: '#6B5E52', fontSize: '14px' }}>· Rated on Google</span>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', marginBottom: '36px' }}>
          {reviews.map((r) => (
            <div key={r.name} style={{ backgroundColor: 'white', border: '1px solid #E8DFD0', borderRadius: '10px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <Stars count={r.stars} />
              <p style={{ color: '#4A3D34', fontSize: '14px', lineHeight: 1.7, flex: 1, fontStyle: 'italic' }}>"{r.text}"</p>
              <div style={{ borderTop: '1px solid #E8DFD0', paddingTop: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontWeight: 600, color: '#1C1410', fontSize: '14px' }}>{r.name}</span>
                <span style={{ color: '#9B8E84', fontSize: '12px' }}>{r.date}</span>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <a
            href="https://www.google.com/search?q=The+Hanging+Gate+Chapel-en-le-Frith+reviews"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#8B1A1A', textDecoration: 'none', fontWeight: 600, fontSize: '15px', border: '1px solid #8B1A1A', padding: '12px 28px', borderRadius: '4px' }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Read all reviews on Google
          </a>
        </div>
      </div>
    </section>
  )
}
