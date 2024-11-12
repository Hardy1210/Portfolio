// app/[locale]/client/layout.tsx
import { I18nProviderClient } from '@/locales/client'
import { ReactElement } from 'react'

// Este componente de layout se usa para proporcionar el contexto de idioma a los componentes hijos
export default async function Providers({
  params,
  children,
}: {
  // `params` es una promesa que contiene el idioma `locale`
  params: Promise<{ locale: string }>
  // `children` representa los componentes hijos que se renderizarán dentro del layout
  children: ReactElement
}) {
  // Esperamos a que se resuelva `params` para obtener `locale`
  const { locale } = await params

  return (
    // Usamos `I18nProviderClient` para pasar `locale` a todos los componentes hijos
    <I18nProviderClient locale={locale}>{children}</I18nProviderClient>
  )
}
