# Ines Puhr — Portfolio

A single-page portfolio built with React, TypeScript, Vite and Tailwind CSS v4, for one audience: therapists, coaches and healers. Its one goal is a booked free call, so every "Book a free call" button leads to the contact form.

The concept: **six sections, six design styles.** Each styled section opens with a small label that names its style ("Style 01 · Dark & Modern"), so visitors see the range of designs while they read.

The landing view: the headline "Websites for your practice, as ___ as you." cycles through one word per style (modern, calm, warm, playful, elegant), each in that style's typeface and look, next to a tilted, slowly scrolling wall of health, therapy and coaching websites (real client sites plus coded samples). Wall contents live in `src/components/DesignWall.tsx` and `MiniSites.tsx`.

| Section | Style |
|---|---|
| Hero | The airy look, unlabelled (Geist and Instrument Serif, violet) |
| Work | 01 · Dark & modern (Space Grotesk, glow, grid) |
| About | 02 · Airy & personal (Geist and Instrument Serif, lavender; your photo `src/assets/ines.webp` in an arch) |
| Process | 03 · Warm & handmade (Fraunces, sand, hand-drawn strokes) |
| Why me | 04 · Soft & reassuring (Nunito, sage and peach) |
| Packages | 05 · Bold & playful (Bricolage Grotesque, neo-brutalism) |
| Contact | 06 · Elegant & timeless (Cormorant Garamond, forest and gold) |

Layout rules: content at most 1200px wide (the `wrap` utility), 96px section padding on desktop, body text at least 16px, one primary button style per section.

Section boundaries are drawn for their neighbours, each in the style of the section it leads into: Work ends on a hard edge into About, Process starts with a torn edge in About's white, Why me melts in over the bottom of Process (`seam-in`, `--melt`), the marquee tape covers the slanted top of Packages, and Contact rises in an arch. If you reorder sections, adjust the colours and spacing at the affected boundaries, and the style numbers in `src/styles.ts` (they count down the page).

**Copy guideline:** keep it short. Every message appears once on the page, and every list item is one sentence.

## Getting started

Uses [Bun](https://bun.sh) as the package manager.

```bash
bun install
bun run dev       # http://localhost:5173
bun run build     # production build in dist/
bun run preview   # serve the production build locally
bun run lint
```

## Where things live

```
src/
  content.ts        all copy, German and English. Edit texts and packages here.
  config.ts         name and email address
  styles.ts         the six styles: numbers, colours, and which five the hero cycles through
  index.css         Tailwind theme: fonts and colour palettes for every style
  sections/         one file per section (Hero, Work, About, Process, Why, Packages, Contact, Footer)
  components/       nav, side "style rail", style tag, design wall, reveal animation, legal dialog
  assets/work/      screenshots of the client websites
scripts/
  screenshot.mjs    captures a client website for the Work section
```

**Language:** English is the default. The EN/DE switch in the nav changes the language, and `?lang=de` links straight to the German version. Nothing is stored on the visitor's device.

## Adding a project to "Work"

1. Capture the site (one-time setup: `bunx playwright install chromium`). The script runs on Node, since Playwright officially supports only Node:
   ```bash
   bun run screenshot -- https://new-client.at new-client
   ```
   This writes `src/assets/work/new-client-full.webp`, `-mobile.webp` and `-hero.webp` (the last one is for the landing page's design wall, if you want to add it there).
2. Add it to `PROJECTS` in `src/sections/Work.tsx` (import the two images).
3. Add its texts under `work.projects` in `src/content.ts`, in both `de` and `en`. The `ProjectId` type there tells TypeScript about the new id.

To mark a project as unfinished, set `wip: true` on it (as `bioreso` has): its button then says "Preview" instead of "Visit website".

## Deployment

`bun run build` produces a fully static site in `dist/`. Upload that folder to any web server (nginx, Apache, Caddy …). No server-side code is needed.

Nice to know for the privacy statement: the site sets no cookies, has no tracking, and makes no requests to third parties. Fonts are bundled, not loaded from Google. The contact form only prepares an email in the visitor's own mail app.

## Before going live

- [ ] **Impressum:** fill in the `[…]` placeholders under `legal.imprint` in `src/content.ts` (address, trade, authority, chamber, VAT ID).
- [ ] **Datenschutz:** fill in the address under `legal.privacy` and check the text matches your server setup (e.g. how long server logs are kept).
- [ ] **Package details:** check the numbers in `packages.plans` in `src/content.ts` (1 round of changes, up to 5 pages, 3 rounds). They came from the design spec as suggestions.
- [ ] **Location:** About says "Based in Cyprus". Make sure it matches the Impressum and privacy statement, which currently assume Austria.
- [x] **Social preview:** `og:image` in `index.html` points to `https://websites.ines.codes/og-image.jpg` (`public/og-image.jpg`, a 1200×630 crop of the design wall, without text so it suits every language). If the domain changes, update it. There is deliberately no `og:url` or canonical link: both would point `?lang=de` / `?lang=el` links back to the English page.
