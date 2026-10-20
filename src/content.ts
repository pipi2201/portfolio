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
export type ProjectId = 'kinderphysio' | 'menzel' | 'bioreso'
export type LegalId = 'imprint' | 'privacy'

type Usp = { id: UspId; title: string; text: string }
type Project = { name: string; client: string; description: string }
type Plan = {
  id: PlanId
  /** small line above the name */
  label: string
  name: string
  tagline: string
  features: string[]
  goodFor: string
  cta: string
  sticker?: string
}
type LegalDoc = { title: string; blocks: { heading: string; lines: string[] }[] }

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
    cta: 'Gratis Gespräch buchen',
    openMenu: 'Menü öffnen',
    closeMenu: 'Menü schließen',
    language: 'Sprache',
    rail: 'Stile auf dieser Seite',
  },
  styleTag: 'Stil',
  styles: {
    dark: 'Dunkel & Modern',
    soft: 'Sanft & Vertrauensvoll',
    warm: 'Warm & Handgemacht',
    bold: 'Mutig & Verspielt',
    elegant: 'Elegant & Zeitlos',
  } satisfies Record<StyleId, string>,

  hero: {
    // Reads: "Websites für deine Praxis, / so [word] / wie du." The word cycles, one per style in STYLE_ORDER.
    title: { start: 'Websites für deine Praxis,', before: 'so', after: 'wie du.' },
    words: ['modern', 'ruhig', 'herzlich', 'verspielt', 'elegant'],
    srTitle: 'Websites für deine Praxis, so individuell wie du.',
    sub: 'Individuelle Websites für Therapeut:innen, Coaches und Energetiker:innen. Eine Person vom Erstgespräch bis zum Launch: ohne Agentur, ohne Fachchinesisch.',
    primaryCta: 'Gratis 15-Minuten-Gespräch buchen',
    secondaryCta: 'Meine Arbeiten',
  },

  work: {
    title: { before: 'Websites, die schon ', em: 'arbeiten', after: '.' },
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
      bioreso: {
        name: 'emotion Bioresonanz',
        client: 'Apothekerin & Gesundheitscoach · Linz',
        description: 'Sanfte Farbverläufe und viel Weißraum, ganz im Zeichen der Balance.',
      },
    } as Record<ProjectId, Project>,
  },

  why: {
    title: 'Alles aus einer Hand.',
    lead: 'Keine Agentur, sondern eine Ansprechperson: von der ersten Idee bis lange nach dem Launch.',
    items: [
      { id: 'contact', title: 'Eine Ansprechperson', text: 'Du sprichst immer mit mir. Keine Kundenbetreuer, keine Übergaben, keine Warteschleife.' },
      { id: 'language', title: 'Klare Worte', text: 'Ich erkläre alles in Alltagssprache und kümmere mich um die Technik.' },
      { id: 'carefree', title: 'Sorglos', text: 'Klare Pakete, ehrliche Beratung und auf Wunsch Hosting und Updates dazu.' },
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
      { title: 'Online', text: 'Deine Website geht live, und ich kümmere mich weiter um sie.' },
    ],
  },

  packages: {
    title: { line1: 'Drei Arten der', line2: 'Zusammenarbeit.' },
    lead: 'Such dir einen Ausgangspunkt aus. Das passende Paket und einen Fixpreis finden wir gemeinsam im Gratis-Gespräch.',
    marquee: ['Persönlich', 'Ohne Fachchinesisch', 'Sorglos', 'Eine Ansprechperson'],
    goodFor: 'Ideal für',
    // The numbers of pages and rounds of changes are suggestions from the design spec: adjust them to your offer.
    plans: [
      {
        id: 'essential',
        label: 'Online gehen',
        name: 'Basis',
        tagline: 'Eine klare, schöne Website auf einer Seite.',
        features: [
          'Alles auf einer Seite: über dich, Angebot, Kontakt',
          'Klares Design in deinen Farben und mit deinem Logo',
          'Sieht auf Handy, Tablet und Computer gut aus',
          'Kontaktformular oder Buchungslink',
          '1 Korrekturrunde',
        ],
        goodFor: 'den Start oder ein kleines Budget',
        cta: 'Nach Basis fragen',
      },
      {
        id: 'practice',
        label: 'Am umfangreichsten',
        name: 'Praxis',
        tagline: 'Eine individuelle Website, die sich nach dir anfühlt.',
        features: [
          'Bis zu 5 Seiten, z. B. Über mich, Angebot, Preise, Kontakt',
          'Komplett individuelles Design',
          'Hilfe bei Texten und Fotos',
          'Bei Google gefunden werden: Grundeinrichtung inklusive',
          '3 Korrekturrunden',
        ],
        goodFor: 'etablierte Praxen',
        cta: 'Nach Praxis fragen',
      },
      {
        id: 'carefree',
        label: 'Zu jedem Paket dazu',
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
    title: { before: 'Hallo, ich bin ', em: 'Ines', after: '.' },
    paragraphs: [
      'Ich gestalte und programmiere Websites für Therapeut:innen, Coaches und Energetiker:innen. Du sprichst vom ersten Gespräch bis zum Launch mit mir, und auch danach.',
      'Ich erkläre alles in einfachen Worten und kümmere mich um die ganze Technik, damit du dich auf deine Klient:innen konzentrieren kannst.',
    ],
    facts: ['Zuhause auf Zypern', 'Ich arbeite auf Deutsch & Englisch'],
    photoAlt: 'Ines Puhr',
  },

  contact: {
    title: { before: 'Erzähl mir von deiner ', em: 'Praxis', after: '.' },
    lead: 'Die Details besprechen wir in einem kurzen, kostenlosen Gespräch.',
    form: {
      whoLabel: 'Was machst du?',
      who: ['Therapie', 'Coaching', 'Energetik & Wellness', 'Arztpraxis', 'Etwas anderes'],
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
      signoff: 'Viele Grüße',
    },
    direct: {
      eyebrow: 'Oder direkt',
      copy: 'Adresse kopieren',
      copied: 'Kopiert!',
    },
    referral: {
      text: 'Du kennst jemanden, der eine Website braucht?',
      share: 'Seite weiterempfehlen',
      shared: 'Link kopiert!',
      shareText: 'Ines Puhr gestaltet Websites für Therapie, Coaching und Energetik. Schau mal:',
    },
  },

  footer: {
    role: 'Websites für Therapie & Coaching',
    imprint: 'Impressum',
    privacy: 'Datenschutz',
    top: 'Nach oben',
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
            'Wenn du mir schreibst, verwende ich deine Angaben ausschließlich zur Bearbeitung deiner Anfrage (Art. 6 Abs. 1 lit. b DSGVO). Das Anfrageformular dieser Seite speichert oder überträgt selbst keine Daten — es bereitet nur eine E-Mail in deinem E-Mail-Programm vor.',
          ],
        },
        {
          heading: 'Deine Rechte',
          lines: [
            'Du hast das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch — eine kurze E-Mail genügt. Beschwerden kannst du bei der Österreichischen Datenschutzbehörde (dsb.gv.at) einbringen.',
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
    cta: 'Book a free call',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    language: 'Language',
    rail: 'Styles on this page',
  },
  styleTag: 'Style',
  styles: {
    dark: 'Dark & Modern',
    soft: 'Soft & Reassuring',
    warm: 'Warm & Handmade',
    bold: 'Bold & Playful',
    elegant: 'Elegant & Timeless',
  },

  hero: {
    title: { start: 'Websites for your practice,', before: 'as', after: 'as you.' },
    words: ['modern', 'calm', 'warm', 'playful', 'elegant'],
    srTitle: 'Websites for your practice, as individual as you.',
    sub: 'Custom-designed websites for therapists, coaches and healers. One person from first call to launch day, with no agency and no tech talk.',
    primaryCta: 'Book a free 15-min call',
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
      bioreso: {
        name: 'emotion Bioresonanz',
        client: 'Pharmacist & health coach · Linz',
        description: 'Soft gradients and plenty of white space, all about balance.',
      },
    },
  },

  why: {
    title: 'Everything from one pair of hands.',
    lead: 'Not an agency. Just one person to talk to, from the first idea to long after launch.',
    items: [
      { id: 'contact', title: 'One contact', text: 'You always talk to me. No account managers, no handovers, no waiting in a queue.' },
      { id: 'language', title: 'Plain language', text: 'I explain everything in everyday words and handle the technical side for you.' },
      { id: 'carefree', title: 'Carefree', text: 'Clear packages, honest advice, and hosting and updates taken care of if you want.' },
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
    lead: 'Pick a starting point. We’ll find the right fit and a fixed price together in a free call.',
    marquee: ['Personal', 'No tech jargon', 'Carefree', 'One contact'],
    goodFor: 'Good for',
    plans: [
      {
        id: 'essential',
        label: 'Get online',
        name: 'Essential',
        tagline: 'A clear, beautiful one-page website.',
        features: [
          'Everything on one page: about, offers, contact',
          'Clean design matched to your colours and logo',
          'Looks great on phone, tablet and desktop',
          'Contact form or booking link',
          '1 round of changes',
        ],
        goodFor: 'starting out or a small budget',
        cta: 'Ask about Essential',
      },
      {
        id: 'practice',
        label: 'Most complete',
        name: 'Practice',
        tagline: 'A custom website that feels like you.',
        features: [
          'Up to 5 pages, e.g. About, Offers, Prices, Contact',
          'Fully custom design',
          'Help with your texts and photos',
          'Found on Google: basic setup included',
          '3 rounds of changes',
        ],
        goodFor: 'established practices',
        cta: 'Ask about Practice',
      },
      {
        id: 'carefree',
        label: 'Add to any package',
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
    title: { before: 'Hi, I’m ', em: 'Ines', after: '.' },
    paragraphs: [
      'I design and build websites for therapists, coaches and healers. You’ll talk to me from the first call to launch day, and after.',
      'I explain things in plain words and take care of all the technical stuff, so you can focus on your clients.',
    ],
    facts: ['Based in Cyprus', 'Working in English & German'],
    photoAlt: 'Ines Puhr',
  },

  contact: {
    title: { before: 'Tell me about your ', em: 'practice', after: '.' },
    lead: 'We’ll go over the details in a short, free call.',
    form: {
      whoLabel: 'What do you do?',
      who: ['Therapy', 'Coaching', 'Healing & wellness', 'Medical practice', 'Something else'],
      interestLabel: 'Which package sounds right?',
      interests: [
        { id: 'essential', label: 'Essential' },
        { id: 'practice', label: 'Practice' },
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
    },
    referral: {
      text: 'Know someone who needs a website?',
      share: 'Recommend this page',
      shared: 'Link copied!',
      shareText: 'Ines Puhr designs websites for therapists, coaches and healers. Take a look:',
    },
  },

  footer: {
    role: 'Websites for therapists & coaches',
    imprint: 'Legal notice',
    privacy: 'Privacy',
    top: 'Back to top',
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
