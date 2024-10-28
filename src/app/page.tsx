import { LinkedinIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { ComponentPropsWithoutRef } from 'react'
import { cn } from '../lib/utils'
import { Button } from './_components/Button/Button'
import Footer from './_components/Footer/Footer'
import { Header } from './_components/Header/Header'
import { ArrowUp } from './_components/icons/ArrowUp'
import { CssIcon } from './_components/icons/CssIcon'
import { FigmaIcon } from './_components/icons/FigmaIcon'
import { GithubIcon } from './_components/icons/GithubIcon'
import { GitLabIcon } from './_components/icons/GitLabIcon'
import { HtmlIcon } from './_components/icons/HtmlIcon'
import { JavascriptIcon } from './_components/icons/JavascriptIcon'
import { LightHouseIcon } from './_components/icons/LightHouseIcon'
import { MongoDbIcon } from './_components/icons/MongoDbIcon'
import { NextIcon } from './_components/icons/NextIcon'
import { NodeJsIcon } from './_components/icons/NodeJsIcon'
import { NotionIcon } from './_components/icons/NotionIcon'
import { NpmIcon } from './_components/icons/NpmIcon'
import { PhotoshopIcon } from './_components/icons/PhotoshopIcon'
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
import { WaveIcon } from './_components/icons/WaveIcon'
import { WebIcon } from './_components/icons/WebIcon'
import ProjectCard from './_components/ProjectCard/ProjectCard'
import { Section } from './_components/Section/Section'
import styles from './page.module.scss'
//skillcards y data
import { SkillCard } from './_components/SkillCard/SkillCard'
import { skillData } from './skillData/skillData'

const Span = ({ className, ...props }: ComponentPropsWithoutRef<'span'>) => {
  return <span className={cn(className, '')} {...props} />
}
export default function Home() {
  return (
    <>
      <div className="relative">
        <Header />
        <main
          className={cn(
            styles.main__container,
            'space-y-20 md:space-y-32 pt-36 md:pt-48  px-4 overflow-hidden',
          )}
        >
          <Section>
            <div
              className={cn(
                styles.container,
                'relative flex flex-col h-fit w-full items-center gap-14 md:gap-14',
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
                  <span
                    aria-hidden="true"
                    className="inline-flex flex-col items-center md:items-end md:flex-row gap-3"
                  >
                    <span className="text-6xl font-extrabold drop-shadow-xl">
                      Hey !
                    </span>
                    <span className="text-5xl font-extrabold drop-shadow-xl">
                      Je m&#39;appelle
                    </span>
                  </span>
                  <h1
                    aria-label="Hardy Lino"
                    className={cn(
                      styles.hardy,
                      'w-min text-7xl font-extrabold drop-shadow-xl dark:text-neutral-50 md:w-max',
                    )}
                  >
                    Hardy,
                  </h1>
                  <h2
                    className={cn(
                      styles.dev,
                      'mt-7 md:mt-10 text-3xl text-center font-semibold',
                    )}
                  >
                    Developpeur Front-end
                  </h2>
                  <p
                    className={cn(
                      styles.front,
                      'text-2xl text-center md:text-start md:mx-0 lg:mx-0',
                    )}
                  >
                    Bienvenue dans mon portfolio, un aperçu de mon parcours en
                    tant que développeur front-end.{' '}
                    <br className="hidden md:flex" />
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
                  ' w-full md:max-w-full flex-col-reverse  gap-7 md:gap-5 justify-between',
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
          {/*marquee*/}
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
          {/*About*/}
          <div
            id="about"
            className={cn(styles.about__container, 'scroll-mt-16 md:py-32')}
          >
            <div></div>
            <div></div>
            <Section className="">
              <h2 className="mb-10 text-3xl font-semibold text-center md:text-start">
                À propos
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-[70%,30%] gap-7 md:gap-0 items-center justify-between">
                <div className="">
                  <div className="flex flex-col gap-6 text-center md:text-start text-lg md:text-xl px-5 md:pl-0  md:pr-10">
                    <p className="">
                      Responsable de magasin et ancien professeur de guitare
                      classique passionné par l'enseignement, je me suis
                      reconverti dans le{' '}
                      <strong>développement front-end</strong>, un domaine qui
                      m'a toujours fasciné.
                    </p>
                    <p>
                      Mon parcours diversifié en <strong>gestion</strong>,{' '}
                      <strong>musique</strong> et <strong>enseignement</strong>
                      m'a apporté rigueur, créativité et une capacité à résoudre
                      divers problèmes. Cette expérience{' '}
                      <strong>artistique</strong> enrichit ma vision technique
                      et facilite la <strong>collaboration</strong> sur des
                      projets variés. Curieux et en quête de nouveaux défis, je
                      suis prêt à mettre ma passion et mon expertise au service
                      de vos idées.
                    </p>
                  </div>
                </div>
                <div className="flex justify-center ">
                  <Image
                    src="/images/Photos/h-2.webp"
                    alt="Robot hand light"
                    width={250}
                    height={250}
                    layout="fixed"
                    className="rounded-full"
                  />
                </div>
              </div>
            </Section>
          </div>

          {/*Projets*/}
          <Section>
            <div className={cn(styles.Projets__container, '')}>
              <h2
                id="projects"
                className="mb-10 text-3xl font-semibold scroll-mt-16 text-center md:text-start"
              >
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
                      <NodeJsIcon key="node" size={25} />,
                      <MongoDbIcon key="mongo" size={25} />,
                      <SwaggerIcon key="swagger" size={25} />,
                    ]}
                    title="Argent Bank"
                    description="Argent Bank est une application web qui permet aux utilisateurs de gérer facilement leurs informations personnelles une fois connectée."
                    modalDescription="La conception du projet est basée sur React en intégrant des composants réutilisables, ainsi que l'intégration du système de connexion qui permet aux utilisateurs de se connecter, de voir leurs informations relatives à leur propre profil et de changer leur pseudo s'ils le souhaitent. L'utilisation de Redux était nécessaire pour pouvoir gérer l'état global de l'application."
                    modalImgSrc="/images/Argent-bank/ab-6.webp"
                    modalImgAlt="MacBook Argent Bank"
                    modalImgSecondSrc="/images/Argent-bank/ab-7.webp"
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
                    modalDescription="Kasa est une application web de location d’appartements entre particuliers, conçue avec React. L'architecture du projet repose sur des composants réutilisables optimisés pour réduire la duplication de code et faciliter la maintenance. L'organisation des styles est gérée avec Sass, permettant une structuration claire et modulaire des feuilles de styles, ce qui améliore la maintenabilité du projet.

L'application offre une navigation fluide entre les pages grâce à React Router et intègre un carrousel d’images interactif ainsi que des animations soignées pour enrichir l'expérience utilisateur. Elle est entièrement responsive, s'adaptant parfaitement à différents formats d'écrans pour offrir une expérience optimale sur mobile, tablette et ordinateur. L'optimisation des performances et de la gestion des ressources assure une utilisation fluide sur tout type d’appareil."
                    modalImgSrc="/images/kasa/ka-ph.webp"
                    modalImgAlt="Iphone Kasa"
                    modalImgSecondSrc="/images/kasa/ka-mac.png"
                    modalImgSecondAlt="MacBook Kasa"
                    technologies={['Vite', 'React', 'React router', 'Sass']}
                    repoLink="https://github.com/Hardy1210/kasa"
                    repoIcon={<GithubIcon size={20} />}
                    repoLinkWeb="https://hardy1210.github.io/kasa/"
                    repoWebIcon={<WebIcon size={20} />}
                  />
                </li>
                <li>
                  <ProjectCard
                    layerImageSrc="/images/ohmyfood/ohmyfood-w.webp"
                    layerImageAlt="logo Ohmyfood"
                    secondaryImageSrc="/images/ohmyfood/oh-2.webp"
                    secondaryImageAlt="MacBook Ohmyfood"
                    headerImageSrc="/images/ohmyfood/oh-logo.webp"
                    headerImageAlt=""
                    icons={[
                      <HtmlIcon key="html" size={25} />,
                      <CssIcon key="css" size={25} />,
                      <SassIcon key="sass" size={25} />,
                    ]}
                    title="Ohmyfood"
                    description="OhMyFood est une site web de menus de restaurants conçue en mobile-first avec un design responsive. J'ai utilisé Sass pour structurer et optimiser les styles."
                    modalDescription="OhMyFood est un projet réalisé dans le cadre de ma formation, visant à développer une application web pour répertorier les menus de restaurants gastronomiques. Le site a été conçu avec une approche mobile first pour assurer une expérience utilisateur optimale sur smartphones, tablettes et ordinateurs.

Le développement a mis l'accent sur la responsivité du site, garantissant une adaptation fluide à tous les formats d'écrans. J'ai utilisé Sass pour structurer efficacement les styles CSS, en tirant parti de sa modularité pour créer un code maintenable et organisé. Ce projet m'a permis de travailler sur des animations CSS soignées et de suivre rigoureusement les maquettes fournies via Figma, en respectant les comportements et transitions spécifiés."
                    modalImgSrc="/images/ohmyfood/oh-4.webp"
                    modalImgAlt=""
                    modalImgSecondSrc="/images/ohmyfood/oh-3.webp"
                    modalImgSecondAlt=""
                    technologies={['Html', 'Css', 'Sass']}
                    repoLink="https://github.com/Hardy1210/-OhMyFood"
                    repoIcon={<GithubIcon size={20} />}
                    repoLinkWeb="https://hardy1210.github.io/-OhMyFood/"
                    repoWebIcon={<WebIcon size={20} />}
                  />
                </li>
                <li>
                  <ProjectCard
                    layerImageSrc="/images/724/724-w.webp"
                    layerImageAlt="logo 724 Events"
                    secondaryImageSrc="/images/Argent-bank/ab-2-removebg.webp"
                    secondaryImageAlt="MacBook 724 Events"
                    headerImageSrc="/images/724/724-logo.webp"
                    headerImageAlt="Logo 724 Events"
                    icons={[
                      <JavascriptIcon key="javascript" size={25} />,
                      <ReactIcon key="react" size={25} />,
                      <NodeJsIcon key="node" size={25} />,
                    ]}
                    title="724 Events"
                    description="Projet de débogage et d'optimisation du site web 724-events développé avec React, incluant l'implémentation et la finalisation des tests unitaires et d'intégration"
                    modalDescription="Projet de débogage pour un site événementiel développé avec React, appuyé par Node.js pour exécuter et déboguer le code JavaScript côté serveur, facilitant ainsi les tests en environnement local. J'ai pu finaliser les tests unitaires et d'intégration manquants dans le projet pour garantir la fiabilité et la performance des fonctionnalités clés du site. Un cahier des recettes a été établi pour valider rigoureusement chaque fonctionnalité attendue, assurant une expérience utilisateur fluide et stable. Grâce à une approche méthodique, toutes les anomalies ont été levées, contribuant pleinement à la finalisation de ce projet événementiel"
                    modalImgSrc="/images/Argent-bank/ab-modal.webp"
                    modalImgAlt="MacBook 724 Events"
                    modalImgSecondSrc="/images/Argent-bank/ab-modal-2.webp"
                    modalImgSecondAlt="MacBook 724 Events"
                    technologies={['React', 'JavaScript', 'Node.js']}
                    repoLink="https://github.com/Hardy1210/742-eventss"
                    repoIcon={<GithubIcon size={20} />}
                    repoLinkWeb="https://hardy1210.github.io/742-eventss/"
                    repoWebIcon={<WebIcon size={20} />}
                  />
                </li>
                <li>
                  <ProjectCard
                    layerImageSrc="/images/nina/nina-w.webp"
                    layerImageAlt="logo Nina Carducci"
                    secondaryImageSrc="/images/Argent-bank/ab-2-removebg.webp"
                    secondaryImageAlt="MacBook avec le site Nina Carducci"
                    headerImageSrc="/images/nina/n-logo.webp"
                    headerImageAlt="logo Nina Carducci"
                    icons={[
                      <HtmlIcon key="html" size={25} />,
                      <CssIcon key="css" size={25} />,
                      <PhotoshopIcon key="photoshop" size={25} />,
                      <LightHouseIcon key="lighthouse" size={25} />,
                      <WaveIcon key="wave" size={25} />,
                    ]}
                    title="Nina Carducci"
                    description="Optimisation SEO d’un site de photographie, avec ajustement des dimensions des images et restructuration sémantique du code pour un meilleur référencement."
                    modalDescription="Optimisation SEO pour un site web de photographie. J'ai amélioré les performances du site en optimisant les images, en réduisant leur poids, en ajustant le format et les dimensions pour correspondre au viewport, garantissant ainsi un chargement plus rapide et une meilleure expérience utilisateur. La structure du code a été révisée pour une approche sémantique, facilitant le bon référencement par les moteurs de recherche. J'ai également réalisé un rapport d'optimisation pour comparer les performances avant et après les améliorations, en m'appuyant sur différents audits, tels que Lighthouse pour les performances et WAVE pour l’accessibilité."
                    modalImgSrc="/images/Argent-bank/ab-modal.webp"
                    modalImgAlt="MacBook avec le site Nina Carducci"
                    modalImgSecondSrc="/images/Argent-bank/ab-modal-2.webp"
                    modalImgSecondAlt="MacBook avec le site Nina Carducci"
                    technologies={[
                      'Html',
                      'Css',
                      'Photoshop',
                      'Lighthouse',
                      'Wave',
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
                    layerImageAlt="logo Sophie Bluel"
                    secondaryImageSrc="/images/sophie/soph-1.webp"
                    secondaryImageAlt="MacBook Sophie Bluel"
                    headerImageSrc="/images/sophie/soph.webp"
                    headerImageAlt="logo Sophie Bluel"
                    icons={[
                      <HtmlIcon key="html" size={25} />,
                      <CssIcon key="css" size={25} />,
                      <JavascriptIcon key="javascript" size={25} />,
                      <SwaggerIcon key="swagger" size={25} />,
                    ]}
                    title="Sophie Bluel"
                    description="Sophie Bluel est un site d'architecture intégrant un filtrage dynamique des photos et une interface d'administration pour gérer les projets."
                    modalDescription="Sophie Bluel est un site web d’architecture pour lequel j’ai intégré un système dynamique de filtrage des photos des projets réalisés par l'architecte. J’ai également développé une page de connexion avec un formulaire interactif, incluant des alertes qui s’affichent en cas d’erreur dans le mot de passe ou l’e-mail. Une page d’administration a été mise en place pour permettre l’ajout et la suppression de photos des travaux de l'architecte via un modal. Pour la communication avec le backend, j'ai utilisé Swagger afin de consulter et tester les endpoints disponibles, assurant ainsi une intégration fluide et fiable."
                    modalImgSrc="/images/sophie/soph-5.webp"
                    modalImgAlt="MacBook avec le site Sophie Bluel"
                    modalImgSecondSrc="/images/sophie/soph-4.webp"
                    modalImgSecondAlt="Mackbook Sohpie Bluel"
                    technologies={['Html', 'Css', 'Javascript', 'Swagger']}
                    repoLink="https://github.com/Hardy1210/ArgentBank-website/tree/Redux"
                    repoIcon={<GithubIcon size={20} />}
                    repoLinkWeb="https://hardy1210.github.io/ArgentBank-website/"
                    repoWebIcon={<WebIcon size={20} />}
                  />
                </li>
                <li>
                  <ProjectCard
                    layerImageSrc="/images/booki/booki-w.webp"
                    layerImageAlt="logo Booki"
                    secondaryImageSrc="/images/booki/bo-1.webp"
                    secondaryImageAlt="MacBook avec le site Booki"
                    headerImageSrc="/images/logo_images/ab.webp"
                    headerImageAlt="Logo Booki"
                    icons={[
                      <HtmlIcon key="html" size={25} />,
                      <CssIcon key="css" size={25} />,
                    ]}
                    title="Booki"
                    description="Argent Bank est une application web qui permet aux utilisateurs de gérer facilement leurs informations personnelles une fois connectée."
                    modalDescription="La conception du projet est basée sur React en intégrant des composants réutilisables, ainsi que l'intégration du système de connexion qui permet aux utilisateurs de se connecter, de voir leurs informations relatives à leur propre profil et de changer leur pseudo s'ils le souhaitent. L'utilisation de Redux était nécessaire pour pouvoir gérer l'état global de l'application."
                    modalImgSrc="/images/booki/bo-4.webp"
                    modalImgAlt="Mackbook avec le site Booki"
                    modalImgSecondSrc="/images/booki/bo-3.webp"
                    modalImgSecondAlt="Mackbook avec le site Booki"
                    technologies={['Html', 'Css']}
                    repoLink="https://github.com/Hardy1210/ArgentBank-website/tree/Redux"
                    repoIcon={<GithubIcon size={20} />}
                    repoLinkWeb="https://hardy1210.github.io/ArgentBank-website/"
                    repoWebIcon={<WebIcon size={20} />}
                  />
                </li>
              </ul>
            </div>
          </Section>
          {/*Skill*/}
          <Section className={cn(styles.skill, 'grid md:grid-cols-2 gap-5')}>
            <div className="p-5 flex flex-col gap-3 text-center md:text-start">
              <h2 className="text-3xl font-semibold">Mes compétences</h2>
              <p className="text-2xl">J'adore travailler avec...</p>
            </div>
            {skillData.map((skill, index) => (
              <SkillCard
                key={index}
                skillImgSrc={skill.skillImgSrc}
                skillImgAlt={skill.skillImgAlt}
                title={skill.title}
                description={skill.description}
              />
            ))}
          </Section>
        </main>
        <Footer />
      </div>
    </>
  )
}
