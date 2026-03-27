import { formatTimeLabel } from '../../lib/booking/date'
import type { AvailabilitySlot } from '../../lib/booking/types'

type SlotGridProps = {
  slots: AvailabilitySlot[]
  selected: string
  onSelect: (time: string) => void
}

export default function SlotGrid({ slots, selected, onSelect }: SlotGridProps) {
  if (!slots.length) {
    return (
      <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
        No slots found for this date.
      </p>
    )
  }

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
        gap: '10px',
      }}
    >
      {slots.map((slot) => {
        const isSelected = selected === slot.time
        const isDisabled = !slot.available

        return (
          <button
            key={slot.time}
            type="button"
            disabled={isDisabled}
            onClick={() => onSelect(slot.time)}
            style={{
              border: isSelected ? '1px solid var(--gold-light)' : '1px solid var(--border-default)',
              borderRadius: '10px',
              padding: '10px 8px',
              textAlign: 'center',
              background: isDisabled
                ? 'rgba(241,244,236,0.08)'
                : isSelected
                  ? 'linear-gradient(170deg, #182217, #253322)'
                  : 'var(--surface-card)',
              color: isDisabled ? 'var(--text-muted)' : isSelected ? 'var(--text-inverse)' : 'var(--text-primary)',
              cursor: isDisabled ? 'not-allowed' : 'pointer',
              opacity: isDisabled ? 0.7 : 1,
            }}
          >
            <div style={{ fontWeight: 700, fontSize: '14px' }}>{formatTimeLabel(slot.time)}</div>
            <div style={{ fontSize: '11px', marginTop: '4px' }}>
              {slot.available ? `${slot.remaining} left` : 'Full'}
            </div>
          </button>
        )
      })}
    </div>
  )
}
