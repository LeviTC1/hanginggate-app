import { useEffect, useMemo } from 'react'
import SiteNav from './layout/SiteNav'
import SiteFooter from './layout/SiteFooter'
import MobileCTA from './layout/MobileCTA'
import SeasonalEffects from './layout/SeasonalEffects'
import useScrollReveal from '../hooks/useScrollReveal'
import { getSeasonalMode } from '../utils/seasonalMode'

export default function Layout({ children }) {
  useScrollReveal()
  const seasonalMode = useMemo(() => getSeasonalMode(), [])

  useEffect(() => {
    if (seasonalMode === 'default') {
      document.documentElement.removeAttribute('data-season')
      return
    }

    document.documentElement.setAttribute('data-season', seasonalMode)
  }, [seasonalMode])

  return (
    <div className="site-shell">
      <SiteNav />
      <main className="site-main">{children}</main>
      <SiteFooter />
      <MobileCTA />
      <SeasonalEffects mode={seasonalMode} />
    </div>
  )
}
