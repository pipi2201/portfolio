/** The five design languages shown on the page, in scroll order. */
export const STYLE_ORDER = ['dark', 'soft', 'warm', 'bold', 'elegant'] as const

export type StyleId = (typeof STYLE_ORDER)[number]

type StyleMeta = {
  number: string
  /** id of the section that is designed in this style */
  section: string
  /** colour used for this style's dot in the logo and side navigation */
  dot: string
}

export const STYLES: Record<StyleId, StyleMeta> = {
  dark: { number: '01', section: 'work', dot: '#8b7bff' },
  soft: { number: '02', section: 'why', dot: '#5f8f7d' },
  warm: { number: '03', section: 'process', dot: '#c4583b' },
  bold: { number: '04', section: 'packages', dot: '#ffd93d' },
  elegant: { number: '05', section: 'contact', dot: '#cbae7a' },
}

/** Accent of the brand look shared by the landing view and the About section. */
export const BRAND_DOT = '#6c5ce7'

/** The style a section is designed in (undefined for the landing view and About). */
export function styleOfSection(section: string): StyleId | undefined {
  return STYLE_ORDER.find((id) => STYLES[id].section === section)
}

/** Every anchor in scroll order. */
export const PAGE_IDS = ['top', 'work', 'why', 'process', 'packages', 'about', 'contact']
