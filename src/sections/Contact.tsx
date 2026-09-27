import { ArrowRight, Check, Copy, Share2 } from 'lucide-react'
import { useState, type Dispatch, type FormEvent, type SetStateAction } from 'react'
import { Reveal } from '../components/Reveal'
import { StyleTag } from '../components/StyleTag'
import { SITE } from '../config'
import type { InterestId } from '../content'
import { useLang } from '../i18n'
import { cn } from '../lib/cn'

type ContactProps = {
  interests: InterestId[]
  setInterests: Dispatch<SetStateAction<InterestId[]>>
}

const chip =
  'cursor-pointer rounded-full border border-gold/35 px-4 py-2 font-sans text-sm text-ivory/80 transition-colors select-none hover:border-gold hover:text-ivory peer-checked:border-gold peer-checked:bg-gold peer-checked:text-forest peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-gold'

const field =
  'mt-2 w-full border-b border-ivory/25 bg-transparent py-3 font-sans text-base text-ivory transition-colors placeholder:text-ivory/45 focus:border-gold focus:outline-none'

const label = 'font-sans text-xs tracking-[0.2em] text-gold uppercase'

function Ornament({ className }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 120 12" className={cn('h-3 w-28 text-gold', className)} fill="none" stroke="currentColor">
      <path d="M0 6h48M72 6h48" strokeWidth=".8" />
      <path d="M60 1l5 5-5 5-5-5 5-5Z" strokeWidth=".9" />
    </svg>
  )
}

/** Style 05 · Elegant & timeless: deep green, champagne gold, a light serif and arches. */
export function Contact({ interests, setInterests }: ContactProps) {
  const { t } = useLang()
  const c = t.contact
  const [who, setWho] = useState('')
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [copied, setCopied] = useState(false)
  const [shared, setShared] = useState(false)

  const toggleInterest = (id: InterestId) =>
    setInterests((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]))

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const chosen = c.form.interests.filter((i) => interests.includes(i.id)).map((i) => i.label)
    const subject = chosen.length ? `${c.mail.subject}: ${chosen.join(', ')}` : c.mail.subject
    const details = [who && `${c.mail.whoLine}: ${who}`, chosen.length > 0 && `${c.mail.interestLine}: ${chosen.join(', ')}`].filter(Boolean)
    const body = [
      c.mail.greeting,
      '',
      message.trim() || c.mail.fallbackMessage,
      ...(details.length ? ['', ...details] : []),
      '',
      c.mail.signoff,
      name.trim(),
    ].join('\n')
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(SITE.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${SITE.email}`
    }
  }

  async function sharePage() {
    const url = window.location.href.split('#')[0]
    if (navigator.share) {
      try {
        await navigator.share({ title: t.meta.title, text: c.referral.shareText, url })
      } catch {
        /* dismissed */
      }
      return
    }
    try {
      await navigator.clipboard.writeText(url)
      setShared(true)
      setTimeout(() => setShared(false), 2000)
    } catch {
      /* clipboard unavailable */
    }
  }

  return (
    <section id="contact" aria-labelledby="contact-title" className="relative isolate overflow-hidden bg-forest font-elegant text-ivory">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-120 left-1/2 size-240 -translate-x-1/2 rounded-full border border-gold/10" />
        <div className="absolute -top-108 left-1/2 size-216 -translate-x-1/2 rounded-full border border-gold/7" />
        <div className="absolute top-0 left-1/2 h-96 w-200 -translate-x-1/2 rounded-full bg-gold/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <StyleTag id="elegant" className="border-b border-gold/20 pb-4 font-sans text-ivory/75" />

        <Reveal className="mt-16 text-center lg:mt-24">
          <p className={cn(label, 'flex items-center justify-center gap-4')}>
            <span aria-hidden className="h-px w-10 bg-gold/50" />
            {c.eyebrow}
            <span aria-hidden className="h-px w-10 bg-gold/50" />
          </p>
          <h2 id="contact-title" className="mx-auto mt-8 max-w-4xl text-5xl leading-[1.05] font-light text-balance sm:text-7xl">
            {c.title.before}
            <em className="text-gold">{c.title.em}</em>
            {c.title.after}
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-ivory/75 sm:text-[1.4rem]">{c.lead}</p>
          <Ornament className="mx-auto mt-10" />
        </Reveal>

        <div className="mt-16 grid gap-12 lg:mt-20 lg:grid-cols-12 lg:gap-16">
          <Reveal as="div" className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-10">
              <fieldset>
                <legend className={label}>{c.form.whoLabel}</legend>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  {c.form.who.map((option) => (
                    <label key={option}>
                      <input
                        type="radio"
                        name="who"
                        value={option}
                        checked={who === option}
                        onChange={() => setWho(option)}
                        className="peer sr-only"
                      />
                      <span className={cn(chip, 'inline-block')}>{option}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <fieldset>
                <legend className={label}>{c.form.interestLabel}</legend>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  {c.form.interests.map((option) => (
                    <label key={option.id}>
                      <input
                        type="checkbox"
                        checked={interests.includes(option.id)}
                        onChange={() => toggleInterest(option.id)}
                        className="peer sr-only"
                      />
                      <span className={cn(chip, 'inline-flex items-center gap-1.5')}>
                        {interests.includes(option.id) && <Check className="size-3.5" strokeWidth={2.5} />}
                        {option.label}
                      </span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <div>
                <label htmlFor="contact-name" className={label}>
                  {c.form.nameLabel}
                </label>
                <input
                  id="contact-name"
                  type="text"
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={c.form.namePlaceholder}
                  className={field}
                />
              </div>

              <div>
                <label htmlFor="contact-message" className={label}>
                  {c.form.messageLabel}
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={c.form.messagePlaceholder}
                  className={cn(field, 'resize-none')}
                />
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
                <button
                  type="submit"
                  className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 font-sans text-[15px] font-medium text-forest transition-colors hover:bg-ivory"
                >
                  {c.form.submit}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </button>
                <p className="font-sans text-xs leading-relaxed text-ivory/60">{c.form.hint}</p>
              </div>
            </form>
          </Reveal>

          <Reveal as="div" delay={150} className="lg:col-span-5">
            <div className="relative rounded-t-[14rem] border border-gold/30 px-6 pt-20 pb-10 text-center sm:px-10">
              <div aria-hidden className="pointer-events-none absolute inset-2 rounded-t-[13.5rem] border border-gold/15" />
              <p className={label}>{c.direct.eyebrow}</p>
              <a
                href={`mailto:${SITE.email}`}
                className="mt-5 block text-[1.9rem] leading-tight font-medium wrap-break-word italic transition-colors hover:text-gold sm:text-[2.2rem]"
              >
                {SITE.email}
              </a>
              <button
                type="button"
                onClick={copyEmail}
                className="mt-5 inline-flex items-center gap-2 font-sans text-sm text-ivory/65 transition-colors hover:text-gold"
              >
                {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
                <span aria-live="polite">{copied ? c.direct.copied : c.direct.copy}</span>
              </button>
              <Ornament className="mx-auto my-8" />
              <p className="text-xl leading-snug text-ivory/80">{c.referral.text}</p>
              <button
                type="button"
                onClick={sharePage}
                className="mt-4 inline-flex items-center gap-2 border-b border-gold/40 pb-0.5 font-sans text-sm text-gold transition-colors hover:border-gold"
              >
                {shared ? <Check className="size-4" /> : <Share2 className="size-4" />}
                <span aria-live="polite">{shared ? c.referral.shared : c.referral.share}</span>
              </button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
