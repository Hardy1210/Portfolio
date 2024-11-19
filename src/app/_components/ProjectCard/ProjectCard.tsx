'use client'

import { cn } from '@/lib/utils'
import Image from 'next/image'
import { FC, ReactNode, useState } from 'react'
import { ButtonLink } from '../Button/ButtonLink'
//import ModalProject from '../ModalProyect/ModalProject'
import dynamic from 'next/dynamic'
import styles from './ProjectCard.module.scss'

//carga el componente ModalProyect solo cuando la modal es solicitada lo cual sucede al hacer click
const ModalProject = dynamic(() => import('../ModalProyect/ModalProject'), {
  ssr: false,
})

interface ProjectCardProps {
  logoImgSrc: string
  layerImageSrc: string
  layerImageAlt: string
  secondaryImageSrc: string
  secondaryImageAlt: string
  modalImgSrc: string //imagen para modal
  modalImgAlt: string //alt para modal
  modalImgSecondSrc: string //para modal
  modalImgSecondAlt: string
  headerImageSrc: string //logo
  headerImageAlt: string //logo alt
  title: string
  description: string
  modalDescription: string //modaldescription
  technologies: string[] //array de technologias escritas
  icons: ReactNode[] // Array de tecnologías icons
  repoLink: string
  repoIcon: ReactNode // ReactNode para el ícono
  repoWebIcon: ReactNode
  repoLinkWeb: string
}

const ProjectCard: FC<ProjectCardProps> = ({
  logoImgSrc,
  layerImageSrc,
  layerImageAlt,
  secondaryImageSrc,
  secondaryImageAlt,
  modalImgSrc, //modal
  modalImgAlt, //modal
  modalImgSecondSrc, //modal
  modalImgSecondAlt,
  headerImageSrc, //logo
  headerImageAlt, //logo alt
  title,
  description,
  modalDescription, //prop modal
  technologies, //array de technologias escritas
  icons, // Array de tecnologías icons
  repoLink,
  repoIcon,
  repoWebIcon,
  repoLinkWeb,
}) => {
  // Estado para controlar si el modal está abierto o cerrado
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isClosing, setIsClosing] = useState(false)

  const toggleModal = () => {
    if (isModalOpen) {
      setIsClosing(true)
      setTimeout(() => {
        setIsModalOpen(false)
        setIsClosing(false)
      }, 500) // 500ms para que la animación de cierre termine
    } else {
      setIsModalOpen(true)
    }
  }

  return (
    <article
      className={cn(
        styles.projectCard,
        'dark:border-neutral-900 dark:bg-neutral-950',
      )}
    >
      <div className={cn(styles.layers__container, '')}>
        <div className={cn(styles.layer, 'bg-neutral-900')}>
          <Image
            src={layerImageSrc}
            alt={layerImageAlt}
            width={700}
            height={412}
            className={cn(styles.image, '')}
          />
        </div>
        {/* Capa secundaria con el evento de clic */}
        <div
          className={cn(
            styles.secondary__layer,
            'bg-custom-gradient dark:bg-dark-custom-modal-image-3',
          )}
          onClick={toggleModal}
        >
          <Image
            src={secondaryImageSrc}
            alt={secondaryImageAlt}
            width={700}
            height={412}
            className={cn(styles.secondary__image, '')}
          />
        </div>
      </div>

      <div className={cn(styles.content, '')}>
        <div className={cn(styles.header__content, '')}>
          <div className="dark:border-neutral-500">
            <span className="sr-only">Green leaf</span>
            <Image
              src={headerImageSrc}
              alt={headerImageAlt}
              width={65}
              height={65}
              className={cn(styles.argent__logo, '')}
            />
          </div>
          <div className={cn(styles.icons__container)}>
            <ul className={cn(styles.icons, '')}>
              {icons.map((icon, index) => (
                <li className={cn(styles.iconCards, '')} key={index}>
                  {icon}
                </li>
              ))}
            </ul>
            <h3 className="text-foreground">{title}</h3>
          </div>
        </div>
        <div className={cn(styles.text__content, '')}>
          <p>{description}</p>
        </div>
        <div className={cn(styles.technologies__container, '')}>
          <ul className={cn(styles.technologies, '')}>
            {technologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
          <div className={cn(styles.source__container, '')}>
            <ButtonLink
              text="Source"
              href={repoLink}
              icon={repoIcon} // Ícono dinámico pasado por prop
              className={cn(styles.source__git, ' dark:text-neutral-400')}
            />
            <ButtonLink
              text="Website"
              href={repoLinkWeb}
              icon={repoWebIcon}
              className={cn(styles.source__web, '')}
            />
          </div>
        </div>
      </div>
      {/* Modal que se abrirá cuando el estado 'isModalOpen' sea true */}
      {isModalOpen && (
        <ModalProject
          onClose={toggleModal}
          isModalOpen={isModalOpen}
          isClosing={isClosing}
        >
          <div
            className={cn(
              styles.modal__container,
              'flex flex-col gap-6 px-0 sm:px-4 py-0 sm:py-4',
            )}
          >
            <div
              className={cn(
                styles.title__container,
                'pb-2 flex justify-center border-b-2 border-b-neutral-100 dark:border-b-border',
              )}
            >
              <div
                className={cn(
                  styles.modalCont__logo,
                  //'dark:border-2 dark:bg-neutral-100 dark:rounded-xl',
                )}
              >
                <Image
                  src={logoImgSrc}
                  alt={layerImageAlt}
                  width={200}
                  height={54}
                  className={cn(
                    styles.logo,
                    'dark:filter dark:invert dark:brightness-0',
                  )}
                />
              </div>
            </div>
            <div
              className={cn(
                styles.image__container,
                'flex flex-col sm:flex-row justify-center items-center gap-2 max-w-full ',
              )}
            >
              <div className="">
                <Image
                  src={modalImgSrc}
                  alt={modalImgAlt}
                  width={760}
                  height={570}
                  priority
                  className=""
                />
              </div>
              <div className="">
                <Image
                  src={modalImgSecondSrc}
                  alt={modalImgSecondAlt}
                  width={760}
                  height={570}
                  priority
                  className=""
                />
              </div>
            </div>
            <div
              className={cn(
                styles.description__container,
                'sm:px-5 flex flex-col gap-5',
              )}
            >
              <div className="flex flex-col gap-5">
                <h3 className="pb-5 text-center text-base md:text-xl font-semibold text-neutral-500 border-b-2 border-b-neutral-100 dark:border-b-border dark:text-foreground">
                  Description du projet
                </h3>
                <ul
                  className={cn(
                    styles.modal__icons,
                    'flex gap-5 justify-center',
                  )}
                >
                  {icons.map((icon, index) => (
                    <li key={index}>{icon}</li>
                  ))}
                </ul>
                <p className="text-neutral-500 dark:text-foreground text-sm ">
                  {modalDescription}
                </p>{' '}
              </div>
              <ul
                className={cn(
                  styles.techno__container,
                  'text-neutral-500 flex flex-row flex-wrap gap-3 sm:gap-5 ',
                )}
              >
                {technologies.map((tech, index) => (
                  <li
                    key={index}
                    className="bg-neutral-700/10 dark:bg-neutral-600 rounded-xl px-3 py-1 text-xs text-foreground"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
            <div
              className={cn(
                styles.buttons__conatiner,
                'mt-2 sm:mt-5 flex flex-wrap justify-center items-center gap-4 md:gap-7',
              )}
            >
              <ButtonLink
                text="Source"
                href={repoLink}
                icon={repoIcon} // Ícono dinámico pasado por prop
                className={cn(styles.source__git, '')}
              />
              <ButtonLink
                text="Website"
                href={repoLinkWeb}
                icon={repoWebIcon}
                className={cn(styles.source__web, '')}
              />
            </div>
          </div>
        </ModalProject>
      )}
    </article>
  )
}

export default ProjectCard
