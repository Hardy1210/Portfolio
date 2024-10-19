import { LinkedinIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '../lib/utils'
import { Button } from './_components/Button/Button'
import { Header } from './_components/Header/Header'
import { ArrowUp } from './_components/icons/ArrowUp'
import { CssIcon } from './_components/icons/CssIcon'
import { FigmaIcon } from './_components/icons/FigmaIcon'
import { GithubIcon } from './_components/icons/GithubIcon'
import { GitLabIcon } from './_components/icons/GitLabIcon'
import { HtmlIcon } from './_components/icons/HtmlIcon'
import { JavascriptIcon } from './_components/icons/JavascriptIcon'
import { MongoDbIcon } from './_components/icons/MongoDbIcon'
import { NextIcon } from './_components/icons/NextIcon'
import { NotionIcon } from './_components/icons/NotionIcon'
import { NpmIcon } from './_components/icons/NpmIcon'
import { PostmanIcon } from './_components/icons/PostmanIcon'
import { ReactIcon } from './_components/icons/ReactIcon'
import { ReduxIcon } from './_components/icons/ReduxIcon'
import { SassIcon } from './_components/icons/SassIcon'
import { SwaggerIcon } from './_components/icons/SwaggerIcon'
import { TailwindIcon } from './_components/icons/TailwindIcon'
import { TypescriptIcon } from './_components/icons/TypescriptIcon'
import { VercelIcon } from './_components/icons/VercelIcon'
import { ViteIcon } from './_components/icons/ViteIcon'
import { VsCodeIcon } from './_components/icons/VsCodeIcon'
import { Section } from './_components/Section/Section'
import styles from './page.module.scss'

export default function Home() {
  return (
    <>
      <Header />
      <main className={cn(styles.main__container, 'space-y-28')}>
        <Section>
          <div
            className={cn(
              styles.container,
              'relative flex flex-col h-fit w-full items-center gap-5 md:gap-10',
            )}
          >
            <div
              className={cn(
                styles.bloque__vacio,
                'absolute -z-50 h-64 w-64 bg-[conic-gradient(transparent,rgb(0,0,0))] opacity-15 blur-2xl dark:bg-[conic-gradient(transparent,rgb(255,255,255))] md:left-36',
              )}
            ></div>
            <div
              className={cn(
                styles.hidden__imgs,
                'absolute left-1/2 top-1/2 w-max -translate-x-1/2 -translate-y-1/2 opacity-10 dark:opacity-5 md:hidden',
              )}
            >
              <Image
                src="/images/m.webp"
                alt="Robot hand light"
                width={250}
                height={325}
                className={cn(
                  styles.img,
                  'w-96 object-cover  dark:hidden text-transparent',
                )}
              />
              <Image
                src="/images/m.webp"
                alt="Robot hand dark"
                width={250}
                height={325}
                className={cn(
                  styles.img,
                  'hidden w-96 dark:block text-transparent',
                )}
              />
            </div>
            <div
              className={cn(
                styles.container__presentationImage,
                'flex flex-row h-fit w-full md:justify-between items-center md:items-start',
              )}
            >
              <div
                className={cn(
                  styles.text,
                  'flex gap-3 flex-col m-auto md:m-0 items-center md:items-start',
                )}
              >
                <h1
                  aria-label="Hardy Lino"
                  className={cn(
                    styles.hardy,
                    'w-min text-7xl font-bold drop-shadow-xl dark:text-neutral-50 md:w-max',
                  )}
                >
                  <span aria-hidden="true" className="">
                    Hi
                    <br />
                    I&#39;m
                  </span>{' '}
                  Hardy,
                </h1>
                <h2 className={cn(styles.dev, 'text-3xl text-center')}>
                  a Front-End Developer
                </h2>
                <h2 className={cn(styles.front, 'text-2xl md:mx-0 lg:mx-0')}>
                  Welcome to my portfolio, where each project{' '}
                  <br className="hidden md:flex" />
                  tells a unique story.
                </h2>
              </div>

              <div
                className={cn(
                  styles.img__container,
                  'max-w-xs flex-1 hidden md:flex',
                )}
              >
                <Image
                  src="/images/m.webp"
                  alt="Robot hand light"
                  width={250}
                  height={325}
                  className={cn(
                    styles.img,
                    'max-w-xs flex-1 md:flex dark:hidden',
                  )}
                />
                {/**<Image
                  src="/images/m.webp"
                  alt="Robot hand dark"
                  width={250}
                  height={325}
                  className={cn(styles.img, ' max-w-xs md:flex dark:block')}
                /> */}
              </div>
            </div>

            <div
              className={cn(
                styles.buttons__container,
                'mt-5 md:mt-0  w-full md:max-w-full flex-col-reverse  gap-5 justify-between',
              )}
            >
              <div
                className={cn(
                  styles.button__read,
                  'flex gap-4 max-w-full md:max-w-96',
                )}
              >
                <Button />
                <a
                  className={cn(
                    styles.read,
                    'flex flex-row rounded-xl gap-0.5 items-center p-3 opacity-70 hover:opacity-100',
                  )}
                  href="https://www.linkedin.com/in/hardy-lino-30a616b1/"
                >
                  <span
                    className={cn(
                      styles.read__cv,
                      'text-1xl leading-none underline',
                    )}
                  >
                    lire.cv
                  </span>
                  <ArrowUp size={13} />
                </a>
              </div>

              <ul
                className={cn(styles.icons, 'justify-center md:justify-start ')}
              >
                <Link
                  href="https://github.com/Hardy1210"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GithubIcon size={20} />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/hardy-lino-30a616b1/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedinIcon size={20} />
                </Link>
              </ul>
            </div>
          </div>
        </Section>
        <div>
          <div className={cn(styles.marquee__container, 'overflow-hidden')}>
            <div
              className={cn(
                styles.marquee__icons,
                'flex w-full items-center whitespace-nowrap relative [mask-image:linear-gradient(to_right,rgba(0,0,0,0)_0%,rgb(0,0,0)_12.5%,rgb(0,0,0)_87.5%,rgba(0,0,0,0)_100%)] group',
              )}
            >
              <ul
                className={cn(
                  styles.marque__ul,
                  'inline-flex items-center animate-marquee group-hover:[animation-play-state:paused]',
                )}
              >
                <li className="mx-9">
                  <GithubIcon size={70} />
                </li>
                <li className="mx-9">
                  <ReactIcon size={70} />
                </li>
                <li className="mx-9">
                  <NextIcon size={70} />
                </li>
                <li className="mx-9">
                  <TypescriptIcon size={70} />
                </li>
                <li className="mx-9">
                  <JavascriptIcon size={70} />
                </li>
                <li className="mx-9">
                  <FigmaIcon size={70} />
                </li>
                <li className="mx-9">
                  <HtmlIcon size={70} />
                </li>
                <li className="mx-9">
                  <CssIcon size={70} />
                </li>
                <li className="mx-9">
                  <MongoDbIcon size={70} />
                </li>
                <li className="mx-9">
                  <NotionIcon size={70} />
                </li>
                <li className="mx-9">
                  <TailwindIcon size={70} />
                </li>
                <li className="mx-9">
                  <SwaggerIcon size={70} />
                </li>
                <li className="mx-9">
                  <SassIcon size={70} />
                </li>
                <li className="mx-9">
                  <VercelIcon size={70} />
                </li>
                <li className="mx-9">
                  <NpmIcon size={70} />
                </li>
                <li className="mx-9">
                  <GitLabIcon size={70} />
                </li>
                <li className="mx-9">
                  <PostmanIcon size={70} />
                </li>
                <li className="mx-9">
                  <ReduxIcon size={70} />
                </li>
                <li className="mx-9">
                  <ViteIcon size={70} />
                </li>
                <li className="mx-9">
                  <VsCodeIcon size={70} />
                </li>
              </ul>
              <ul
                className={cn(
                  styles.marque__ull,
                  'inline-flex absolute top0 items-center animate-marquee2 group-hover:[animation-play-state:paused]',
                )}
              >
                <li className="mx-9">
                  <GithubIcon size={70} />
                </li>
                <li className="mx-9">
                  <ReactIcon size={70} />
                </li>
                <li className="mx-9">
                  <NextIcon size={70} />
                </li>
                <li className="mx-9">
                  <TypescriptIcon size={70} />
                </li>
                <li className="mx-9">
                  <JavascriptIcon size={70} />
                </li>
                <li className="mx-9">
                  <FigmaIcon size={70} />
                </li>
                <li className="mx-9">
                  <HtmlIcon size={70} />
                </li>
                <li className="mx-9">
                  <CssIcon size={70} />
                </li>
                <li className="mx-9">
                  <MongoDbIcon size={70} />
                </li>
                <li className="mx-9">
                  <NotionIcon size={70} />
                </li>
                <li className="mx-9">
                  <TailwindIcon size={70} />
                </li>
                <li className="mx-9">
                  <SwaggerIcon size={70} />
                </li>
                <li className="mx-9">
                  <SassIcon size={70} />
                </li>
                <li className="mx-9">
                  <VercelIcon size={70} />
                </li>
                <li className="mx-9">
                  <NpmIcon size={70} />
                </li>
                <li className="mx-9">
                  <GitLabIcon size={70} />
                </li>
                <li className="mx-9">
                  <PostmanIcon size={70} />
                </li>
                <li className="mx-9">
                  <ReduxIcon size={70} />
                </li>
                <li className="mx-9">
                  <ViteIcon size={70} />
                </li>
                <li className="mx-9">
                  <VsCodeIcon size={70} />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Section>
          <div></div>
          <div className={cn(styles.projects___container, '')}></div>
        </Section>
      </main>
    </>
  )
}
