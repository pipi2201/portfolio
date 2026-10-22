/**
 * All copy on the page, in German, English and Greek.
 * The English and Greek objects are typed against the German one, so all three always have the same fields.
 * Rule of thumb: every message appears once, and every item is one sentence.
 */
import type { StyleId } from './styles'

export type Lang = 'de' | 'en' | 'el'
export type UspId = 'contact' | 'language' | 'carefree'
export type PlanId = 'essential' | 'practice' | 'carefree'
export type InterestId = PlanId | 'unsure'
export type ProjectId = 'kinderphysio' | 'menzel' | 'heilimpuls'
export type LegalId = 'imprint' | 'privacy'

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
    title: 'Websites für Medizin, Therapie & kleine Unternehmen',
  },
  skipLink: 'Zum Inhalt springen',
  nav: {
    label: 'Hauptnavigation',
    home: 'Zum Seitenanfang',
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
      call: 'Anrufen',
      whatsapp: 'Auf WhatsApp schreiben',
      copyNumber: 'Nummer kopieren',
      whatsappText: 'Hallo Ines, ich interessiere mich für eine Website.',
    },
    referral: {
      text: 'Du kennst jemanden, der eine Website braucht?',
      share: 'Seite weiterempfehlen',
      shared: 'Link kopiert!',
      shareText: 'Websites für Ärzt:innen, Therapeut:innen und kleine Unternehmen. Schau mal:',
    },
  },

  footer: {
    imprint: 'Impressum',
    privacy: 'Datenschutz',
    top: 'Nach oben',
  },

  legal: {
    close: 'Schließen',
    imprint: {
      title: 'Impressum',
      blocks: [
        ['Patholux Software Ltd', 'Webdesign & Softwareentwicklung', 'Gladstonos 16, 8046 Paphos, Zypern', 'websites@patholux.com'],
        ['Registrar of Companies Zypern, Nr. HE 498585', 'UID: CY60404468I'],
      ],
    } as LegalDoc,
    privacy: {
      title: 'Datenschutz',
      blocks: [
        ['Diese Website setzt keine Cookies, verwendet kein Tracking und lädt nichts von Drittanbietern.'],
        ['Die Website läuft auf einem Server der Hetzner Online GmbH in Deutschland, der beim Aufruf kurz technisch notwendige Daten wie IP-Adresse und Uhrzeit speichert, um die Seite sicher zu betreiben (Art. 6 Abs. 1 lit. f DSGVO).'],
        ['Schreibst du mir per E-Mail oder WhatsApp, nutze ich deine Angaben nur für deine Anfrage (Art. 6 Abs. 1 lit. b DSGVO); bei WhatsApp gelten zusätzlich die Datenschutzbestimmungen von Meta.'],
        ['Du hast das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit und Widerspruch sowie auf Beschwerde beim Datenschutzbeauftragten in Zypern (dataprotection.gov.cy).'],
        ['Verantwortlich: Patholux Software Ltd, websites@patholux.com'],
      ],
    } as LegalDoc,
  },
}

export type Content = typeof de

const en: Content = {
  meta: {
    title: 'Websites for doctors, therapists & small businesses',
  },
  skipLink: 'Skip to content',
  nav: {
    label: 'Main navigation',
    home: 'Back to top',
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
    title: { start: 'Websites for your work,', before: 'as', after: 'as you.' },
    words: ['modern', 'calm', 'warm', 'playful', 'elegant'],
    srTitle: 'Websites for your work, as individual as you.',
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
      call: 'Call',
      whatsapp: 'Message me on WhatsApp',
      copyNumber: 'Copy number',
      whatsappText: 'Hi Ines, I’m interested in a website.',
    },
    referral: {
      text: 'Know someone who needs a website?',
      share: 'Recommend this page',
      shared: 'Link copied!',
      shareText: 'Websites for doctors, therapists and small businesses. Take a look:',
    },
  },

  footer: {
    imprint: 'Legal notice',
    privacy: 'Privacy',
    top: 'Back to top',
  },

  legal: {
    close: 'Close',
    imprint: {
      title: 'Legal notice',
      blocks: [
        ['Patholux Software Ltd', 'Web design & software development', 'Gladstonos 16, 8046 Paphos, Cyprus', 'websites@patholux.com'],
        ['Registrar of Companies, Cyprus, No. HE 498585', 'VAT ID: CY60404468I'],
      ],
    },
    privacy: {
      title: 'Privacy',
      blocks: [
        ['This website sets no cookies, uses no tracking and loads nothing from third parties.'],
        ['The website runs on a server of Hetzner Online GmbH in Germany, which briefly stores technically necessary data such as your IP address and the time of access to keep the site running securely (Art. 6(1)(f) GDPR).'],
        ['If you write to me by email or WhatsApp, I use your details only to handle your enquiry (Art. 6(1)(b) GDPR); for WhatsApp, Meta’s privacy policy applies as well.'],
        ['You have the right to access, rectification, erasure, restriction, data portability and objection, and to complain to the Cyprus Commissioner for Personal Data Protection (dataprotection.gov.cy).'],
        ['Controller: Patholux Software Ltd, websites@patholux.com'],
      ],
    },
  },
}

const el: Content = {
  meta: {
    title: 'Ιστοσελίδες για γιατρούς, θεραπευτές & μικρές επιχειρήσεις',
  },
  skipLink: 'Μετάβαση στο περιεχόμενο',
  nav: {
    label: 'Κύρια πλοήγηση',
    home: 'Επιστροφή στην αρχή',
    links: [
      { id: 'work', label: 'Έργα' },
      { id: 'about', label: 'Για μένα' },
      { id: 'process', label: 'Διαδικασία' },
      { id: 'packages', label: 'Πακέτα' },
      { id: 'contact', label: 'Επικοινωνία' },
    ],
    cta: 'Δωρεάν συζήτηση',
    openMenu: 'Άνοιγμα μενού',
    closeMenu: 'Κλείσιμο μενού',
    language: 'Γλώσσα',
    rail: 'Στυλ σε αυτή τη σελίδα',
  },
  styleTag: 'Στυλ',
  styles: {
    dark: 'Σκούρο & μοντέρνο',
    clear: 'Καθαρό & φιλικό',
    soft: 'Απαλό & αξιόπιστο',
    warm: 'Ζεστό & χειροποίητο',
    bold: 'Τολμηρό & παιχνιδιάρικο',
    elegant: 'Κομψό & διαχρονικό',
  },

  hero: {
    // The words agree with "Ιστοσελίδες" (feminine plural) and stay short, so the second line fits on a phone.
    title: { start: 'Ιστοσελίδες για τη δουλειά σου,', before: 'τόσο', after: 'όσο κι εσύ.' },
    words: ['μοντέρνες', 'ήρεμες', 'ζεστές', 'ζωηρές', 'κομψές'],
    srTitle: 'Ιστοσελίδες για τη δουλειά σου, τόσο μοναδικές όσο κι εσύ.',
    sub: 'Ιστοσελίδες στα μέτρα σου για γιατρούς, θεραπευτές και μικρές επιχειρήσεις. Ένας άνθρωπος από την πρώτη συζήτηση μέχρι να βγει η σελίδα στον αέρα: χωρίς μεσάζοντες, χωρίς τεχνική ορολογία.',
    primaryCta: 'Δωρεάν συζήτηση',
    secondaryCta: 'Δες τα έργα μου',
  },

  work: {
    title: { before: 'Ιστοσελίδες που ήδη ', em: 'δουλεύουν', after: '.' },
    hintHover: 'Πέρασε το ποντίκι πάνω από μια προεπισκόπηση για να κυλήσει η σελίδα',
    hintTouch: 'Πάτησε μια προεπισκόπηση για να κυλήσει η σελίδα',
    previewLabel: 'Κύλιση στην προεπισκόπηση: {name}',
    altDesktop: '{name}: η ιστοσελίδα σε υπολογιστή',
    altMobile: '{name}: η ιστοσελίδα σε κινητό',
    visit: 'Δες την ιστοσελίδα',
    preview: 'Προεπισκόπηση',
    projects: {
      kinderphysio: {
        name: 'Kinderphysiolinz',
        client: 'Παιδική φυσικοθεραπεία · Λιντς',
        description: 'Ένας εικονογραφημένος κόσμος του δάσους: παιχνιδιάρικος για τα παιδιά, αξιόπιστος για τους γονείς.',
      },
      menzel: {
        name: 'Dr. Barbara Menzel-Witrisal',
        client: 'Γενική & ενσωματωτική ιατρική · Γκρατς',
        description: 'Ήρεμη και προσωπική: κομψή γραμματοσειρά, φρέσκο πράσινο, ζεστές φωτογραφίες.',
      },
      heilimpuls: {
        name: 'Dr. Sabine Bogner',
        client: 'Γενική & ολιστική ιατρική · Gallneukirchen',
        description: 'Ένα μονοπάτι στο δάσος για αρχή, με βαθύ πράσινο και καθαρή γραμματοσειρά.',
      },
    },
  },

  why: {
    title: 'Όλα από έναν άνθρωπο.',
    items: [
      { id: 'contact', title: 'Ένα πρόσωπο επικοινωνίας', text: 'Μιλάς πάντα μαζί μου. Χωρίς υπεύθυνους πελατών, χωρίς πήγαινε-έλα, χωρίς αναμονή.' },
      { id: 'language', title: 'Καθαρά λόγια', text: 'Εξηγώ τα πάντα σε απλή, καθημερινή γλώσσα και αναλαμβάνω εγώ το τεχνικό κομμάτι.' },
      { id: 'carefree', title: 'Χωρίς έγνοιες', text: 'Ειλικρινείς συμβουλές χωρίς κρυφές χρεώσεις, και αν θέλεις, φιλοξενία και ενημερώσεις ως μηνιαίο πακέτο.' },
    ],
  },

  process: {
    title: { before: 'Πώς θα δουλέψουμε ', em: 'μαζί' },
    note: 'Η διαδικασία προσαρμόζεται σε σένα, όχι το αντίθετο.',
    noteSignature: 'Ines',
    steps: [
      { title: 'Γνωριμία', text: 'Μια δωρεάν συζήτηση: τι χρειάζεσαι, τι σου αρέσει.' },
      { title: 'Πρώτο σχέδιο', text: 'Ένα λογότυπο ή λίγες λέξεις-κλειδιά αρκούν για αρχή.' },
      { title: 'Τελικές πινελιές', text: 'Προσαρμόζουμε μέχρι να σου ταιριάζει απόλυτα.' },
      { title: 'Στον αέρα', text: 'Η ιστοσελίδα σου βγαίνει στον αέρα και συνεχίζω να τη φροντίζω.' },
    ],
  },

  packages: {
    title: { line1: 'Τρεις τρόποι', line2: 'συνεργασίας.' },
    lead: 'Διάλεξε ανάμεσα σε δύο πακέτα ιστοσελίδας σε σταθερή τιμή και, αν θέλεις, πρόσθεσε μηνιαία φροντίδα. Το σωστό πακέτο το βρίσκουμε μαζί στη δωρεάν πρώτη συζήτηση.',
    marquee: ['Προσωπικά', 'Χωρίς τεχνική ορολογία', 'Χωρίς έγνοιες', 'Ένα πρόσωπο επικοινωνίας'],
    goodFor: 'Ιδανικό για',
    plans: [
      {
        id: 'essential',
        price: 'Σταθερή τιμή, εφάπαξ',
        name: 'Βασικό',
        tagline: 'Μια συμπαγής ιστοσελίδα, φτιαγμένη για σένα.',
        features: [
          'Όλα σε μία σελίδα: για σένα, υπηρεσίες, επικοινωνία',
          'Καθαρός σχεδιασμός με τα χρώματα και το λογότυπό σου',
          'Φαίνεται τέλεια σε κινητό, τάμπλετ και υπολογιστή',
          '1 γύρος διορθώσεων',
        ],
        goodFor: 'μικρό προϋπολογισμό',
        cta: 'Ρώτα για το Βασικό',
      },
      {
        id: 'practice',
        price: 'Σταθερή τιμή, εφάπαξ',
        name: 'Πλήρες',
        tagline: 'Μια εκτενής, επαγγελματική ιστοσελίδα που σου μοιάζει.',
        features: [
          'Όλα όσα περιλαμβάνει το Βασικό',
          'Έως 5 σελίδες, π.χ. Για μένα, Υπηρεσίες, Τιμές, Επικοινωνία',
          'Επιπλέον υπηρεσίες, π.χ. επεξεργασία φωτογραφιών, σύστημα κρατήσεων',
          '3 γύροι διορθώσεων',
        ],
        goodFor: 'εδραιωμένα ιατρεία',
        cta: 'Ρώτα για το Πλήρες',
      },
      {
        id: 'carefree',
        price: 'Μηνιαίο πρόσθετο',
        name: 'Ξέγνοιαστο',
        tagline: 'Η ιστοσελίδα σου, σε καλά χέρια κάθε μήνα.',
        features: [
          'Φιλοξενία στον δικό μου διακομιστή',
          'Ενημερώσεις ασφαλείας και λογισμικού',
          'Μικρές αλλαγές, π.χ. ωράριο λειτουργίας',
          'Προσωπική υποστήριξη μέσω email',
        ],
        goodFor: 'να μην ασχοληθείς ξανά με τεχνικά',
        sticker: 'Εντελώς ξέγνοιαστα!',
        cta: 'Ρώτα για το Ξέγνοιαστο',
      },
    ],
    more: { text: 'Χρειάζεσαι κάτι μεγαλύτερο, όπως σύστημα κρατήσεων ή δικό σου λογισμικό;', link: 'Ας μιλήσουμε.' },
  },

  about: {
    title: 'Γεια, είμαι η Ines.',
    paragraphs: [
      'Σχεδιάζω και φτιάχνω ιστοσελίδες για γιατρούς, θεραπευτές και μικρές επιχειρήσεις.',
      'Ήμουν νοσηλεύτρια στην εντατική και πριν από τρία χρόνια έκανα το άλμα στην πληροφορική.',
      'Δουλεύω μόνη μου και προσφέρω το αντίθετο από μια μεγάλη εταιρεία. Μιλάς μαζί μου από την πρώτη συζήτηση μέχρι την ημέρα που η σελίδα βγαίνει στον αέρα, και μετά. Εξηγώ τα πάντα με απλά λόγια και αναλαμβάνω όλο το τεχνικό κομμάτι, για να επικεντρωθείς στους ανθρώπους που εξυπηρετείς.',
    ],
    photoAlt: 'Ines Puhr',
  },

  contact: {
    title: { before: 'Πες μου για το ', em: 'όραμά σου', after: '.' },
    lead: 'Τις λεπτομέρειες τις συζητάμε σε μια σύντομη, δωρεάν κλήση.',
    form: {
      whoLabel: 'Με τι ασχολείσαι;',
      who: ['Ιατρείο', 'Θεραπεία', 'Coaching', 'Ευεξία', 'Κάτι άλλο'],
      interestLabel: 'Ποιο πακέτο σου ταιριάζει;',
      interests: [
        { id: 'essential', label: 'Βασικό' },
        { id: 'practice', label: 'Πλήρες' },
        { id: 'carefree', label: 'Ξέγνοιαστο' },
        { id: 'unsure', label: 'Δεν ξέρω ακόμα' },
      ],
      nameLabel: 'Το όνομά σου',
      namePlaceholder: 'Όνομα και επώνυμο',
      messageLabel: 'Το μήνυμά σου',
      messagePlaceholder: 'Λίγες λέξεις αρκούν.',
      submit: 'Σύνταξη email',
      hint: 'Ανοίγει την εφαρμογή email σου. Εδώ δεν αποθηκεύεται τίποτα.',
    },
    mail: {
      subject: 'Αίτημα για ιστοσελίδα',
      greeting: 'Γεια σου Ines,',
      fallbackMessage: 'Ενδιαφέρομαι για μια ιστοσελίδα και θα ήθελα να κλείσουμε μια σύντομη συζήτηση.',
      whoLine: 'Με τι ασχολούμαι',
      interestLine: 'Πακέτο',
      signoff: 'Φιλικά',
    },
    direct: {
      eyebrow: 'Ή απευθείας',
      copy: 'Αντιγραφή διεύθυνσης',
      copied: 'Αντιγράφηκε!',
      call: 'Κάλεσέ με',
      whatsapp: 'Στείλε μου στο WhatsApp',
      copyNumber: 'Αντιγραφή αριθμού',
      whatsappText: 'Γεια σου Ines, ενδιαφέρομαι για μια ιστοσελίδα.',
    },
    referral: {
      text: 'Ξέρεις κάποιον που χρειάζεται ιστοσελίδα;',
      share: 'Πρότεινε τη σελίδα',
      shared: 'Ο σύνδεσμος αντιγράφηκε!',
      shareText: 'Ιστοσελίδες για γιατρούς, θεραπευτές και μικρές επιχειρήσεις. Ρίξε μια ματιά:',
    },
  },

  footer: {
    imprint: 'Νομικές πληροφορίες',
    privacy: 'Απόρρητο',
    top: 'Επιστροφή στην αρχή',
  },

  legal: {
    close: 'Κλείσιμο',
    imprint: {
      title: 'Νομικές πληροφορίες',
      blocks: [
        ['Patholux Software Ltd', 'Σχεδιασμός ιστοσελίδων & ανάπτυξη λογισμικού', 'Γλάδστωνος 16, 8046 Πάφος, Κύπρος', 'websites@patholux.com'],
        ['Έφορος Εταιρειών Κύπρου, Αρ. HE 498585', 'Αρ. ΦΠΑ: CY60404468I'],
      ],
    },
    privacy: {
      title: 'Απόρρητο',
      blocks: [
        ['Αυτή η ιστοσελίδα δεν χρησιμοποιεί cookies, δεν κάνει παρακολούθηση και δεν φορτώνει τίποτα από τρίτους.'],
        ['Η ιστοσελίδα φιλοξενείται σε διακομιστή της Hetzner Online GmbH στη Γερμανία, ο οποίος αποθηκεύει για λίγο τεχνικά απαραίτητα δεδομένα, όπως τη διεύθυνση IP και την ώρα πρόσβασης, για την ασφαλή λειτουργία της σελίδας (άρθρο 6 παρ. 1 στοιχ. στ΄ ΓΚΠΔ).'],
        ['Αν μου γράψεις με email ή WhatsApp, χρησιμοποιώ τα στοιχεία σου μόνο για το αίτημά σου (άρθρο 6 παρ. 1 στοιχ. β΄ ΓΚΠΔ)· για το WhatsApp ισχύει επιπλέον η πολιτική απορρήτου της Meta.'],
        ['Έχεις δικαίωμα πρόσβασης, διόρθωσης, διαγραφής, περιορισμού, φορητότητας και εναντίωσης, καθώς και υποβολής καταγγελίας στον Επίτροπο Προστασίας Δεδομένων Προσωπικού Χαρακτήρα της Κύπρου (dataprotection.gov.cy).'],
        ['Υπεύθυνος επεξεργασίας: Patholux Software Ltd, websites@patholux.com'],
      ],
    },
  },
}

export const content: Record<Lang, Content> = { de, en, el }
