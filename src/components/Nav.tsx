import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import type { Lang } from '../content'
import { useActiveSection } from '../hooks/useActiveSection'
import { useLang } from '../i18n'
import { cn } from '../lib/cn'
import { PAGE_IDS } from '../styles'
import { LogoMark } from './LogoMark'

const LANGS: Lang[] = ['de', 'en']

export function Nav() {
  const { t, lang, setLang } = useLang()
  const active = useActiveSection(PAGE_IDS)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="fixed inset-x-0 top-3 z-50 px-3 sm:top-4">
      <nav
        aria-label={t.nav.label}
        className="relative mx-auto flex max-w-5xl items-center gap-2 rounded-full border border-ink/7 bg-white/80 py-1.5 pr-1.5 pl-4 shadow-[0_12px_32px_-14px_rgb(0_0_0/0.3)] backdrop-blur-xl backdrop-saturate-150"
      >
        <a href="#top" onClick={() => setOpen(false)} className="mr-auto flex items-center gap-2.5 rounded-full py-1">
          <LogoMark className="h-4.25 w-auto" />
          <span className="font-editorial text-[1.4rem] leading-none tracking-tight">Ines Puhr</span>
        </a>

        <ul className="hidden items-center md:flex">
          {t.nav.links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                aria-current={active === link.id ? 'true' : undefined}
                className={cn(
                  'rounded-full px-3 py-2 text-sm transition-colors lg:px-3.5',
                  active === link.id ? 'bg-ink/6 text-ink' : 'text-ink/60 hover:text-ink',
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div role="group" aria-label={t.nav.language} className="flex rounded-full bg-ink/5 p-0.5 text-xs font-medium">
          {LANGS.map((l) => (
            <button
              key={l}
              type="button"
              lang={l}
              aria-pressed={lang === l}
              onClick={() => setLang(l)}
              className={cn(
                'rounded-full px-2.5 py-1.5 uppercase transition',
                lang === l ? 'bg-white text-ink shadow-sm' : 'text-ink/65 hover:text-ink',
              )}
            >
              {l}
            </button>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden rounded-full bg-ink px-4 py-2 text-sm font-medium text-white transition hover:bg-ink/80 sm:inline-flex"
        >
          {t.nav.cta}
        </a>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
          onClick={() => setOpen((o) => !o)}
          className="grid size-10 place-items-center rounded-full transition hover:bg-ink/5 md:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>

        {open && (
          <div
            id="mobile-menu"
            className="absolute inset-x-0 top-[calc(100%+0.5rem)] rounded-3xl border border-ink/7 bg-white p-2 shadow-xl md:hidden"
          >
            <ul>
              {t.nav.links.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between rounded-2xl px-4 py-3.5 font-editorial text-2xl transition hover:bg-ink/5"
                  >
                    {link.label}
                    {active === link.id && <span className="size-1.5 rounded-full bg-vermilion" />}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 flex justify-center rounded-2xl bg-ink px-4 py-3.5 text-sm font-medium text-white"
            >
              {t.nav.cta}
            </a>
          </div>
        )}
      </nav>
    </header>
  )
}
