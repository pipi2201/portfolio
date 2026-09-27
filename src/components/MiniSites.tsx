/**
 * Miniature websites for the landing page's design wall — one per style, built in code
 * (not screenshots), plus framed screenshots of real client sites. Purely decorative.
 */
import type { ReactNode } from 'react'
import { cn } from '../lib/cn'

function Frame({ children, className, dark, label }: { children: ReactNode; className?: string; dark?: boolean; label?: string }) {
  return (
    <div
      className={cn(
        'overflow-hidden rounded-2xl shadow-[0_40px_80px_-30px_rgb(30_20_60/0.45)] ring-1',
        dark ? 'ring-white/10' : 'ring-black/5',
        className,
      )}
    >
      <div className={cn('flex h-6 items-center gap-1 px-3', dark ? 'bg-white/5' : 'bg-black/[0.035]')}>
        {[0, 1, 2].map((i) => (
          <span key={i} className={cn('size-1.5 rounded-full', dark ? 'bg-white/25' : 'bg-black/15')} />
        ))}
        {label && (
          <span className={cn('mx-auto rounded px-2 font-sans text-[8px]', dark ? 'bg-white/5 text-white/60' : 'bg-black/5 text-black/65')}>
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

export function MiniSoft() {
  return (
    <Frame className="bg-mist font-soft text-pine">
      <div className="relative h-56 overflow-hidden p-4">
        <div className="absolute -top-10 -right-10 size-36 rounded-full bg-sage-soft blur-xl" />
        <div className="absolute -bottom-12 -left-8 size-32 rounded-full bg-peach/70 blur-xl" />
        <div className="relative flex items-center justify-between text-[8px]">
          <span className="flex items-center gap-1.5 text-[10px] font-extrabold">
            <span className="grid size-4 place-items-center rounded-full bg-sage text-[9px] text-white">+</span>
            Physio am Park
          </span>
          <span className="rounded-full bg-white/80 px-2 py-0.5 font-bold text-sage-deep">Team</span>
        </div>
        <p className="relative mt-6 text-[23px] leading-[1.05] font-extrabold">
          Bewegung,
          <br />
          die gut tut.
        </p>
        <span className="relative mt-3 inline-block rounded-full bg-sage-deep px-3 py-1.5 text-[8px] font-bold text-white">Termin buchen</span>
        <div className="absolute right-3 bottom-3 w-28 rounded-2xl bg-white/90 p-2.5 shadow-soft">
          <p className="flex items-center gap-1 text-[7px] font-bold text-sage-deep">
            <span className="size-1.5 rounded-full bg-emerald-500" />
            Jetzt geöffnet
          </p>
          <p className="mt-1 text-[9px] font-extrabold">Mo–Fr · 8–18 Uhr</p>
          <div className="mt-1.5 flex gap-1">
            {['M', 'D', 'M', 'D', 'F'].map((d, i) => (
              <span key={i} className={cn('grid size-3.5 place-items-center rounded-full text-[6px] font-bold', i === 2 ? 'bg-sage text-white' : 'bg-sage-soft')}>
                {d}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Frame>
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

export function MiniBold() {
  return (
    <div className="overflow-hidden rounded-2xl border-[3px] border-ink bg-sun font-playful text-ink shadow-[7px_7px_0_#111]">
      <div className="relative h-56 p-4">
        <div className="flex items-center justify-between">
          <span className="text-[15px] font-extrabold tracking-tight">POP!</span>
          <span className="rounded-full border-2 border-ink bg-white px-2 py-0.5 text-[8px] font-extrabold">Warenkorb (2)</span>
        </div>
        <p className="mt-5 text-[34px] leading-[0.85] font-extrabold tracking-tighter uppercase">
          Big
          <br />
          Sale.
        </p>
        <span className="mt-4 inline-flex rounded-lg border-2 border-ink bg-ink px-2.5 py-1.5 text-[8px] font-extrabold text-white shadow-[2px_2px_0_#ff85bd]">
          Jetzt shoppen →
        </span>
        <div className="absolute right-4 bottom-5 w-24 rotate-3 rounded-xl border-2 border-ink bg-bubblegum p-2 shadow-[3px_3px_0_#111]">
          <p className="text-[24px] leading-none font-extrabold tracking-tighter">-30%</p>
          <p className="text-[8px] font-bold">auf alles</p>
        </div>
        <div className="absolute top-12 right-7 grid size-14 place-items-center">
          <svg viewBox="0 0 100 100" className="col-start-1 row-start-1 size-full animate-spin-slow">
            <polygon points={STARBURST} fill="var(--color-mint)" stroke="#111" strokeWidth="4" strokeLinejoin="round" />
          </svg>
          <span className="relative col-start-1 row-start-1 text-[10px] font-extrabold">NEU</span>
        </div>
      </div>
    </div>
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

/** A real client website on a phone. */
export function Phone({ src }: { src: string }) {
  return (
    <div className="mx-auto w-[64%] rounded-[1.8rem] bg-black p-1.5 shadow-[0_40px_80px_-30px_rgb(30_20_60/0.55)]">
      <div className="relative overflow-hidden rounded-[1.4rem]">
        <img src={src} alt="" width={520} height={1125} className="block h-auto w-full" />
        <span className="absolute top-1.5 left-1/2 h-3.5 w-12 -translate-x-1/2 rounded-full bg-black" />
      </div>
    </div>
  )
}
