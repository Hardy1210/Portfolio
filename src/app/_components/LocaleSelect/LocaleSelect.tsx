'use client'

import { cn } from '@/lib/utils'
import { useChangeLocale, useCurrentLocale } from '@/locales/client'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { ArrowChDownIcon } from '../icons/arrows/ArrowChDownIcon'
import styles from './localSelect.module.scss'

// Definir las opciones de idioma con rutas de banderas SVG
const languageOptions: Array<{
  code: 'fr' | 'en' | 'es'
  label: string
  flagSrc: string
}> = [
  { code: 'en', label: 'EN', flagSrc: '/flags/usa.svg' }, // Ruta ficticia
  { code: 'fr', label: 'FR', flagSrc: '/flags/france.svg' }, // Ruta ficticia
  { code: 'es', label: 'ES', flagSrc: '/flags/spain.svg' }, // Ruta ficticia
]

export const LocaleSelect = () => {
  const [isOpen, setIsOpen] = useState(false)
  const locale = useCurrentLocale()
  const changeLocale = useChangeLocale()
  const ref = useRef<HTMLDivElement>(null)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const handleOptionClick = (option: 'fr' | 'en' | 'es') => {
    changeLocale(option)
    setIsOpen(false)
  }

  // Cierra el menú si se hace clic fuera del componente
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  // Obtener la opción seleccionada para mostrar la bandera y el código
  const selectedOption = languageOptions.find(
    (option) => option.code === locale,
  )

  return (
    <div ref={ref} className={cn(styles.select__container, 'relative')}>
      <div
        className={cn(
          'border border-neutral-300/80 dark:border-neutral-600/60 rounded-lg bg-neutral-100/50 bg-opacity-100 px-1 text-sm text-neutral-500 cursor-pointer flex items-center backdrop-blur-3xl dark:bg-neutral-950',
          styles.selectedOption,
        )}
        onClick={toggleDropdown}
      >
        {selectedOption && (
          <div className="flex flex-row items-center gap-1">
            {/** <img
              src={selectedOption.flagSrc}
              alt={`${selectedOption.label} flag`}
              className="w-4 h-4 mr-2"
            />*/}

            {selectedOption.label}
            <ArrowChDownIcon size={15} />
          </div>
        )}
      </div>
      {isOpen && (
        <ul
          className={cn(
            'p-1 absolute left-0 mt-1 bg-[#FFFFFF]  border border-neutral-200 dark:border-neutral-500 rounded-md  dark:bg-neutral-950 shadow-lg z-10 w-16',
            styles.dropdownMenu,
          )}
        >
          {languageOptions.map((option) => (
            <li
              key={option.code}
              className={cn(
                ' flex-row gap-2 justify-evenly px-1 py-1 rounded-sm hover:bg-neutral-100 hover:text-neutral-800 cursor-pointer text-sm flex items-center focus:bg-accent focus:text-accent-foreground',
                styles.option,
              )}
              onClick={() => handleOptionClick(option.code)}
            >
              <Image
                src={option.flagSrc}
                alt={`${option.label} flag`}
                className="w-4 h-4 "
                width={16}
                height={16}
              />
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
