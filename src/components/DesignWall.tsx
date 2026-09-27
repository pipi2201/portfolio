import type { CSSProperties, ReactNode, Ref } from 'react'
import bioresoHero from '../assets/work/bioreso-hero.webp'
import kinderphysioHero from '../assets/work/kinderphysio-hero.webp'
import kinderphysioMobile from '../assets/work/kinderphysio-mobile.webp'
import menzelHero from '../assets/work/menzel-witrisal-hero.webp'
import menzelMobile from '../assets/work/menzel-witrisal-mobile.webp'
import { cn } from '../lib/cn'
import { MiniBold, MiniDark, MiniEditorial, MiniElegant, MiniSoft, MiniWarm, Phone, Shot } from './MiniSites'

// Style samples mixed with real client work. Each column loops endlessly, alternating direction.
const COLUMNS: { cards: ReactNode[]; duration: number; reverse?: boolean }[] = [
  {
    duration: 48,
    cards: [
      <MiniDark key="dark" />,
      <Shot key="kp" src={kinderphysioHero} domain="kinderphysiolinz.com" />,
      <MiniWarm key="warm" />,
      <Phone key="mw" src={menzelMobile} />,
    ],
  },
  {
    duration: 60,
    reverse: true,
    cards: [
      <MiniSoft key="soft" />,
      <MiniBold key="bold" />,
      <Shot key="mw" src={menzelHero} domain="menzel-witrisal.at" />,
      <MiniEditorial key="editorial" />,
    ],
  },
  {
    duration: 54,
    cards: [
      <MiniElegant key="elegant" />,
      <Shot key="br" src={bioresoHero} domain="bioreso.ines.codes" />,
      <Phone key="kp" src={kinderphysioMobile} />,
      <MiniSoft key="soft" />,
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
            className={cn('flex flex-col', column.reverse ? 'animate-wall-down' : 'animate-wall-up')}
            style={{ animationDuration: `${column.duration}s` } as CSSProperties}
          >
            {/* Rendered twice so the loop is seamless. */}
            {[0, 1].map((copy) => (
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
