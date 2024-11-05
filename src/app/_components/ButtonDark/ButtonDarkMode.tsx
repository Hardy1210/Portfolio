{
  /**import { cn } from '@/lib/utils'
import { useEffect, useRef, useState } from 'react'
import useDarkMode from '../hook/useDarkMode' // Tu hook que gestiona el modo oscuro
import { Dark } from '../icons/DarkIcon'
import styles from './buttonDarkMode.module.scss'

export const ButtonDarkMode = () => {
  const [isDarkMode, toggleDarkMode] = useDarkMode() // Hook que gestiona el estado del modo oscuro
  const [isOpen, setIsOpen] = useState(false)
  // Referencia para detectar clics fuera del menú desplegable
  const ref = useRef<HTMLDivElement>(null)

  // Configuración del button dark mode
  const handleSelection = (mode: string) => {
    if (mode === 'dark') {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
      if (!isDarkMode) {
        toggleDarkMode() // Llama solo si el estado no coincide con la selección
      }
    } else if (mode === 'light') {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
      if (isDarkMode) {
        toggleDarkMode() // Llama solo si el estado no coincide con la selección
      }
    } else {
      // Modo "System"
      localStorage.removeItem('theme')
      const isSystemDark = window.matchMedia(
        '(prefers-color-scheme: dark)',
      ).matches
      if (isSystemDark) {
        document.documentElement.classList.add('dark')
        if (!isDarkMode) {
          toggleDarkMode() // Llama solo si el estado no coincide con la selección
        }
      } else {
        document.documentElement.classList.remove('dark')
        if (isDarkMode) {
          toggleDarkMode() // Llama solo si el estado no coincide con la selección
        }
      }
    }
    setIsOpen(false) // Cierra el menú después de seleccionar
  }

  // useEffect para cerrar el menú al hacer clic fuera de él
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

  return (
    <div ref={ref} className="relative">
      <button onClick={() => setIsOpen(!isOpen)} className="p-2">
        <Dark size={30} />
      </button>

      {isOpen && (
        <div
          className={cn(
            styles.dropdownMenu,
            'absolute mt-2 bg-white dark:bg-gray-800 border rounded shadow-md z-10',
          )}
        >
          <ul className="w-32">
            <li
              onClick={() => handleSelection('light')}
              className={cn(
                styles.option,
                ' hover:bg-neutral-200/50 cursor-pointer text-sm flex items-center',
              )}
            >
              Modo Claro
            </li>
            <li
              onClick={() => handleSelection('dark')}
              className={cn(
                styles.option,
                ' hover:bg-neutral-200/50 cursor-pointer text-sm flex items-center',
              )}
            >
              Modo Oscuro
            </li>
            <li
              onClick={() => handleSelection('system')}
              className={cn(
                styles.option,
                ' hover:bg-neutral-200/50 cursor-pointer text-sm flex items-center',
              )}
            >
              Modo Sistema
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}
 */
}
