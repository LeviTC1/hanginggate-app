const UK_TIME_ZONE = 'Europe/London'

export function getTodayUkDate(now: Date = new Date()): string {
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: UK_TIME_ZONE,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).formatToParts(now)

  const bag = Object.fromEntries(parts.filter((part) => part.type !== 'literal').map((part) => [part.type, part.value]))
  return `${bag.year}-${bag.month}-${bag.day}`
}

export function addDays(date: string, days: number): string {
  const [year, month, day] = date.split('-').map((part) => Number.parseInt(part, 10))
  const utc = Date.UTC(year, month - 1, day) + days * 86400000
  const next = new Date(utc)

  return `${next.getUTCFullYear()}-${String(next.getUTCMonth() + 1).padStart(2, '0')}-${String(next.getUTCDate()).padStart(2, '0')}`
}

export function formatDateLong(date: string): string {
  const [year, month, day] = date.split('-').map((part) => Number.parseInt(part, 10))
  const utcDate = new Date(Date.UTC(year, month - 1, day))

  return new Intl.DateTimeFormat('en-GB', {
    timeZone: UK_TIME_ZONE,
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(utcDate)
}

export function formatTimeLabel(time: string): string {
  const [hourRaw, minuteRaw] = time.split(':')
  const hour = Number.parseInt(hourRaw, 10)
  const minute = Number.parseInt(minuteRaw, 10)

  const period = hour >= 12 ? 'pm' : 'am'
  const displayHour = hour % 12 === 0 ? 12 : hour % 12

  return `${displayHour}:${String(minute).padStart(2, '0')}${period}`
}
