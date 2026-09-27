import { ArrowUp } from 'lucide-react'
import { LogoMark } from '../components/LogoMark'
import type { LegalId } from '../content'
import { useLang } from '../i18n'

export function Footer({ onOpenLegal }: { onOpenLegal: (id: LegalId) => void }) {
  const { t } = useLang()
  const f = t.footer
  const link = 'transition-colors hover:text-gold'

  return (
    <footer className="bg-forest font-sans text-sm text-ivory/60">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col gap-6 border-t border-gold/15 py-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="flex items-center gap-3">
            <LogoMark className="h-3.5 w-auto" />
            <span>
              © {new Date().getFullYear()} Ines Puhr · {f.role}
            </span>
          </p>
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <button type="button" className={link} onClick={() => onOpenLegal('imprint')}>
              {f.imprint}
            </button>
            <button type="button" className={link} onClick={() => onOpenLegal('privacy')}>
              {f.privacy}
            </button>
            <a href="#top" className={`${link} inline-flex items-center gap-1.5`}>
              {f.top}
              <ArrowUp className="size-3.5" />
            </a>
          </nav>
        </div>
        <p className="pb-10 text-xs text-ivory/55">{f.noTracking}</p>
      </div>
    </footer>
  )
}
