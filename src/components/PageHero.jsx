export default function PageHero({ title, subtitle }) {
  return (
    <div style={{
      backgroundColor: '#8B1A1A',
      backgroundImage: 'linear-gradient(135deg, #5C0E0E 0%, #8B1A1A 50%, #6B1414 100%)',
      padding: '56px 24px',
      textAlign: 'center',
    }}>
      <h1 style={{
        fontFamily: "'Playfair Display', Georgia, serif",
        fontSize: 'clamp(28px, 5vw, 44px)',
        color: '#FAF7F2',
        marginBottom: subtitle ? '12px' : 0,
        fontWeight: 700,
      }}>
        {title}
      </h1>
      {subtitle && (
        <p style={{ color: '#E2C97E', fontSize: '16px', letterSpacing: '1px' }}>{subtitle}</p>
      )}
      {/* Decorative rule */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginTop: '16px' }}>
        <div style={{ height: '1px', width: '60px', backgroundColor: '#E2C97E', opacity: 0.6 }} />
        <div style={{ width: '6px', height: '6px', backgroundColor: '#E2C97E', borderRadius: '50%' }} />
        <div style={{ height: '1px', width: '60px', backgroundColor: '#E2C97E', opacity: 0.6 }} />
      </div>
    </div>
  )
}
