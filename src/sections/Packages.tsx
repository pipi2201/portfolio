import { ArrowRight, Asterisk, Check } from 'lucide-react'
import type { ReactNode } from 'react'
import { Reveal } from '../components/Reveal'
import { StyleTag } from '../components/StyleTag'
import type { PlanId } from '../content'
import { useLang } from '../i18n'
import { cn } from '../lib/cn'

const CARD: Record<PlanId, string> = {
  essential: 'bg-white',
  practice: 'bg-bubblegum',
  carefree: 'bg-lilac',
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

/** Style 04 · Bold & playful: sunshine yellow, thick outlines, hard shadows and a sticker. */
export function Packages({ onChoose }: { onChoose: (id: PlanId) => void }) {
  const { t } = useLang()
  const p = t.packages

  return (
    <section id="packages" aria-labelledby="packages-title" className="relative isolate overflow-hidden bg-sun font-playful text-ink">
      <div className="pt-10">
        <Marquee items={p.marquee} />
      </div>

      <div className="wrap pt-16 pb-18 lg:pt-20 lg:pb-24">
        <Reveal>
          <StyleTag id="bold" className="font-semibold" />
          <h2 id="packages-title" className="mt-4 text-[clamp(2.6rem,7.6vw,6.25rem)] leading-[0.95] font-extrabold tracking-[-0.045em]">
            {p.title.line1}
            <br />
            <span className="box-decoration-clone bg-bubblegum px-[0.08em]">{p.title.line2}</span>
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed font-medium">{p.lead}</p>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-3 lg:gap-6">
          {p.plans.map((plan, i) => (
            <Reveal key={plan.id} delay={i * 120} className="h-full">
              <article className={cn('relative flex h-full flex-col rounded-3xl border-[3px] border-ink p-7 shadow-hard sm:p-8', CARD[plan.id])}>
                {plan.sticker && <Sticker className="absolute -top-12 -right-1 rotate-12 sm:-right-6">{plan.sticker}</Sticker>}

                <p className="text-sm font-extrabold tracking-wide uppercase">{plan.label}</p>
                <h3 className="mt-2 text-4xl leading-none font-extrabold tracking-[-0.03em]">{plan.name}</h3>
                <p className="mt-3 text-lg leading-snug font-medium">{plan.tagline}</p>

                <ul className="mt-6 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-3 leading-snug font-medium">
                      <span className="mt-px grid size-5.5 shrink-0 place-items-center rounded-md border-2 border-ink bg-white">
                        <Check className="size-3.5" strokeWidth={3.5} />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <p className="mt-7 font-extrabold">
                  {p.goodFor}: {plan.goodFor}
                </p>

                <a
                  href="#contact"
                  onClick={() => onChoose(plan.id)}
                  className="group mt-5 flex items-center justify-between rounded-2xl border-[3px] border-ink bg-ink px-5 py-3.5 font-bold text-white shadow-hard-sm transition-[translate,box-shadow,background-color,color] hover:bg-white hover:text-ink active:translate-x-0.75 active:translate-y-0.75 active:shadow-none"
                >
                  {plan.cta}
                  <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
                </a>
              </article>
            </Reveal>
          ))}
        </div>

        <p className="mt-12 text-lg font-medium">
          {p.more.text}{' '}
          <a href="#contact" className="font-extrabold underline decoration-[3px] underline-offset-4 transition-colors hover:text-[#b8327a]">
            {p.more.link}
          </a>
        </p>
      </div>
    </section>
  )
}
