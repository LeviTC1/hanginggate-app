export type SeasonalMode = 'halloween' | 'christmas' | 'default'

export function getSeasonalMode(date: Date = new Date()): SeasonalMode {
  const month = date.getMonth() + 1
  const day = date.getDate()

  if (month === 10 && day >= 1 && day <= 31) {
    return 'halloween'
  }

  if ((month === 11 && day >= 15) || month === 12 || (month === 1 && day <= 5)) {
    return 'christmas'
  }

  return 'default'
}
