import { STYLES, type StyleId } from '../styles'

/** All six styles, in hue order clockwise from the top, so the ring reads as a colour wheel. */
const WHEEL: StyleId[] = ['dark', 'warm', 'elegant', 'bold', 'soft', 'clear']

const DOT = 3.3
/** Distance of each dot from the centre: neighbours just touch. */
const RING = 2 * DOT

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="-10.4 -10.4 20.8 20.8" className={className} aria-hidden>
      {WHEEL.map((id, i) => {
        const angle = (i / WHEEL.length - 0.25) * 2 * Math.PI
        return (
          <circle
            key={id}
            cx={RING * Math.cos(angle)}
            cy={RING * Math.sin(angle)}
            r={DOT}
            fill={STYLES[id].dot}
            stroke={id === 'bold' ? '#151515' : 'none'}
            strokeWidth="0.7"
          />
        )
      })}
    </svg>
  )
}
