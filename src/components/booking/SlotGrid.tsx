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
      <p style={{ color: '#6B5E52', fontSize: '14px' }}>
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
              border: isSelected ? '1px solid #E2C97E' : '1px solid rgba(139,26,26,0.2)',
              borderRadius: '10px',
              padding: '10px 8px',
              textAlign: 'center',
              background: isDisabled
                ? 'rgba(124,95,76,0.12)'
                : isSelected
                  ? 'linear-gradient(170deg, #1E1510, #3A2418)'
                  : '#fff',
              color: isDisabled ? '#8A7D70' : isSelected ? '#F7E6BF' : '#3A2B1F',
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
