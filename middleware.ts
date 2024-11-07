// middleware.ts
import { createI18nMiddleware } from 'next-international/middleware'
import { NextRequest, NextResponse } from 'next/server'

const I18nMiddleware = createI18nMiddleware({
  locales: ['en', 'fr', 'es'],
  defaultLocale: 'fr',
  resolveLocaleFromRequest: () => 'fr',
})

export function middleware(request: NextRequest) {
  // Redirige a /fr si la ruta base (sin idioma) es solicitada
  if (!request.nextUrl.pathname.startsWith('/fr')) {
    const url = request.nextUrl.clone()
    url.pathname = `/fr${url.pathname}`
    return NextResponse.redirect(url)
  }
  return I18nMiddleware(request)
}

export const config = {
  matcher: ['/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)'],
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
