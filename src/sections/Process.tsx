import type { CSSProperties, ReactNode } from 'react'
import { Reveal } from '../components/Reveal'
import { StyleTag } from '../components/StyleTag'
import { useInView } from '../hooks/useInView'
import { useLang } from '../i18n'
import { cn } from '../lib/cn'

/** A deterministic, slightly irregular edge, like paper torn by hand. */
function tornEdge(width = 1440, depth = 22, step = 18) {
  let seed = 11
  const random = () => {
    seed = (seed * 16807) % 2147483647
    return seed / 2147483647
  }
  let d = 'M0 0 L0 12'
  for (let x = step; x < width; x += step) d += ` L${x} ${(6 + random() * depth).toFixed(1)}`
  return `${d} L${width} 12 L${width} 0 Z`
}
const TORN_EDGE = tornEdge()

/** Wraps hand-drawn SVG strokes so they draw themselves once they scroll into view. */
function Drawn({ className, delay = 0, children, viewBox }: { className?: string; delay?: number; children: ReactNode; viewBox: string }) {
  const [ref, inView] = useInView<SVGSVGElement>(0.4)
  return (
    <svg
      ref={ref}
      aria-hidden
      viewBox={viewBox}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn('draw', inView && 'is-visible', className)}
      style={{ '--draw-delay': `${delay}ms` } as CSSProperties}
    >
      {children}
    </svg>
  )
}

/** Style 03 · Warm & handmade: sand and terracotta, a soft serif, and strokes that look drawn by hand. */
export function Process() {
  const { t } = useLang()
  const p = t.process

  return (
    <section id="process" aria-labelledby="process-title" className="relative isolate overflow-hidden bg-sand font-warm-soft text-espresso">
      <div aria-hidden className="noise pointer-events-none absolute inset-0 -z-10 opacity-[0.28] mix-blend-multiply" />
      <svg
        aria-hidden
        viewBox="0 0 1440 30"
        preserveAspectRatio="none"
        className="absolute inset-x-0 top-0 h-6 w-full text-mist drop-shadow-[0_2px_1px_rgb(59_42_31/0.12)] sm:h-7"
      >
        <path d={TORN_EDGE} fill="currentColor" />
      </svg>

      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <StyleTag id="warm" className="border-b border-espresso/15 pb-4" />

        <div className="mt-14 grid gap-12 lg:mt-20 lg:grid-cols-12 lg:items-start">
          <Reveal className="lg:col-span-8">
            <p className="flex items-center gap-2 text-lg text-clay-deep italic">
              <svg aria-hidden viewBox="0 0 24 24" className="size-5 fill-ochre">
                <path d="M12 0c1 8 4 11 12 12-8 1-11 4-12 12-1-8-4-11-12-12 8-1 11-4 12-12Z" />
              </svg>
              {p.eyebrow}
            </p>
            <h2 id="process-title" className="mt-4 text-5xl leading-[1.02] font-normal tracking-tight text-balance sm:text-7xl">
              {p.title.before}
              <span className="relative inline-block italic text-clay">
                {p.title.em}
                <Drawn viewBox="0 0 300 24" delay={300} className="absolute -bottom-3 left-0 h-4 w-full text-clay sm:-bottom-4 sm:h-5">
                  <path pathLength={1} strokeWidth={5} d="M4 15C52 6 98 19 152 11S250 5 296 12" />
                </Drawn>
              </span>
            </h2>
          </Reveal>

          <Reveal delay={200} as="figure" className="justify-self-center lg:col-span-4 lg:justify-self-end">
            <div className="relative w-72 -rotate-3 bg-butter px-7 pt-9 pb-6 shadow-[0_22px_30px_-18px_rgb(59_42_31/0.55)] transition-transform duration-500 hover:rotate-0">
              <span aria-hidden className="absolute -top-3 left-1/2 h-7 w-28 -translate-x-1/2 rotate-4 bg-white/55 shadow-sm backdrop-blur-[1px]" />
              <blockquote className="text-2xl leading-snug italic">{p.note}</blockquote>
              <figcaption className="mt-4 text-right text-lg text-clay-deep italic">— {p.noteSignature}</figcaption>
            </div>
          </Reveal>
        </div>

        <ol className="mt-20 grid gap-14 sm:grid-cols-2 lg:mt-24 lg:grid-cols-4 lg:gap-8">
          {p.steps.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 140} className="relative">
              <div className="relative grid size-20 place-items-center">
                <Drawn viewBox="0 0 100 100" delay={200 + i * 180} className="absolute inset-0 size-full text-clay">
                  <path
                    pathLength={1}
                    strokeWidth={2.5}
                    d="M52 7C78 6 95 27 93 52c-2 25-22 42-46 40C23 90 6 71 8 47 10 24 30 9 58 11"
                  />
                </Drawn>
                <span className="text-4xl text-clay italic">{i + 1}</span>
              </div>

              {i < p.steps.length - 1 && (
                <div aria-hidden className="absolute top-7 right-0 left-24 hidden justify-center lg:flex">
                  <Drawn viewBox="0 0 90 30" delay={500 + i * 180} className="h-7 w-20 text-espresso/35">
                    <path pathLength={1} strokeWidth={2} d="M3 20C22 5 50 4 80 15" />
                    <path pathLength={1} strokeWidth={2} d="M70 6l11 9-13 5" />
                  </Drawn>
                </div>
              )}

              <h3 className="mt-6 text-2xl font-medium">{step.title}</h3>
              <p className="mt-3 text-[17px] leading-relaxed text-espresso/75">{step.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
