'use client'

import { cn } from '@/lib/utils'
import Image from 'next/image'
import { FC, ReactNode, useState } from 'react'
import { ButtonLink } from '../Button/ButtonLink'
import ModalProject from '../ModalProyect/ModalProject'
import styles from './ProjectCard.module.scss'

interface ProjectCardProps {
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

  // Función para abrir y cerrar el modal
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }
  return (
    <article
      className={cn(
        styles.projectCard,
        'dark:border-neutral-900 dark:bg-neutral-1000',
      )}
    >
      <div className={cn(styles.layers__container, '')}>
        <div className={cn(styles.layer, '')}>
          <Image
            src={layerImageSrc}
            alt={layerImageAlt}
            layout="responsive"
            width={700}
            height={412}
            className={cn(styles.image, '')}
          />
        </div>
        {/* Capa secundaria con el evento de clic */}
        <div className={cn(styles.secondary__layer, '')} onClick={toggleModal}>
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
          <div>
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
                <li key={index}>{icon}</li>
              ))}
            </ul>
            <h3>{title}</h3>
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
      </div>
      {/* Modal que se abrirá cuando el estado 'isModalOpen' sea true */}
      {isModalOpen && (
        <ModalProject onClose={toggleModal}>
          <div
            className={cn(styles.modal__container, 'flex flex-col gap-5 p-4')}
          >
            <div className={cn(styles.title__container, 'pb-5 text-center')}>
              <h2 className="text-xl">{title}</h2>
            </div>
            <div
              className={cn(
                styles.image__container,
                'flex flex-row justify-center items-center gap-2 max-w-full',
              )}
            >
              <div className="w-full sm:w-auto">
                <Image
                  src={modalImgSrc}
                  alt={modalImgAlt}
                  layout="responsive"
                  width={700}
                  height={412}
                  className="w-full h-auto"
                />
              </div>
              <div className="w-full sm:w-auto">
                <Image
                  src={modalImgSecondSrc}
                  alt={modalImgSecondAlt}
                  layout="responsive"
                  width={700}
                  height={412}
                  className="w-full h-auto"
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
                <h3 className="pb-5 text-center text-xl font-semibold text-neutral-500">
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
                <p className="text-neutral-500 text-sm">{modalDescription}</p>{' '}
              </div>
              <ul
                className={cn(
                  styles.techno__container,
                  'text-neutral-500 flex flex-row flex-wrap gap-5 ',
                )}
              >
                {technologies.map((tech, index) => (
                  <li
                    key={index}
                    className="bg-neutral-700/10 rounded-xl px-3 py-1 text-xs"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
            <div
              className={cn(
                styles.buttons__conatiner,
                'mt-5 flex flex-wrap justify-center items-center gap-7',
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
