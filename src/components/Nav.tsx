import { ArrowRight, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useActiveSection } from '../hooks/useActiveSection'
import { useLang } from '../i18n'
import { cn } from '../lib/cn'
import { PAGE_IDS, STYLES, styleOfSection, type StyleId } from '../styles'
import { LanguageSwitch } from './LanguageSwitch'
import { LogoMark } from './LogoMark'

/** The call-to-action takes on the colour of the style being scrolled through. */
const CTA_ACCENT: Record<StyleId, string> = {
  dark: 'bg-violet-deep text-white shadow-violet-deep/35',
  soft: 'bg-sage-deep text-white shadow-sage-deep/35',
  warm: 'bg-clay-deep text-white shadow-clay-deep/35',
  bold: 'bg-bubblegum text-ink shadow-bubblegum/40',
  elegant: 'bg-gold text-forest shadow-gold/45',
}

/** On the landing view it stays white, like the hero's own button. */
const CTA_HERO = 'bg-white text-ink ring-1 ring-ink/8 shadow-[rgb(80_60_120/0.18)]'

const CTA_BASE =
  'font-medium shadow-lg transition-[background-color,color,box-shadow,filter] duration-500 hover:brightness-105'

export function Nav() {
  const { t } = useLang()
  const active = useActiveSection(PAGE_IDS)
  const [open, setOpen] = useState(false)
  const activeStyle = styleOfSection(active)
  const accent = activeStyle ? CTA_ACCENT[activeStyle] : CTA_HERO

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="fixed inset-x-0 top-3 z-50 flex justify-center px-3 sm:top-4">
      <nav
        aria-label={t.nav.label}
        className="relative flex w-full items-center gap-1 rounded-full border border-ink/6 bg-white/85 p-1.5 pl-4 shadow-[inset_0_1px_0_rgb(255_255_255/0.9),0_1px_2px_rgb(0_0_0/0.04),0_12px_32px_-12px_rgb(40_30_80/0.2)] backdrop-blur-2xl backdrop-saturate-150 md:w-auto"
      >
        <a href="#top" onClick={() => setOpen(false)} className="mr-auto flex items-center gap-2.5 rounded-full py-1 md:mr-5">
          <LogoMark className="h-4.25 w-auto" />
          <span className="font-editorial text-[1.35rem] leading-none tracking-tight">Ines Puhr</span>
        </a>

        <ul className="hidden items-center md:flex">
          {t.nav.links.map((link) => {
            const isActive = active === link.id
            const style = styleOfSection(link.id)
            return (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  aria-current={isActive ? 'true' : undefined}
                  className={cn(
                    'relative block rounded-full px-3 py-2 text-sm transition-colors',
                    isActive ? 'text-ink' : 'text-ink/55 hover:text-ink',
                  )}
                >
                  {link.label}
                  <span
                    aria-hidden
                    className={cn(
                      'absolute bottom-0.5 left-1/2 size-1 -translate-x-1/2 rounded-full transition duration-300',
                      !isActive && 'scale-0 opacity-0',
                    )}
                    style={{ background: style && STYLES[style].dot }}
                  />
                </a>
              </li>
            )
          })}
        </ul>

        <span aria-hidden className="mx-2 hidden h-5 w-px bg-ink/10 md:block" />

        <LanguageSwitch />

        <a
          href="#contact"
          className={cn('group hidden h-9 items-center gap-1.5 rounded-full pr-3.5 pl-4 text-sm sm:inline-flex', CTA_BASE, accent)}
        >
          {t.nav.cta}
          <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
        </a>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
          onClick={() => setOpen((o) => !o)}
          className="grid size-9 place-items-center rounded-full transition hover:bg-ink/5 md:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>

        {open && (
          <div
            id="mobile-menu"
            className="absolute inset-x-0 top-[calc(100%+0.5rem)] rounded-3xl border border-ink/7 bg-white p-2 shadow-xl md:hidden"
          >
            <ul>
              {t.nav.links.map((link) => {
                const style = styleOfSection(link.id)
                return (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between rounded-2xl px-4 py-3.5 font-editorial text-2xl transition hover:bg-ink/5"
                    >
                      {link.label}
                      {active === link.id && (
                        <span className="size-2 rounded-full" style={{ background: style && STYLES[style].dot }} />
                      )}
                    </a>
                  </li>
                )
              })}
            </ul>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className={cn('mt-2 flex items-center justify-center gap-1.5 rounded-2xl px-4 py-3.5 text-sm', CTA_BASE, accent)}
            >
              {t.nav.cta}
              <ArrowRight className="size-3.5" />
            </a>
          </div>
        )}
      </nav>
    </header>
  )
}
