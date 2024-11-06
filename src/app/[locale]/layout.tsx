import { cn } from '@/lib/utils'
import { interSans } from '../../styles/fonts'
import './globals.css'
//themeProvider para el dark mode
import { ThemeProvider } from '../_components/theme-provider'
//providers parametrado en otro fichero para el idioma
//import SEO from '../_components/SEO/SEO'
import Head from 'next/head'
import StructuredData from '../_components/RichSnippets/StructuredData'
import { Providers } from './providers'

export const metadata = {
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
      <Head>
        <title>{metadata.title}</title>

        <link
          rel="icon"
          href="/favicon-16x16.svg"
          type="image/svg+xml"
          sizes="32x32"
        />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        <meta name="description" content={metadata.description} />
        <meta
          name="keywords"
          content="Frontend developer, développeur frontend, desarrollador frontend, développeur React, React, Next.js, Tailwind CSS, Sass, développeur, développeur d'applications web, intégrateur web, création de sites vitrines"
        />
        <meta name="author" content="Hardy Lino" />
        <meta property="og:site_name" content="Hardy Lino" />
        <link rel="canonical" href="https://hardylino.com/" />
        <meta property="og:title" content="Hardy Lino Frontend Developer" />

        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content="/image/Photos/h-1.webp" />
        <meta property="og:url" content="https://hardylino.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fr_FR" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content="/ruta/a/tu_imagen.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/webp" />

        <link rel="alternate" href="https://hardylino.com/es" hrefLang="es" />
        <link rel="alternate" href="https://hardylino.com/en" hrefLang="en" />
        <link rel="alternate" href="https://hardylino.com/fr" hrefLang="fr" />

        <StructuredData />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem('theme') || 'system';
                const darkMode = theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
                if (darkMode) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              })();
            `,
          }}
        />
      </Head>
      <body className={cn(interSans.className, 'antialiased')}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Providers locale={params.locale}>{children}</Providers>
        </ThemeProvider>

        <div id="modal-root"></div>
      </body>
    </html>
  )
}
