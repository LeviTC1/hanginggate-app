import { useEffect, useState } from 'react'
import clsx from 'clsx'
import { Link } from 'react-router-dom'

export default function MobileCTA() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setReady(true)
    }, 1500)

    return () => {
      window.clearTimeout(timeoutId)
    }
  }, [])

  return (
    <div
      className={clsx(
        'pointer-events-none fixed inset-x-0 bottom-0 z-[80] hidden px-4 pb-[calc(env(safe-area-inset-bottom)+12px)] pt-3 transition-transform duration-500 max-[900px]:block',
        ready ? 'translate-y-0' : 'translate-y-full',
      )}
    >
      <div className="pointer-events-auto relative rounded-t-2xl border border-[rgba(255,255,255,0.08)] bg-[rgba(10,6,3,0.94)] px-4 pb-4 pt-4 shadow-[0_-14px_30px_rgba(0,0,0,0.35)] backdrop-blur-xl">
        <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[rgba(212,168,50,0.75)] to-transparent" />

        <div className="flex items-center gap-3">
          <Link to="/book" className="btn btn-primary w-full justify-center">
            Reserve a Table
          </Link>
          <Link to="/menus" className="shrink-0 text-[14px] font-medium text-[rgba(255,255,255,0.62)] hover:text-[rgba(255,255,255,0.9)]">
            View Menus
          </Link>
        </div>
      </div>
    </div>
  )
}
