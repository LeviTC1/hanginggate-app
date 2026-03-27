type DividerProps = {
  className?: string
}

function cx(...parts: Array<string | undefined | false>) {
  return parts.filter(Boolean).join(' ')
}

export default function Divider({ className }: DividerProps) {
  return (
    <div className={cx('flex items-center gap-3', className)} aria-hidden="true">
      <span className="h-px w-12 bg-[rgba(212,168,50,0.5)]" />
      <span className="h-1 w-1 rounded-full bg-[var(--gold)]" />
      <span className="h-px w-12 bg-[rgba(212,168,50,0.5)]" />
    </div>
  )
}
