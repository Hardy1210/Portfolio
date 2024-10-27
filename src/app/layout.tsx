import LanguageWrapper from '@/app/_components/LanguageWrapper' // El nuevo componente cliente
import { cn } from '@/lib/utils'
import type { Metadata } from 'next'
import { interSans } from '../styles/fonts'
import './globals.css'

export const metadata: Metadata = {
  title: 'Hardy Lino . Frontend Developper',
  description: 'Frontend developper, React, Next.js, TypeScript',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className="h-full">
      <body className={cn(interSans.className, 'antialiased')}>
        <LanguageWrapper>{children}</LanguageWrapper>
        {/* El componente cliente se encargará del idioma */}
      </body>
    </html>
  )
}
