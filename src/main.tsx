import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Fonts are bundled and served from our own server: no requests to Google (GDPR-friendly).
import '@fontsource-variable/geist'
import '@fontsource-variable/geist-mono'
import '@fontsource/instrument-serif/400.css'
import '@fontsource/instrument-serif/400-italic.css'
import '@fontsource-variable/nunito'
import '@fontsource-variable/space-grotesk'
import '@fontsource-variable/fraunces/soft.css'
import '@fontsource-variable/fraunces/soft-italic.css'
import '@fontsource-variable/bricolage-grotesque/opsz.css'
import '@fontsource-variable/cormorant-garamond'
import '@fontsource-variable/cormorant-garamond/wght-italic.css'
import '@fontsource-variable/lexend'
// Greek look-alikes for the fonts above. Browsers only download the Greek files, and only on the Greek page.
import '@fontsource-variable/inter'
import '@fontsource-variable/noto-serif-display'
import '@fontsource-variable/comfortaa'
import '@fontsource-variable/manrope'
import '@fontsource-variable/alegreya'
import '@fontsource-variable/alegreya/wght-italic.css'
import '@fontsource-variable/commissioner'
import '@fontsource-variable/eb-garamond'
import '@fontsource-variable/eb-garamond/wght-italic.css'
import '@fontsource-variable/noto-sans'

import './index.css'
import App from './App.tsx'
import { LanguageProvider } from './i18n.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </StrictMode>,
)
