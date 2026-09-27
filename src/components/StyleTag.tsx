import { useLang } from '../i18n'
import { cn } from '../lib/cn'
import { STYLES, type StyleId } from '../styles'

/**
 * The running header at the top of every section: which style you're looking at,
 * and what kind of business it would suit. It inherits the section's font and colour.
 */
export function StyleTag({ id, className }: { id: StyleId; className?: string }) {
  const { t } = useLang()
  const style = t.styles[id]
  return (
    <div className={cn('flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[13px] sm:text-sm', className)}>
      <span className="tabular-nums opacity-80">
        {t.styleTag.label} {STYLES[id].number}
      </span>
      <span aria-hidden className="h-px w-6 bg-current opacity-40" />
      <span className="font-semibold">{style.name}</span>
      <span aria-hidden className="hidden h-px flex-1 bg-current opacity-20 md:block" />
      <span className="w-full opacity-80 md:w-auto">
        {t.styleTag.suits}: {style.audience}
      </span>
    </div>
  )
}
