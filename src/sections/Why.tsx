import { MessageCircle, ShieldCheck, UserRound, type LucideIcon } from 'lucide-react'
import { Reveal } from '../components/Reveal'
import { StyleTag } from '../components/StyleTag'
import type { UspId } from '../content'
import { useLang } from '../i18n'

const ICONS: Record<UspId, LucideIcon> = {
  contact: UserRound,
  language: MessageCircle,
  carefree: ShieldCheck,
}

/** Style 02 · Soft & reassuring: sage and peach, rounded shapes, gentle shadows. The look of a calm practice. */
export function Why() {
  const { t } = useLang()
  const w = t.why

  return (
    <section id="why" aria-labelledby="why-title" className="relative isolate overflow-hidden bg-mist font-soft text-pine">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-48 -right-40 size-152 rounded-full bg-sage-soft blur-3xl" />
        <div className="absolute -bottom-56 -left-40 size-136 rounded-full bg-peach/60 blur-3xl" />
      </div>

      <div className="wrap py-18 lg:py-24">
        <Reveal className="grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-16">
          <div className="lg:col-span-7">
            <StyleTag id="soft" />
            <h2 id="why-title" className="mt-4 max-w-[13em] text-5xl leading-[1.05] font-extrabold tracking-tight text-balance sm:text-6xl">
              {w.title}
            </h2>
          </div>
          <p className="max-w-md text-lg leading-relaxed text-pine/75 lg:col-span-5 lg:justify-self-end">{w.lead}</p>
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
