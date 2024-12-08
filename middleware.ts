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
  matcher: [
    '/((?!_next|api|robots\\.txt|favicon\\.ico|sitemap\\.xml|static|.*\\..*).*)',
  ],
}

{
  /**
  export function middleware(request: NextRequest) {
  const url = request.nextUrl

  // Lógica para rutas específicas como /api/currently-playing
  if (url.pathname === '/api/currently-playing') {
    const response = NextResponse.next()
    response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate')
    response.headers.set('Pragma', 'no-cache')
    response.headers.set('Expires', '0')
    return response
  }

  // Lógica de internacionalización para el resto de las rutas
  return I18nMiddleware(request)
} */
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
{
  /*// middleware.js
import { NextResponse } from 'next/server';

export function middleware(request) {
  const response = NextResponse.next();
  response.headers.set('Cache-Control', 'no-cache, must-revalidate');
  return response;
}
 */
}
