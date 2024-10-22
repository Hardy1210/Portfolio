'use client'
import { HouseIcon, MailIcon, X } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { cn } from '../../../lib/utils'
import { Dark } from '../icons/DarkIcon'
import { AboutIcon } from '../icons/modals/AboutIcon'
import { MenuIcon } from '../icons/modals/MenuIcon'
import { ProjectsIcon } from '../icons/modals/ProjectsIcon'
import styles from './Navbar.module.scss'

export function NavbarComponent() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <nav
        className={cn(
          styles.navbar,
          'rounded-xl max-w-5xl m-auto transition-all backdrop-blur-3xl border border-neutral-200/50 dark:border-neutral-900 dark:bg-neutral-1000/80',
          'relative z-10', // Ensure nav is below the modal
        )}
      >
        <div
          className={cn(
            styles.navbar__container,
            'rounded-xl flex justify-between items-center  px-4 md:px-5',
          )}
        >
          <div className={cn(styles.logo__container, 'flex items-center')}>
            <Link
              href="#home"
              className={cn(
                styles.navbar__logo,
                'font-semibold py-3 text-2xl drop-shadow-lg md:px0',
              )}
            >
              Hardy L.
            </Link>
          </div>
          <div className={cn(styles.navbar__nav, 'hidden md:flex')}>
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
                Accueil
              </Link>
              <Link
                href="#projects"
                className={cn(
                  styles.link,
                  'text-neutral-500 p-2 rounded-lg font-medium hover:bg-neutral-200/50 hover:text-neutral-900 dark:text-neutral-400 hover:dark:bg-neutral-950 dark:hover:text-neutral-100',
                )}
              >
                Projets
              </Link>
              <Link
                href="#about"
                className={cn(
                  styles.link,
                  'text-neutral-500 p-2 rounded-lg font-medium hover:bg-neutral-200/50 hover:text-neutral-900 dark:text-neutral-400 hover:dark:bg-neutral-950 dark:hover:text-neutral-100',
                )}
              >
                À propos
              </Link>
              <Link
                href="#contact"
                className={cn(
                  styles.link,
                  'text-neutral-500 p-2 rounded-lg font-medium hover:bg-neutral-200/50 hover:text-neutral-900 dark:text-neutral-400 hover:dark:bg-neutral-950 dark:hover:text-neutral-100',
                )}
              >
                Contact
              </Link>
            </div>
            <div className={cn(styles.dark__container, 'flex')}>
              <button className={styles.button}>
                <Dark size={30} className="text-neutral-500" />
              </button>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded={isOpen ? 'true' : 'false'}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <MenuIcon
                  className="block h-6 w-6 stroke-[3]"
                  aria-hidden="true"
                />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Full-Screen Modal */}
      {isOpen && (
        <div
          className={`fixed inset-0 z-50 dark:bg-neutral-900/90 backdrop-blur-xl md:hidden transition-opacity duration-100 ${
            isOpen ? 'animate-fadeIn' : 'animate-fadeOut pointer-events-none'
          }`}
        >
          {/* <div className="absolute inset-0 bg-black/50 backdrop-blur-md"></div>*/}

          <div className="absolute top-4 right-4 p-4">
            <button
              onClick={toggleMenu}
              className="text-gray-400 hover:text-gray-500"
            >
              <X className="block h-6 w-6 stroke-[3]" aria-hidden="true" />
            </button>
          </div>
          <div className="flex px-20 flex-col font-bold items-center justify-center  h-full">
            <Link
              onClick={toggleMenu}
              href="#home"
              className="flex items-center justify-center text-2xl w-full py-4 border-b-2 border-b-blue-950 text-neutral-900 dark:text-neutral-100"
            >
              <HouseIcon className="mr-2" />
              Acceuil
            </Link>
            <Link
              onClick={toggleMenu}
              href="#projects"
              className="flex items-center justify-center text-2xl w-full py-5 border-b-2 border-b-blue-950 text-neutral-900 dark:text-neutral-100"
            >
              <ProjectsIcon size={30} className="mr-2" />
              Projets
            </Link>
            <Link
              onClick={toggleMenu}
              href="#about"
              className="flex items-center justify-center text-2xl w-full py-5 border-b-2 border-b-blue-950 text-neutral-900 dark:text-neutral-100"
            >
              <AboutIcon size={25} className="mr-2" />À propos
            </Link>
            <Link
              onClick={toggleMenu}
              href="#contact"
              className="flex items-center justify-center text-2xl w-full py-5 border-b-2 border-b-blue-950 text-neutral-900 dark:text-neutral-100"
            >
              <MailIcon className="mr-2" />
              Contact
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
