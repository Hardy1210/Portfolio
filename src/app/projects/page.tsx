'use client'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { useEffect } from 'react'
import { FollowCursor } from '../_components/FollowCursor/FollowCursor'
import { Header } from '../_components/Header/Header'
import { CssIcon } from '../_components/icons/CssIcon'
import { GithubIcon } from '../_components/icons/GithubIcon'
import { HtmlIcon } from '../_components/icons/HtmlIcon'
import { JavascriptIcon } from '../_components/icons/JavascriptIcon'
import { LightHouseIcon } from '../_components/icons/LightHouseIcon'
import { MongoDbIcon } from '../_components/icons/MongoDbIcon'
import { NodeJsIcon } from '../_components/icons/NodeJsIcon'
import { PhotoshopIcon } from '../_components/icons/PhotoshopIcon'
import { ReactIcon } from '../_components/icons/ReactIcon'
import { ReactRouterIcon } from '../_components/icons/ReactRouterIcon'
import { ReduxIcon } from '../_components/icons/ReduxIcon'
import { SassIcon } from '../_components/icons/SassIcon'
import { SwaggerIcon } from '../_components/icons/SwaggerIcon'
import { ViteIcon } from '../_components/icons/ViteIcon'
import { WaveIcon } from '../_components/icons/WaveIcon'
import { WebIcon } from '../_components/icons/WebIcon'
import ProjectCard from '../_components/ProjectCard/ProjectCard'
import { Section } from '../_components/Section/Section'
import styles from './page.module.scss'
//animationes de fade
import FadeInSection from '../_components/FadeInSection/FadeInSection'

//para pre-cargar las imagenes de las modales
const preloadImages = (imageUrls: string[]): void => {
  imageUrls.forEach((url) => {
    const img = document.createElement('img')
    img.src = url
  })
}
export default function Projects() {
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
    '/images/sophie/soph-5.webp',
    '/images/sophie/soph-4.webp',
    '/images/booki/bo-4.webp',
    '/images/booki/bo-3.webp',
  ]
  useEffect(() => {
    preloadImages(imageUrls)
  }, [])
  ///////////////////////
  return (
    <>
      <div className={cn(styles.container, 'relative ')}>
        <FollowCursor />
        <Header />
        <main
          className={cn(
            styles.projectsMain__container,
            'relative space-y-20 md:space-y-32 pt-36 md:pt-48  px-4 overflow-hidden ',
          )}
        >
          <Section>
            <div className={cn(styles.Projets__container, '')}>
              <h2
                id="projects"
                className="mb-20 text-4xl font-semibold scroll-mt-16 text-center md:text-start"
              >
                Projets
              </h2>

              <ul
                className={cn(
                  styles.projects,
                  'grid grid-cols-1 gap-5 md:grid-cols-2',
                )}
              >
                <li className={cn(styles.fadeIn__up, '')}>
                  <FadeInSection>
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
                  </FadeInSection>
                </li>
                <li className={cn(styles.fadeIn__up, '')}>
                  <FadeInSection>
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
                  </FadeInSection>
                </li>
                <li className={cn(styles.fadeIn__up, '')}>
                  <FadeInSection>
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
                  </FadeInSection>
                </li>
                <li>
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
                <li>
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
                <li>
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

                <li>
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
              <Link href="#projects">
                <div className={cn(styles.buttonProjects__container, '')}>
                  <button className={cn(styles.button__projects, '')}>
                    Revenir a l'acceuil
                  </button>
                </div>
              </Link>
            </div>
          </Section>
        </main>
      </div>
    </>
  )
}
