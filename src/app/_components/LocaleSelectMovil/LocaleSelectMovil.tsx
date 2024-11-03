'use client'

import { cn } from '@/lib/utils'
import Image from 'next/image'
import { useLocale } from '../hook/useLocale'
import styles from './localeSelectMovil.module.scss'

const languageOptions: Array<{
  code: 'fr' | 'en' | 'es'
  label: string
  flagSrc: string
}> = [
  { code: 'en', label: 'EN', flagSrc: '/flags/usa.svg' }, // Ruta ficticia
  { code: 'fr', label: 'FR', flagSrc: '/flags/france.svg' }, // Ruta ficticia
  { code: 'es', label: 'ES', flagSrc: '/flags/spain.svg' }, // Ruta ficticia
]

export const LocaleSelectMovil = () => {
  const { handleOptionClick, locale } = useLocale()

  return (
    <div className={cn(styles.navMobileContainer, 'flex flex-col items-start')}>
      <div className="flex gap-2 mt-8">
        {languageOptions.map((option) => (
          <button
            key={option.code}
            className={cn(
              'flex items-center gap-1 px-2 py-1 border-2 rounded-md bg-neutral-100 hover:bg-neutral-200 text-sm',
              option.code === locale ? 'border-neutral-600' : 'border-gray-300',
            )}
            onClick={() => handleOptionClick(option.code)}
          >
            <Image
              src={option.flagSrc}
              alt={`${option.label} flag`}
              width={20}
              height={20}
              className="w-5 h-5"
            />
            {option.label}
          </button>
        ))}
      </div>
    </div>
  )
}
