import type { CSSProperties, ReactNode, Ref } from 'react'
import aerztezentrumHero from '../assets/work/aerztezentrum-hero.webp'
import aerztezentrumMobile from '../assets/work/aerztezentrum-mobile.webp'
import bioresoHero from '../assets/work/bioreso-hero.webp'
import heilimpulsHero from '../assets/work/heilimpuls-hero.webp'
import heilimpulsMobile from '../assets/work/heilimpuls-mobile.webp'
import kinderphysioHero from '../assets/work/kinderphysio-hero.webp'
import kinderphysioMobile from '../assets/work/kinderphysio-mobile.webp'
import menzelHero from '../assets/work/menzel-witrisal-hero.webp'
import menzelMobile from '../assets/work/menzel-witrisal-mobile.webp'
import { cn } from '../lib/cn'
import {
  MiniDark,
  MiniEditorial,
  MiniElegant,
  MiniSoft,
  MiniSoftPhone,
  MiniWarm,
  Phone,
  Shot,
} from './MiniSites'

// Real client work mixed with coded style samples, all from health, therapy and coaching.
// Each column loops endlessly, alternating direction.
const COLUMNS: { cards: ReactNode[]; duration: number; reverse?: boolean }[] = [
  {
    duration: 50,
    cards: [
      <MiniDark key="dark" />,
      <Shot key="kp" src={kinderphysioHero} domain="kinderphysiolinz.com" />,
      <MiniWarm key="warm" />,
      <Phone key="mw" src={menzelMobile} />,
    ],
  },
  {
    duration: 74,
    reverse: true,
    cards: [
      <MiniSoft key="soft" />,
      <Phone key="hi" src={heilimpulsMobile} />,
      <Shot key="mw" src={menzelHero} domain="menzel-witrisal.at" />,
      <Phone key="az" src={aerztezentrumMobile} />,
      <MiniEditorial key="editorial" />,
    ],
  },
  {
    duration: 66,
    cards: [
      <MiniElegant key="elegant" />,
      <Shot key="br" src={bioresoHero} domain="bioreso.ines.codes" />,
      <MiniSoftPhone key="soft-phone" />,
      <Shot key="hi" src={heilimpulsHero} domain="heilimpuls.at" />,
      <Phone key="kp" src={kinderphysioMobile} />,
      <Shot key="az" src={aerztezentrumHero} domain="aerztezentrum-gallneukirchen.at" />,
    ],
  },
]

/**
 * A tilted, slowly scrolling wall of website designs. The parent sets --mx / --my (-1…1)
 * from the pointer position for a subtle parallax tilt.
 */
export function DesignWall({ className, ref }: { className?: string; ref?: Ref<HTMLDivElement> }) {
  return (
    <div aria-hidden className={cn('wall-mask pointer-events-none overflow-hidden [perspective:1800px]', className)}>
      <div ref={ref} className="wall-3d absolute top-1/2 left-1/2 grid w-[900px] grid-cols-3 gap-6">
        {COLUMNS.map((column, i) => (
          <div
            key={i}
            className={cn('flex flex-col self-center will-change-transform', column.reverse ? 'animate-wall-down' : 'animate-wall-up')}
            style={{ animationDuration: `${column.duration}s` } as CSSProperties}
          >
            {/*
              Four identical copies; the animation moves exactly one copy (25%) and restarts.
              Columns are centred (not stretched by the grid), so the tilted viewport always
              sits inside the middle copies and never reaches an end.
            */}
            {[0, 1, 2, 3].map((copy) => (
              <div key={copy} className="flex flex-col gap-6 pb-6">
                {column.cards}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
