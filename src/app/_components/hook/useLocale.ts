//para componentes lado cliente
import { useChangeLocale, useCurrentLocale } from '@/locales/client'
import { useState } from 'react'

export const useLocale = () => {
  const [isOpen, setIsOpen] = useState(false)
  const locale = useCurrentLocale()
  const changeLocale = useChangeLocale()

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const handleOptionClick = (option: 'fr' | 'en' | 'es') => {
    changeLocale(option)
    setIsOpen(false)
  }

  return {
    isOpen,
    setIsOpen,
    locale,
    toggleDropdown,
    handleOptionClick,
  }
}
