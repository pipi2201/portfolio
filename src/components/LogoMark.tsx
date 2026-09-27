import { STYLE_ORDER, STYLES } from '../styles'

// Dice-five layout: one dot per section style, read left to right, top to bottom.
const POSITIONS = [
  [3.6, 3.6],
  [13.4, 3.6],
  [8.5, 8.5],
  [3.6, 13.4],
  [13.4, 13.4],
]

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 17 17" className={className} aria-hidden>
      {STYLE_ORDER.map((id, i) => (
        <circle
          key={id}
          cx={POSITIONS[i][0]}
          cy={POSITIONS[i][1]}
          r="3.3"
          fill={STYLES[id].dot}
          stroke={id === 'bold' ? '#151515' : 'none'}
          strokeWidth="0.7"
        />
      ))}
    </svg>
  )
}
