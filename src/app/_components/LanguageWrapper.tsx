'use client' // Indica que este es un Componente Cliente

import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

export default function LanguageWrapper({ children }: { children: ReactNode }) {
  const pathname = usePathname() // Obtiene la ruta actual

  // Aquí puedes derivar el idioma de la ruta o manejarlo según tu lógica
  const locale = pathname.startsWith('/fr')
    ? 'fr'
    : pathname.startsWith('/es')
      ? 'es'
      : 'en'

  return (
    <div>
      {/* Solo renderiza el contenido y deja la manipulación de <html> a tu layout */}
      {children}
    </div>
  )
}
