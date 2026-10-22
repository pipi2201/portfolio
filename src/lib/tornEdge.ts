/**
 * A deterministic, slightly irregular edge, like paper torn by hand: an SVG path in a 1440×30 box, the torn side down.
 * A different seed gives a different tear.
 */
export function tornEdge(seed = 11, width = 1440, depth = 22, step = 18) {
  const random = () => {
    seed = (seed * 16807) % 2147483647
    return seed / 2147483647
  }
  let d = 'M0 0 L0 12'
  for (let x = step; x < width; x += step) d += ` L${x} ${(6 + random() * depth).toFixed(1)}`
  return `${d} L${width} 12 L${width} 0 Z`
}
