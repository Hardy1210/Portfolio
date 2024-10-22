//extraer fuente, se nececitan variables para alguna otra fuente
import { Inter } from 'next/font/google'
export const interSans = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-inter',
})
