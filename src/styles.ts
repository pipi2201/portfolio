type StyleMeta = {
  /** counts the styled sections down the page */
  number: string
  /** id of the section that is designed in this style */
  section: string
  /** colour used for this style's dot in the logo and side navigation */
  dot: string
}

/** The six design languages shown on the page, in scroll order. */
export const STYLES = {
  dark: { number: '01', section: 'work', dot: '#8b7bff' },
  clear: { number: '02', section: 'about', dot: '#1f4fa3' },
  warm: { number: '03', section: 'process', dot: '#c4583b' },
  soft: { number: '04', section: 'why', dot: '#5f8f7d' },
  bold: { number: '05', section: 'packages', dot: '#ffd93d' },
  elegant: { number: '06', section: 'contact', dot: '#cbae7a' },
} satisfies Record<string, StyleMeta>

export type StyleId = keyof typeof STYLES

/** The five styles of the hero's cycling word, in that order. Clear (the About section) is not among them. */
export const HERO_STYLES = ['dark', 'soft', 'warm', 'bold', 'elegant'] as const satisfies readonly StyleId[]

export type HeroStyleId = (typeof HERO_STYLES)[number]

const STYLE_IDS = Object.keys(STYLES) as StyleId[]

/** The style a section is designed in (undefined for the landing view). */
export function styleOfSection(section: string): StyleId | undefined {
  return STYLE_IDS.find((id) => STYLES[id].section === section)
}

/** Every anchor in scroll order. */
export const PAGE_IDS = ['top', 'work', 'about', 'process', 'why', 'packages', 'contact']

/** The styles in the order their sections appear on the page, for the side navigation. */
export const STYLES_ON_PAGE = PAGE_IDS.map(styleOfSection).filter((id) => id !== undefined)
