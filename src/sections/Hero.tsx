import { ArrowDown, ArrowRight } from 'lucide-react'
import { useEffect, useRef, useState, type PointerEvent } from 'react'
import { DesignWall } from '../components/DesignWall'
import { useLang } from '../i18n'
import { cn } from '../lib/cn'
import { STYLE_ORDER, STYLES, type StyleId } from '../styles'

/** How the cycling headline word looks in each style. */
const WORD: Record<StyleId, string> = {
  dark: 'bg-linear-to-r from-[#7c6cff] to-[#1fb3c7] bg-clip-text pr-[0.04em] font-tech font-bold tracking-[-0.06em] text-transparent',
  soft: 'rounded-full bg-sage-soft px-[0.3em] leading-[1.1] font-soft font-extrabold tracking-[-0.03em] text-sage-deep',
  warm: 'font-warm-soft font-normal tracking-[-0.02em] text-clay-deep italic',
  bold: '-rotate-2 rounded-2xl border-[3px] border-ink bg-sun px-[0.18em] leading-[1.05] font-playful font-extrabold tracking-[-0.05em] shadow-hard',
  elegant:
    'font-elegant font-medium tracking-[-0.01em] text-forest italic underline decoration-gold decoration-[0.05em] underline-offset-[0.14em]',
}

const CYCLE_MS = 2600

/**
 * The landing view: a headline whose key word cycles through the five styles,
 * next to a tilted wall of website designs (style samples plus real client sites).
 */
export function Hero() {
  const { t } = useLang()
  const h = t.hero
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const wallRef = useRef<HTMLDivElement>(null)
  const styleId = STYLE_ORDER[index]

  useEffect(() => {
    if (paused) return
    const timer = window.setInterval(() => setIndex((i) => (i + 1) % STYLE_ORDER.length), CYCLE_MS)
    return () => window.clearInterval(timer)
  }, [paused])

  function tilt(e: PointerEvent<HTMLElement>) {
    const wall = wallRef.current
    if (e.pointerType !== 'mouse' || !wall) return
    const rect = e.currentTarget.getBoundingClientRect()
    wall.style.setProperty('--mx', (((e.clientX - rect.left) / rect.width) * 2 - 1).toFixed(3))
    wall.style.setProperty('--my', (((e.clientY - rect.top) / rect.height) * 2 - 1).toFixed(3))
  }

  const preview = (i: number) => ({
    onMouseEnter: () => {
      setIndex(i)
      setPaused(true)
    },
    onFocus: () => {
      setIndex(i)
      setPaused(true)
    },
    onMouseLeave: () => setPaused(false),
    onBlur: () => setPaused(false),
  })

  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      onPointerMove={tilt}
      className="relative isolate overflow-hidden bg-[#fbfaf8] text-ink lg:min-h-svh"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-48 right-[-12%] size-192 animate-drift-a rounded-full bg-violet/35 blur-[120px]" />
        <div className="absolute top-[30%] right-[18%] size-120 animate-drift-b rounded-full bg-aqua/35 blur-[110px]" />
        <div className="absolute right-[-4%] -bottom-56 size-160 animate-drift-b rounded-full bg-sun/50 blur-[120px] [animation-delay:-9s]" />
        <div className="absolute -bottom-48 -left-40 size-136 animate-drift-a rounded-full bg-peach/70 blur-[120px] [animation-delay:-6s]" />
        <div className="absolute top-[12%] left-[28%] size-88 rounded-full bg-bubblegum/20 blur-[100px]" />
      </div>
      <div aria-hidden className="noise pointer-events-none absolute inset-0 -z-10 opacity-[0.07] mix-blend-multiply" />

      <DesignWall ref={wallRef} className="absolute inset-y-0 right-0 hidden w-[56%] lg:block" />

      <div className="relative mx-auto flex max-w-7xl flex-col justify-center px-5 pt-28 sm:px-8 lg:min-h-svh lg:pt-24 lg:pb-14">
        <div className="max-w-[40rem]">

          <h1 id="hero-title" className="mt-7 text-[clamp(2.9rem,min(6vw,9vh),5.5rem)] leading-[0.95] font-semibold tracking-[-0.055em]">
            <span className="sr-only">{h.srTitle}</span>
            <span aria-hidden className="block">
              <span className="block max-w-[8em] animate-rise [animation-delay:60ms]">{h.title.start}</span>
              <span className="block animate-rise whitespace-nowrap [animation-delay:140ms]">
                {h.title.before}{' '}
                <span key={index} className={cn('relative inline-block animate-word-in', WORD[styleId])}>
                  {h.words[index]}
                  {styleId === 'warm' && (
                    <svg
                      viewBox="0 0 300 20"
                      preserveAspectRatio="none"
                      className="absolute -bottom-[0.14em] left-0 h-[0.16em] w-full text-clay"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="6"
                      strokeLinecap="round"
                    >
                      <path d="M4 12C52 4 98 17 152 9S250 4 296 11" />
                    </svg>
                  )}
                </span>
              </span>
              <span className="block animate-rise [animation-delay:220ms]">{h.title.after}</span>
            </span>
          </h1>

          <p className="mt-7 max-w-md animate-rise text-lg leading-relaxed text-ink/70 [animation-delay:300ms] sm:text-xl">{h.sub}</p>

          <div className="mt-8 flex animate-rise flex-wrap gap-2.5 [animation-delay:380ms] sm:mt-9 sm:gap-3">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3.5 text-[15px] font-medium text-white shadow-[0_12px_30px_-10px_rgb(0_0_0/0.45)] transition hover:-translate-y-0.5 sm:px-6"
            >
              {h.primaryCta}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/70 px-5 py-3.5 text-[15px] font-medium backdrop-blur transition hover:bg-white sm:px-6"
            >
              {h.secondaryCta}
              <ArrowDown className="size-4 transition-transform group-hover:translate-y-0.5" />
            </a>
          </div>

          <nav aria-labelledby="styles-label" className="mt-10 hidden animate-rise [animation-delay:460ms] sm:block">
            <p id="styles-label" className="font-mono text-[11px] tracking-wider text-ink/60 uppercase">
              {h.stylesLabel}
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {STYLE_ORDER.map((id, i) => (
                <li key={id}>
                  <a
                    href={`#${STYLES[id].section}`}
                    {...preview(i)}
                    className={cn(
                      'inline-flex items-center gap-2 rounded-full border py-1.5 pr-3.5 pl-2 text-sm font-medium backdrop-blur transition-all duration-300',
                      i === index
                        ? 'border-ink bg-ink text-white shadow-[0_8px_20px_-8px_rgb(0_0_0/0.5)]'
                        : 'border-ink/10 bg-white/70 text-ink/75 hover:border-ink/25',
                    )}
                  >
                    <span className="size-3 rounded-full ring-2 ring-white/70" style={{ background: STYLES[id].dot }} />
                    {t.styles[id].name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      <DesignWall className="relative mt-4 h-[460px] [--wall-scale:0.58] sm:mt-8 lg:hidden" />
    </section>
  )
}
