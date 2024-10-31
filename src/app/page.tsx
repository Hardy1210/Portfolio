'use client'
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
//skillcards y data
import { useEffect } from 'react'
import FadeInSection from './_components/FadeInSection/FadeInSection'

import { SkillCard } from './_components/SkillCard/SkillCard'
import { skillData } from './skillData/skillData'

//estilos de las animationes del hook fade

//para pre-cargar las imagenes de las modales
const preloadImages = (imageUrls: string[]): void => {
  imageUrls.forEach((url) => {
    const img = document.createElement('img')
    img.src = url
  })
}

const Span = ({ className, ...props }: ComponentPropsWithoutRef<'span'>) => {
  return <span className={cn(className, '')} {...props} />
}

export default function Home() {
  //array para la precrga de imagenes
  const imageUrls = [
    '/images/Argent-bank/ab-6.webp',
    '/images/Argent-bank/ab-7.webp',
    '/images/kasa/ka-mac.png',
    '/images/kasa/ka-ph.webp',
    '/images/ohmyfood/oh-4.webp',
    '/images/ohmyfood/oh-3.webp',
    '/images/Argent-bank/ab-modal-2.webp',
    '/images/Argent-bank/ab-modal.webp',
  ]

  useEffect(() => {
    preloadImages(imageUrls)
  }, [])
  ///////////////////////
  {
    /*este CODIGO SIRVE SOLO SI NO HAY MODALES QUE SE HABRAN POR CADA COMPONENTE
     //useState para la lista de proyectos que deseen verse
  const [showAll, setShowAll] = useState(false)
  const newItemsRef = useRef<HTMLLIElement>(null)

  // Función para manejar el clic en "Ver más" y desplazar la pantalla
  const handleShowMore = () => {
    setShowAll(true)
    setTimeout(() => {
      newItemsRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }, 100) // Usamos un pequeño retraso para asegurar que el DOM esté actualizado
  }
    */
  }

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
                'relative flex flex-col h-fit w-full  gap-14 md:gap-14',
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
                <FadeInSection>
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
                      <span className="text-7xl font-extrabold drop-shadow-xl">
                        Hey&nbsp;!
                      </span>
                      <span className="text-5xl font-extrabold drop-shadow-xl">
                        Je&nbsp;m&#39;appelle
                      </span>
                    </span>
                    <h1
                      aria-label="Hardy Lino"
                      className={cn(
                        styles.hardy,
                        'w-min text-7xl font-extrabold drop-shadow-xl dark:text-neutral-50 md:w-max',
                      )}
                    >
                      {/* <span className="h-14 w-14 bg-slate-950 inline-block"></span>*/}
                      Hardy,
                    </h1>
                    <h2
                      className={cn(
                        styles.dev,
                        'mt-7 md:mt-10 text-3xl text-center font-semibold',
                      )}
                    >
                      Développeur Front-end
                    </h2>
                    <p
                      className={cn(
                        styles.front,
                        'text-2xl text-center md:text-start md:mr-20 ',
                      )}
                    >
                      Bienvenue dans mon portfolio, un aperçu de mon parcours en
                      tant que développeur front-end.{' '}
                      <br className="hidden md:flex" />
                    </p>
                  </div>
                </FadeInSection>
                <div
                  className={cn(styles.img__container, 'w-1/2 hidden md:flex')}
                >
                  <Image
                    src="/images/m.webp"
                    alt="Robot hand light"
                    width={409}
                    height={425}
                    className={cn(
                      styles.img,
                      'min-w-64 h-auto object-contain md:flex dark:hidden',
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
              <FadeInSection>
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
              </FadeInSection>
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
          <div className={cn(styles.background__top, '')}></div>

          <div
            id="about"
            className={cn(
              styles.about__container,
              'scroll-mt-24 md:scroll-mt-32 ',
            )}
          >
            <div className={cn(styles.bacground__middle, '')}>
              <Section className={cn(styles.section, '')}>
                <h2
                  className={cn(
                    styles.a__propos,
                    'mb-10 text-3xl font-semibold text-center md:text-start',
                  )}
                >
                  À propos
                </h2>
                <FadeInSection>
                  <div className="grid grid-cols-1 md:grid-cols-[70%,30%] gap-7 md:gap-0 items-center justify-between">
                    <div className="">
                      <div className="flex flex-col gap-6 text-center md:text-start text-lg md:text-xl px-5 md:pl-0  md:pr-10">
                        <p className="">
                          Responsable de magasin et ancien professeur de guitare
                          classique passionné par l'enseignement, je me suis
                          reconverti dans le{' '}
                          <strong>développement front-end</strong>, un domaine
                          qui m'a toujours fasciné.
                        </p>
                        <p>
                          Mon parcours diversifié en <strong>gestion</strong>,{' '}
                          <strong>musique</strong> et{' '}
                          <strong>enseignement </strong>
                          m'a apporté rigueur, créativité et une capacité à
                          résoudre divers problèmes. Cette expérience{' '}
                          <strong>artistique</strong> enrichit ma vision
                          technique et facilite la{' '}
                          <strong>collaboration</strong> sur des projets variés.
                          Curieux et en quête de nouveaux défis, je suis prêt à
                          mettre ma passion au service de vos idées.
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-center md:justify-end ">
                      <div className="rounded-full">
                        <Image
                          src="/images/Photos/h-2.webp"
                          alt="Robot hand light"
                          width={250}
                          height={250}
                          className="rounded-full border-[4px] border-solid border-[#171717]"
                        />
                      </div>
                    </div>
                  </div>
                </FadeInSection>
              </Section>
            </div>

            <div className={cn(styles.background__bottom, '')}></div>
          </div>

          {/*Projets*/}
          <Section>
            <div className={cn(styles.Projets__container, 'pt-10')}>
              <div>
                <h2
                  id="projects"
                  className="mb-10 text-3xl font-semibold  text-center md:text-start scroll-mt-24 md:scroll-mt-32"
                >
                  Projets
                </h2>
                <FadeInSection>
                  <div className="mb-20 text-center text-lg md:text-xl">
                    <p>
                      À travers mes différents projets, j’ai exploré diverses
                      technologies telles que [React, Redux, Sass, etc.]. Chaque
                      réalisation m’a permis de développer mes compétences en
                      développement web, conception d’applications et résolution
                      de problèmes concrets. Mon portfolio reflète mon parcours
                      d’apprentissage et ma passion pour créer des solutions
                      efficaces.
                    </p>
                  </div>
                </FadeInSection>
              </div>

              <ul
                className={cn(
                  styles.projects,
                  'grid grid-cols-1 gap-5 md:grid-cols-2',
                )}
              >
                <li className={cn(styles.fade)}>
                  <FadeInSection>
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
                  </FadeInSection>
                </li>

                <li className={cn(styles.fade)}>
                  <FadeInSection>
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
                  </FadeInSection>
                </li>

                <li className={cn(styles.fade)}>
                  <FadeInSection>
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
                  </FadeInSection>
                </li>
                <li className={cn(styles.fade)}>
                  <FadeInSection>
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
                  </FadeInSection>
                </li>
              </ul>
              {/*button LINK  */}
              <Link href="/projects">
                <div className={cn(styles.buttonProjects__container, '')}>
                  <button className={cn(styles.button__projects, '')}>
                    Voir plus
                  </button>
                </div>
              </Link>
            </div>
          </Section>

          {/*Skill*/}
          <Section>
            <div className={cn(styles.skill, 'grid md:grid-cols-2 gap-5')}>
              <div className="p-5 flex flex-col gap-3 text-center md:text-start">
                <FadeInSection>
                  <h2 className="text-3xl font-semibold">Mes compétences</h2>
                  <p className="text-2xl">J'adore travailler avec...</p>
                </FadeInSection>
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
            </div>
          </Section>
          <Section>
            <div className={cn(styles.techno__content, '')}>
              <div className={cn(styles.technologies__utilises, '')}>
                <p className="text-2xl ">
                  J'ai pu travailler avec ces outils et technologies
                </p>
                <ul
                  className={cn(
                    styles.icon__skills,
                    'mt-20 flex flex-row justify-evenly flex-wrap gap-7',
                  )}
                >
                  <li>
                    <GithubIcon size={70} />
                  </li>
                  <li>
                    <GitLabIcon size={70} />
                  </li>
                  <li className="">
                    <TypescriptIcon className="" size={70} />
                  </li>
                  <li className="">
                    <SwaggerIcon size={70} />
                  </li>
                  <li className="">
                    <NodeJsIcon size={70} />
                  </li>
                  <li className="">
                    <MongoDbIcon size={70} />
                  </li>
                  <li>
                    <PostmanIcon size={70} />
                  </li>
                  <li>
                    <FigmaIcon size={70} />
                  </li>
                  <li className="">
                    <NotionIcon className="" size={70} />
                  </li>
                </ul>
              </div>
            </div>
          </Section>
          <Section>
            <div
              className={cn(
                styles.work,
                'flex flex-col justify-center items-center gap-6',
              )}
            >
              <p className="text-3xl">Un projet en tête ?</p>
              <FadeInSection>
                <p
                  className={cn(
                    styles.word,
                    'text-6xl text-center md:text-start',
                  )}
                >
                  Travaillons ensemble
                </p>
              </FadeInSection>

              <p className="text-3xl text-center">
                Je serais ravi de collaborer avec vous. <br />
                Parlons-en.
              </p>
            </div>
          </Section>
        </main>
        <Footer />
      </div>
    </>
  )
}
