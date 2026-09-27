import { useState } from 'react'
import { LegalDialog } from './components/LegalDialog'
import { Nav } from './components/Nav'
import { StyleRail } from './components/StyleRail'
import type { InterestId, LegalId, PlanId } from './content'
import { useLang } from './i18n'
import { Contact } from './sections/Contact'
import { Footer } from './sections/Footer'
import { Hero } from './sections/Hero'
import { Pricing } from './sections/Pricing'
import { Process } from './sections/Process'
import { Services } from './sections/Services'
import { Work } from './sections/Work'

export default function App() {
  const { t } = useLang()
  // Shared between pricing and contact: "Ask about …" on a plan pre-selects it in the enquiry form.
  const [interests, setInterests] = useState<InterestId[]>([])
  const [legal, setLegal] = useState<LegalId | null>(null)

  const choosePlan = (id: PlanId) => setInterests((prev) => (prev.includes(id) ? prev : [...prev, id]))

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
        <Services />
        <Process />
        <Pricing onChoose={choosePlan} />
        <Contact interests={interests} setInterests={setInterests} />
      </main>
      <Footer onOpenLegal={setLegal} />
      <LegalDialog open={legal} onClose={() => setLegal(null)} />
    </>
  )
}
