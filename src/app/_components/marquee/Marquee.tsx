'use client'
// OptimizedMarquee.jsx
import { cn } from '@/lib/utils'
import styles from './marquee.module.scss'

// Importación de iconos
import { CssIcon } from '../icons/CssIcon'
import { FigmaIcon } from '../icons/FigmaIcon'
import { GithubIcon } from '../icons/GithubIcon'
import { GitLabIcon } from '../icons/GitLabIcon'
import { HtmlIcon } from '../icons/HtmlIcon'
import { JavascriptIcon } from '../icons/JavascriptIcon'
import { MongoDbIcon } from '../icons/MongoDbIcon'
import { NextIcon } from '../icons/NextIcon'
import { NodeJsIcon } from '../icons/NodeJsIcon'
import { NotionIcon } from '../icons/NotionIcon'
import { NpmIcon } from '../icons/NpmIcon'
import { PhotoshopIcon } from '../icons/PhotoshopIcon'
import { PostmanIcon } from '../icons/PostmanIcon'
import { ReactIcon } from '../icons/ReactIcon'
import { ReactRouterIcon } from '../icons/ReactRouterIcon'
import { ReduxIcon } from '../icons/ReduxIcon'
import { SassIcon } from '../icons/SassIcon'
import { SwaggerIcon } from '../icons/SwaggerIcon'
import { TailwindIcon } from '../icons/TailwindIcon'
import { TypescriptIcon } from '../icons/TypescriptIcon'
import { VercelIcon } from '../icons/VercelIcon'
import { ViteIcon } from '../icons/ViteIcon'
import { VsCodeIcon } from '../icons/VsCodeIcon'

const Marquee = () => {
  const icons = [
    { id: 1, component: GithubIcon, title: 'GitHub' },
    { id: 2, component: ReactIcon, title: 'React' },
    { id: 3, component: NextIcon, title: 'Next.js' },
    { id: 4, component: TypescriptIcon, title: 'TypeScript' },
    { id: 5, component: JavascriptIcon, title: 'JavaScript' },
    { id: 6, component: FigmaIcon, title: 'Figma' },
    { id: 7, component: HtmlIcon, title: 'HTML' },
    { id: 8, component: CssIcon, title: 'CSS' },
    { id: 9, component: MongoDbIcon, title: 'MongoDB' },
    { id: 10, component: NotionIcon, title: 'Notion' },
    { id: 11, component: TailwindIcon, title: 'Tailwind' },
    { id: 12, component: SwaggerIcon, title: 'Swagger' },
    { id: 13, component: SassIcon, title: 'Sass' },
    { id: 14, component: VercelIcon, title: 'Vercel' },
    { id: 15, component: NpmIcon, title: 'NPM' },
    { id: 16, component: GitLabIcon, title: 'GitLab' },
    { id: 17, component: PostmanIcon, title: 'Postman' },
    { id: 18, component: ReduxIcon, title: 'Redux' },
    { id: 19, component: ViteIcon, title: 'Vite' },
    { id: 20, component: VsCodeIcon, title: 'Visual Studio Code' },
    { id: 21, component: NodeJsIcon, title: 'Node.js' },
    { id: 22, component: ReactRouterIcon, title: 'React Router' },
    { id: 24, component: PhotoshopIcon, title: 'Photoshop' },
  ]

  return (
    <div className={cn(styles.marquee__container)}>
      <div className={cn(styles.marquee__icons)}>
        <ul className={cn(styles.marquee__track)}>
          {icons.map((icon) => {
            const IconComponent = icon.component
            return (
              <li
                key={icon.id}
                className="mx-9 relative inline-block transition-all duration-200 hover:scale-110"
              >
                <IconComponent size={70} />
                <p className={cn(styles.icon__title)}>{icon.title}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Marquee
