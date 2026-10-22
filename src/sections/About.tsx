import photo from '../assets/ines.webp'
import { Reveal } from '../components/Reveal'
import { StyleTag } from '../components/StyleTag'
import { useLang } from '../i18n'

/**
 * Style 02 · Clear & friendly: the look for medical practices. White, navy and one enamel blue, all in Lexend (made for
 * easy reading).
 */
export function About() {
  const { t } = useLang()
  const a = t.about
  const [lead, ...rest] = a.paragraphs

  return (
    <section id="about" aria-labelledby="about-title" className="bg-white font-clear text-navy">
      <div className="wrap grid items-center gap-16 py-18 md:grid-cols-[minmax(0,20rem)_1fr] lg:grid-cols-[minmax(0,23rem)_1fr] lg:gap-24 lg:py-28">
        <Reveal as="figure" className="relative mx-auto w-full max-w-72 md:max-w-none">
          {/* A leaf: two opposite corners fully round (quarter circles at this 4:5 ratio), two nearly square, so it leans
              towards the text. Cropped to 4:5 from the original photo (face centred, the table below cut off), 800×1000. */}
          <img
            src={photo}
            alt={a.photoAlt}
            width={800}
            height={1000}
            loading="lazy"
            decoding="async"
            className="aspect-4/5 w-full rounded-tl-[50%_40%] rounded-tr-md rounded-br-[50%_40%] rounded-bl-md bg-navy/5 object-cover object-top"
          />
        </Reveal>

        <Reveal delay={120}>
          <StyleTag id="clear" />
          <h2 id="about-title" className="mt-5 text-5xl leading-[1.05] font-semibold tracking-[-0.045em] sm:text-6xl">
            {a.title}
          </h2>
          <p className="mt-8 max-w-[34rem] text-[1.3125rem] leading-[1.6] tracking-[-0.01em]">{lead}</p>
          <div className="mt-5 max-w-[34rem] space-y-4 text-base leading-[1.75] text-navy/70 sm:text-[1.0625rem]">
            {rest.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
