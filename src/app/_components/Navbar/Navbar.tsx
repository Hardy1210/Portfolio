'use client'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { cn } from '../../../lib/utils'
import { Dark } from '../icons/DarkIcon'
import styles from './Navbar.module.scss'

export function NavbarComponent() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className={cn(styles.navbar, 'rounded-xl max-w-5xl m-auto')}>
      <div
        className={cn(
          styles.navbar__container,
          'rounded-xl flex justify-between items-center h-16 px-5',
        )}
      >
        <div className={cn(styles.logo__container, 'flex items-center')}>
          <Link
            href="#home"
            className={cn(
              styles.navbar__logo,
              'font-bold py-3 text-2xl drop-shadow-lg md:px0',
            )}
          >
            Hardy L.
          </Link>
        </div>
        <div className={cn(styles.navbar__nav, 'hidden md:flex')}>
          <div
            className={cn(styles.navbar__link, 'flex items-baseline space-x-1')}
          >
            <Link
              href="#home"
              className={cn(
                styles.link,
                "text-neutral-500 p-2 rounded-lg text-lg font-medium data-[active='true']:text-neutral-900 hover:bg-neutral-200/50 hover:text-neutral-900 dark:text-neutral-400 data-[active='true']:dark:text-neutral-100 hover:dark:bg-neutral-950 dark:hover:text-neutral-100",
              )}
            >
              Home
            </Link>
            <Link
              href="#projects"
              className={cn(
                styles.link,
                "text-neutral-500 p-2 rounded-lg text-lg font-medium data-[active='true']:text-neutral-900 hover:bg-neutral-200/50 hover:text-neutral-900 dark:text-neutral-400 data-[active='true']:dark:text-neutral-100 hover:dark:bg-neutral-950 dark:hover:text-neutral-100",
              )}
            >
              Projects
            </Link>
            <Link
              href="#about"
              className={cn(
                styles.link,
                "text-neutral-500 p-2 rounded-lg text-lg font-medium data-[active='true']:text-neutral-900 hover:bg-neutral-200/50 hover:text-neutral-900 dark:text-neutral-400 data-[active='true']:dark:text-neutral-100 hover:dark:bg-neutral-950 dark:hover:text-neutral-100",
              )}
            >
              About
            </Link>
            <Link
              href="#contact"
              className={cn(
                styles.link,
                "text-neutral-500 p-2 rounded-lg text-lg font-medium data-[active='true']:text-neutral-900 hover:bg-neutral-200/50 hover:text-neutral-900 dark:text-neutral-400 data-[active='true']:dark:text-neutral-100 hover:dark:bg-neutral-950 dark:hover:text-neutral-100",
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
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? (
              <X className="block h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="block h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </Link>
            <Link
              href="/projects"
              className="text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
            >
              Projects
            </Link>
            <Link
              href="/about"
              className="text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
