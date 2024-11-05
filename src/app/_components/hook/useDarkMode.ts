{
  /**import { useEffect, useState } from 'react'

const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean | null>(null)

  useEffect(() => {
    const darkModeSetting = localStorage.getItem('theme')
    if (darkModeSetting === 'dark') {
      document.documentElement.classList.add('dark')
      setIsDarkMode(true)
    } else if (darkModeSetting === 'light') {
      document.documentElement.classList.remove('dark')
      setIsDarkMode(false)
    } else {
      // Modo "System"
      const isSystemDark = window.matchMedia(
        '(prefers-color-scheme: dark)',
      ).matches
      if (isSystemDark) {
        document.documentElement.classList.add('dark')
        setIsDarkMode(true)
      } else {
        document.documentElement.classList.remove('dark')
        setIsDarkMode(false)
      }
    }
  }, [])

  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
      setIsDarkMode(false)
    } else {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
      setIsDarkMode(true)
    }
  }

  return [isDarkMode, toggleDarkMode] as const
}

export default useDarkMode */
}
