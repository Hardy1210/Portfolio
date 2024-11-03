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
          'border border-[rgb(212,212,212)] border-opacity-100 rounded-lg bg-[rgb(245,245,245)] bg-opacity-100 px-1 text-sm text-neutral-500 cursor-pointer flex items-center',
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
            'absolute left-0 mt-1 border border-neutral-200 rounded-md bg-white shadow-lg z-10 w-14',
            styles.dropdownMenu,
          )}
        >
          {languageOptions.map((option) => (
            <li
              key={option.code}
              className={cn(
                ' flex-row justify-between px-2 py-1 hover:bg-neutral-200/50 cursor-pointer text-sm flex items-center',
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
