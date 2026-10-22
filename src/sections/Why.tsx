import { MessageCircle, ShieldCheck, UserRound, type LucideIcon } from 'lucide-react'
import { Reveal } from '../components/Reveal'
import { StyleTag } from '../components/StyleTag'
import type { UspId } from '../content'
import { useLang } from '../i18n'
import { tornEdge } from '../lib/tornEdge'

const ICONS: Record<UspId, LucideIcon> = {
  contact: UserRound,
  language: MessageCircle,
  carefree: ShieldCheck,
}

// A different tear from the one at the top of the process section, as a mask so the strip can keep its paper grain.
const TORN_EDGE_MASK = `url("data:image/svg+xml,${encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 30" preserveAspectRatio="none"><path d="${tornEdge(29)}"/></svg>`,
)}")`

/** Style 04 · Soft & reassuring: sage and peach, rounded shapes, gentle shadows. The look of a calm practice. */
export function Why() {
  const { t } = useLang()
  const w = t.why

  return (
    // At the bottom it leaves room for the packages section's slanted top.
    <section id="why" aria-labelledby="why-title" className="relative isolate font-soft text-pine">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden bg-mist">
        {/* The glows fade out towards the bottom, so the marquee below meets plain mist. */}
        <div className="absolute inset-0 mask-[linear-gradient(to_bottom,black_calc(100%-10rem),transparent)]">
          <div className="absolute -top-48 -right-40 size-152 rounded-full bg-sage-soft blur-3xl" />
          <div className="absolute -bottom-56 -left-40 size-136 rounded-full bg-peach/60 blur-3xl" />
        </div>
      </div>
      {/* The torn edge: a strip of the section above (Process, sand with its grain) ripped off the top of this one. */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-6 drop-shadow-[0_2px_1px_rgb(29_59_51/0.14)] sm:h-7">
        <div className="relative size-full bg-sand" style={{ maskImage: TORN_EDGE_MASK, maskSize: '100% 100%' }}>
          <div className="noise absolute inset-0 opacity-[0.28] mix-blend-multiply" />
        </div>
      </div>

      <div className="wrap pt-18 pb-[calc(var(--tilt)+6.5rem)] lg:pt-24 lg:pb-[calc(var(--tilt)+7.5rem)]">
        <Reveal>
          <StyleTag id="soft" />
          <h2 id="why-title" className="mt-4 max-w-[13em] text-5xl leading-[1.05] font-extrabold tracking-tight text-balance sm:text-6xl">
            {w.title}
          </h2>
        </Reveal>

        <ul className="mt-12 grid gap-5 md:grid-cols-3 lg:mt-14">
          {w.items.map((item, i) => {
            const Icon = ICONS[item.id]
            return (
              <Reveal as="li" key={item.id} delay={i * 90}>
                <div className="h-full rounded-[1.75rem] bg-white/85 p-7 shadow-[0_10px_40px_-24px_rgb(29_59_51/0.35)] ring-1 ring-pine/5">
                  <span className="grid size-12 place-items-center rounded-2xl bg-sage-soft text-pine">
                    <Icon className="size-6" strokeWidth={1.75} />
                  </span>
                  <h3 className="mt-5 text-xl font-extrabold">{item.title}</h3>
                  <p className="mt-2 leading-relaxed text-pine/75">{item.text}</p>
                </div>
              </Reveal>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
