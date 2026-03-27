import { Link } from 'react-router-dom'

type CTABandProps = {
  className?: string
}

export default function CTABand({ className }: CTABandProps) {
  return (
    <section className={`relative overflow-hidden bg-[#0e0804] py-16 md:py-24 ${className ?? ''}`}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_60%_at_30%_50%,rgba(123,19,19,0.2)_0%,transparent_70%)]" />
      <div className="grain-overlay" />

      <div className="container relative z-10 grid gap-8 md:grid-cols-[minmax(0,1fr)_1px_auto] md:items-center md:gap-10">
        <h2 className="font-display text-[clamp(32px,5vw,52px)] font-semibold leading-[1.05] text-white">
          Reserve your table.
        </h2>

        <div className="hidden h-24 bg-[rgba(255,255,255,0.16)] md:block" />

        <div className="flex flex-wrap gap-3 max-[767px]:flex-col">
          <Link to="/book" className="btn btn-primary">
            Reserve Your Table
          </Link>
          <Link to="/menus" className="btn btn-ghost-light">
            Explore The Menus
          </Link>
        </div>
      </div>
    </section>
  )
}
