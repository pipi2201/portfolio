import { ArrowUpRight, Lock, MousePointer2, Pointer } from 'lucide-react'
import { useState } from 'react'
import heilimpulsFull from '../assets/work/heilimpuls-full.webp'
import heilimpulsMobile from '../assets/work/heilimpuls-mobile.webp'
import kinderphysioFull from '../assets/work/kinderphysio-full.webp'
import kinderphysioMobile from '../assets/work/kinderphysio-mobile.webp'
import menzelFull from '../assets/work/menzel-witrisal-full.webp'
import menzelMobile from '../assets/work/menzel-witrisal-mobile.webp'
import { Reveal } from '../components/Reveal'
import { StyleTag } from '../components/StyleTag'
import type { ProjectId } from '../content'
import { useLang } from '../i18n'
import { cn, fill } from '../lib/cn'

type Project = {
  id: ProjectId
  url: string
  domain: string
  full: string
  mobile: string
  /** still being built: the link says "Preview" instead of "Visit website" */
  wip?: boolean
}

const PROJECTS: Project[] = [
  {
    id: 'kinderphysio',
    url: 'https://kinderphysiolinz.com/',
    domain: 'kinderphysiolinz.com',
    full: kinderphysioFull,
    mobile: kinderphysioMobile,
  },
  {
    id: 'menzel',
    url: 'https://menzel-witrisal.at/',
    domain: 'menzel-witrisal.at',
    full: menzelFull,
    mobile: menzelMobile,
  },
  {
    id: 'heilimpuls',
    url: 'https://heilimpuls.at/',
    domain: 'heilimpuls.at',
    full: heilimpulsFull,
    mobile: heilimpulsMobile,
  },
]

const pad = (n: number) => String(n).padStart(2, '0')

/** Style 01 · Dark & modern: deep black, a glowing gradient, grid lines and glassy cards. */
export function Work() {
  const { t } = useLang()
  const w = t.work

  return (
    // No hard edge after the landing view: the top overlaps it by --seam and fades in (a little lavender reaches the hero),
    // then darkens (violet → dark) over the rest of --blend, so the dark part sits in this section rather than the hero.
    // The bottom is a hard edge into the white About section.
    <section
      id="work"
      aria-labelledby="work-title"
      className="relative isolate -mt-(--seam) -scroll-mt-[calc(var(--blend)-4rem)] font-tech text-white [--blend:18rem] [--seam:6rem] lg:[--blend:26rem] lg:[--seam:10rem]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden work-blend seam-in"
      >
        {/* The grid fades in as the background darkens and runs to the bottom, behind every project. */}
        <div className="bg-grid absolute inset-0 mask-[linear-gradient(to_bottom,transparent_calc(var(--blend)*0.4),black_var(--blend))]" />
        <div className="absolute top-[calc(var(--blend)-18rem)] left-1/2 h-144 w-240 -translate-x-1/2 rounded-full bg-violet/25 blur-[140px]" />
        <div className="absolute top-[45%] -right-40 size-120 rounded-full bg-aqua/10 blur-[120px]" />
      </div>

      <div className="wrap pt-[calc(var(--blend)+2rem)] pb-18 lg:pt-[calc(var(--blend)+3rem)] lg:pb-24">
        <Reveal className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <StyleTag id="dark" className="text-white" />
            <h2 id="work-title" className="mt-4 text-5xl font-semibold tracking-[-0.035em] text-balance sm:text-7xl">
              {w.title.before}
              <span className="bg-linear-to-r from-violet via-[#b1a6ff] to-aqua bg-clip-text text-transparent">{w.title.em}</span>
              {w.title.after}
            </h2>
          </div>
          <div className="max-w-xs">
            <p className="hidden items-center gap-2 text-sm text-white/55 [@media(hover:hover)]:flex">
              <MousePointer2 className="size-4" />
              {w.hintHover}
            </p>
            <p className="flex items-center gap-2 text-sm text-white/55 [@media(hover:hover)]:hidden">
              <Pointer className="size-4" />
              {w.hintTouch}
            </p>
          </div>
        </Reveal>

        <div className="mt-12 space-y-8 lg:mt-16 lg:space-y-[22vh]">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} total={PROJECTS.length} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index, total }: { project: Project; index: number; total: number }) {
  const { t } = useLang()
  const copy = t.work.projects[project.id]
  // On touch screens there is no hover, so a tap scrolls the preview instead.
  const [scrolled, setScrolled] = useState(false)

  return (
    <article className="lg:sticky" style={{ top: `calc(6.5rem + ${index * 1.75}rem)` }}>
      <div className="grid gap-6 rounded-4xl border border-white/10 bg-graphite p-3 shadow-[0_-24px_60px_-30px_rgb(0_0_0/0.9)] sm:p-4 lg:grid-cols-12 lg:gap-8 lg:p-5">
        <div className="relative pb-6 lg:col-span-7 lg:pb-0">
          <button
            type="button"
            aria-pressed={scrolled}
            aria-label={fill(t.work.previewLabel, { name: copy.name })}
            onClick={() => setScrolled((s) => !s)}
            className="group/preview block w-full cursor-ns-resize overflow-hidden rounded-[1.4rem] border border-white/10 bg-[#1b1b20] text-left"
          >
            <span className="flex h-9 items-center gap-1.5 border-b border-white/6 px-4">
              <span className="size-2.5 rounded-full bg-white/15" />
              <span className="size-2.5 rounded-full bg-white/15" />
              <span className="size-2.5 rounded-full bg-white/15" />
              <span className="mx-auto flex items-center gap-1.5 rounded-md bg-white/6 px-3 py-1 text-[11px] text-white/50">
                <Lock className="size-3" />
                {project.domain}
              </span>
              <span className="w-9.5" />
            </span>
            <span className="relative block aspect-16/10 overflow-hidden @container-size">
              <img
                src={project.full}
                alt={fill(t.work.altDesktop, { name: copy.name })}
                loading="lazy"
                decoding="async"
                className={cn(
                  'block w-full transition-transform duration-[1.4s] ease-[cubic-bezier(0.6,0,0.2,1)] group-hover/preview:translate-y-[calc(-100%+100cqh)] group-hover/preview:duration-[9s] group-hover/preview:ease-in-out',
                  scrolled && 'translate-y-[calc(-100%+100cqh)] duration-[9s] ease-in-out',
                )}
              />
            </span>
          </button>

          <div className="pointer-events-none absolute right-4 bottom-0 w-[23%] max-w-42 rotate-5 rounded-[1.6rem] border border-white/15 bg-black p-1.5 shadow-[0_30px_60px_-20px_rgb(0_0_0/0.9)] sm:right-8 lg:-bottom-3">
            <div className="relative overflow-hidden rounded-[1.2rem]">
              <img
                src={project.mobile}
                alt={fill(t.work.altMobile, { name: copy.name })}
                loading="lazy"
                decoding="async"
                width={520}
                height={1125}
                className="block h-auto w-full"
              />
              <span className="absolute top-1.5 left-1/2 h-3.5 w-12 -translate-x-1/2 rounded-full bg-black" />
            </div>
          </div>
        </div>

        <div className="flex flex-col px-3 pt-2 pb-4 sm:px-5 lg:col-span-5 lg:py-6 lg:pr-6">
          <p className="text-sm text-white/55 tabular-nums">
            {pad(index + 1)} / {pad(total)}
          </p>

          <h3 className="mt-5 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">{copy.name}</h3>
          <p className="mt-2 text-white/50">{copy.client}</p>
          <p className="mt-6 text-lg leading-relaxed text-white/75">{copy.description}</p>
          <span aria-hidden className="min-h-8 flex-1" />

          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group/link inline-flex items-center gap-1.5 self-start rounded-full bg-white px-5 py-2.5 text-[15px] font-medium text-void transition-colors hover:bg-aqua"
          >
            {project.wip ? t.work.preview : t.work.visit}
            <ArrowUpRight className="size-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </article>
  )
}
