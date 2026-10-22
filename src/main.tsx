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
