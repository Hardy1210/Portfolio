// middleware.ts
//attention problemme avec le middleware que ne marceh pas, oblige d'utiliser
//next.confog.mjs pour valide et redirige la lange par default de l'internationalisation
//e que l'utilizateur arrive a la bon page url
// middleware.js
// middleware.ts
import { NextRequest, NextResponse } from 'next/server'

export function middleware(_request: NextRequest) {
  const response = NextResponse.next()
  response.headers.set('Cache-Control', 'no-cache, must-revalidate')
  return response
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
