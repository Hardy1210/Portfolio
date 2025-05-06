'use client'
import { HouseIcon, MailIcon, MoonIcon, SunIcon, X } from 'lucide-react'
//para la traduction
import Link from 'next/link'
//import { getI18n } from 'react-i18next'
//para traduction

import { cn } from '../../../lib/utils'
import { satisfySans } from '../../../styles/fonts'
import { AboutIcon } from '../icons/modals/AboutIcon'
import { MenuIcon } from '../icons/modals/MenuIcon'
import { ProjectsIcon } from '../icons/modals/ProjectsIcon'
import { LocaleSelect } from '../LocaleSelect/LocaleSelect'
//darMode
//import useDarkMode
import { useTheme } from 'next-themes'
//para la traduction
import { useI18n } from '@/locales/client'
//import { ButtonDarkMode } from '../ButtonDark/ButtonDarkMode'
import { LocaleSelectMovil } from '../LocaleSelectMovil/LocaleSelectMovil'
import { ModeToggle } from '../ModeToggle'
//logica del hook personalizado para el navBarComponent y el flotingNabButton
import { useMenuContext } from '../ContextNavbarFloatingNavButton/MenuContext'
import { FloatingNavButton } from '../FloatingNavButton/FloatingNavButton'
import styles from './Navbar.module.scss'

export function NavbarComponent() {
  const { isOpen, isVisible, toggleMenu } = useMenuContext()
  //traduccion para la internationalisation
  const t = useI18n()
  const { setTheme } = useTheme()

  return (
    <>
      <nav
        className={cn(
          styles.navbar,
          'rounded-xl max-w-5xl m-auto transition-all backdrop-blur-3xl bg-neutral-50/80 border border-black/10 dark:border-white/10 dark:bg-neutral-950/85',
          'relative z-40', // Ensure nav is below the modal
        )}
      >
        <div
          className={cn(
            styles.navbar__container,
            'rounded-xl flex justify-between items-center m-auto px-4 md:px-5',
          )}
        >
          <div className={cn(styles.logo__container, 'flex items-center')}>
            <Link
              href="/#home"
              className={cn(
                styles.navbar__logo,
                'font-semibold py-3 text-2xl drop-shadow-lg md:px0',
                satisfySans.className,
              )}
            >
              Hardy L.
            </Link>
          </div>
          <div
            className={cn(
              styles.navbar__nav,
              'hidden md:flex gap-6 items-center',
            )}
          >
            <div
              className={cn(
                styles.navbar__link,
                'flex items-baseline space-x-1',
              )}
            >
              <Link
                href="#home"
                className={cn(
                  styles.link,
                  'text-neutral-500 p-2 rounded-lg font-medium hover:bg-neutral-200/50 hover:text-neutral-900 dark:text-neutral-400 hover:dark:bg-neutral-950 dark:hover:text-neutral-100',
                )}
              >
                {t('landing.nav.home')}
              </Link>

              <Link
                href="#about"
                className={cn(
                  styles.link,
                  'text-neutral-500 p-2 rounded-lg font-medium hover:bg-neutral-200/50 hover:text-neutral-900 dark:text-neutral-400 hover:dark:bg-neutral-950 dark:hover:text-neutral-100',
                )}
              >
                {t('landing.nav.about')}
              </Link>
              <Link
                href="#projects"
                className={cn(
                  styles.link,
                  'text-neutral-500 p-2 rounded-lg font-medium hover:bg-neutral-200/50 hover:text-neutral-900 dark:text-neutral-400 hover:dark:bg-neutral-950 dark:hover:text-neutral-100',
                )}
              >
                {t('landing.content.projects')}
              </Link>
              <Link
                href="#contact"
                className={cn(
                  styles.link,
                  'text-neutral-500 p-2 rounded-lg font-medium hover:bg-neutral-200/50 hover:text-neutral-900 dark:text-neutral-400 hover:dark:bg-neutral-950 dark:hover:text-neutral-100',
                )}
              >
                {t('landing.nav.contact')}
              </Link>
            </div>
            <div>
              {/* Language selector */}
              <LocaleSelect />
            </div>
            <div className={cn(styles.dark__container, 'flex')}>
              <ModeToggle />
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center rounded-md  dark:hover:bg-neutral-700 hover:bg-neutral-200/50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded={isOpen ? 'true' : 'false'}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <MenuIcon
                  width={30}
                  className="block  stroke-[3]"
                  aria-hidden="true"
                />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Full-Screen Modal */}
      {isVisible && (
        <div
          className={`fixed inset-0 z-50 bg-neutral-50 bg-opacity-45 backdrop-blur-2xl  dark:bg-neutral-900/50  md:hidden transition-opacity duration-200 ${
            isOpen ? 'animate-fadeIn' : 'animate-fadeOut'
          }`}
        >
          {/* <div className="absolute inset-0 bg-black/50 backdrop-blur-md"></div>*/}

          <div className="absolute top-4 right-4">
            <button
              onClick={toggleMenu}
              className="text-gray-400 hover:text-gray-500 "
            >
              <X className="block stroke-[3] m-4" aria-hidden="true" />
            </button>
          </div>
          <div className="flex px-20 flex-col font-bold items-center justify-center  h-full">
            <Link
              onClick={toggleMenu}
              href="#home"
              className="flex items-center justify-center text-2xl w-full py-5 border-b-2 border-b-neutral-900 dark:border-b-foreground text-neutral-900 dark:text-neutral-100 hover:text-neutral-500 dark:hover:text-neutral-300"
            >
              <HouseIcon className="mr-2" />
              {t('landing.nav.home')}
            </Link>
            <Link
              onClick={toggleMenu}
              href="#about"
              className="flex items-center justify-center text-2xl w-full py-5 border-b-2 border-b-neutral-900 dark:border-b-foreground text-neutral-900 dark:text-neutral-100 hover:text-neutral-500 dark:hover:text-neutral-300"
            >
              <AboutIcon size={25} className="mr-2" />
              {t('landing.nav.about')}
            </Link>
            <Link
              onClick={toggleMenu}
              href="#projects"
              className="flex items-center justify-center text-2xl w-full py-5 border-b-2 border-b-neutral-900 dark:border-b-foreground text-neutral-900 dark:text-neutral-100 hover:text-neutral-500 dark:hover:text-neutral-300"
            >
              <ProjectsIcon size={30} className="mr-2" />
              {t('landing.content.projects')}
            </Link>

            <Link
              onClick={toggleMenu}
              href="#contact"
              className="flex items-center justify-center text-2xl w-full py-5 border-b-2 border-b-neutral-900 dark:border-b-foreground text-neutral-900 dark:text-neutral-100 hover:text-neutral-500 dark:hover:text-neutral-300"
            >
              <MailIcon className="mr-2" />
              {t('landing.nav.contact')}
            </Link>
            <div className={cn(styles.languageMovil__container, '')}>
              <LocaleSelectMovil />
            </div>

            <div
              className={cn(
                styles.darkModeMovil__container,
                'flex flex-row gap-7 mt-20',
              )}
            >
              <SunIcon
                size={40}
                className="cursor-pointer hover:text-neutral-600 dark:hover:text-neutral-300 transform hover:scale-125 transition duration-300"
                onClick={() => setTheme('light')}
              />
              <MoonIcon
                size={40}
                className="cursor-pointer hover:text-neutral-600 dark:hover:text-neutral-300 transform hover:scale-125 transition duration-300"
                onClick={() => setTheme('dark')}
              />
            </div>
            <FloatingNavButton className="mt-10 relative w-16 h-16" />
          </div>
        </div>
      )}
    </>
  )
}
