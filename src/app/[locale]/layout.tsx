import { cn } from '@/lib/utils'
import { interSans } from '../../styles/fonts'
import './globals.css'
//themeProvider para el dark mode
import { ThemeProvider } from '../_components/theme-provider'
//providers parametrado en otro fichero para el idioma
//import SEO from '../_components/SEO/SEO'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Metadata } from 'next'
//cuidado con estos dos imports no los importas por que next se actuamlizo
//import Head from 'next/head'
//import StructuredData from '../_components/RichSnippets/StructuredData'
import StructuredData from '../_components/RichSnippets/StructuredData'
import { Providers } from './providers'

export const metadata: Metadata = {
  title: 'Hardy Lino . Frontend Developer',
  description: 'Frontend developer, React, Next.js, TypeScript',
  metadataBase: new URL('https://hardylino.com'), // Agrega la URL base aquí
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  keywords: [
    'Frontend developer',
    'développeur frontend',
    'desarrollador frontend',
    'développeur React',
    'React',
    'Next.js',
    'Tailwind CSS',
    'Sass',
    'développeur',
    "développeur d'applications web",
    'intégrateur web',
    'création de sites vitrines',
  ],
  openGraph: {
    siteName: 'Hardy Lino',
    title: 'Hardy Lino Frontend Developer',
    description: 'Frontend developer, React, Next.js, TypeScript',
    url: 'https://hardylino.com/',
    type: 'website',
    locale: 'fr_FR',
    images: [
      {
        url: '/image/Photos/h-1.webp',
        width: 1200,
        height: 630,
        alt: 'Hardy Lino',
        type: 'image/webp',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hardy Lino . Frontend Developer',
    description: 'Frontend developer, React, Next.js, TypeScript',
    images: ['/image/Photos/h-1.webp'],
  },
  alternates: {
    canonical: 'https://hardylino.com/',
    languages: {
      es: 'https://hardylino.com/es',
      en: 'https://hardylino.com/en',
      fr: 'https://hardylino.com/fr',
    },
  },
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
  // Datos estructurados JSON-LD

  return (
    <html lang={params.locale} className="h-full" suppressHydrationWarning>
      <body className={cn(interSans.className, 'antialiased')}>
        <StructuredData />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Providers locale={params.locale}>{children}</Providers>
        </ThemeProvider>

        <div id="modal-root"></div>
        <SpeedInsights />
      </body>
    </html>
  )
}
{
  /** en el htmml para quitar error de el darkmode
  suppressHydrationWarning */
}
{
  /*
  para el dark mode en el head si hay problema <script
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
        /> */
}
{
  /**<title>{metadata.title}</title>

        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
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
        <link rel="alternate" href="https://hardylino.com/fr" hrefLang="fr" /> */
}
