import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { content, type Content, type Lang } from './content'

type LanguageContextValue = { lang: Lang; setLang: (lang: Lang) => void; t: Content }

const LanguageContext = createContext<LanguageContextValue | null>(null)

/**
 * English is the default. German is reachable via the switch or a shareable `?lang=de` link.
 * The choice lives in the URL only, so nothing is stored on the visitor's device.
 */
function initialLang(): Lang {
  return new URLSearchParams(window.location.search).get('lang') === 'de' ? 'de' : 'en'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(initialLang)

  const setLang = useCallback((next: Lang) => {
    setLangState(next)
    const url = new URL(window.location.href)
    if (next === 'en') url.searchParams.delete('lang')
    else url.searchParams.set('lang', next)
    window.history.replaceState(null, '', url)
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang
    document.title = content[lang].meta.title
  }, [lang])

  const value = useMemo(() => ({ lang, setLang, t: content[lang] }), [lang, setLang])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

// oxlint-disable-next-line react/only-export-components
export function useLang() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLang must be used inside <LanguageProvider>')
  return ctx
}
