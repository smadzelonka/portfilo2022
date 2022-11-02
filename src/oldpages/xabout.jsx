import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/avatar.jpg'
import Redirect from '@/components/Redirect'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About({ previousPathname }) {
  return (
    <>
      <Head>
        <title>About - Sean Madzelonka</title>
        <meta
          name="description"
          content="I’m Sean Madzelonka. I live in Dallas, Texas, where I design the future."
        />
        <meta
          property="og:url"
          key="og:url"
          content={process.env.NEXT_PUBLIC_SITE_URL}
        />
        <meta property="og:type" key="og:type" content="website" />
        <link rel="canonical" href={process.env.NEXT_PUBLIC_SITE_URL} />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            {previousPathname && <Redirect />}

            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I’m Sean Madzelonka. I live in Dallas, Texas, where I design the
              future.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                I&apos;ve loved making things for as long as I can remember, and
                I wrote my first program when I was 12 years old, just two weeks
                after my father brought home the brand new Macintosh iMac G3
                that I taught myself to type on.
              </p>
              <p>
                The only thing I loved more than computers as a kid was
                adventures. When I was 8, I explored the undeveloped land,
                dreaming about exploring and seeing the world with all the
                animals and great food — hoping I could get a chance to see
                everything and take pride in my home.
              </p>
              <p>
                Today, I am an experienced software engineer and freelance
                developer. I have a strong understanding of Javascript and
                python programming. I have recently finished General
                Assembly&apos;s immersive software engineering program, and
                I&apos;m taking advantage of the remote work environment to
                ensure I can see more and learn more.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink
                href="https://twitter.com/seanmadzelonka"
                icon={TwitterIcon}
              >
                Follow on Twitter
              </SocialLink>
              <SocialLink
                href="https://instagram.com/seanmadzelonka"
                icon={InstagramIcon}
                className="mt-4"
              >
                Follow on Instagram
              </SocialLink>
              <SocialLink
                href="https://github.com/smadzelonka"
                icon={GitHubIcon}
                className="mt-4"
              >
                Follow on GitHub
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/in/seanmadzelonka/"
                icon={LinkedInIcon}
                className="mt-4"
              >
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:s@seanmadzelonka.com"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                s@seanmadzelonka.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
