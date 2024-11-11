// middleware.ts
//attention problemme avec le middleware que ne marceh pas, oblige d'utiliser
//next.confog.mjs pour valide et redirige la lange par default de l'internationalisation
//e que l'utilizateur arrive a la bon page url
import { createI18nMiddleware } from 'next-international/middleware'
import { NextRequest } from 'next/server'

const I18nMiddleware = createI18nMiddleware({
  locales: ['en', 'fr', 'es'],
  defaultLocale: 'fr',
})

export function middleware(request: NextRequest) {
  return I18nMiddleware(request)
}

export const config = {
  matcher: ['/((?!api|static|.*\\..*|_next|favicon.ico|robots\\.txt).*)'],
}
{
  /* codigo para forzar el idioma que se vera para el usuuario
  // middleware.ts
const I18nMiddleware = createI18nMiddleware({
  locales: ['en', 'fr'],
  defaultLocale: 'en',
  resolveLocaleFromRequest: request => {
    // Do your logic here to resolve the locale
    return 'fr'
  }
})*/
}

{
  /*codigo para opcultar el prefiojo del idioma y no se vea
  // middleware.ts
const I18nMiddleware = createI18nMiddleware({
  locales: ['en', 'fr'],
  defaultLocale: 'en',
  urlMappingStrategy: 'rewrite'
}) */
}

{
  /* ocultar todos los idiomas prefijos a ecepcion del local
  // middleware.ts
const I18nMiddleware = createI18nMiddleware({
  locales: ['en', 'fr'],
  defaultLocale: 'en',
  urlMappingStrategy: 'rewriteDefault'
}) */
}
{
  /*codigo que redirecciona automaticamente al usuario para el idioma pero no FUNCIONA 
   const I18nMiddleware = createI18nMiddleware({
  locales: ['en', 'fr', 'es'],
  defaultLocale: 'fr',
})
*/
}
