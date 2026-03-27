import type { SeasonalMode } from '../../utils/seasonalMode'

type SeasonalEffectsProps = {
  mode: SeasonalMode
}

const particles = [
  { left: '4%', delay: '0s', duration: '17s', size: '11px', symbol: '•' },
  { left: '12%', delay: '3s', duration: '18s', size: '9px', symbol: '◆' },
  { left: '21%', delay: '7s', duration: '20s', size: '10px', symbol: '•' },
  { left: '30%', delay: '1s', duration: '16s', size: '12px', symbol: '•' },
  { left: '39%', delay: '5s', duration: '21s', size: '9px', symbol: '◆' },
  { left: '48%', delay: '2s', duration: '19s', size: '11px', symbol: '•' },
  { left: '57%', delay: '8s', duration: '22s', size: '10px', symbol: '•' },
  { left: '66%', delay: '4s', duration: '18s', size: '12px', symbol: '◆' },
  { left: '74%', delay: '9s', duration: '20s', size: '10px', symbol: '•' },
  { left: '82%', delay: '6s', duration: '17s', size: '11px', symbol: '•' },
  { left: '90%', delay: '10s', duration: '23s', size: '9px', symbol: '◆' },
  { left: '96%', delay: '11s', duration: '19s', size: '10px', symbol: '•' },
]

export default function SeasonalEffects({ mode }: SeasonalEffectsProps) {
  if (mode !== 'christmas') {
    return null
  }

  return (
    <div className="seasonal-particles" aria-hidden="true">
      {particles.map((particle, index) => (
        <span
          key={`${particle.left}-${index}`}
          className="seasonal-particle"
          style={{
            left: particle.left,
            animationDelay: particle.delay,
            animationDuration: particle.duration,
            fontSize: particle.size,
          }}
        >
          {particle.symbol}
        </span>
      ))}
    </div>
  )
}
