/**
 * Miniature websites for the landing page's design wall — one per style, built in code
 * (not screenshots), plus framed screenshots of real client sites. Purely decorative.
 */
import { Asterisk, ShoppingBag } from 'lucide-react'
import type { ReactNode } from 'react'
import { cn } from '../lib/cn'

type FrameProps = {
  children: ReactNode
  className?: string
  /** dark page: dark browser bar and a light outline */
  dark?: boolean
  /** light page, but with the same dark browser bar as the dark pages */
  darkBar?: boolean
  label?: string
}

function Frame({ children, className, dark, darkBar, label }: FrameProps) {
  const barIsDark = dark || darkBar
  return (
    <div
      className={cn(
        'overflow-hidden rounded-2xl shadow-[0_40px_80px_-30px_rgb(30_20_60/0.45)] ring-1',
        dark ? 'ring-white/10' : 'ring-black/5',
        className,
      )}
    >
      <div className={cn('flex h-6 items-center gap-1 px-3', dark ? 'bg-white/5' : darkBar ? 'bg-[#131316]' : 'bg-black/[0.035]')}>
        {[0, 1, 2].map((i) => (
          <span key={i} className={cn('size-1.5 rounded-full', barIsDark ? 'bg-white/25' : 'bg-black/15')} />
        ))}
        {label && (
          <span className={cn('mx-auto rounded px-2 font-sans text-[8px]', barIsDark ? 'bg-white/5 text-white/60' : 'bg-black/5 text-black/65')}>
            {label}
          </span>
        )}
      </div>
      {children}
    </div>
  )
}

export function MiniDark() {
  return (
    <Frame dark className="bg-void font-tech text-white">
      <div className="relative h-52 overflow-hidden p-4">
        <div className="bg-grid absolute inset-0 opacity-70" style={{ backgroundSize: '22px 22px' }} />
        <div className="absolute -top-12 -right-10 size-44 rounded-full bg-violet/60 blur-3xl" />
        <div className="absolute -bottom-10 -left-6 size-32 rounded-full bg-aqua/30 blur-2xl" />
        <div className="relative flex items-center justify-between text-[8px] text-white/55">
          <span className="flex items-center gap-1.5 text-[10px] font-bold text-white">
            <span className="size-2.5 rounded-sm bg-linear-to-br from-violet to-aqua" />
            NOVA
          </span>
          <span className="flex gap-2.5">
            <span>Studio</span>
            <span>Kurse</span>
            <span>Team</span>
          </span>
        </div>
        <p className="relative mt-7 text-[28px] leading-[0.95] font-bold tracking-tight">
          Train
          <br />
          <span className="bg-linear-to-r from-violet to-aqua bg-clip-text text-transparent">smarter.</span>
        </p>
        <div className="relative mt-4 flex gap-1.5 text-[8px] font-semibold">
          <span className="rounded-full bg-linear-to-r from-violet to-aqua px-3 py-1.5 text-void">Probetraining</span>
          <span className="rounded-full border border-white/20 px-3 py-1.5">Kurse</span>
        </div>
        <div className="absolute right-3 bottom-3 rounded-xl border border-white/10 bg-white/[0.06] px-3 py-2 backdrop-blur">
          <p className="text-[7px] text-white/50">Heute aktiv</p>
          <p className="text-[16px] font-bold">1.284</p>
        </div>
      </div>
    </Frame>
  )
}

/**
 * Side view of a spine along its natural S-curve (7 neck, 12 chest and 5 lower-back vertebrae),
 * computed once. Coordinates are in the Spine SVG's 70 × 226 viewBox.
 */
const SPINE_W = 70
const SPINE_H = 226
const VERTEBRAE = (() => {
  const sizes = [
    ...Array.from({ length: 7 }, (_, i) => ({ w: 9 + i * 0.5, h: 4.2 })),
    ...Array.from({ length: 12 }, (_, i) => ({ w: 12.5 + i * 0.35, h: 5.6 + i * 0.1 })),
    ...Array.from({ length: 5 }, (_, i) => ({ w: 17.5 + i * 0.4, h: 7.6 + i * 0.2 })),
  ]
  const gap = 1.7
  const total = sizes.reduce((sum, v) => sum + v.h + gap, 0)
  const k = 2 * Math.PI * 1.25 // neck curves forward, chest back, lower back forward again
  let y = 6
  return sizes.map(({ w, h }) => {
    const s = (y + h / 2) / total
    const vertebra = {
      x: 35 - 6 * Math.cos(k * s),
      y: y + h / 2,
      w,
      h,
      angle: (-Math.atan((6 * k * Math.sin(k * s)) / total) * 180) / Math.PI,
    }
    y += h + gap
    return vertebra
  })
})()
const SACRUM = (() => {
  const { x, y, h } = VERTEBRAE[VERTEBRAE.length - 1]
  const top = y + h / 2 + 2
  return `M${x - 9} ${top} L${x + 9} ${top} Q${x + 11} ${top + 13} ${x + 4} ${top + 25} Q${x - 3} ${top + 17} ${x - 9} ${top} Z`
})()

function Spine({ className }: { className?: string }) {
  return (
    <svg viewBox={`0 0 ${SPINE_W} ${SPINE_H}`} className={className} fill="none">
      {VERTEBRAE.map((v, i) => (
        <g key={i} transform={`translate(${v.x.toFixed(2)} ${v.y.toFixed(2)}) rotate(${v.angle.toFixed(2)})`}>
          {/* spinous process, pointing backwards */}
          <path
            d={`M${(v.w / 2 - 1).toFixed(2)} ${(-v.h * 0.1).toFixed(2)}l${(v.w * 0.55).toFixed(2)} ${(v.h * 0.7).toFixed(2)}`}
            stroke="currentColor"
            strokeOpacity=".6"
            strokeWidth={Math.max(1.3, v.h * 0.3).toFixed(2)}
            strokeLinecap="round"
          />
          <rect x={-v.w / 2} y={-v.h / 2} width={v.w} height={v.h} rx={v.h * 0.38} fill="white" stroke="currentColor" strokeOpacity=".85" strokeWidth="1.1" />
        </g>
      ))}
      <path d={SACRUM} fill="white" stroke="currentColor" strokeOpacity=".85" strokeWidth="1.1" />
    </svg>
  )
}

/** The spine as a faint background watermark, with one soft pulsing dot on the lower back. */
function SpineBackdrop({ className }: { className?: string }) {
  const lowerBack = VERTEBRAE[21]
  return (
    <div aria-hidden className={cn('pointer-events-none absolute', className)} style={{ aspectRatio: `${SPINE_W} / ${SPINE_H}` }}>
      <Spine className="size-full text-sage-deep opacity-25" />
      <span
        className="absolute size-2 -translate-1/2"
        style={{ left: `${(lowerBack.x / SPINE_W) * 100}%`, top: `${(lowerBack.y / SPINE_H) * 100}%` }}
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-peach" />
        <span className="absolute inset-0 rounded-full bg-[#e2876a]/60" />
      </span>
    </div>
  )
}

function OpenNow({ className }: { className?: string }) {
  return (
    <div className={cn('rounded-xl bg-white/90 px-2.5 py-1.5 shadow-soft', className)}>
      <p className="flex items-center gap-1 text-[6.5px] font-bold text-sage-deep">
        <span className="size-1.5 rounded-full bg-emerald-500" />
        Jetzt geöffnet
      </p>
      <p className="text-[8px] font-extrabold">Mo–Fr · 8–18 Uhr</p>
    </div>
  )
}

export function MiniSoft() {
  return (
    <Frame className="bg-mist font-soft text-pine">
      <div className="relative h-56 overflow-hidden p-4">
        <div className="absolute -top-8 right-0 size-40 rounded-full bg-sage-soft blur-2xl" />
        <div className="absolute -bottom-12 -left-8 size-32 rounded-full bg-peach/70 blur-xl" />
        <SpineBackdrop className="top-8 right-8 h-full rotate-8" />
        <div className="relative flex items-center justify-between text-[8px]">
          <span className="flex items-center gap-1.5 text-[10px] font-extrabold">
            <span className="grid size-4 place-items-center rounded-full bg-sage text-[9px] text-white">+</span>
            Physio am Park
          </span>
          <span className="flex gap-2 font-bold text-pine/70">
            <span>Therapie</span>
            <span>Team</span>
          </span>
        </div>
        <p className="relative mt-6 text-[23px] leading-[1.05] font-extrabold">
          Endlich wieder
          <br />
          schmerzfrei.
        </p>
        <p className="relative mt-1.5 text-[7.5px] text-pine/70">Physiotherapie & Training — mit Zeit für Sie.</p>
        <span className="relative mt-3 inline-block rounded-full bg-sage-deep px-3 py-1.5 text-[8px] font-bold text-white">Termin buchen</span>
        <OpenNow className="absolute bottom-3 left-4" />
      </div>
    </Frame>
  )
}

/** Physio am Park on a phone. */
export function MiniSoftPhone() {
  return (
    <PhoneFrame barClassName="bg-mist text-pine">
      <div className="relative flex aspect-[390/844] flex-col overflow-hidden bg-mist px-3.5 pt-3 pb-3.5 font-soft text-pine">
        <div className="absolute -bottom-10 -left-10 size-32 rounded-full bg-peach/70 blur-xl" />
        <div className="relative flex items-center justify-between">
          <span className="flex items-center gap-1 text-[9px] font-extrabold">
            <span className="grid size-3.5 place-items-center rounded-full bg-sage text-[8px] text-white">+</span>
            Physio am Park
          </span>
          <span className="flex flex-col gap-[3px]">
            {[0, 1, 2].map((i) => (
              <span key={i} className="h-[2px] w-3 rounded bg-pine" />
            ))}
          </span>
        </div>
        <SpineBackdrop className="top-[47%] right-2 h-[52%] rotate-8" />
        <p className="relative mt-10 text-[20px] leading-[1.05] font-extrabold">Endlich wieder schmerzfrei.</p>
        <p className="relative mt-2 text-[8px] leading-snug text-pine/70">Physiotherapie & Training — mit Zeit für Sie.</p>
        <span className="relative mt-3 block rounded-full bg-sage-deep py-2 text-center text-[8px] font-bold text-white">Termin buchen</span>
        <OpenNow className="relative mt-2.5" />
        <div className="relative mt-auto flex flex-wrap gap-1">
          {['Sport', 'Manuelle Therapie'].map((label) => (
            <span key={label} className="rounded-full bg-white/80 px-2 py-0.5 text-[7px] font-bold">
              {label}
            </span>
          ))}
        </div>
      </div>
    </PhoneFrame>
  )
}

export function MiniWarm() {
  return (
    <Frame className="bg-sand font-warm-soft text-espresso">
      <div className="relative h-60 overflow-hidden p-4">
        <div className="noise absolute inset-0 opacity-30 mix-blend-multiply" />
        <div className="relative flex items-center justify-between text-[8px]">
          <span className="text-[13px] italic">Kornblume</span>
          <span className="flex gap-2 text-espresso/60">
            <span>Karte</span>
            <span>Torten</span>
            <span>Besuch</span>
          </span>
        </div>
        <p className="relative mt-6 text-[28px] leading-[0.95] text-clay-deep italic">
          Frisch
          <br />
          gebacken.
        </p>
        <svg viewBox="0 0 120 10" className="relative mt-1 h-2.5 w-24 text-clay" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
          <path d="M2 6C22 2 40 9 60 5s38-2 58 1" />
        </svg>
        <div className="relative mt-3 w-36 space-y-1 text-[8px]">
          {[
            ['Zimtschnecke', '3,20'],
            ['Marillenkuchen', '3,80'],
            ['Melange', '3,90'],
          ].map(([item, price]) => (
            <p key={item} className="flex justify-between border-b border-dashed border-espresso/25 pb-0.5">
              <span>{item}</span>
              <span>{price}</span>
            </p>
          ))}
        </div>
        <div className="absolute top-12 right-4 grid size-16 rotate-12 place-items-center rounded-full border-2 border-dashed border-clay text-center text-[8px] leading-tight text-clay italic">
          <span>
            seit
            <br />
            <span className="text-[14px]">1987</span>
          </span>
        </div>
      </div>
    </Frame>
  )
}

const STARBURST = Array.from({ length: 24 }, (_, i) => {
  const r = i % 2 ? 40 : 50
  const a = (Math.PI * i) / 12
  return `${(50 + r * Math.cos(a)).toFixed(1)},${(50 + r * Math.sin(a)).toFixed(1)}`
}).join(' ')

/** Outlined "product photo" for the boutique: a vase with flowers, drawn in the page's bold style. */
function VaseIllustration({ className }: { className?: string }) {
  const outline = { stroke: '#111', strokeWidth: 2.5, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }
  return (
    <svg viewBox="0 0 100 130" className={className} aria-hidden>
      <ellipse cx="50" cy="119" rx="30" ry="5" fill="#111" opacity=".15" />
      {/* stems and leaves */}
      <path d="M45 67Q41 46 31 32M50 67L51 22M55 67Q61 47 70 36" fill="none" {...outline} />
      <path d="M43 52q-9-4-12 3q8 4 12-3Z" fill="var(--color-mint)" {...outline} strokeWidth={2} />
      <path d="M57 50q9-5 13 1q-8 5-13-1Z" fill="var(--color-mint)" {...outline} strokeWidth={2} />
      {/* flowers */}
      {[
        { x: 31, y: 30, r: 9, fill: 'var(--color-sun)' },
        { x: 51, y: 20, r: 10, fill: '#fff' },
        { x: 70, y: 34, r: 8, fill: 'var(--color-mint)' },
      ].map((f) => (
        <g key={f.x}>
          <circle cx={f.x} cy={f.y} r={f.r} fill={f.fill} {...outline} />
          <circle cx={f.x} cy={f.y} r={f.r * 0.35} fill="#111" />
        </g>
      ))}
      {/* vase */}
      <path d="M40 66h20q0 7 5 14q6 13-3 36H38q-9-23-3-36q5-7 5-14Z" fill="var(--color-lilac)" {...outline} />
      <path d="M36 92q7-4 14 0t14 0" fill="none" stroke="var(--color-sun)" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M38 102q6-3 12 0t12 0" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  )
}

function NewSticker({ className }: { className?: string }) {
  return (
    <div className={cn('grid place-items-center', className)}>
      <svg viewBox="0 0 100 100" className="col-start-1 row-start-1 size-full animate-spin-slow">
        <polygon points={STARBURST} fill="var(--color-mint)" stroke="#111" strokeWidth="4" strokeLinejoin="round" />
      </svg>
      <span className="relative col-start-1 row-start-1 text-[9px] font-extrabold">NEU</span>
    </div>
  )
}

function LotteLogo() {
  return (
    <span className="text-[14px] font-extrabold tracking-tight">
      LOTTE<span className="text-bubblegum [-webkit-text-stroke:0.6px_#111]">*</span>
    </span>
  )
}

export function MiniBold() {
  return (
    <Frame className="bg-sun font-playful text-ink">
      <div className="h-60">
        <p className="flex h-4 items-center justify-center gap-1.5 bg-ink text-[6.5px] font-extrabold tracking-wide text-sun uppercase">
          Gratis Versand ab 50 €
          <Asterisk className="size-2 text-bubblegum" strokeWidth={4} />
          Neu eingetroffen
        </p>
        <div className="flex items-center justify-between border-b-2 border-ink px-3 py-1.5">
          <LotteLogo />
          <span className="flex gap-2.5 text-[7.5px] font-bold">
            <span>Shop</span>
            <span>Neu</span>
            <span>Über uns</span>
          </span>
          <span className="relative grid size-5 place-items-center rounded-full border-2 border-ink bg-white">
            <ShoppingBag className="size-2.5" strokeWidth={3} />
            <span className="absolute -top-1 -right-1 grid size-2.5 place-items-center rounded-full bg-bubblegum text-[5.5px] font-extrabold ring-1 ring-ink">
              2
            </span>
          </span>
        </div>
        <div className="grid grid-cols-[1fr_6.5rem] gap-3 px-3 pt-3.5">
          <div className="pt-1">
            <p className="text-[19px] leading-[0.95] font-extrabold tracking-tighter">
              Kleiner Laden,
              <br />
              große Liebe.
            </p>
            <p className="mt-2 text-[7.5px] leading-snug font-semibold">Handverlesene Lieblingsstücke — von Keramik bis Papeterie.</p>
            <div className="mt-3 flex gap-1.5 text-[7px] font-extrabold whitespace-nowrap">
              <span className="rounded-md border-2 border-ink bg-ink px-1.5 py-1 text-white shadow-[2px_2px_0_#ff85bd]">Jetzt shoppen →</span>
              <span className="rounded-md border-2 border-ink bg-white px-1.5 py-1">Neuheiten</span>
            </div>
          </div>
          <div className="relative">
            <div className="h-34 overflow-hidden rounded-xl border-2 border-ink bg-bubblegum shadow-[3px_3px_0_#111]">
              <VaseIllustration className="size-full" />
            </div>
            <span className="absolute -bottom-2 -left-3 -rotate-6 rounded-md border-2 border-ink bg-white px-1.5 py-0.5 text-[7.5px] font-extrabold whitespace-nowrap shadow-[2px_2px_0_#111]">
              Vase „Lotti“ · 34 €
            </span>
            <NewSticker className="absolute -top-3 -right-2 size-10" />
          </div>
        </div>
        <div className="mt-4 flex gap-1.5 px-3">
          {['Keramik', 'Papeterie', 'Taschen'].map((category) => (
            <span key={category} className="rounded-full border-2 border-ink bg-white px-2 py-0.5 text-[7px] font-extrabold">
              {category}
            </span>
          ))}
        </div>
      </div>
    </Frame>
  )
}

export function MiniElegant() {
  return (
    <Frame dark className="bg-forest font-elegant text-ivory">
      <div className="relative h-60 overflow-hidden p-4 text-center">
        <div className="absolute -top-16 left-1/2 size-48 -translate-x-1/2 rounded-full bg-gold/15 blur-2xl" />
        <p className="relative font-sans text-[7px] tracking-[0.4em] text-gold uppercase">Maison Aurum</p>
        <div className="relative mx-auto mt-3 h-24 w-20 rounded-t-full border border-gold/60 bg-linear-to-b from-gold/45 via-gold/10 to-transparent p-1">
          <div className="size-full rounded-t-full border border-gold/30" />
        </div>
        <p className="relative mt-3 text-[24px] leading-none font-light">
          Zeitlose <em className="text-gold">Eleganz.</em>
        </p>
        <span className="relative mt-3 inline-block border border-gold/60 px-3 py-1 font-sans text-[7px] tracking-[0.3em] text-gold uppercase">
          Reservieren
        </span>
      </div>
    </Frame>
  )
}

export function MiniEditorial() {
  return (
    <Frame className="bg-paper text-ink">
      <div className="relative h-48 p-4">
        <div className="flex items-baseline justify-between border-b border-ink/15 pb-1.5 font-sans text-[7px] text-ink/55">
          <span className="font-editorial text-[12px] text-ink">Hartl Coaching</span>
          <span>Über · Angebot · Kontakt</span>
        </div>
        <p className="mt-4 font-editorial text-[30px] leading-[0.92]">
          Klarheit
          <br />
          beginnt <em className="text-vermilion">hier.</em>
        </p>
        <div className="mt-3 grid grid-cols-3 gap-2 border-t border-ink/15 pt-2 font-sans text-[7px] text-ink/70">
          {[
            ['12', 'Jahre'],
            ['1:1', 'Coaching'],
            ['Wien', '& online'],
          ].map(([value, label]) => (
            <span key={label}>
              <span className="block font-editorial text-[13px] text-ink">{value}</span>
              {label}
            </span>
          ))}
        </div>
      </div>
    </Frame>
  )
}

/** A real client website, cropped to its first screen. */
export function Shot({ src, domain }: { src: string; domain: string }) {
  return (
    <Frame className="bg-white" label={domain}>
      <img src={src} alt="" width={640} height={400} className="block aspect-16/10 w-full object-cover object-top" />
    </Frame>
  )
}

/** Phone mockup with a status bar around the notch, so the page (and its navbar) starts below it — like on a real phone. */
function PhoneFrame({ children, barClassName = 'bg-white text-ink' }: { children: ReactNode; barClassName?: string }) {
  return (
    <div className="mx-auto w-[64%] rounded-[1.8rem] bg-black p-1.5 shadow-[0_40px_80px_-30px_rgb(30_20_60/0.55)]">
      <div className="overflow-hidden rounded-[1.4rem]">
        <div className={cn('relative flex h-6 items-center justify-between px-4 font-sans text-[7px] font-semibold', barClassName)}>
          <span>9:41</span>
          <span className="absolute top-1.5 left-1/2 h-3.5 w-12 -translate-x-1/2 rounded-full bg-black" />
          <span className="flex items-center gap-1">
            <span className="flex items-end gap-px">
              {[2, 3, 4, 5].map((h) => (
                <span key={h} className="w-[1.5px] rounded-sm bg-current" style={{ height: h }} />
              ))}
            </span>
            <span className="h-[5px] w-[9px] rounded-[1.5px] border border-current p-px">
              <span className="block h-full w-3/4 rounded-[0.5px] bg-current" />
            </span>
          </span>
        </div>
        {children}
      </div>
    </div>
  )
}

/** A real client website on a phone. */
export function Phone({ src }: { src: string }) {
  return (
    <PhoneFrame>
      <img src={src} alt="" width={520} height={1125} className="block h-auto w-full" />
    </PhoneFrame>
  )
}
