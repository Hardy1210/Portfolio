// data/skillData.ts
import { JavascriptIconColor } from '../_components/icons/iconsColor/JavascriptIconColor'
import { ReactIconColor } from '../_components/icons/iconsColor/ReactIconColor'
import { NextIcon } from '../_components/icons/NextIcon'
//import { SassIcon } from '../_components/icons/SassIcon'
//import { TailwindIcon } from '../_components/icons/TailwindIcon'
// Mapeado de íconos
export const iconMapColor: { [key: string]: React.FC<{ size?: number }> } = {
  ReactIconColor: ReactIconColor,
  NextIcon: NextIcon,
  JavascriptIconColor: JavascriptIconColor,
}

// Datos JSON de habilidades
export const skillDataColor = [
  {
    skillImgSrc: 'ReactIconColor', // Coincide con el nombre en iconMap
    skillImgAlt: 'Logo React',
  },
  {
    skillImgSrc: 'NextIcon',
    skillImgAlt: 'Logo Next.js',
  },
  {
    skillImgSrc: 'JavascriptIcon',
    skillImgAlt: 'Logo Javascript',
  },
]
