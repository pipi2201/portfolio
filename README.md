# Ines Puhr — Portfolio

A single-page portfolio built with React, TypeScript, Vite and Tailwind CSS v4, for one audience: therapists, coaches and healers. Its one goal is a booked free call, so every "Book a free call" button leads to the contact form.

The concept: **five sections, five design styles.** Each styled section opens with a small label that names its style ("Style 01 · Dark & Modern"), so visitors see the range of designs while they read.

The landing view: the headline "Websites for your practice, as ___ as you." cycles through one word per style (modern, calm, warm, playful, elegant), each in that style's typeface and look, next to a tilted, slowly scrolling wall of health, therapy and coaching websites (real client sites plus coded samples). Wall contents live in `src/components/DesignWall.tsx` and `MiniSites.tsx`.

| Section | Style |
|---|---|
| Hero | Brand look (Geist and Instrument Serif, violet) |
| Work | 01 · Dark & modern (Space Grotesk, glow, grid) |
| Why me | 02 · Soft & reassuring (Nunito, sage and peach) |
| Process | 03 · Warm & handmade (Fraunces, sand, hand-drawn strokes) |
| Packages | 04 · Bold & playful (Bricolage Grotesque, neo-brutalism) |
| About | Brand look, with your photo in an arch |
| Contact | 05 · Elegant & timeless (Cormorant Garamond, forest and gold) |

Layout rules: content at most 1200px wide (the `wrap` utility), 96px section padding on desktop, body text at least 16px, one primary button style per section.

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
  styles.ts         the five styles: order, numbers, colours
  index.css         Tailwind theme: fonts and colour palettes for every style
  sections/         one file per section (Hero, Work, Why, Process, Packages, About, Contact, Footer)
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
- [ ] **Your photo:** add it to `src/assets/` and set `PHOTO` at the top of `src/sections/About.tsx`. Until then the About arch shows a monogram.
- [ ] **Package details:** check the numbers in `packages.plans` in `src/content.ts` (1 round of changes, up to 5 pages, 3 rounds). They came from the design spec as suggestions.
- [ ] **Location:** About says "Based in Cyprus". Make sure it matches the Impressum and privacy statement, which currently assume Austria.
- [ ] **Social preview:** once the domain is known, add an `og:image` and `og:url` (absolute URLs) to `index.html`.
