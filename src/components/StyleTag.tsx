import { useLang } from '../i18n'
import { cn } from '../lib/cn'
import { STYLES, type StyleId } from '../styles'

/** The small line at the top of every styled section that names its design style. It inherits the section's font and colour. */
export function StyleTag({ id, className }: { id: StyleId; className?: string }) {
  const { t } = useLang()
  return (
    <p className={cn('text-[13px] opacity-75 sm:text-sm', className)}>
      <span className="tabular-nums">
        {t.styleTag} {STYLES[id].number}
      </span>
      <span aria-hidden> · </span>
      {t.styles[id]}
    </p>
  )
}
