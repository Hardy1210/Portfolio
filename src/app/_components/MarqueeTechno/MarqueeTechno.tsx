import { cn } from '@/lib/utils'
import { FigmaIcon } from '../icons/FigmaIcon'
import { GithubIcon } from '../icons/GithubIcon'
import { GitLabIcon } from '../icons/GitLabIcon'
import { MongoDbIcon } from '../icons/MongoDbIcon'
import { NodeJsIcon } from '../icons/NodeJsIcon'
import { NotionIcon } from '../icons/NotionIcon'
import { NpmIcon } from '../icons/NpmIcon'
import { PostmanIcon } from '../icons/PostmanIcon'
import { ReduxIcon } from '../icons/ReduxIcon'
import { SassIcon } from '../icons/SassIcon'
import { SwaggerIcon } from '../icons/SwaggerIcon'
import { TailwindIcon } from '../icons/TailwindIcon'
import { TypescriptIcon } from '../icons/TypescriptIcon'
import { VercelIcon } from '../icons/VercelIcon'
import { ViteIcon } from '../icons/ViteIcon'
import { VsCodeIcon } from '../icons/VsCodeIcon'
import styles from './marqueeTechno.module.scss'
//import { WaveIcon } from "../icons/WaveIcon"

export const MarqueeTechno = () => {
  return (
    <>
      <div className={cn(styles.marquee__container, 'overflow-hidden')}>
        <div
          className={cn(
            styles.marquee__icons,
            'flex w-full items-center whitespace-nowrap relative [mask-image:linear-gradient(to_right,rgba(0,0,0,0)_0%,rgb(0,0,0)_12.5%,rgb(0,0,0)_87.5%,rgba(0,0,0,0)_100%)] group',
          )}
        >
          <ul
            className={cn(
              styles.marquee__ul,
              'inline-flex items-center animate-marquee group-hover:[animation-play-state:paused]',
            )}
          >
            <li className="mx-9">
              <GithubIcon size={70} />
              <p className={cn(styles.icon__title)}>GitHub</p>
            </li>

            <li className="mx-9">
              <TypescriptIcon size={70} />
              <p className={cn(styles.icon__title)}>TypeScript</p>
            </li>

            <li className="mx-9">
              <FigmaIcon size={70} />
              <p className={cn(styles.icon__title)}>Figma</p>
            </li>

            <li className="mx-9">
              <MongoDbIcon size={70} />
              <p className={cn(styles.icon__title)}>MongoDB</p>
            </li>
            <li className="mx-9">
              <NotionIcon size={70} />
              <p className={cn(styles.icon__title)}>Notion</p>
            </li>
            <li className="mx-9">
              <TailwindIcon size={70} />
              <p className={cn(styles.icon__title)}>Tailwind</p>
            </li>
            <li className="mx-9">
              <SwaggerIcon size={70} />
              <p className={cn(styles.icon__title)}>Swagger</p>
            </li>
            <li className="mx-9">
              <SassIcon size={70} />
              <p className={cn(styles.icon__title)}>Sass</p>
            </li>
            <li className="mx-9">
              <VercelIcon size={70} />
              <p className={cn(styles.icon__title)}>Vercel</p>
            </li>
            <li className="mx-9">
              <NpmIcon size={70} />
              <p className={cn(styles.icon__title)}>Npm</p>
            </li>
            <li className="mx-9">
              <GitLabIcon size={70} />
              <p className={cn(styles.icon__title)}>Git Lab</p>
            </li>
            <li className="mx-9">
              <PostmanIcon size={70} />
              <p className={cn(styles.icon__title)}>Postman</p>
            </li>
            <li className="mx-9">
              <ReduxIcon size={70} />
              <p className={cn(styles.icon__title)}>Redux</p>
            </li>
            <li className="mx-9">
              <ViteIcon size={70} />
              <p className={cn(styles.icon__title)}>Vite</p>
            </li>
            <li className="mx-9">
              <VsCodeIcon size={70} />
              <p className={cn(styles.icon__title)}>Visual Studio</p>
            </li>
            <li className="mx-9">
              <NodeJsIcon size={70} />
              <p className={cn(styles.icon__title)}>Node.js</p>
            </li>
          </ul>
          <ul
            className={cn(
              styles.marquee__ull,
              'inline-flex absolute items-center animate-marquee2 group-hover:[animation-play-state:paused]',
            )}
          >
            <li className="mx-9">
              <GithubIcon size={70} />
              <p className={cn(styles.icon__title)}>GitHub</p>
            </li>

            <li className="mx-9">
              <TypescriptIcon size={70} />
              <p className={cn(styles.icon__title)}>TypeScript</p>
            </li>

            <li className="mx-9">
              <FigmaIcon size={70} />
              <p className={cn(styles.icon__title)}>Figma</p>
            </li>

            <li className="mx-9">
              <MongoDbIcon size={70} />
              <p className={cn(styles.icon__title)}>MongoDB</p>
            </li>
            <li className="mx-9">
              <NotionIcon size={70} />
              <p className={cn(styles.icon__title)}>Notion</p>
            </li>
            <li className="mx-9">
              <TailwindIcon size={70} />
              <p className={cn(styles.icon__title)}>Tailwind</p>
            </li>
            <li className="mx-9">
              <SwaggerIcon size={70} />
              <p className={cn(styles.icon__title)}>Swagger</p>
            </li>
            <li className="mx-9">
              <SassIcon size={70} />
              <p className={cn(styles.icon__title)}>Sass</p>
            </li>
            <li className="mx-9">
              <VercelIcon size={70} />
              <p className={cn(styles.icon__title)}>Vercel</p>
            </li>
            <li className="mx-9">
              <NpmIcon size={70} />
              <p className={cn(styles.icon__title)}>Npm</p>
            </li>
            <li className="mx-9">
              <GitLabIcon size={70} />
              <p className={cn(styles.icon__title)}>Git Lab</p>
            </li>
            <li className="mx-9">
              <PostmanIcon size={70} />
              <p className={cn(styles.icon__title)}>Postman</p>
            </li>
            <li className="mx-9">
              <ReduxIcon size={70} />
              <p className={cn(styles.icon__title)}>Redux</p>
            </li>
            <li className="mx-9">
              <ViteIcon size={70} />
              <p className={cn(styles.icon__title)}>Vite</p>
            </li>
            <li className="mx-9">
              <VsCodeIcon size={70} />
              <p className={cn(styles.icon__title)}>Visual Studio</p>
            </li>
            <li className="mx-9">
              <NodeJsIcon size={70} />
              <p className={cn(styles.icon__title)}>Node.js</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
