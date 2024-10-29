// data/skillData.ts
import { JavascriptIcon } from '../_components/icons/JavascriptIcon'
import { NextIcon } from '../_components/icons/NextIcon'
import { ReactIcon } from '../_components/icons/ReactIcon'
import { SassIcon } from '../_components/icons/SassIcon'
import { TailwindIcon } from '../_components/icons/TailwindIcon'
// Mapeado de íconos current color
export const iconMap: { [key: string]: React.FC<{ size?: number }> } = {
  ReactIcon: ReactIcon,
  NextIcon: NextIcon,
  JavascriptIcon: JavascriptIcon,
  SassIcon: SassIcon,
  TailwindIcon: TailwindIcon,
}

// Datos JSON de habilidades
export const skillData = [
  {
    skillImgSrc: 'ReactIcon', // Coincide con el nombre en iconMap
    skillImgAlt: 'Logo React',
    title: 'React',
    description:
      "React m'a ouvert les portes d'un univers riche en possibilités.",
  },
  {
    skillImgSrc: 'NextIcon',
    skillImgAlt: 'Logo Next.js',
    title: 'Next.js',
    description:
      "Next étant mon premier framework, j'ai conçu ce portfolio comme mon projet inaugural.",
  },
  {
    skillImgSrc: 'JavascriptIcon',
    skillImgAlt: 'Logo Javascript',
    title: 'JavaScript',
    description:
      "JavaScript est mon incontournable. En tant que premier langage de programmation que j'ai appris, il m'a initié au monde du développement.",
  },
  {
    skillImgSrc: 'SassIcon',
    skillImgAlt: 'Logo Sass',
    title: 'Sass',
    description:
      "Grâce à Sass, j'organise les styles de mes projets de manière structurée et maintenable.",
  },
  {
    skillImgSrc: 'TailwindIcon',
    skillImgAlt: 'Logo Tailwind',
    title: 'Tailwind',
    description:
      'Grâce à Tailwind, je peux styliser mes projets de manière rapide et cohérente, tout en conservant une grande flexibilité.',
  },
]
//a poner si es necesario
{
  /* {
    skillImgSrc: 'SassIcon',
    skillImgAlt: 'Logo Sass',
    title: 'Sass',
    description:
      "Grâce à Sass, j'organise les styles de mes projets de manière structurée et maintenable.",
  },
  {
    skillImgSrc: 'TailwindIcon',
    skillImgAlt: 'Logo Tailwind',
    title: 'Tailwind',
    description:
      'Grâce à Tailwind, je peux styliser mes projets de manière rapide et cohérente, tout en conservant une grande flexibilité.',
  },*/
}
