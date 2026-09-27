# Ines Puhr — Portfolio

A single-page portfolio built with React, TypeScript, Vite and Tailwind CSS v4.

The concept: **five sections, five design styles.** Each section is designed in a different visual language, and a small "running header" at the top of each one names the style and who it would suit. Visitors can see the range of designs and spot the one that fits their business.

The landing view is the eye-catcher: the headline "Websites & Software, so ___ wie Sie." cycles through one adjective per style (each in that style's typeface and look), next to a tilted, slowly scrolling wall of website designs — coded samples of each style plus the real client sites — over a drifting colour field. The style chips below the buttons jump to their sections. Wall contents live in `src/components/DesignWall.tsx` and `MiniSites.tsx`.

| # | Section | Style | Suits e.g. |
|---|---|---|---|
| 01 | Work | Dark & modern (Space Grotesk, glow, grid) | Fitness, tech, creative studios |
| 02 | Services | Soft & reassuring (Nunito, sage and peach) | Medical practices, physiotherapy, pharmacies |
| 03 | Process | Warm & handmade (Fraunces, sand, hand-drawn strokes) | Cafés, crafts, yoga & wellness |
| 04 | Pricing | Bold & playful (Bricolage Grotesque, neo-brutalism) | Shops, events, young brands |
| 05 | Contact | Elegant & timeless (Cormorant Garamond, forest and gold) | Private clinics, aesthetics, hospitality |

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
  content.ts        all copy, German and English. Edit texts and prices here.
  config.ts         name and email address
  styles.ts         the five styles: order, numbers, colours
  index.css         Tailwind theme: fonts and colour palettes for every style
  sections/         one file per section (Hero, Work, Services, Process, Pricing, Contact, Footer)
  components/       nav, side "style rail", style tag, reveal animation, legal dialog
  assets/work/      screenshots of the client websites
scripts/
  screenshot.mjs    captures a client website for the Work section
```

**Language:** German is the default. The DE/EN switch in the nav changes the language, and `?lang=en` links straight to the English version. Nothing is stored on the visitor's device.

## Adding a project to "Work"

1. Capture the site (one-time setup: `bunx playwright install chromium`). The script runs on Node, since Playwright officially supports only Node:
   ```bash
   bun run screenshot -- https://new-client.at new-client
   ```
   This writes `src/assets/work/new-client-full.webp`, `-mobile.webp` and `-hero.webp` (the last one is for the landing page's design wall, if you want to add it there).
2. Add it to `PROJECTS` in `src/sections/Work.tsx` (import the two images).
3. Add its texts under `work.projects` in `src/content.ts`, in both `de` and `en`. The `ProjectId` type there tells TypeScript about the new id.

To mark a project as unfinished, give it a `status` (and optionally a `note`), as `bioreso` has.

## Deployment

`bun run build` produces a fully static site in `dist/`. Upload that folder to any web server (nginx, Apache, Caddy …). No server-side code is needed.

Nice to know for the privacy statement: the site sets no cookies, has no tracking, and makes no requests to third parties. Fonts are bundled, not loaded from Google. The contact form only prepares an email in the visitor's own mail app.

## Before going live

- [ ] **Impressum:** fill in the `[…]` placeholders under `legal.imprint` in `src/content.ts` (address, trade, authority, chamber, VAT ID).
- [ ] **Datenschutz:** fill in the address under `legal.privacy` and check the text matches your server setup (e.g. how long server logs are kept).
- [ ] **Prices:** consider noting whether prices include VAT (or that you're exempt as a small business).
- [ ] **Social preview:** once the domain is known, add an `og:image` and `og:url` (absolute URLs) to `index.html`.
