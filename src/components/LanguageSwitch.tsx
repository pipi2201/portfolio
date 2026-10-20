import { Check, ChevronDown } from 'lucide-react'
import { useEffect, useId, useRef, useState, type ReactNode } from 'react'
import type { Lang } from '../content'
import { useLang } from '../i18n'
import { cn } from '../lib/cn'

/** Drawn as SVG because flag emoji show up as plain letters on Windows. */
const LANGUAGES: Record<Lang, { name: string; flag: ReactNode }> = {
  en: {
    name: 'English',
    flag: (
      <svg viewBox="0 0 60 30" preserveAspectRatio="xMidYMid slice">
        <rect width="60" height="30" fill="#012169" />
        <path d="M0 0l60 30M60 0L0 30" stroke="#fff" strokeWidth="6" />
        <path d="M0 0l60 30M60 0L0 30" stroke="#c8102e" strokeWidth="2" />
        <path d="M30 0v30M0 15h60" stroke="#fff" strokeWidth="10" />
        <path d="M30 0v30M0 15h60" stroke="#c8102e" strokeWidth="6" />
      </svg>
    ),
  },
  de: {
    name: 'Deutsch',
    flag: (
      <svg viewBox="0 0 5 3" preserveAspectRatio="xMidYMid slice">
        <rect width="5" height="1" fill="#000" />
        <rect y="1" width="5" height="1" fill="#d00" />
        <rect y="2" width="5" height="1" fill="#ffce00" />
      </svg>
    ),
  },
}

const LANGS: Lang[] = ['en', 'de']

function Flag({ lang }: { lang: Lang }) {
  return (
    <span className="block h-3.5 w-5 shrink-0 overflow-hidden rounded-[3px] ring-1 ring-ink/10 [&>svg]:size-full">
      {LANGUAGES[lang].flag}
    </span>
  )
}

/** Compact dropdown in the navbar: the current flag and language code, opening a list of all languages. */
export function LanguageSwitch() {
  const { t, lang, setLang } = useLang()
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const menuId = useId()

  useEffect(() => {
    if (!open) return
    const onPointer = (e: PointerEvent) => !rootRef.current?.contains(e.target as Node) && setOpen(false)
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return
      setOpen(false)
      buttonRef.current?.focus()
    }
    window.addEventListener('pointerdown', onPointer)
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('pointerdown', onPointer)
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  function choose(next: Lang) {
    setLang(next)
    setOpen(false)
    buttonRef.current?.focus()
  }

  return (
    <div
      ref={rootRef}
      onBlur={(e) => !e.currentTarget.contains(e.relatedTarget) && setOpen(false)}
      className="relative"
    >
      <button
        ref={buttonRef}
        type="button"
        aria-label={`${t.nav.language}: ${LANGUAGES[lang].name}`}
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((o) => !o)}
        className={cn(
          'flex h-9 items-center gap-1.5 rounded-full px-2.5 text-[13px] font-medium text-ink/70 uppercase transition hover:bg-ink/5 hover:text-ink',
          open && 'bg-ink/5 text-ink',
        )}
      >
        <Flag lang={lang} />
        {lang}
        <ChevronDown className={cn('size-3.5 text-ink/45 transition-transform', open && 'rotate-180')} />
      </button>

      {open && (
        <ul
          id={menuId}
          className="absolute top-[calc(100%+0.875rem)] right-0 min-w-44 rounded-2xl border border-ink/7 bg-white p-1.5 shadow-xl"
        >
          {LANGS.map((l) => (
            <li key={l}>
              <button
                type="button"
                lang={l}
                aria-current={lang === l ? 'true' : undefined}
                onClick={() => choose(l)}
                className={cn(
                  'flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition hover:bg-ink/5',
                  lang === l ? 'font-medium text-ink' : 'text-ink/70',
                )}
              >
                <Flag lang={l} />
                {LANGUAGES[l].name}
                {lang === l && <Check className="ml-auto size-4" />}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
