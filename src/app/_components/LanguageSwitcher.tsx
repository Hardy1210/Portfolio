import { useRouter } from 'next/router'

const LanguageSwitcher = () => {
  const router = useRouter()
  const { locale } = router

  const changeLanguage = (newLocale: string) => {
    const { pathname, asPath, query } = router
    router.push({ pathname, query }, asPath, { locale: newLocale })
  }

  return (
    <div>
      <button onClick={() => changeLanguage('fr')} disabled={locale === 'fr'}>
        Français
      </button>
      <button onClick={() => changeLanguage('en')} disabled={locale === 'en'}>
        English
      </button>
      <button onClick={() => changeLanguage('es')} disabled={locale === 'es'}>
        Español
      </button>
    </div>
  )
}

export default LanguageSwitcher
