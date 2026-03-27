import clsx from 'clsx'
import { Link } from 'react-router-dom'
import Badge from '../ui/Badge'

type MenuCardProps = {
  to: string
  image: string
  title: string
  description: string
  category: string
  price?: string
  className?: string
}

export default function MenuCard({
  to,
  image,
  title,
  description,
  category,
  price,
  className,
}: MenuCardProps) {
  return (
    <Link
      to={to}
      className={clsx(
        'group relative block aspect-[4/5] overflow-hidden rounded-2xl bg-[#120b06] text-white shadow-[var(--shadow-lg)] transition-transform duration-[400ms] ease-[var(--ease-spring)] hover:scale-[1.015]',
        className,
      )}
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-[900ms] ease-[var(--ease-spring)] group-hover:scale-[1.06]"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(10,6,3,0)] via-[rgba(10,6,3,0.45)] to-[rgba(10,6,3,0.96)] transition-opacity duration-300 group-hover:opacity-90" />
      <div className="absolute inset-0 rounded-2xl shadow-[inset_0_0_0_1.5px_rgba(212,168,50,0)] transition-shadow duration-300 group-hover:shadow-[var(--inset-gold)]" />

      {price ? (
        <div className="absolute right-4 top-4 z-10">
          <Badge variant="price">{price}</Badge>
        </div>
      ) : null}

      <div className="absolute inset-x-0 bottom-0 z-10 p-6">
        <Badge variant="category" className="mb-3 block">
          {category}
        </Badge>
        <h3 className="font-display text-[22px] font-medium leading-[1.2] text-white">{title}</h3>
        <p className="mt-2 max-h-[44px] overflow-hidden text-[13px] font-light leading-[1.7] text-[rgba(255,255,255,0.68)]">
          {description}
        </p>
      </div>
    </Link>
  )
}
