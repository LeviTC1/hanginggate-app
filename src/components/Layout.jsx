import SiteNav from './layout/SiteNav'
import SiteFooter from './layout/SiteFooter'
import MobileCTA from './layout/MobileCTA'
import useScrollReveal from '../hooks/useScrollReveal'

export default function Layout({ children }) {
  useScrollReveal()

  return (
    <div className="site-shell">
      <SiteNav />
      <main className="site-main">{children}</main>
      <SiteFooter />
      <MobileCTA />
    </div>
  )
}
