'use client'
import { LinkedinIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '../../lib/utils'
import { Button } from '../_components/Button/Button'
import Footer from '../_components/Footer/Footer'
import { Header } from '../_components/Header/Header'
import { ArrowUp } from '../_components/icons/ArrowUp'
import { CssIcon } from '../_components/icons/CssIcon'
import { FigmaIcon } from '../_components/icons/FigmaIcon'
import { GithubIcon } from '../_components/icons/GithubIcon'
import { GitLabIcon } from '../_components/icons/GitLabIcon'
import { HtmlIcon } from '../_components/icons/HtmlIcon'
import { SassIconColor } from '../_components/icons/iconsColor/SassIconColor'
import { TailwindIconColor } from '../_components/icons/iconsColor/TailwindIconColor'
import { JavascriptIcon } from '../_components/icons/JavascriptIcon'
import { MongoDbIcon } from '../_components/icons/MongoDbIcon'
import { NextIcon } from '../_components/icons/NextIcon'
import { NodeJsIcon } from '../_components/icons/NodeJsIcon'
import { NotionIcon } from '../_components/icons/NotionIcon'
import { NpmIcon } from '../_components/icons/NpmIcon'
import { PostmanIcon } from '../_components/icons/PostmanIcon'
import { ReactIcon } from '../_components/icons/ReactIcon'
import { ReactRouterIcon } from '../_components/icons/ReactRouterIcon'
import { ReduxIcon } from '../_components/icons/ReduxIcon'
import { SassIcon } from '../_components/icons/SassIcon'
import { SwaggerIcon } from '../_components/icons/SwaggerIcon'
import { TailwindIcon } from '../_components/icons/TailwindIcon'
import { TypescriptIcon } from '../_components/icons/TypescriptIcon'
import { VercelIcon } from '../_components/icons/VercelIcon'
import { ViteIcon } from '../_components/icons/ViteIcon'
import { VsCodeIcon } from '../_components/icons/VsCodeIcon'
import { WebIcon } from '../_components/icons/WebIcon'
import ProjectCard from '../_components/ProjectCard/ProjectCard'
import { Section } from '../_components/Section/Section'
import styles from './page.module.scss'

import { useEffect } from 'react'
import FadeInSection from '../_components/FadeInSection/FadeInSection'
//skillcards y data
//import { skillData } from '../skillData/skillData'
//import { SkillCard } from '../_components/SkillCard/SkillCard'
import { SkillCardAlternative } from '../_components/SkillCard/SkillCardAlternative'

//traduccion
// para utilizar la traduccion nesecitamos verificar
//si estamos utilizando un component server o component client
import { useI18n, useScopedI18n } from '@/locales/client'
import { FigmaIconColor } from '../_components/icons/iconsColor/FigmaIconColor'
import { JavascriptIconColor } from '../_components/icons/iconsColor/JavascriptIconColor'
import { MongoDbIconColor } from '../_components/icons/iconsColor/MongoDbIconColor'
import { NodeJsIconColor } from '../_components/icons/iconsColor/NodeJsIconColor'
import { PostmanIconColor } from '../_components/icons/iconsColor/PostmanIconColor'
import { ReactIconColor } from '../_components/icons/iconsColor/ReactIconColor'
import { SwaggerIconColor } from '../_components/icons/iconsColor/SwaggerIconColor'
import { TypeScriptIconColor } from '../_components/icons/iconsColor/TypeScriptIconColor'

//para pre-cargar las imagenes de las modales
const preloadImages = (imageUrls: string[]): void => {
  imageUrls.forEach((url) => {
    const img = document.createElement('img')
    img.src = url
  })
}
{
  /*const Span = ({ className, ...props }: ComponentPropsWithoutRef<'span'>) => {
  return <span className={cn(className, '')} {...props} />
}* */
}
export default function Home() {
  // para utilizar la traduccion nesecitamos verificar
  // importar useScopedI18n(si vamos a utilizar las ramas del json) o
  //useI18n(por defecto pero hara la linea mas grande si hay ramas)
  //para lado servidor es getI18n o getScopedI18n

  const t = useI18n()
  const landingT = useScopedI18n('landing.introduction')
  //const introductionT = useScopedI18n('landing.content')
  const contentT = useScopedI18n('landing.content')
  const projectCardArgentT = useScopedI18n('landing.projectCardsArgent')
  const projectCardKasa = useScopedI18n('landing.projectCardsKasa')
  const projectCardsOhMyFood = useScopedI18n('landing.projectCardsOhMyFood')
  const projectCard742 = useScopedI18n('landing.projectCards724')
  //const projectCardNina = useScopedI18n('landing.projectCardsNina')
  //const projectCardSophie = useScopedI18n('landing.projectCardsSophi')
  //const projectCardBooki = useScopedI18n('landing.projectCardsBooki')

  const mySkills = useScopedI18n('landing.skills')
  const work = useScopedI18n('landing.work')

  //array para la precrga de imagenes
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
  }, [imageUrls])
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
                        {landingT('hi')}
                      </span>
                      <span className="text-5xl font-extrabold drop-shadow-xl">
                        {landingT('myNameIs')}
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
                      Hardy
                    </h1>
                    <h2
                      className={cn(
                        styles.dev,
                        'mt-7 md:mt-10 text-3xl text-center font-semibold',
                      )}
                    >
                      {landingT('dev')}
                    </h2>
                    <p
                      className={cn(
                        styles.front,
                        'text-2xl text-center md:text-start md:mr-20 ',
                      )}
                    >
                      {landingT('welcome')} <br className="hidden md:flex" />
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
                        {landingT('read')}cv
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
                  {t('landing.content.about')}
                </h2>
                <FadeInSection>
                  <div className="grid grid-cols-1 md:grid-cols-[70%,30%] gap-7 md:gap-0 items-center justify-between">
                    <div className="">
                      <div className="flex flex-col gap-6 text-center md:text-start text-lg md:text-xl px-5 md:pl-0  md:pr-10">
                        <p className="">
                          {contentT('aboutText')}
                          <strong>{contentT('aboutText2')}</strong>
                          {contentT('aboutText3')}
                        </p>
                        <p>
                          {contentT('aboutText4')}
                          <strong>{contentT('aboutText5')}</strong>,
                          <strong>{contentT('aboutText6')}</strong>
                          {contentT('aboutText7')}
                          <strong>{contentT('aboutText8')}</strong>
                          {contentT('aboutText9')}
                          <strong>{contentT('aboutText10')}</strong>
                          {contentT('aboutText11')}
                          <strong>{contentT('aboutText12')}</strong>
                          {contentT('aboutText13')}
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
                  {contentT('projects')}
                </h2>
                <FadeInSection>
                  <div className="mb-20 text-center text-lg md:text-xl">
                    <p>{contentT('projectsText')}</p>
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
                      description={projectCardArgentT('description')}
                      modalDescription={projectCardArgentT('modalDescription')}
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
                      description={projectCardKasa('description')}
                      modalDescription={projectCardKasa('modalDescription')}
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
                      description={projectCardsOhMyFood('description')}
                      modalDescription={projectCardsOhMyFood(
                        'modalDescription',
                      )}
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
                      description={projectCard742('description')}
                      modalDescription={projectCard742('modalDescription')}
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
              <Link href="/projects" locale="fr">
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
                  <h2 className="text-3xl font-semibold">
                    {mySkills('skill')}
                  </h2>
                  <p className="text-2xl">{mySkills('like')}</p>
                </FadeInSection>
              </div>
              <SkillCardAlternative
                icon={<ReactIcon size={80} />}
                secondaryIcon={<ReactIconColor size={40} />}
                title="React"
                description={mySkills('descriptionReact')}
              />
              <SkillCardAlternative
                icon={<NextIcon size={80} />}
                secondaryIcon={<NextIcon size={40} />}
                title="Next.js"
                description={mySkills('descriptionNext')}
              />

              <SkillCardAlternative
                icon={<JavascriptIcon size={80} />}
                secondaryIcon={<JavascriptIconColor size={40} />}
                title="JavaScript"
                description={mySkills('descriptionJavascript')}
              />
              <SkillCardAlternative
                icon={<SassIcon size={80} />}
                secondaryIcon={<SassIconColor size={40} />}
                title="Sass"
                description={mySkills('descriptionSass')}
              />
              <SkillCardAlternative
                icon={<TailwindIcon size={80} />}
                secondaryIcon={<TailwindIconColor size={40} />}
                title="Tailwind"
                description={mySkills('descriptionTailwind')}
              />
            </div>
          </Section>

          <Section>
            <div className={cn(styles.techno__content, '')}>
              <div className={cn(styles.technologies__utilises, '')}>
                <p className="text-2xl">{mySkills('worked')}</p>
                <div className="mt-20">
                  <div className="flex w-full items-center whitespace-nowrap relative [mask-image:linear-gradient(to_right,rgba(0,0,0,0)_0%,rgb(0,0,0)_12.5%,rgb(0,0,0)_87.5%,rgba(0,0,0,0)_100%)] group">
                    <ul
                      className={cn(
                        styles.icon__skills,
                        'inline-flex items-center animate-marquee group-hover:[animation-play-state:paused]',
                      )}
                    >
                      <li className="mx-5">
                        <GithubIcon size={70} />
                      </li>
                      <li className="mx-5">
                        <TypeScriptIconColor size={70} />
                      </li>
                      <li className="mx-5">
                        <SwaggerIconColor size={70} />
                      </li>
                      <li className="mx-5">
                        <NodeJsIconColor size={70} />
                      </li>
                      <li className="mx-5">
                        <GitLabIcon size={70} />
                      </li>
                      <li className="mx-5">
                        <MongoDbIconColor size={70} />
                      </li>
                      <li className="mx-5">
                        <PostmanIconColor size={70} />
                      </li>
                      <li className="mx-5">
                        <FigmaIconColor size={70} />
                      </li>
                      <li className="mx-5">
                        <NotionIcon size={70} />
                      </li>
                    </ul>
                    <ul className="inline-flex absolute items-center animate-marquee2 group-hover:[animation-play-state:paused]">
                      <li className="mx-5">
                        <GithubIcon size={70} />
                      </li>
                      <li className="mx-5">
                        <TypeScriptIconColor size={70} />
                      </li>
                      <li className="mx-5">
                        <SwaggerIconColor size={70} />
                      </li>
                      <li className="mx-5">
                        <NodeJsIconColor size={70} />
                      </li>
                      <li className="mx-5">
                        <GitLabIcon size={70} />
                      </li>
                      <li className="mx-5">
                        <MongoDbIconColor size={70} />
                      </li>
                      <li className="mx-5">
                        <PostmanIconColor size={70} />
                      </li>
                      <li className="mx-5">
                        <FigmaIconColor size={70} />
                      </li>
                      <li className="mx-5">
                        <NotionIcon size={70} />
                      </li>
                    </ul>
                  </div>
                </div>
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
              <p className="text-3xl">{work('idea')}</p>
              <FadeInSection>
                <p
                  className={cn(
                    styles.word,
                    'text-6xl text-center md:text-start',
                  )}
                >
                  {work('workTogether')}
                </p>
              </FadeInSection>

              <p className="text-3xl text-center">
                {work('collaboration')} <br />
                {work('speak')}
              </p>
            </div>
          </Section>
        </main>
        <Footer />
      </div>
    </>
  )
}
