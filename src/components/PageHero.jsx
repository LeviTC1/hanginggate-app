export default function PageHero({ title, subtitle }) {
  return (
    <div style={{
      backgroundColor: '#6B0E0E',
      backgroundImage: `
        linear-gradient(135deg, #4A0A0A 0%, #8B1A1A 45%, #6B1414 100%),
        repeating-linear-gradient(
          45deg,
          transparent,
          transparent 18px,
          rgba(255,255,255,0.025) 18px,
          rgba(255,255,255,0.025) 19px
        )
      `,
      padding: '52px 24px 48px',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Corner ornaments */}
      <div style={{ position: 'absolute', top: '16px', left: '24px', color: 'rgba(226,201,126,0.25)', fontSize: '28px', lineHeight: 1 }}>✦</div>
      <div style={{ position: 'absolute', top: '16px', right: '24px', color: 'rgba(226,201,126,0.25)', fontSize: '28px', lineHeight: 1 }}>✦</div>

      <p style={{ color: 'rgba(226,201,126,0.7)', fontSize: '11px', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '14px', fontWeight: 500 }}>
        The Hanging Gate
      </p>
      <h1 style={{
        fontFamily: "'Playfair Display', Georgia, serif",
        fontSize: 'clamp(26px, 5vw, 42px)',
        color: '#FAF7F2',
        marginBottom: subtitle ? '10px' : 0,
        fontWeight: 700,
        letterSpacing: '-0.5px',
      }}>
        {title}
      </h1>
      {subtitle && (
        <p style={{ color: '#E2C97E', fontSize: '15px', letterSpacing: '0.5px', opacity: 0.9 }}>{subtitle}</p>
      )}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginTop: '18px' }}>
        <div style={{ height: '1px', width: '48px', backgroundColor: '#C9A84C', opacity: 0.5 }} />
        <div style={{ width: '5px', height: '5px', backgroundColor: '#C9A84C', borderRadius: '50%', opacity: 0.8 }} />
        <div style={{ height: '1px', width: '48px', backgroundColor: '#C9A84C', opacity: 0.5 }} />
      </div>
    </div>
  )
}
