import { cn } from '@/lib/utils'
import type { Metadata } from 'next'
import { interSans } from '../../styles/fonts'
import './globals.css'
//themeProvider para el dark mode
import { ThemeProvider } from '../_components/theme-provider'
//providers parametrado en otro fichero para el idioma
import { Providers } from './providers'

export const metadata: Metadata = {
  title: 'Hardy Lino . Frontend Developper',
  description: 'Frontend developper, React, Next.js, TypeScript',
}

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: {
    locale: string
  }
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={cn(interSans.className, 'antialiased')}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/*Providers wrap childrens para el idioma */}
          <Providers locale={params.locale}>{children}</Providers>
        </ThemeProvider>

        {/*react portal para que las modales se expandab 
        correctamente si ponemos animaciones en los elementos li de ModalProject  */}
        <div id="modal-root"></div>
      </body>
    </html>
  )
}
