// 'use client'
// import { useEffect, useRef } from 'react'
// import { Suspense } from 'react'
// import { usePathname } from 'next/navigation'
import '@/styles/tailwind.css'
import 'focus-visible'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import Loading from './loading'

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
  url: 'https://seanmadzelonka.com',
  sameAs: [
    'https://www.facebook.com/sean.madzelonka',
    'https://twitter.com/seanmadzelonka?lang=en',
    'https://www.instagram.com/seanmadzelonka/?hl=en',
    'https://www.linkedin.com/in/seanmadzelonka',
    'https://github.com/smadzelonka',
  ],
}

// function usePrevious(value) {
//   let ref = useRef()

//   useEffect(() => {
//     ref.current = value
//   }, [value])

//   return ref.current
// }

export default function RootLayout({ children }) {
  // let previousPathname = usePrevious(usePathname())
  return (
    <html>
      <head>
        <script dangerouslySetInnerHTML={{ __html: modeScript }} />
        <meta httpEquiv="content-language" content="en" />
        {/* https://ogp.me/ */}
        <meta property="og:locale" key="og:locale" content="en_US" />
        <meta
          property="og:image:secure_url"
          key="og:image"
          content={'https://d39s6i1568tdna.cloudfront.net/avatar.jpg'}
        />
        <meta
          property="og:image"
          key="og:image"
          content={'https://d39s6i1568tdna.cloudfront.net/avatar.jpg'}
        />
        <meta property="og:image:width" content="1600" />
        <meta property="og:image:height" content="900" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://seanmadzelonka.com" />
        <meta
          property="og:title"
          content="Sean Madzelonka - Software designer, amateur astronaut, and travel
          enthusiast"
        />
        <meta
          property="og:description"
          content="I’m Sean, a software designer and entrepreneur based in Dallas,
            Texas. Looking for opportunities, where we develop technologies that
            empower regular people to explore and develop on their own terms."
        />
        <meta
          property="og:image"
          content={'https://d39s6i1568tdna.cloudfront.net/avatar.jpg'}
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="Sean Madzelonka - Software designer, amateur astronaut, and travel
          enthusiast"
        />
        <meta
          property="twitter:title"
          content="Sean Madzelonka - Software designer, amateur astronaut, and travel
          enthusiast"
        />
        <meta
          property="twitter:description"
          content="I’m Sean, a software designer and entrepreneur based in Dallas,
            Texas. Looking for opportunities, where we develop technologies that
            empower regular people to explore and develop on their own terms."
        />
        <meta
          property="twitter:image"
          content={'https://d39s6i1568tdna.cloudfront.net/avatar.jpg'}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body className="flex h-full flex-col bg-zinc-50 dark:bg-black">
        <div className="fixed inset-0 flex justify-center sm:px-8">
          <div className="flex w-full max-w-7xl lg:px-8">
            <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
          </div>
        </div>
        <div className="relative">
          {/* <Suspense fallback={<Loading />}> */}
          <Header />
          {/* </Suspense> */}
          <main>
            {children}
            <Footer />
          </main>
        </div>
      </body>
    </html>
  )
}
