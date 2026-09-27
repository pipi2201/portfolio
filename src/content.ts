/**
 * All copy on the page, in German and English.
 * The English object is typed against the German one, so both always have the same fields.
 * Rule of thumb: every message appears once, and every item is one sentence.
 */
import type { StyleId } from './styles'

export type Lang = 'de' | 'en'
export type ServiceId = 'design' | 'development' | 'copy' | 'photos' | 'hosting' | 'advice'
export type PlanId = 'onepager' | 'care' | 'custom'
export type InterestId = PlanId | 'extras' | 'advice'
export type ProjectId = 'kinderphysio' | 'menzel' | 'bioreso'
export type LegalId = 'imprint' | 'privacy'

type Service = { id: ServiceId; title: string; text: string }
type Project = { name: string; client: string; description: string; status?: string; note?: string }
type Plan = {
  id: PlanId
  name: string
  price: string
  cadence: string
  features: string[]
  cta: string
  badge?: string
  sticker?: string
}
type LegalDoc = { title: string; blocks: { heading: string; lines: string[] }[] }

const de = {
  meta: {
    title: 'Ines Puhr — Webdesign & Entwicklung für Praxen und kleine Unternehmen',
  },
  skipLink: 'Zum Inhalt springen',
  nav: {
    label: 'Hauptnavigation',
    links: [
      { id: 'work', label: 'Arbeiten' },
      { id: 'services', label: 'Leistungen' },
      { id: 'process', label: 'Ablauf' },
      { id: 'pricing', label: 'Preise' },
      { id: 'contact', label: 'Kontakt' },
    ],
    cta: 'Anfragen',
    openMenu: 'Menü öffnen',
    closeMenu: 'Menü schließen',
    language: 'Sprache',
    rail: 'Stile auf dieser Seite',
  },
  styleTag: { label: 'Stil', suits: 'passt z. B. zu' },
  styles: {
    dark: { name: 'Dunkel & Modern', audience: 'Fitness, Tech, Kreativstudios' },
    soft: { name: 'Sanft & Vertrauensvoll', audience: 'Arztpraxen, Physiotherapie, Apotheken' },
    warm: { name: 'Warm & Handgemacht', audience: 'Cafés, Handwerk, Yoga & Wellness' },
    bold: { name: 'Mutig & Verspielt', audience: 'Shops, Events, junge Marken' },
    elegant: { name: 'Elegant & Zeitlos', audience: 'Privatkliniken, Ästhetik, Hotellerie' },
  } satisfies Record<StyleId, { name: string; audience: string }>,

  hero: {
    status: 'Offen für neue Projekte',
    // Reads: "Websites & Software, / so [word] / wie Sie." The word cycles, one per style in STYLE_ORDER.
    title: { start: 'Websites & Software,', before: 'so', after: 'wie Sie.' },
    words: ['modern', 'ruhig', 'herzlich', 'verspielt', 'elegant'],
    srTitle: 'Websites & Software, so individuell wie Sie.',
    sub: 'Individuell gestaltet und programmiert für Praxen und kleine Unternehmen — in jedem Stil.',
    primaryCta: 'Projekt anfragen',
    secondaryCta: 'Stile ansehen',
    stylesLabel: 'Fünf Stile auf dieser Seite',
  },

  work: {
    eyebrow: 'Arbeiten',
    title: { before: 'Websites, die schon ', em: 'arbeiten', after: '.' },
    hintHover: 'Zum Durchscrollen mit der Maus über eine Vorschau fahren.',
    hintTouch: 'Zum Durchscrollen auf eine Vorschau tippen.',
    previewLabel: 'Vorschau von {name} durchscrollen',
    altDesktop: 'Desktop-Ansicht der Website von {name}',
    altMobile: 'Handy-Ansicht der Website von {name}',
    visit: 'Website ansehen',
    projects: {
      kinderphysio: {
        name: 'Kinderphysiolinz',
        client: 'Kinderphysiotherapie · Linz',
        description: 'Eine illustrierte Waldwelt — verspielt für Kinder, vertrauenswürdig für Eltern.',
      },
      menzel: {
        name: 'Dr. Barbara Menzel-Witrisal',
        client: 'Allgemein- & integrative Medizin · Graz',
        description: 'Ruhig und persönlich: elegante Schrift, frisches Grün, warme Fotos.',
      },
      bioreso: {
        name: 'emotion Bioresonanz',
        client: 'Apothekerin & Gesundheitscoach · Linz',
        description: 'Sanfte Farbverläufe und viel Weißraum — ganz im Zeichen der Balance.',
        status: 'In Arbeit',
        note: 'Noch nicht fertig, aber schon jetzt mein Lieblingsdesign.',
      },
    } as Record<ProjectId, Project>,
  },

  services: {
    eyebrow: 'Leistungen',
    title: 'Alles aus einer Hand.',
    lead: 'Keine Agentur, sondern eine Ansprechperson — vom ersten Entwurf bis zur laufenden Betreuung.',
    items: [
      { id: 'design', title: 'Webdesign', text: 'Individuell gestaltet statt Vorlage von der Stange.' },
      { id: 'development', title: 'Entwicklung', text: 'Schnell und optimiert für Handy, Tablet und Computer.' },
      { id: 'copy', title: 'Texte', text: 'Klar und verständlich, in Ihrem Ton.' },
      { id: 'photos', title: 'Bildbearbeitung', text: 'Licht, Farben und Zuschnitt für stimmige Fotos.' },
      { id: 'hosting', title: 'Hosting & Wartung', text: 'Damit Ihre Website sicher und aktuell bleibt.' },
      { id: 'advice', title: 'Beratung', text: 'Ehrlicher Rat zu Ihrem gesamten Online-Auftritt.' },
    ] as Service[],
  },

  process: {
    eyebrow: 'Ablauf',
    title: { before: 'So arbeiten wir ', em: 'zusammen' },
    note: 'Der Ablauf passt sich Ihnen an — nicht umgekehrt.',
    noteSignature: 'Ines',
    steps: [
      { title: 'Kennenlernen', text: 'Ein Telefonat oder Treffen: Was brauchen Sie, was gefällt Ihnen?' },
      { title: 'Entwurf', text: 'Ein Logo oder ein paar Stichworte reichen für den ersten Entwurf.' },
      { title: 'Feinschliff', text: 'Wir passen an, bis alles stimmt.' },
      { title: 'Online', text: 'Ihre Website geht live — auf Wunsch betreue ich sie weiter.' },
    ],
  },

  pricing: {
    eyebrow: 'Preise',
    title: { line1: 'Faire Preise.', line2: 'Keine Überraschungen.' },
    marquee: ['Fixpreise', 'Persönlich', 'Ohne Fachchinesisch'],
    plans: [
      {
        id: 'onepager',
        name: 'Onepager',
        price: '650–750 €',
        cadence: 'einmalig, je nach Umfang',
        features: ['Alle Inhalte auf einer Seite', 'Individuelles Design', 'Für alle Geräte optimiert'],
        cta: 'Onepager anfragen',
      },
      {
        id: 'care',
        name: 'Sorglos-Paket',
        badge: 'Optional',
        price: '30 €',
        cadence: 'pro Monat',
        features: ['Hosting auf meinem Server', 'Wartung & Updates', 'Kleine Änderungen, z. B. Öffnungszeiten'],
        sticker: 'Rundum sorglos!',
        cta: 'Paket anfragen',
      },
      {
        id: 'custom',
        name: 'Software nach Maß',
        price: 'Auf Anfrage',
        cadence: '',
        features: ['Größere Websites oder spezielle Software', 'Angebot nach einem ersten Gespräch'],
        cta: 'Gespräch anfragen',
      },
    ] as Plan[],
  },

  contact: {
    eyebrow: 'Kontakt',
    title: { before: 'Erzählen Sie mir von Ihrem ', em: 'Projekt', after: '.' },
    lead: 'Schreiben Sie mir — die Details besprechen wir meist in einem kurzen Telefonat.',
    form: {
      whoLabel: 'Wofür suchen Sie eine Website?',
      who: ['Arztpraxis', 'Therapiepraxis', 'Apotheke', 'Coaching & Beratung', 'Kleines Unternehmen', 'Etwas anderes'],
      interestLabel: 'Was interessiert Sie?',
      interests: [
        { id: 'onepager', label: 'Onepager' },
        { id: 'care', label: 'Sorglos-Paket' },
        { id: 'custom', label: 'Software nach Maß' },
        { id: 'extras', label: 'Texte & Fotos' },
        { id: 'advice', label: 'Beratung' },
      ] as { id: InterestId; label: string }[],
      nameLabel: 'Ihr Name',
      namePlaceholder: 'Vor- und Nachname',
      messageLabel: 'Ihre Nachricht',
      messagePlaceholder: 'Ein paar Stichworte reichen.',
      submit: 'E-Mail vorbereiten',
      hint: 'Öffnet Ihr E-Mail-Programm. Hier wird nichts gespeichert.',
    },
    mail: {
      subject: 'Website-Anfrage',
      greeting: 'Hallo Ines,',
      fallbackMessage: 'ich interessiere mich für eine Website und würde gerne mehr erfahren.',
      whoLine: 'Für',
      interestLine: 'Interesse an',
      signoff: 'Viele Grüße',
    },
    direct: {
      eyebrow: 'Oder direkt',
      copy: 'Adresse kopieren',
      copied: 'Kopiert!',
    },
    referral: {
      text: 'Sie kennen jemanden, der eine Website braucht?',
      share: 'Seite weiterempfehlen',
      shared: 'Link kopiert!',
      shareText: 'Ines Puhr gestaltet Websites für Praxen und kleine Unternehmen — schau mal:',
    },
  },

  footer: {
    role: 'Webdesign & Entwicklung',
    imprint: 'Impressum',
    privacy: 'Datenschutz',
    top: 'Nach oben',
    noTracking: 'Ohne Cookies und Tracking.',
  },

  legal: {
    close: 'Schließen',
    imprint: {
      title: 'Impressum',
      blocks: [
        {
          heading: 'Angaben gemäß § 5 ECG und § 25 MedienG',
          lines: ['Ines Puhr', 'Webdesign & Softwareentwicklung', '[Straße und Hausnummer]', '[PLZ Ort], Österreich'],
        },
        { heading: 'Kontakt', lines: ['E-Mail: ines.puhr@outlook.at'] },
        {
          heading: 'Unternehmensangaben',
          lines: ['Gewerbe: [bitte ergänzen]', 'Gewerbebehörde: [bitte ergänzen]', 'Kammerzugehörigkeit: [bitte ergänzen]', 'UID-Nummer: [falls vorhanden]'],
        },
      ],
    } as LegalDoc,
    privacy: {
      title: 'Datenschutz',
      blocks: [
        {
          heading: 'Kurz gesagt',
          lines: [
            'Diese Website verwendet keine Cookies, keine Analyse- oder Tracking-Tools und lädt keine Inhalte von Drittanbietern. Schriften und Bilder werden direkt von diesem Server ausgeliefert.',
          ],
        },
        {
          heading: 'Server-Logfiles',
          lines: [
            'Beim Aufruf der Website speichert der Webserver technisch notwendige Daten (z. B. IP-Adresse, Datum und Uhrzeit, aufgerufene Seite, Browsertyp) für kurze Zeit, um einen sicheren Betrieb zu gewährleisten (Art. 6 Abs. 1 lit. f DSGVO).',
          ],
        },
        {
          heading: 'Kontakt per E-Mail',
          lines: [
            'Wenn Sie mir schreiben, verwende ich Ihre Angaben ausschließlich zur Bearbeitung Ihrer Anfrage (Art. 6 Abs. 1 lit. b DSGVO). Das Anfrageformular dieser Seite speichert oder überträgt selbst keine Daten — es bereitet nur eine E-Mail in Ihrem E-Mail-Programm vor.',
          ],
        },
        {
          heading: 'Ihre Rechte',
          lines: [
            'Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch — eine kurze E-Mail genügt. Beschwerden können Sie bei der Österreichischen Datenschutzbehörde (dsb.gv.at) einbringen.',
          ],
        },
        { heading: 'Verantwortlich', lines: ['Ines Puhr, [Adresse], ines.puhr@outlook.at'] },
      ],
    } as LegalDoc,
  },
}

export type Content = typeof de

const en: Content = {
  meta: {
    title: 'Ines Puhr — Web design & development for practices and small businesses',
  },
  skipLink: 'Skip to content',
  nav: {
    label: 'Main navigation',
    links: [
      { id: 'work', label: 'Work' },
      { id: 'services', label: 'Services' },
      { id: 'process', label: 'Process' },
      { id: 'pricing', label: 'Pricing' },
      { id: 'contact', label: 'Contact' },
    ],
    cta: 'Get in touch',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    language: 'Language',
    rail: 'Styles on this page',
  },
  styleTag: { label: 'Style', suits: 'suits e.g.' },
  styles: {
    dark: { name: 'Dark & Modern', audience: 'Fitness, tech, creative studios' },
    soft: { name: 'Soft & Reassuring', audience: 'Medical practices, physiotherapy, pharmacies' },
    warm: { name: 'Warm & Handmade', audience: 'Cafés, crafts, yoga & wellness' },
    bold: { name: 'Bold & Playful', audience: 'Shops, events, young brands' },
    elegant: { name: 'Elegant & Timeless', audience: 'Private clinics, aesthetics, hospitality' },
  },

  hero: {
    status: 'Open for new projects',
    title: { start: 'Websites & software,', before: 'as', after: 'as you.' },
    words: ['modern', 'calm', 'warm', 'playful', 'elegant'],
    srTitle: 'Websites & software, as individual as you.',
    sub: 'Custom-designed and built for practices and small businesses — in any style.',
    primaryCta: 'Start a project',
    secondaryCta: 'See the styles',
    stylesLabel: 'Five styles on this page',
  },

  work: {
    eyebrow: 'Work',
    title: { before: 'Websites already ', em: 'at work', after: '.' },
    hintHover: 'Hover over a preview to scroll through the page.',
    hintTouch: 'Tap a preview to scroll through the page.',
    previewLabel: 'Scroll through the preview of {name}',
    altDesktop: 'Desktop view of the {name} website',
    altMobile: 'Mobile view of the {name} website',
    visit: 'Visit website',
    projects: {
      kinderphysio: {
        name: 'Kinderphysiolinz',
        client: 'Paediatric physiotherapy · Linz',
        description: 'An illustrated forest world — playful for children, trustworthy for parents.',
      },
      menzel: {
        name: 'Dr. Barbara Menzel-Witrisal',
        client: 'General & integrative medicine · Graz',
        description: 'Calm and personal: an elegant typeface, fresh greens, warm photos.',
      },
      bioreso: {
        name: 'emotion Bioresonanz',
        client: 'Pharmacist & health coach · Linz',
        description: 'Soft gradients and plenty of white space — all about balance.',
        status: 'Work in progress',
        note: 'Not finished yet, but already my favourite design.',
      },
    },
  },

  services: {
    eyebrow: 'Services',
    title: 'Everything from one pair of hands.',
    lead: 'Not an agency, just one person to talk to — from the first draft to ongoing care.',
    items: [
      { id: 'design', title: 'Web design', text: 'Designed for you, not taken off the shelf.' },
      { id: 'development', title: 'Development', text: 'Fast, and optimised for phone, tablet and desktop.' },
      { id: 'copy', title: 'Copywriting', text: 'Clear and easy to read, in your own voice.' },
      { id: 'photos', title: 'Photo editing', text: 'Light, colour and cropping for photos that fit.' },
      { id: 'hosting', title: 'Hosting & maintenance', text: 'So your website stays secure and up to date.' },
      { id: 'advice', title: 'Guidance', text: 'Honest advice on your whole online presence.' },
    ],
  },

  process: {
    eyebrow: 'Process',
    title: { before: "How we'll work ", em: 'together' },
    note: 'The process adapts to you — not the other way round.',
    noteSignature: 'Ines',
    steps: [
      { title: 'Getting to know you', text: 'A call or a meeting: what do you need, what do you like?' },
      { title: 'First draft', text: 'A logo or a few keywords are enough for a first design.' },
      { title: 'Fine-tuning', text: 'We refine it until everything feels right.' },
      { title: 'Live', text: 'Your website goes online — and I can look after it from there.' },
    ],
  },

  pricing: {
    eyebrow: 'Pricing',
    title: { line1: 'Fair prices.', line2: 'No surprises.' },
    marquee: ['Flat rates', 'Personal', 'No tech jargon'],
    plans: [
      {
        id: 'onepager',
        name: 'One-pager',
        price: '€650–750',
        cadence: 'one-off, depending on scope',
        features: ['All content on one page', 'Custom design', 'Optimised for every device'],
        cta: 'Ask about a one-pager',
      },
      {
        id: 'care',
        name: 'Worry-free package',
        badge: 'Optional',
        price: '€30',
        cadence: 'per month',
        features: ['Hosting on my own server', 'Maintenance & updates', 'Small changes, e.g. opening hours'],
        sticker: 'Totally carefree!',
        cta: 'Ask about the package',
      },
      {
        id: 'custom',
        name: 'Custom software',
        price: 'On request',
        cadence: '',
        features: ['Larger websites or special software', 'Quote after a first conversation'],
        cta: "Let's talk",
      },
    ],
  },

  contact: {
    eyebrow: 'Contact',
    title: { before: 'Tell me about your ', em: 'project', after: '.' },
    lead: 'Drop me a line — we usually go over the details in a short phone call.',
    form: {
      whoLabel: "What's the website for?",
      who: ['Medical practice', 'Therapy practice', 'Pharmacy', 'Coaching & consulting', 'Small business', 'Something else'],
      interestLabel: 'What are you interested in?',
      interests: [
        { id: 'onepager', label: 'One-pager' },
        { id: 'care', label: 'Worry-free package' },
        { id: 'custom', label: 'Custom software' },
        { id: 'extras', label: 'Copy & photos' },
        { id: 'advice', label: 'Guidance' },
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
      fallbackMessage: "I'm interested in a website and would love to hear more.",
      whoLine: 'For',
      interestLine: 'Interested in',
      signoff: 'Best regards',
    },
    direct: {
      eyebrow: 'Or directly',
      copy: 'Copy address',
      copied: 'Copied!',
    },
    referral: {
      text: 'Know someone who needs a website?',
      share: 'Recommend this page',
      shared: 'Link copied!',
      shareText: 'Ines Puhr designs websites for practices and small businesses — take a look:',
    },
  },

  footer: {
    role: 'Web design & development',
    imprint: 'Legal notice',
    privacy: 'Privacy',
    top: 'Back to top',
    noTracking: 'No cookies, no tracking.',
  },

  legal: {
    close: 'Close',
    imprint: {
      title: 'Legal notice',
      blocks: [
        {
          heading: 'Information according to § 5 ECG and § 25 MedienG',
          lines: ['Ines Puhr', 'Web design & software development', '[Street and number]', '[Postcode City], Austria'],
        },
        { heading: 'Contact', lines: ['Email: ines.puhr@outlook.at'] },
        {
          heading: 'Business details',
          lines: ['Trade: [please add]', 'Trade authority: [please add]', 'Chamber membership: [please add]', 'VAT ID: [if applicable]'],
        },
      ],
    },
    privacy: {
      title: 'Privacy',
      blocks: [
        {
          heading: 'In short',
          lines: [
            'This website uses no cookies, no analytics or tracking tools and loads no third-party content. Fonts and images are served directly from this server.',
          ],
        },
        {
          heading: 'Server log files',
          lines: [
            'When you visit the website, the web server briefly stores technically necessary data (e.g. IP address, date and time, requested page, browser type) to keep it running securely (Art. 6(1)(f) GDPR).',
          ],
        },
        {
          heading: 'Contact by email',
          lines: [
            'If you write to me, I use your details solely to handle your enquiry (Art. 6(1)(b) GDPR). The enquiry form on this page does not store or send any data itself — it only prepares an email in your email app.',
          ],
        },
        {
          heading: 'Your rights',
          lines: [
            'You have the right to access, rectification, erasure, restriction of processing, data portability and objection — a short email is all it takes. You can lodge complaints with the Austrian Data Protection Authority (dsb.gv.at).',
          ],
        },
        { heading: 'Controller', lines: ['Ines Puhr, [address], ines.puhr@outlook.at'] },
      ],
    },
  },
}

export const content: Record<Lang, Content> = { de, en }
