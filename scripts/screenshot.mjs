/**
 * Captures a client website for the "Work" section:
 *   src/assets/work/<slug>-full.webp    full-page desktop screenshot (scrolls on hover)
 *   src/assets/work/<slug>-mobile.webp  phone screenshot
 *   src/assets/work/<slug>-hero.webp    first screen, small (for the landing page's design wall)
 *
 * Usage:  bun run screenshot -- https://example.at example
 *
 * One-time setup: bunx playwright install chromium
 * (on a fresh Linux/WSL machine also: sudo bunx playwright install-deps chromium)
 */
import { chromium } from 'playwright'
import sharp from 'sharp'

const [url, slug] = process.argv.slice(2)
if (!url || !slug) {
  console.error('Usage: bun run screenshot -- <url> <slug>')
  process.exit(1)
}

const OUT = new URL('../src/assets/work/', import.meta.url).pathname

// Scroll through the page once so lazy images and scroll animations load, then jump back up.
async function warmUp(page) {
  await page.evaluate(async () => {
    document.documentElement.style.scrollBehavior = 'auto'
    for (let y = 0; y < document.body.scrollHeight; y += window.innerHeight / 2) {
      window.scrollTo({ top: y, behavior: 'instant' })
      await new Promise((r) => setTimeout(r, 180))
    }
    window.scrollTo({ top: 0, behavior: 'instant' })
    await new Promise((r) => setTimeout(r, 800))
  })
}

const browser = await chromium.launch()

const desktop = await browser.newPage({ viewport: { width: 1440, height: 900 } })
await desktop.goto(url, { waitUntil: 'networkidle', timeout: 60_000 })
await warmUp(desktop)
const full = await desktop.screenshot({ fullPage: true })

const mobile = await browser.newPage({
  viewport: { width: 390, height: 844 },
  deviceScaleFactor: 2,
  isMobile: true,
  hasTouch: true,
})
await mobile.goto(url, { waitUntil: 'networkidle', timeout: 60_000 })
await mobile.waitForTimeout(1200)
const phone = await mobile.screenshot()

await browser.close()

// Keep files small: 960px wide, capped at 7200px tall (very long pages get cut off).
const resized = await sharp(full).resize({ width: 960 }).toBuffer()
const { height = 0 } = await sharp(resized).metadata()
await sharp(resized)
  .extract({ left: 0, top: 0, width: 960, height: Math.min(height, 7200) })
  .webp({ quality: 70 })
  .toFile(`${OUT}${slug}-full.webp`)
await sharp(phone).resize({ width: 520 }).webp({ quality: 78 }).toFile(`${OUT}${slug}-mobile.webp`)
// First screen only, small: for the design wall on the landing page.
await sharp(resized).extract({ left: 0, top: 0, width: 960, height: 600 }).resize({ width: 640 }).webp({ quality: 76 }).toFile(`${OUT}${slug}-hero.webp`)

console.log(`Saved ${slug}-full.webp, ${slug}-mobile.webp and ${slug}-hero.webp to src/assets/work/`)
