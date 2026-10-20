import { useState } from 'react'
import { LegalDialog } from './components/LegalDialog'
import { Nav } from './components/Nav'
import { StyleRail } from './components/StyleRail'
import type { InterestId, LegalId, PlanId } from './content'
import { useLang } from './i18n'
import { About } from './sections/About'
import { Contact } from './sections/Contact'
import { Footer } from './sections/Footer'
import { Hero } from './sections/Hero'
import { Packages } from './sections/Packages'
import { Process } from './sections/Process'
import { Why } from './sections/Why'
import { Work } from './sections/Work'

export default function App() {
  const { t } = useLang()
  // Shared between packages and contact: "Ask about …" on a package pre-selects it in the enquiry form.
  const [interests, setInterests] = useState<InterestId[]>([])
  const [legal, setLegal] = useState<LegalId | null>(null)

  const choosePlan = (id: PlanId) => setInterests((prev) => [...prev.filter((x) => x !== 'unsure' && x !== id), id])

  return (
    <>
      <a
        href="#main"
        className="fixed top-3 left-3 z-60 -translate-y-20 rounded-full bg-ink px-4 py-2 text-sm text-white transition focus:translate-y-0"
      >
        {t.skipLink}
      </a>
      <Nav />
      <StyleRail />
      <main id="main">
        <Hero />
        <Work />
        <Why />
        <Process />
        <Packages onChoose={choosePlan} />
        <About />
        <Contact interests={interests} setInterests={setInterests} />
      </main>
      <Footer onOpenLegal={setLegal} />
      <LegalDialog open={legal} onClose={() => setLegal(null)} />
    </>
  )
}
