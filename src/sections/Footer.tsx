import { ArrowUp } from 'lucide-react'
import { LogoMark } from '../components/LogoMark'
import { SITE } from '../config'
import type { LegalId } from '../content'
import { useLang } from '../i18n'

export function Footer({ onOpenLegal }: { onOpenLegal: (id: LegalId) => void }) {
  const { t } = useLang()
  const f = t.footer
  const link = 'transition-colors hover:text-gold'

  return (
    <footer className="bg-forest font-sans text-sm text-ivory/60">
      <div className="wrap">
        <div className="flex flex-col gap-6 border-t border-gold/15 py-10 sm:flex-row sm:items-center sm:justify-between">
          {/* Doubles as the Impressum (§ 5 ECG): name, business, address, email */}
          <div className="space-y-1">
            <p className="flex items-center gap-3">
              <LogoMark className="h-4 w-auto" />
              <span>
                © {new Date().getFullYear()} Ines Puhr · {f.role} · {f.rights}
              </span>
            </p>
            <p className="pl-7">
              {f.address} ·{' '}
              <a href={`mailto:${SITE.email}`} className={link}>
                {SITE.email}
              </a>
            </p>
          </div>
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <button type="button" className={link} onClick={() => onOpenLegal('privacy')}>
              {f.privacy}
            </button>
            <a href="#top" className={`${link} inline-flex items-center gap-1.5`}>
              {f.top}
              <ArrowUp className="size-3.5" />
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
