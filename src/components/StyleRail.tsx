import { useActiveSection } from '../hooks/useActiveSection'
import { useLang } from '../i18n'
import { cn } from '../lib/cn'
import { PAGE_IDS, STYLES, STYLES_ON_PAGE } from '../styles'

/** Floating side navigation on wide screens: one dot per style, the current one enlarged. */
export function StyleRail() {
  const { t } = useLang()
  const active = useActiveSection(PAGE_IDS)

  return (
    <nav
      aria-label={t.nav.rail}
      className={cn(
        'fixed top-1/2 right-4 z-40 hidden -translate-y-1/2 transition-opacity duration-500 min-[1400px]:block',
        active === 'top' && 'pointer-events-none opacity-0',
      )}
    >
      <ul className="flex flex-col items-center gap-2 rounded-full border border-ink/7 bg-white/80 p-1.5 shadow-[0_12px_32px_-14px_rgb(0_0_0/0.3)] backdrop-blur-xl">
        {STYLES_ON_PAGE.map((id) => {
          const style = STYLES[id]
          const isActive = active === style.section
          const label = `${style.number} · ${t.styles[id]}`
          return (
            <li key={id} className="group relative flex">
              <a
                href={`#${style.section}`}
                aria-label={label}
                aria-current={isActive ? 'true' : undefined}
                className="grid size-6 place-items-center rounded-full"
              >
                <span
                  className={cn(
                    'rounded-full ring-1 ring-ink/20 transition-all duration-300',
                    isActive ? 'size-4' : 'size-2 group-hover:size-3',
                  )}
                  style={{ background: style.dot }}
                />
              </a>
              <span
                aria-hidden
                className="pointer-events-none absolute top-1/2 right-9 -translate-y-1/2 translate-x-1 rounded-full bg-ink px-3 py-1 text-xs whitespace-nowrap text-white opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100"
              >
                {label}
              </span>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
