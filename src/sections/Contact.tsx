import { ArrowRight, Check, Copy, Phone, Share2 } from 'lucide-react'
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

// The ends of the phone pill: icon-only, inset focus ring so it stays inside the border.
const phoneEnd = 'flex items-center text-gold transition-colors hover:bg-gold/10 focus-visible:-outline-offset-4'

const phoneDigits = SITE.phone.replace(/\D/g, '')

function Ornament({ className }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 120 12" className={cn('h-3 w-28 text-gold', className)} fill="none" stroke="currentColor">
      <path d="M0 6h48M72 6h48" strokeWidth=".8" />
      <path d="M60 1l5 5-5 5-5-5 5-5Z" strokeWidth=".9" />
    </svg>
  )
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  )
}

/** Style 06 · Elegant & timeless: deep green, champagne gold, a light serif and arches. */
export function Contact({ interests, setInterests }: ContactProps) {
  const { t } = useLang()
  const c = t.contact
  const [who, setWho] = useState('')
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [copied, setCopied] = useState(false)
  const [shared, setShared] = useState(false)
  const [numberCopied, setNumberCopied] = useState(false)

  // Packages can be combined (Carefree goes with any of them); "Not sure yet" stands on its own.
  const toggleInterest = (id: InterestId) =>
    setInterests((prev) => {
      if (prev.includes(id)) return prev.filter((x) => x !== id)
      return id === 'unsure' ? [id] : [...prev.filter((x) => x !== 'unsure'), id]
    })

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

  // Clicking the number copies it; if the clipboard is unavailable, it stays selected for a manual copy.
  async function copyPhone() {
    try {
      await navigator.clipboard.writeText(SITE.phone)
      setNumberCopied(true)
      setTimeout(() => setNumberCopied(false), 2000)
    } catch {
      /* clipboard unavailable */
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
    // Rises out of the packages section in a wide arch (--arch tall), the motif of the email card below.
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="relative isolate -mt-(--arch) overflow-hidden rounded-t-[50%_var(--arch)] bg-forest font-elegant text-ivory"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-120 left-1/2 size-240 -translate-x-1/2 rounded-full border border-gold/10" />
        <div className="absolute -top-108 left-1/2 size-216 -translate-x-1/2 rounded-full border border-gold/7" />
        <div className="absolute top-0 left-1/2 h-96 w-200 -translate-x-1/2 rounded-full bg-gold/10 blur-[120px]" />
      </div>

      <div className="wrap py-18 lg:py-24">
        <StyleTag id="elegant" className="font-sans text-ivory" />

        <Reveal className="mt-10 text-center lg:mt-12">
          <h2 id="contact-title" className="mx-auto max-w-4xl text-5xl leading-[1.05] font-light text-balance sm:text-7xl">
            {c.title.before}
            <em className="text-gold">{c.title.em}</em>
            {c.title.after}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-xl leading-relaxed text-ivory/75 sm:text-[1.4rem]">{c.lead}</p>
        </Reveal>

        <div className="mt-14 grid gap-12 lg:mt-16 lg:grid-cols-12 lg:gap-16">
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
              {/* One pill, three targets: call | number (click copies) | WhatsApp, mirrored like the ornament below. */}
              <div className="mx-auto mt-6 flex w-fit rounded-full border border-gold/40 font-sans text-[15px] text-ivory transition-colors hover:border-gold">
                <a
                  href={`tel:+${phoneDigits}`}
                  aria-label={c.direct.call}
                  title={c.direct.call}
                  className={cn(phoneEnd, 'rounded-l-full pr-3 pl-4.5')}
                >
                  <Phone className="size-4.5" />
                </a>
                {/* "Copied!" fades in on top of the number, so the pill keeps its width. */}
                <button
                  type="button"
                  onClick={copyPhone}
                  aria-label={`${c.direct.copyNumber}: ${SITE.phone}`}
                  className="relative grid cursor-copy px-3.5 py-2.5 transition-colors before:absolute before:inset-y-3 before:left-0 before:w-px before:bg-gold/30 after:absolute after:inset-y-3 after:right-0 after:w-px after:bg-gold/30 hover:text-gold focus-visible:-outline-offset-4"
                >
                  <span className={cn('col-start-1 row-start-1 transition-opacity duration-300 motion-reduce:transition-none', numberCopied && 'opacity-0')}>
                    {SITE.phone}
                  </span>
                  <span aria-live="polite" className="col-start-1 row-start-1 flex items-center justify-center">
                    {numberCopied && (
                      <span className="inline-flex items-center gap-1.5 text-gold transition-opacity duration-300 motion-reduce:transition-none starting:opacity-0">
                        <Check className="size-4" />
                        {c.direct.copied}
                      </span>
                    )}
                  </span>
                </button>
                {/* wa.me opens the WhatsApp app on phones and WhatsApp Web on desktop, with the text already typed in. */}
                <a
                  href={`https://wa.me/${phoneDigits}?text=${encodeURIComponent(c.direct.whatsappText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={c.direct.whatsapp}
                  title={c.direct.whatsapp}
                  className={cn(phoneEnd, 'rounded-r-full pr-4.5 pl-3')}
                >
                  <WhatsAppIcon className="size-4.5" />
                </a>
              </div>
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
