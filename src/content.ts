/**
 * All copy on the page, in German and English.
 * The English object is typed against the German one, so both always have the same fields.
 * Rule of thumb: every message appears once, and every item is one sentence.
 */
import type { StyleId } from './styles'

export type Lang = 'de' | 'en'
export type UspId = 'contact' | 'language' | 'carefree'
export type PlanId = 'essential' | 'practice' | 'carefree'
export type InterestId = PlanId | 'unsure'
export type ProjectId = 'kinderphysio' | 'menzel' | 'heilimpuls'
export type LegalId = 'privacy'

type Usp = { id: UspId; title: string; text: string }
type Project = { name: string; client: string; description: string }
type Plan = {
  id: PlanId
  /** how it is paid: one-off fixed price or monthly add-on, shown above the name */
  price: string
  name: string
  tagline: string
  features: string[]
  goodFor: string
  cta: string
  sticker?: string
}
/** each block is a group of lines, shown as one paragraph */
type LegalDoc = { title: string; blocks: string[][] }

const de = {
  meta: {
    title: 'Ines Puhr – Websites für Therapie, Coaching & Energetik',
  },
  skipLink: 'Zum Inhalt springen',
  nav: {
    label: 'Hauptnavigation',
    links: [
      { id: 'work', label: 'Arbeiten' },
      { id: 'about', label: 'Über mich' },
      { id: 'process', label: 'Ablauf' },
      { id: 'packages', label: 'Pakete' },
      { id: 'contact', label: 'Kontakt' },
    ],
    cta: 'Gratis Erstgespräch',
    openMenu: 'Menü öffnen',
    closeMenu: 'Menü schließen',
    language: 'Sprache',
    rail: 'Stile auf dieser Seite',
  },
  styleTag: 'Stil',
  styles: {
    dark: 'Dunkel & Modern',
    clear: 'Klar & Freundlich',
    soft: 'Sanft & Vertrauensvoll',
    warm: 'Warm & Handgemacht',
    bold: 'Mutig & Verspielt',
    elegant: 'Elegant & Zeitlos',
  } satisfies Record<StyleId, string>,

  hero: {
    // Reads: "Websites für deine Praxis, / so [word] / wie du." The word cycles, one per style in HERO_STYLES.
    title: { start: 'Websites für deine Praxis,', before: 'so', after: 'wie du.' },
    words: ['modern', 'ruhig', 'herzlich', 'verspielt', 'elegant'],
    srTitle: 'Websites für deine Praxis, so individuell wie du.',
    sub: 'Individuelle Websites für Ärzt:innen, Therapeut:innen und kleine Unternehmen. Eine Person vom Erstgespräch bis zum Launch: ohne Agentur, ohne Fachchinesisch.',
    primaryCta: 'Gratis Erstgespräch',
    secondaryCta: 'Meine Arbeiten',
  },

  work: {
    title: { before: 'Websites, die bereits ', em: 'arbeiten', after: '.' },
    hintHover: 'Zum Durchscrollen über eine Vorschau fahren',
    hintTouch: 'Zum Durchscrollen auf eine Vorschau tippen',
    previewLabel: 'Vorschau von {name} durchscrollen',
    altDesktop: 'Desktop-Ansicht der Website von {name}',
    altMobile: 'Handy-Ansicht der Website von {name}',
    visit: 'Website ansehen',
    preview: 'Vorschau ansehen',
    projects: {
      kinderphysio: {
        name: 'Kinderphysiolinz',
        client: 'Kinderphysiotherapie · Linz',
        description: 'Eine illustrierte Waldwelt: verspielt für Kinder, vertrauenswürdig für Eltern.',
      },
      menzel: {
        name: 'Dr. Barbara Menzel-Witrisal',
        client: 'Allgemein- & integrative Medizin · Graz',
        description: 'Ruhig und persönlich: elegante Schrift, frisches Grün, warme Fotos.',
      },
      heilimpuls: {
        name: 'Dr. Sabine Bogner',
        client: 'Allgemein- & Ganzheitsmedizin · Gallneukirchen',
        description: 'Ein Waldweg als Einstieg, dazu tiefes Grün und klare Schrift.',
      },
    } as Record<ProjectId, Project>,
  },

  why: {
    title: 'Alles aus einer Hand.',
    items: [
      { id: 'contact', title: 'Eine Ansprechperson', text: 'Du sprichst immer mit mir. Keine Kundenbetreuer, keine Übergaben, keine Warteschleife.' },
      { id: 'language', title: 'Klare Worte', text: 'Ich erkläre alles in Alltagssprache und kümmere mich um die Technik.' },
      { id: 'carefree', title: 'Sorglos', text: 'Ehrliche Beratung und keine versteckten Kosten - auf Wunsch Hosting und Updates als monatliches Paket dazu.' },
    ] as Usp[],
  },

  process: {
    title: { before: 'So arbeiten wir ', em: 'zusammen' },
    note: 'Der Ablauf passt sich dir an, nicht umgekehrt.',
    noteSignature: 'Ines',
    steps: [
      { title: 'Kennenlernen', text: 'Ein kostenloses Gespräch: Was brauchst du, was gefällt dir?' },
      { title: 'Erster Entwurf', text: 'Ein Logo oder ein paar Stichworte reichen für den Anfang.' },
      { title: 'Feinschliff', text: 'Wir passen an, bis es sich richtig anfühlt.' },
      { title: 'Online', text: 'Deine Website geht live, und ich kümmere mich weiter darum.' },
    ],
  },

  packages: {
    title: { line1: 'Drei Arten der', line2: 'Zusammenarbeit.' },
    lead: 'Wähle aus 2 Website-Paketen zum Fixpreis aus, dazu auf Wunsch monatliche Betreuung. Das passende Paket finden wir gemeinsam im Gratis-Erstgespräch.',
    marquee: ['Persönlich', 'Ohne Fachchinesisch', 'Sorglos', 'Eine Ansprechperson'],
    goodFor: 'Ideal für',
    // The numbers of pages and rounds of changes are suggestions from the design spec: adjust them to your offer.
    plans: [
      {
        id: 'essential',
        price: 'Fixpreis, einmalig',
        name: 'Basis',
        tagline: 'Eine kompakte, individuelle Website für dich.',
        features: [
          'Alles auf einer Seite: über dich, Angebot, Kontakt',
          'Klares Design in deinen Farben und mit deinem Logo',
          'Sieht auf Handy, Tablet und Computer gut aus',
          '1 Korrekturrunde',
        ],
        goodFor: 'ein kleines Budget',
        cta: 'Nach Basis fragen',
      },
      {
        id: 'practice',
        price: 'Fixpreis, einmalig',
        name: 'Praxis',
        tagline: 'Eine umfangreiche, professionelle Website, die sich nach dir anfühlt.',
        features: [
          'Alle Leistungen aus Basis inklusive',
          'Bis zu 5 Seiten, z. B. Über mich, Angebot, Preise, Kontakt',
          'Zusatzleistungen, z. B. Bildbearbeitung, Buchungstool',
          '3 Korrekturrunden',
        ],
        goodFor: 'etablierte Praxen',
        cta: 'Nach Praxis fragen',
      },
      {
        id: 'carefree',
        price: 'Monatlich, zubuchbar',
        name: 'Sorglos',
        tagline: 'Deine Website, jeden Monat betreut.',
        features: [
          'Hosting auf meinem eigenen Server',
          'Sicherheits- und Software-Updates',
          'Kleine Änderungen, z. B. Öffnungszeiten',
          'Persönlicher Support per E-Mail',
        ],
        goodFor: 'nie wieder an Technik denken',
        sticker: 'Rundum sorglos!',
        cta: 'Nach Sorglos fragen',
      },
    ] as Plan[],
    more: { text: 'Du brauchst etwas Größeres, etwa ein Buchungssystem oder eigene Software?', link: 'Lass uns reden.' },
  },

  about: {
    title: 'Hallo, ich bin Ines.',
    paragraphs: [
      'Ich gestalte und programmiere Websites für Ärzt:innen, Therapeut:innen und kleine Unternehmen.',
      'Ich bin ehemalige Intensivkrankenpflegerin und habe vor 3 Jahren meinen Karrierewechsel in die IT gewagt.',
      'Ich arbeite alleine und möchte eine Zusammenarbeit anbieten, die im Gegensatz zu großen Agenturen steht. Du sprichst vom ersten Gespräch bis zum Launch mit mir, und darüber hinaus. Ich erkläre alles in einfachen Worten und kümmere mich um die ganze Technik, damit du dich auf deine Klient:innen konzentrieren kannst.',
    ],
    photoAlt: 'Ines Puhr',
  },

  contact: {
    title: { before: 'Erzähl mir von deiner ', em: 'Vision', after: '.' },
    lead: 'Die Details besprechen wir in einem kurzen, kostenlosen Gespräch.',
    form: {
      whoLabel: 'Was machst du?',
      who: ['Arztpraxis', 'Therapie', 'Coaching', 'Wellness', 'Etwas anderes'],
      interestLabel: 'Welches Paket klingt passend?',
      interests: [
        { id: 'essential', label: 'Basis' },
        { id: 'practice', label: 'Praxis' },
        { id: 'carefree', label: 'Sorglos' },
        { id: 'unsure', label: 'Weiß ich noch nicht' },
      ] as { id: InterestId; label: string }[],
      nameLabel: 'Dein Name',
      namePlaceholder: 'Vor- und Nachname',
      messageLabel: 'Deine Nachricht',
      messagePlaceholder: 'Ein paar Stichworte reichen.',
      submit: 'E-Mail vorbereiten',
      hint: 'Öffnet dein E-Mail-Programm. Hier wird nichts gespeichert.',
    },
    mail: {
      subject: 'Website-Anfrage',
      greeting: 'Hallo Ines,',
      fallbackMessage: 'ich interessiere mich für eine Website und würde gerne einen Termin für ein kurzes Gespräch ausmachen.',
      whoLine: 'Mein Bereich',
      interestLine: 'Paket',
      signoff: 'Freundliche Grüße',
    },
    direct: {
      eyebrow: 'Oder direkt',
      copy: 'Adresse kopieren',
      copied: 'Kopiert!',
      whatsapp: 'Auf WhatsApp schreiben',
      whatsappText: 'Hallo Ines, ich interessiere mich für eine Website.',
    },
    referral: {
      text: 'Du kennst jemanden, der eine Website braucht?',
      share: 'Seite weiterempfehlen',
      shared: 'Link kopiert!',
      shareText: 'Ines Puhr gestaltet Websites für Ärzt:innen, Therapeut:innen und kleine Unternehmen. Schau mal:',
    },
  },

  footer: {
    role: 'Webdesign & Softwareentwicklung',
    rights: 'Alle Rechte vorbehalten',
    address: 'Affenberg 46, 4204 Reichenau im Mühlkreis',
    privacy: 'Datenschutz',
    top: 'Nach oben',
  },

  legal: {
    close: 'Schließen',
    privacy: {
      title: 'Datenschutz',
      blocks: [
        ['Diese Website setzt keine Cookies, verwendet kein Tracking und lädt nichts von Drittanbietern.'],
        ['Der Webserver speichert beim Aufruf kurz technisch notwendige Daten wie IP-Adresse und Uhrzeit, um die Seite sicher zu betreiben (Art. 6 Abs. 1 lit. f DSGVO).'],
        ['Schreibst du mir per E-Mail oder WhatsApp, nutze ich deine Angaben nur für deine Anfrage (Art. 6 Abs. 1 lit. b DSGVO); bei WhatsApp gelten zusätzlich die Datenschutzbestimmungen von Meta.'],
        ['Du hast das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit und Widerspruch sowie auf Beschwerde bei der Datenschutzbehörde (dsb.gv.at).'],
        ['Verantwortlich: Ines Puhr, ines.puhr@outlook.at'],
      ],
    } as LegalDoc,
  },
}

export type Content = typeof de

const en: Content = {
  meta: {
    title: 'Ines Puhr – Websites for therapists, coaches and healers',
  },
  skipLink: 'Skip to content',
  nav: {
    label: 'Main navigation',
    links: [
      { id: 'work', label: 'Work' },
      { id: 'about', label: 'About' },
      { id: 'process', label: 'Process' },
      { id: 'packages', label: 'Packages' },
      { id: 'contact', label: 'Contact' },
    ],
    cta: 'Free intro call',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    language: 'Language',
    rail: 'Styles on this page',
  },
  styleTag: 'Style',
  styles: {
    dark: 'Dark & Modern',
    clear: 'Clear & Friendly',
    soft: 'Soft & Reassuring',
    warm: 'Warm & Handmade',
    bold: 'Bold & Playful',
    elegant: 'Elegant & Timeless',
  },

  hero: {
    title: { start: 'Websites for your practice,', before: 'as', after: 'as you.' },
    words: ['modern', 'calm', 'warm', 'playful', 'elegant'],
    srTitle: 'Websites for your practice, as individual as you.',
    sub: 'Custom websites for doctors, therapists and small businesses. One person from first call to launch: no agency, no tech jargon.',
    primaryCta: 'Free intro call',
    secondaryCta: 'See my work',
  },

  work: {
    title: { before: 'Websites already ', em: 'at work', after: '.' },
    hintHover: 'Hover a preview to scroll the page',
    hintTouch: 'Tap a preview to scroll the page',
    previewLabel: 'Scroll through the preview of {name}',
    altDesktop: 'Desktop view of the {name} website',
    altMobile: 'Mobile view of the {name} website',
    visit: 'Visit website',
    preview: 'Preview',
    projects: {
      kinderphysio: {
        name: 'Kinderphysiolinz',
        client: 'Paediatric physiotherapy · Linz',
        description: 'An illustrated forest world: playful for children, trustworthy for parents.',
      },
      menzel: {
        name: 'Dr. Barbara Menzel-Witrisal',
        client: 'General & integrative medicine · Graz',
        description: 'Calm and personal: an elegant typeface, fresh greens, warm photos.',
      },
      heilimpuls: {
        name: 'Dr. Sabine Bogner',
        client: 'General & holistic medicine · Gallneukirchen',
        description: 'A forest path to start, with deep greens and clean type.',
      },
    },
  },

  why: {
    title: 'Everything from one pair of hands.',
    items: [
      { id: 'contact', title: 'One contact', text: 'You always talk to me. No account managers, no handovers, no waiting in a queue.' },
      { id: 'language', title: 'Plain language', text: 'I explain everything in everyday words and handle the technical side for you.' },
      { id: 'carefree', title: 'Carefree', text: 'Honest advice and no hidden costs, plus hosting and updates as a monthly package if you want them.' },
    ],
  },

  process: {
    title: { before: 'How we’ll work ', em: 'together' },
    note: 'The process adapts to you, not the other way round.',
    noteSignature: 'Ines',
    steps: [
      { title: 'Getting to know you', text: 'A free call: what you need, what you like.' },
      { title: 'First draft', text: 'A logo or a few keywords are enough to start.' },
      { title: 'Fine-tuning', text: 'We refine it until it feels right.' },
      { title: 'Live', text: 'Your site goes online, and I look after it from there.' },
    ],
  },

  packages: {
    title: { line1: 'Three ways to', line2: 'work together.' },
    lead: 'Choose from two fixed-price website packages, plus monthly care if you want it. We’ll find the right one together in a free intro call.',
    marquee: ['Personal', 'No tech jargon', 'Carefree', 'One contact'],
    goodFor: 'Ideal for',
    plans: [
      {
        id: 'essential',
        price: 'Fixed price, paid once',
        name: 'Essential',
        tagline: 'A compact, custom website for you.',
        features: [
          'Everything on one page: about, offers, contact',
          'Clean design matched to your colours and logo',
          'Looks great on phone, tablet and desktop',
          '1 round of changes',
        ],
        goodFor: 'a small budget',
        cta: 'Ask about Essential',
      },
      {
        id: 'practice',
        price: 'Fixed price, paid once',
        name: 'Signature',
        tagline: 'A comprehensive, professional website that feels like you.',
        features: [
          'All Essential features included',
          'Up to 5 pages, e.g. About, Offers, Prices, Contact',
          'Additional services, e.g. photo editing, booking tool',
          '3 rounds of changes',
        ],
        goodFor: 'established practices',
        cta: 'Ask about Signature',
      },
      {
        id: 'carefree',
        price: 'Monthly add-on',
        name: 'Carefree',
        tagline: 'Your website, looked after every month.',
        features: [
          'Hosting on my own server',
          'Security and software updates',
          'Small changes, e.g. opening hours',
          'Personal support by email',
        ],
        goodFor: 'never thinking about tech again',
        sticker: 'Totally carefree!',
        cta: 'Ask about Carefree',
      },
    ],
    more: { text: 'Need something bigger, like a booking system or custom software?', link: 'Let’s talk.' },
  },

  about: {
    title: 'Hi, I’m Ines.',
    paragraphs: [
      'I design and build websites for doctors, therapists and small businesses.',
      'I’m a former intensive care nurse and made the leap into IT three years ago.',
      'I work on my own and offer the opposite of a big agency. You talk to me from the first call to launch day, and beyond. I explain everything in plain words and take care of all the tech, so you can focus on your clients.',
    ],
    photoAlt: 'Ines Puhr',
  },

  contact: {
    title: { before: 'Tell me about your ', em: 'vision', after: '.' },
    lead: 'We’ll go over the details in a short, free call.',
    form: {
      whoLabel: 'What do you do?',
      who: ['Medical practice', 'Therapy', 'Coaching', 'Wellness', 'Something else'],
      interestLabel: 'Which package sounds right?',
      interests: [
        { id: 'essential', label: 'Essential' },
        { id: 'practice', label: 'Signature' },
        { id: 'carefree', label: 'Carefree' },
        { id: 'unsure', label: 'Not sure yet' },
      ],
      nameLabel: 'Your name',
      namePlaceholder: 'First and last name',
      messageLabel: 'Your message',
      messagePlaceholder: 'A few keywords are plenty.',
      submit: 'Prepare email',
      hint: 'Opens your email app. Nothing is stored here.',
    },
    mail: {
      subject: 'Website enquiry',
      greeting: 'Hi Ines,',
      fallbackMessage: 'I’m interested in a website and would love to book a short call.',
      whoLine: 'What I do',
      interestLine: 'Package',
      signoff: 'Best regards',
    },
    direct: {
      eyebrow: 'Or directly',
      copy: 'Copy address',
      copied: 'Copied!',
      whatsapp: 'Message me on WhatsApp',
      whatsappText: 'Hi Ines, I’m interested in a website.',
    },
    referral: {
      text: 'Know someone who needs a website?',
      share: 'Recommend this page',
      shared: 'Link copied!',
      shareText: 'Ines Puhr designs websites for doctors, therapists and small businesses. Take a look:',
    },
  },

  footer: {
    role: 'Web design & software development',
    rights: 'All rights reserved',
    address: 'Affenberg 46, 4204 Reichenau im Mühlkreis',
    privacy: 'Privacy',
    top: 'Back to top',
  },

  legal: {
    close: 'Close',
    privacy: {
      title: 'Privacy',
      blocks: [
        ['This website sets no cookies, uses no tracking and loads nothing from third parties.'],
        ['The web server briefly stores technically necessary data such as your IP address and the time of access to keep the site running securely (Art. 6(1)(f) GDPR).'],
        ['If you write to me by email or WhatsApp, I use your details only to handle your enquiry (Art. 6(1)(b) GDPR); for WhatsApp, Meta’s privacy policy applies as well.'],
        ['You have the right to access, rectification, erasure, restriction, data portability and objection, and to complain to the Austrian Data Protection Authority (dsb.gv.at).'],
        ['Controller: Ines Puhr, ines.puhr@outlook.at'],
      ],
    },
  },
}

export const content: Record<Lang, Content> = { de, en }
