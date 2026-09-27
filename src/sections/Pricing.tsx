import { ArrowRight, Asterisk, Check, Laptop, ShieldCheck, Sparkles, type LucideIcon } from 'lucide-react'
import type { ReactNode } from 'react'
import { Reveal } from '../components/Reveal'
import { StyleTag } from '../components/StyleTag'
import type { PlanId } from '../content'
import { useLang } from '../i18n'
import { cn } from '../lib/cn'

const PLAN_LOOK: Record<PlanId, { card: string; icon: LucideIcon; iconBg: string }> = {
  onepager: { card: 'bg-white', icon: Laptop, iconBg: 'bg-sun' },
  care: { card: 'bg-bubblegum', icon: ShieldCheck, iconBg: 'bg-white' },
  custom: { card: 'bg-lilac', icon: Sparkles, iconBg: 'bg-mint' },
}

const STARBURST = Array.from({ length: 32 }, (_, i) => {
  const r = i % 2 ? 41 : 49
  const a = (Math.PI * i) / 16
  return `${(50 + r * Math.cos(a)).toFixed(2)},${(50 + r * Math.sin(a)).toFixed(2)}`
}).join(' ')

function Sticker({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn('grid size-28 place-items-center', className)}>
      <svg aria-hidden viewBox="0 0 100 100" className="col-start-1 row-start-1 size-full animate-spin-slow">
        <polygon points={STARBURST} fill="var(--color-mint)" stroke="#111" strokeWidth="2.5" strokeLinejoin="round" />
      </svg>
      <span className="relative col-start-1 row-start-1 max-w-20 text-center text-sm leading-tight font-extrabold">{children}</span>
    </div>
  )
}

function Marquee({ items }: { items: string[] }) {
  return (
    <div className="relative left-[-5%] w-[110%] -rotate-2 border-y-[3px] border-ink bg-ink py-3 text-sun">
      <div className="flex w-max animate-marquee">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            aria-hidden={i >= items.length}
            className="flex items-center gap-6 px-3 text-xl font-extrabold tracking-tight whitespace-nowrap uppercase sm:text-2xl"
          >
            {item}
            <Asterisk className="size-6 text-bubblegum" strokeWidth={3} />
          </span>
        ))}
      </div>
    </div>
  )
}

/** Style 04 · Bold & playful: sunshine yellow, thick outlines, hard shadows and a sticker or two. */
export function Pricing({ onChoose }: { onChoose: (id: PlanId) => void }) {
  const { t } = useLang()
  const p = t.pricing

  return (
    <section id="pricing" aria-labelledby="pricing-title" className="relative isolate overflow-hidden bg-sun font-playful text-ink">
      <div className="pt-10">
        <Marquee items={p.marquee} />
      </div>

      <div className="mx-auto max-w-7xl px-5 pt-20 pb-24 sm:px-8 sm:pb-32">
        <StyleTag id="bold" className="border-b-[3px] border-ink pb-4 font-semibold" />

        <Reveal className="mt-14 lg:mt-20">
          <span className="inline-block -rotate-3 rounded-full border-[3px] border-ink bg-white px-4 py-1 text-sm font-extrabold uppercase shadow-hard-sm">
            {p.eyebrow}
          </span>
          <h2 id="pricing-title" className="mt-6 text-[clamp(2.6rem,7.6vw,6.75rem)] leading-[0.92] font-extrabold tracking-[-0.045em]">
            {p.title.line1}
            <br />
            <span className="box-decoration-clone bg-[linear-gradient(transparent_58%,var(--color-bubblegum)_58%,var(--color-bubblegum)_90%,transparent_90%)] px-[0.06em]">
              {p.title.line2}
            </span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-8 lg:grid-cols-3 lg:gap-6">
          {p.plans.map((plan, i) => {
            const look = PLAN_LOOK[plan.id]
            const Icon = look.icon
            return (
              <Reveal key={plan.id} delay={i * 120} className="h-full">
                <article
                  className={cn(
                    'relative flex h-full flex-col rounded-3xl border-[3px] border-ink p-7 shadow-hard transition-[translate,box-shadow] duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-hard-lg sm:p-8',
                    look.card,
                  )}
                >
                  {plan.sticker && <Sticker className="absolute -top-12 -right-1 rotate-12 sm:-right-6">{plan.sticker}</Sticker>}

                  <div className="flex items-center gap-3">
                    <span className={cn('grid size-12 shrink-0 place-items-center rounded-xl border-[3px] border-ink', look.iconBg)}>
                      <Icon className="size-6" strokeWidth={2.5} />
                    </span>
                    <h3 className="text-2xl leading-tight font-extrabold tracking-tight">{plan.name}</h3>
                  </div>

                  <p className="mt-8 flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
                    <span className="text-5xl font-extrabold tracking-[-0.04em] sm:text-6xl">{plan.price}</span>
                    {plan.cadence && <span className="text-lg font-bold">{plan.cadence}</span>}
                    {plan.badge && (
                      <span className="rounded-full border-2 border-ink bg-white px-2.5 py-0.5 text-xs font-extrabold uppercase">{plan.badge}</span>
                    )}
                  </p>

                  <ul className="mt-7 flex-1 space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex gap-3 font-medium">
                        <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-md border-2 border-ink bg-white">
                          <Check className="size-4" strokeWidth={3} />
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    onClick={() => onChoose(plan.id)}
                    className="group mt-8 flex items-center justify-between rounded-2xl border-[3px] border-ink bg-ink px-5 py-3.5 font-bold text-white shadow-hard-sm transition-[translate,box-shadow,background-color,color] hover:bg-white hover:text-ink active:translate-x-0.75 active:translate-y-0.75 active:shadow-none"
                  >
                    {plan.cta}
                    <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
                  </a>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
