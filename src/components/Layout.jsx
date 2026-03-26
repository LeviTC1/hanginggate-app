import Nav from './Nav'
import Footer from './Footer'
import MobileCTA from './MobileCTA'

export default function Layout({ children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100svh' }}>
      <Nav />
      <main style={{ flex: 1 }}>
        {children}
      </main>
      <Footer />
      <MobileCTA />
    </div>
  )
}
