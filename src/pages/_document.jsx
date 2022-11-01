import { Head, Html, Main, NextScript } from 'next/document'

const modeScript = `
  let darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

  updateMode()
  darkModeMediaQuery.addEventListener('change', updateModeWithoutTransitions)
  window.addEventListener('storage', updateModeWithoutTransitions)

  function updateMode() {
    let isSystemDarkMode = darkModeMediaQuery.matches
    let isDarkMode = window.localStorage.isDarkMode === 'true' || (!('isDarkMode' in window.localStorage) && isSystemDarkMode)

    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

    if (isDarkMode === isSystemDarkMode) {
      delete window.localStorage.isDarkMode
    }
  }

  function disableTransitionsTemporarily() {
    document.documentElement.classList.add('[&_*]:!transition-none')
    window.setTimeout(() => {
      document.documentElement.classList.remove('[&_*]:!transition-none')
    }, 0)
  }

  function updateModeWithoutTransitions() {
    disableTransitionsTemporarily()
    updateMode()
  }
`

const schemaData = {
  '@context': 'http://schema.org',
  '@type': 'Person',
  name: 'Sean Madzelonka',
  url: 'http://seanmadzelonka.com',
  sameAs: [
    'https://www.facebook.com/sean.madzelonka',
    'https://twitter.com/seanmadzelonka?lang=en',
    'https://www.instagram.com/seanmadzelonka/?hl=en',
    'https://www.linkedin.com/in/seanmadzelonka',
    'https://github.com/smadzelonka',
  ],
}

export default function Document() {
  return (
    <Html className="h-full antialiased" lang="en">
      <Head>
        <script dangerouslySetInnerHTML={{ __html: modeScript }} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta http-equiv="content-language" content="en" />
        {/* https://ogp.me/ */}
        <meta property="og:locale" key="og:locale" content="en_US" />
        <meta
          property="og:image"
          key="og:image"
          content={`${process.env.NEXT_PUBLIC_SITE_URL}/avatar.jpg`}
        />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>
      <body className="flex h-full flex-col bg-zinc-50 dark:bg-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
