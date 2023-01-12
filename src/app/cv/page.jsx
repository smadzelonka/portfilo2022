'use client'
import Head from 'next/head'
import { SimpleLayout } from '@/components/SimpleLayout'

export default function CV({ previousPathname = null }) {
  return (
    <>
      <Head>
        <title>CV - Sean Madzelonka</title>
        <meta
          name="description"
          content="See all my professional achievements to date."
        />
      </Head>
      <SimpleLayout previousPathname={previousPathname}>
        <div className="space-y-20">
          <iframe
            className="h-[800px] w-full"
            src="/WedDevResume.pdf"
            id="resume"
            title="PDF in an i-Frame"
          />
        </div>
      </SimpleLayout>
    </>
  )
}
