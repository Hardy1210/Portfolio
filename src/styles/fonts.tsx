//extraer fuente, se nececitan variables para alguna otra fuente
import {
  Inter,
  Kalam,
  Ms_Madi,
  Satisfy,
  Vujahday_Script,
} from 'next/font/google'
export const interSans = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-inter',
})
export const satisfySans = Satisfy({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-satisfy',
})
export const msMadi = Ms_Madi({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-satisfy',
})
export const kalam = Kalam({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-satisfy',
})
export const vujahday = Vujahday_Script({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-satisfy',
})
