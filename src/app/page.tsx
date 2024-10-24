import { LinkedinIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '../lib/utils'
import { Button } from './_components/Button/Button'
import { Header } from './_components/Header/Header'
import { ArrowUp } from './_components/icons/ArrowUp'
import { CssIcon } from './_components/icons/CssIcon'
import { FigmaIcon } from './_components/icons/FigmaIcon'
import { GithubIcon } from './_components/icons/GithubIcon'
import { GitLabIcon } from './_components/icons/GitLabIcon'
import { HtmlIcon } from './_components/icons/HtmlIcon'
import { JavascriptIcon } from './_components/icons/JavascriptIcon'
import { MongoDbIcon } from './_components/icons/MongoDbIcon'
import { NextIcon } from './_components/icons/NextIcon'
import { NodeJsIcon } from './_components/icons/NodeJsIcon'
import { NotionIcon } from './_components/icons/NotionIcon'
import { NpmIcon } from './_components/icons/NpmIcon'
import { PostmanIcon } from './_components/icons/PostmanIcon'
import { ReactIcon } from './_components/icons/ReactIcon'
import { ReactRouterIcon } from './_components/icons/ReactRouterIcon'
import { ReduxIcon } from './_components/icons/ReduxIcon'
import { SassIcon } from './_components/icons/SassIcon'
import { SwaggerIcon } from './_components/icons/SwaggerIcon'
import { TailwindIcon } from './_components/icons/TailwindIcon'
import { TypescriptIcon } from './_components/icons/TypescriptIcon'
import { VercelIcon } from './_components/icons/VercelIcon'
import { ViteIcon } from './_components/icons/ViteIcon'
import { VsCodeIcon } from './_components/icons/VsCodeIcon'
import { WebIcon } from './_components/icons/WebIcon'
import ProjectCard from './_components/ProjectCard/ProjectCard'
import { Section } from './_components/Section/Section'
import styles from './page.module.scss'

export default function Home() {
  return (
    <>
      <div className="relative">
        <Header />
        <main
          className={cn(
            styles.main__container,
            'space-y-20 md:space-y-24 pt-36 md:pt-48  px-4 overflow-hidden',
          )}
        >
          <Section>
            <div
              className={cn(
                styles.container,
                'relative flex flex-col h-fit w-full items-center gap-10 md:gap-10',
              )}
            >
              <div
                className={cn(
                  styles.bloque__vacio,
                  'absolute -z-50 h-64 w-64 bg-[conic-gradient(transparent,rgb(0,0,0))] opacity-15 blur-2xl dark:bg-[conic-gradient(transparent,rgb(255,255,255))] md:left-36',
                )}
              ></div>
              <div
                className={cn(
                  styles.hidden__imgs,
                  'absolute left-1/2 top-1/2 w-max -translate-x-1/2 -translate-y-2/3 opacity-10 dark:opacity-5 md:hidden',
                )}
              >
                <Image
                  src="/images/m.webp"
                  alt="Robot hand light"
                  width={250}
                  height={325}
                  className={cn(
                    styles.img,
                    'w-96 object-cover  dark:hidden text-transparent',
                  )}
                />
                <Image
                  src="/images/m.webp"
                  alt="Robot hand dark"
                  width={250}
                  height={325}
                  className={cn(
                    styles.img,
                    'hidden w-96 dark:block text-transparent',
                  )}
                />
              </div>
              <div
                className={cn(
                  styles.container__presentationImage,
                  'flex flex-row h-fit w-full md:justify-between items-center md:items-start',
                )}
              >
                <div
                  className={cn(
                    styles.text,
                    'flex gap-3 flex-col m-auto md:m-0 items-center md:items-start',
                  )}
                >
                  <h1
                    aria-label="Hardy Lino"
                    className={cn(
                      styles.hardy,
                      'w-min text-7xl font-extrabold drop-shadow-xl dark:text-neutral-50 md:w-max',
                    )}
                  >
                    <span aria-hidden="true" className="">
                      Hi
                      <br />
                      I&#39;m
                    </span>{' '}
                    Hardy,
                  </h1>
                  <h2
                    className={cn(
                      styles.dev,
                      'mt-5 md:mt-10 text-3xl text-center',
                    )}
                  >
                    a Front-End Developer
                  </h2>
                  <p className={cn(styles.front, 'text-2xl md:mx-0 lg:mx-0')}>
                    Welcome to my portfolio, where each project{' '}
                    <br className="hidden md:flex" />
                    tells a unique story.
                  </p>
                </div>

                <div
                  className={cn(
                    styles.img__container,
                    'max-w-xs flex-1 hidden md:flex',
                  )}
                >
                  <Image
                    src="/images/m.webp"
                    alt="Robot hand light"
                    width={250}
                    height={325}
                    className={cn(
                      styles.img,
                      'max-w-xs flex-1 md:flex dark:hidden',
                    )}
                  />
                  {/**<Image
                  src="/images/m.webp"
                  alt="Robot hand dark"
                  width={250}
                  height={325}
                  className={cn(styles.img, ' max-w-xs md:flex dark:block')}
                /> */}
                </div>
              </div>

              <div
                className={cn(
                  styles.buttons__container,
                  ' w-full md:max-w-full flex-col-reverse  gap-10 md:gap-5 justify-between',
                )}
              >
                <div
                  className={cn(
                    styles.button__read,
                    'flex gap-4 max-w-full md:max-w-96',
                  )}
                >
                  <Button />
                  <a
                    className={cn(
                      styles.read,
                      'flex flex-row rounded-xl gap-0.5 items-center p-3 opacity-70 hover:opacity-100',
                    )}
                    href="https://www.linkedin.com/in/hardy-lino-30a616b1/"
                  >
                    <span
                      className={cn(
                        styles.read__cv,
                        'text-1xl leading-none underline',
                      )}
                    >
                      lire.cv
                    </span>
                    <ArrowUp size={13} />
                  </a>
                </div>

                <ul
                  className={cn(
                    styles.icons,
                    'justify-center md:justify-start ',
                  )}
                >
                  <Link
                    href="https://github.com/Hardy1210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transform transition duration-300 hover:scale-125"
                  >
                    <GithubIcon size={30} />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/hardy-lino-30a616b1/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transform transition duration-300 hover:scale-125"
                  >
                    <LinkedinIcon size={30} />
                  </Link>
                </ul>
              </div>
            </div>
          </Section>
          <div>
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
                    <ReactIcon size={70} />
                    <p className={cn(styles.icon__title)}>React</p>
                  </li>
                  <li className="mx-9">
                    <NextIcon size={70} />
                    <p className={cn(styles.icon__title)}>Next.js</p>
                  </li>
                  <li className="mx-9">
                    <TypescriptIcon size={70} />
                    <p className={cn(styles.icon__title)}>TypeScript</p>
                  </li>
                  <li className="mx-9">
                    <JavascriptIcon size={70} />
                    <p className={cn(styles.icon__title)}>JavaScript</p>
                  </li>
                  <li className="mx-9">
                    <FigmaIcon size={70} />
                    <p className={cn(styles.icon__title)}>Figma</p>
                  </li>
                  <li className="mx-9">
                    <HtmlIcon size={70} />
                    <p className={cn(styles.icon__title)}>Html</p>
                  </li>
                  <li className="mx-9">
                    <CssIcon size={70} />
                    <p className={cn(styles.icon__title)}>Css</p>
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
                    <ReactIcon size={70} />
                    <p className={cn(styles.icon__title)}>React</p>
                  </li>
                  <li className="mx-9">
                    <NextIcon size={70} />
                    <p className={cn(styles.icon__title)}>Next.js</p>
                  </li>
                  <li className="mx-9">
                    <TypescriptIcon size={70} />
                    <p className={cn(styles.icon__title)}>TypeScript</p>
                  </li>
                  <li className="mx-9">
                    <JavascriptIcon size={70} />
                    <p className={cn(styles.icon__title)}>JavaScript</p>
                  </li>
                  <li className="mx-9">
                    <FigmaIcon size={70} />
                    <p className={cn(styles.icon__title)}>Figma</p>
                  </li>
                  <li className="mx-9">
                    <HtmlIcon size={70} />
                    <p className={cn(styles.icon__title)}>Html</p>
                  </li>
                  <li className="mx-9">
                    <CssIcon size={70} />
                    <p className={cn(styles.icon__title)}>Css</p>
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
          </div>
          <Section>
            <div className={cn(styles.Projets__container, '')}>
              <h2 id="projects" className="mb-10 text-3xl scroll-mt-16">
                Projets
              </h2>
              <div className="mb-20 text-center">
                <p>
                  À travers mes différents projets, j’ai exploré diverses
                  technologies telles que [React, Redux, Sass, etc.]. Chaque
                  réalisation m’a permis de développer mes compétences en
                  développement web, conception d’applications et résolution de
                  problèmes concrets. Mon portfolio reflète mon parcours
                  d’apprentissage et ma passion pour créer des solutions
                  efficaces.
                </p>
              </div>
              <ul
                className={cn(
                  styles.projects,
                  'grid grid-cols-1 gap-5 md:grid-cols-2',
                )}
              >
                <li>
                  <ProjectCard
                    layerImageSrc="/images/arb.webp"
                    layerImageAlt="logo Argent Bank"
                    secondaryImageSrc="/images/Argent-bank/ab-2-removebg.webp"
                    secondaryImageAlt="MacBook Argent Bank"
                    headerImageSrc="/images/logo_images/ab.webp"
                    headerImageAlt="Argent Bank leaf"
                    icons={[
                      <ViteIcon key="vite" size={25} />,
                      <ReactIcon key="react" size={25} />,
                      <ReduxIcon key="redux" size={25} />,
                      <SassIcon key="sass" size={25} />,
                      <NodeJsIcon key="sass" size={25} />,
                      <MongoDbIcon key="sass" size={25} />,
                    ]}
                    title="Argent Bank"
                    description="Argent Bank est une application web qui permet aux utilisateurs de gérer facilement leurs informations personnelles une fois connectée."
                    modalDescription="La conception du projet est basée sur React en intégrant des composants réutilisables, ainsi que l'intégration du système de connexion qui permet aux utilisateurs de se connecter, de voir leurs informations relatives à leur propre profil et de changer leur pseudo s'ils le souhaitent. L'utilisation de Redux était nécessaire pour pouvoir gérer l'état global de l'application."
                    modalImgSrc="/images/Argent-bank/ab-modal.webp"
                    modalImgAlt="MacBook Argent Bank"
                    modalImgSecondSrc="/images/Argent-bank/ab-modal-2.webp"
                    modalImgSecondAlt="MacBook Argent Bank"
                    technologies={[
                      'React',
                      'Redux',
                      'Sass',
                      'Node.js',
                      'MongoDB',
                    ]}
                    repoLink="https://github.com/Hardy1210/ArgentBank-website/tree/Redux"
                    repoIcon={<GithubIcon size={20} />}
                    repoLinkWeb="https://hardy1210.github.io/ArgentBank-website/"
                    repoWebIcon={<WebIcon size={20} />}
                  />
                </li>
                <li>
                  <ProjectCard
                    layerImageSrc="/images/Kasa/kasa.webp"
                    layerImageAlt="logo Kasa"
                    secondaryImageSrc="/images/kasa/k-bg.webp"
                    secondaryImageAlt="MacBook Kasa"
                    headerImageSrc="/images/kasa/ka-logo.webp"
                    headerImageAlt="Logo Kasa"
                    icons={[
                      <ViteIcon key="vite" size={25} />,
                      <ReactIcon key="react" size={25} />,

                      <SassIcon key="sass" size={25} />,
                      <ReactRouterIcon key="router" size={25} />,
                    ]}
                    title="Kasa"
                    description="Kasa est une application web de location d’appartements entre particuliers, développée avec React."
                    modalDescription="Kasa est une application web de location d’appartements entre particuliers, conçue avec React. Elle offre une navigation fluide entre les pages grâce à React Router. Parmi ses fonctionnalités, on retrouve un carrousel d’images interactif ainsi que des animations soignées, visant à améliorer l'expérience utilisateur. L'application est entièrement responsive, s’adaptant parfaitement à différents formats d'écrans pour offrir une expérience optimale sur mobile, tablette et ordinateur."
                    modalImgSrc="/images/kasa/ka-ph.webp"
                    modalImgAlt="Iphone Kasa"
                    modalImgSecondSrc="/images/kasa/ka-mac.png"
                    modalImgSecondAlt="MacBook Kasa"
                    technologies={[
                      'React',
                      'Redux',
                      'Sass',
                      'Node.js',
                      'MongoDB',
                    ]}
                    repoLink="https://github.com/Hardy1210/ArgentBank-website/tree/Redux"
                    repoIcon={<GithubIcon size={20} />}
                    repoLinkWeb="https://hardy1210.github.io/kasa/"
                    repoWebIcon={<WebIcon size={20} />}
                  />
                </li>
                <li>
                  <ProjectCard
                    layerImageSrc="/images/ohmyfood/ohmyfood-w.webp"
                    layerImageAlt="logo Argent Bank"
                    secondaryImageSrc="/images/Argent-bank/ab-2-removebg.webp"
                    secondaryImageAlt="MacBook Argent Bank"
                    headerImageSrc="/images/ohmyfood/oh-logo.webp"
                    headerImageAlt=""
                    icons={[
                      <ReactIcon key="react" size={25} />,
                      <ReduxIcon key="redux" size={25} />,
                      <SassIcon key="sass" size={25} />,
                      <NodeJsIcon key="sass" size={25} />,
                      <MongoDbIcon key="sass" size={25} />,
                    ]}
                    title="Argent Bank"
                    description="Argent Bank est une application web qui permet aux utilisateurs de gérer facilement leurs informations personnelles une fois connectée."
                    modalDescription="La conception du projet est basée sur React en intégrant des composants réutilisables, ainsi que l'intégration du système de connexion qui permet aux utilisateurs de se connecter, de voir leurs informations relatives à leur propre profil et de changer leur pseudo s'ils le souhaitent. L'utilisation de Redux était nécessaire pour pouvoir gérer l'état global de l'application."
                    modalImgSrc="/images/Argent-bank/ab-modal.webp"
                    modalImgAlt=""
                    modalImgSecondSrc="/images/Argent-bank/ab-modal-2.webp"
                    modalImgSecondAlt=""
                    technologies={[
                      'React',
                      'Redux',
                      'Sass',
                      'Node.js',
                      'MongoDB',
                    ]}
                    repoLink="https://github.com/Hardy1210/ArgentBank-website/tree/Redux"
                    repoIcon={<GithubIcon size={20} />}
                    repoLinkWeb="https://hardy1210.github.io/ArgentBank-website/"
                    repoWebIcon={<WebIcon size={20} />}
                  />
                </li>
                <li>
                  <ProjectCard
                    layerImageSrc="/images/724/724-w.webp"
                    layerImageAlt="logo Argent Bank"
                    secondaryImageSrc="/images/Argent-bank/ab-2-removebg.webp"
                    secondaryImageAlt="MacBook Argent Bank"
                    headerImageSrc="/images/724/724-1.webp"
                    headerImageAlt=""
                    icons={[
                      <ReactIcon key="react" size={25} />,
                      <ReduxIcon key="redux" size={25} />,
                      <SassIcon key="sass" size={25} />,
                      <NodeJsIcon key="sass" size={25} />,
                      <MongoDbIcon key="sass" size={25} />,
                    ]}
                    title="Argent Bank"
                    description="Argent Bank est une application web qui permet aux utilisateurs de gérer facilement leurs informations personnelles une fois connectée."
                    modalDescription="La conception du projet est basée sur React en intégrant des composants réutilisables, ainsi que l'intégration du système de connexion qui permet aux utilisateurs de se connecter, de voir leurs informations relatives à leur propre profil et de changer leur pseudo s'ils le souhaitent. L'utilisation de Redux était nécessaire pour pouvoir gérer l'état global de l'application."
                    modalImgSrc="/images/Argent-bank/ab-modal.webp"
                    modalImgAlt=""
                    modalImgSecondSrc="/images/Argent-bank/ab-modal-2.webp"
                    modalImgSecondAlt=""
                    technologies={[
                      'React',
                      'Redux',
                      'Sass',
                      'Node.js',
                      'MongoDB',
                    ]}
                    repoLink="https://github.com/Hardy1210/ArgentBank-website/tree/Redux"
                    repoIcon={<GithubIcon size={20} />}
                    repoLinkWeb="https://hardy1210.github.io/ArgentBank-website/"
                    repoWebIcon={<WebIcon size={20} />}
                  />
                </li>
                <li>
                  <ProjectCard
                    layerImageSrc="/images/nina/nina-w.webp"
                    layerImageAlt="logo Argent Bank"
                    secondaryImageSrc="/images/Argent-bank/ab-2-removebg.webp"
                    secondaryImageAlt="MacBook Argent Bank"
                    headerImageSrc="/images/nina/n-logo.webp"
                    headerImageAlt=""
                    icons={[
                      <ReactIcon key="react" size={25} />,
                      <ReduxIcon key="redux" size={25} />,
                      <SassIcon key="sass" size={25} />,
                      <NodeJsIcon key="sass" size={25} />,
                      <MongoDbIcon key="sass" size={25} />,
                    ]}
                    title="Argent Bank"
                    description="Argent Bank est une application web qui permet aux utilisateurs de gérer facilement leurs informations personnelles une fois connectée."
                    modalDescription="La conception du projet est basée sur React en intégrant des composants réutilisables, ainsi que l'intégration du système de connexion qui permet aux utilisateurs de se connecter, de voir leurs informations relatives à leur propre profil et de changer leur pseudo s'ils le souhaitent. L'utilisation de Redux était nécessaire pour pouvoir gérer l'état global de l'application."
                    modalImgSrc="/images/Argent-bank/ab-modal.webp"
                    modalImgAlt=""
                    modalImgSecondSrc="/images/Argent-bank/ab-modal-2.webp"
                    modalImgSecondAlt=""
                    technologies={[
                      'React',
                      'Redux',
                      'Sass',
                      'Node.js',
                      'MongoDB',
                    ]}
                    repoLink="https://github.com/Hardy1210/ArgentBank-website/tree/Redux"
                    repoIcon={<GithubIcon size={20} />}
                    repoLinkWeb="https://hardy1210.github.io/ArgentBank-website/"
                    repoWebIcon={<WebIcon size={20} />}
                  />
                </li>
                <li>
                  <ProjectCard
                    layerImageSrc="/images/sophie/so.webp"
                    layerImageAlt="logo Argent Bank"
                    secondaryImageSrc="/images/Argent-bank/ab-2-removebg.webp"
                    secondaryImageAlt="MacBook Argent Bank"
                    headerImageSrc="/images/logo_images/ab.webp"
                    headerImageAlt=""
                    icons={[
                      <ReactIcon key="react" size={25} />,
                      <ReduxIcon key="redux" size={25} />,
                      <SassIcon key="sass" size={25} />,
                      <NodeJsIcon key="sass" size={25} />,
                      <MongoDbIcon key="sass" size={25} />,
                    ]}
                    title="Argent Bank"
                    description="Argent Bank est une application web qui permet aux utilisateurs de gérer facilement leurs informations personnelles une fois connectée."
                    modalDescription="La conception du projet est basée sur React en intégrant des composants réutilisables, ainsi que l'intégration du système de connexion qui permet aux utilisateurs de se connecter, de voir leurs informations relatives à leur propre profil et de changer leur pseudo s'ils le souhaitent. L'utilisation de Redux était nécessaire pour pouvoir gérer l'état global de l'application."
                    modalImgSrc="/images/Argent-bank/ab-modal.webp"
                    modalImgAlt=""
                    modalImgSecondSrc="/images/Argent-bank/ab-modal-2.webp"
                    modalImgSecondAlt=""
                    technologies={[
                      'React',
                      'Redux',
                      'Sass',
                      'Node.js',
                      'MongoDB',
                    ]}
                    repoLink="https://github.com/Hardy1210/ArgentBank-website/tree/Redux"
                    repoIcon={<GithubIcon size={20} />}
                    repoLinkWeb="https://hardy1210.github.io/ArgentBank-website/"
                    repoWebIcon={<WebIcon size={20} />}
                  />
                </li>
                <li>
                  <ProjectCard
                    layerImageSrc="/images/booki/booki-w.webp"
                    layerImageAlt="logo Argent Bank"
                    secondaryImageSrc="/images/Argent-bank/ab-2-removebg.webp"
                    secondaryImageAlt="MacBook Argent Bank"
                    headerImageSrc="/images/logo_images/ab.webp"
                    headerImageAlt=""
                    icons={[
                      <ReactIcon key="react" size={25} />,
                      <ReduxIcon key="redux" size={25} />,
                      <SassIcon key="sass" size={25} />,
                      <NodeJsIcon key="sass" size={25} />,
                      <MongoDbIcon key="sass" size={25} />,
                    ]}
                    title="Argent Bank"
                    description="Argent Bank est une application web qui permet aux utilisateurs de gérer facilement leurs informations personnelles une fois connectée."
                    modalDescription="La conception du projet est basée sur React en intégrant des composants réutilisables, ainsi que l'intégration du système de connexion qui permet aux utilisateurs de se connecter, de voir leurs informations relatives à leur propre profil et de changer leur pseudo s'ils le souhaitent. L'utilisation de Redux était nécessaire pour pouvoir gérer l'état global de l'application."
                    modalImgSrc="/images/Argent-bank/ab-modal.webp"
                    modalImgAlt=""
                    modalImgSecondSrc="/images/Argent-bank/ab-modal-2.webp"
                    modalImgSecondAlt=""
                    technologies={[
                      'React',
                      'Redux',
                      'Sass',
                      'Node.js',
                      'MongoDB',
                    ]}
                    repoLink="https://github.com/Hardy1210/ArgentBank-website/tree/Redux"
                    repoIcon={<GithubIcon size={20} />}
                    repoLinkWeb="https://hardy1210.github.io/ArgentBank-website/"
                    repoWebIcon={<WebIcon size={20} />}
                  />
                </li>
              </ul>
            </div>
          </Section>
        </main>
      </div>
    </>
  )
}
