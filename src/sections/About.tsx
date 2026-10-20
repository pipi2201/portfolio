import { Languages, MapPin } from 'lucide-react'
import { Reveal } from '../components/Reveal'
import { useLang } from '../i18n'

/**
 * Your portrait (friendly, natural light). Put it in src/assets/, then:
 *   import photo from '../assets/ines.webp'
 *   const PHOTO: string | undefined = photo
 * Until then the arch shows a monogram.
 */
const PHOTO: string | undefined = undefined

const FACT_ICONS = [MapPin, Languages]

/** About: the brand look of the landing view (Geist and Instrument Serif, violet), quiet so the photo can lead. */
export function About() {
  const { t } = useLang()
  const a = t.about

  return (
    <section id="about" aria-labelledby="about-title" className="bg-haze text-ink">
      <div className="wrap grid items-center gap-12 py-18 md:grid-cols-[minmax(0,20rem)_1fr] md:gap-16 lg:gap-24 lg:py-24">
        <Reveal as="figure" className="mx-auto w-full max-w-72 md:max-w-none">
          {/* The arch echoes the email arch in the contact section right below. Its top is a semicircle at this 4:5 ratio. */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-tl-[50%_40%] rounded-tr-[50%_40%] rounded-b-3xl bg-haze-deep shadow-[0_30px_60px_-36px_rgb(60_40_120/0.45)]">
            {PHOTO ? (
              <img src={PHOTO} alt={a.photoAlt} className="size-full object-cover" />
            ) : (
              <span aria-hidden className="grid size-full place-items-center pt-[12%] font-editorial text-[5.5rem] text-violet-deep/70 italic">
                IP
              </span>
            )}
            <span aria-hidden className="pointer-events-none absolute inset-2.5 rounded-tl-[50%_40%] rounded-tr-[50%_40%] rounded-b-[1.1rem] border border-white/70" />
          </div>
        </Reveal>

        <Reveal delay={120}>
          <h2 id="about-title" className="text-5xl font-semibold tracking-[-0.045em] sm:text-6xl">
            {a.title.before}
            <span className="pr-[0.04em] font-editorial font-normal tracking-[-0.01em] text-violet-deep italic">{a.title.em}</span>
            {a.title.after}
          </h2>
          <div className="mt-6 max-w-[36rem] space-y-4 text-lg leading-relaxed text-ink/75">
            {a.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-[15px] text-ink/65">
            {a.facts.map((fact, i) => {
              const Icon = FACT_ICONS[i]
              return (
                <li key={fact} className="flex items-center gap-2">
                  <Icon className="size-4 text-violet-deep" strokeWidth={1.75} />
                  {fact}
                </li>
              )
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
