import { LinkedinIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '../lib/utils'
import { Button } from './_components/Button/Button'
import { Header } from './_components/Header/Header'
import { ArrowUp } from './_components/icons/ArrowUp'
import { GithubIcon } from './_components/icons/GithubIcon'
import { Section } from './_components/Section/Section'
import styles from './page.module.scss'

export default function Home() {
  return (
    <main>
      <Header />
      <main>
        <Section>
          <div
            className={cn(
              styles.container,
              'flex flex-col h-fit gap-5 md:gap-10',
            )}
          >
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
      </main>
    </main>
  )
}
