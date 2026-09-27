import { CodeXml, ImagePlus, MessageCircleHeart, Palette, PenLine, ServerCog, type LucideIcon } from 'lucide-react'
import { Reveal } from '../components/Reveal'
import { StyleTag } from '../components/StyleTag'
import type { ServiceId } from '../content'
import { useLang } from '../i18n'

const ICONS: Record<ServiceId, LucideIcon> = {
  design: Palette,
  development: CodeXml,
  copy: PenLine,
  photos: ImagePlus,
  hosting: ServerCog,
  advice: MessageCircleHeart,
}

/** Style 02 · Soft & reassuring: sage and peach, rounded shapes, gentle shadows. The look of a calm practice. */
export function Services() {
  const { t } = useLang()
  const s = t.services

  return (
    <section id="services" aria-labelledby="services-title" className="relative isolate overflow-hidden bg-mist font-soft text-pine">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-48 -right-40 size-152 rounded-full bg-sage-soft blur-3xl" />
        <div className="absolute -bottom-56 -left-40 size-136 rounded-full bg-peach/60 blur-3xl" />
        <div className="absolute top-1/3 left-1/3 size-72 rounded-full bg-white/60 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <StyleTag id="soft" className="border-b border-pine/10 pb-4" />

        <Reveal className="mt-14 grid gap-6 lg:mt-20 lg:grid-cols-12 lg:items-end lg:gap-16">
          <div className="lg:col-span-7">
            <span className="inline-flex rounded-full bg-white/80 px-4 py-1.5 text-sm font-bold text-sage-deep shadow-sm">{s.eyebrow}</span>
            <h2 id="services-title" className="mt-6 text-5xl leading-[1.05] font-extrabold tracking-tight text-balance sm:text-6xl">
              {s.title}
            </h2>
          </div>
          <p className="text-lg leading-relaxed text-pine/75 lg:col-span-5">{s.lead}</p>
        </Reveal>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {s.items.map((item, i) => {
            const Icon = ICONS[item.id]
            return (
              <Reveal as="li" key={item.id} delay={(i % 3) * 90}>
                <div className="group flex h-full items-start gap-5 rounded-[1.75rem] bg-white/80 p-6 shadow-[0_10px_40px_-24px_rgb(29_59_51/0.35)] ring-1 ring-pine/5 transition-[translate,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-soft">
                  <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-sage-soft text-pine transition-colors duration-300 group-hover:bg-sage group-hover:text-white">
                    <Icon className="size-6" strokeWidth={1.75} />
                  </span>
                  <div>
                    <h3 className="text-xl font-extrabold">{item.title}</h3>
                    <p className="mt-1 leading-relaxed text-pine/70">{item.text}</p>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
