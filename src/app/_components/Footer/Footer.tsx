'use client'
// components/Footer.tsx
//import { cn } from '@/lib/utils'
//import { Section } from '../Section/Section'
//import styles from './Footer.module.scss'
import { useI18n } from '@/locales/client'
import { MailIcon } from 'lucide-react'
import Link from 'next/link'
import ButtonLike from '../ButtonLike/ButtonLike'
import FooterForm from '../Form/FooterForm'
import { GithubIcon } from '../icons/GithubIcon'
import { LinkedInIcon } from '../icons/LinkedInIcon'
import { NextIcon } from '../icons/NextIcon'
import { VercelIcon } from '../icons/VercelIcon'

//import FooterForm from './FooterForm';

export type FooterProps = {
  year?: number // Opcional: permite definir un año específico
  //email?: string // Opcional: dirección de correo de contacto
  className?: string
}

export const Footer: React.FC<FooterProps> = ({
  year = new Date().getFullYear(),
  className,
  //email = 'harv2222@gmail.com',
}) => {
  //traduccion internacionalization
  const t = useI18n()
  //pour le button like
  const slug = 'portfolio-page'
  return (
    <footer
      id="contact"
      className={`bg-[#171717] dark:bg-neutral-950 text-[#FAFAFA] p-6 pt-20 ${className || ''}`}
    >
      <div className="flex justify-center">
        <div className="flex flex-col gap-10 lg:w-1/3 md:w-3/6 w-full ">
          <div>
            <div>
              <h3 className="text-3xl text-[#FAFAFA] font-bold ">
                {t('landing.footer.contact')}
              </h3>
              <div className="z-10 mt-2 absolute w-6 h-2 bg-[#FAFAFA] transform origin-left skew-x-[-35deg]"></div>
            </div>
          </div>

          <div className="">
            <FooterForm />
          </div>
          <div className="flex flex-row justify-center items-center gap-5 m-0">
            <Link
              href="mailto:tu_correo@ejemplo.com"
              aria-label="Envoyer un e-mail"
            >
              <MailIcon
                size={25}
                className="transform transition duration-200 hover:scale-125"
              />
            </Link>
            <Link
              aria-label="LinkedIn Profile"
              href="https://www.linkedin.com/in/hardy-lino-4b5247297/"
              target="_blank"
              rel="noopener noreferrer"
              className="transform transition duration-200 hover:scale-125"
            >
              <LinkedInIcon size={25} />
            </Link>
            <Link
              href="https://github.com/Hardy1210"
              target="_blank"
              rel="noopener noreferrer"
              className="transform transition duration-200 hover:scale-125"
            >
              <GithubIcon size={25} />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <ButtonLike slug={slug} />
      </div>
      <div>
        <div className="pt-5 flex flex-col gap-3  md:flex-row justify-between items-center">
          <p className="">
            &copy; {year} - {t('landing.footer.copyright')}{' '}
            {/* Contact: {email}*/}
          </p>
          <div className="flex flex-col-reverse sm:flex-row gap-2 sm:gap-4 items-center">
            <p className="flex items-end gap-2">
              {t('landing.footer.WorkedWith')}
              <NextIcon width={30} />
            </p>
            <p className="flex items-end gap-2">
              {t('landing.footer.WorkedWith2')}
              <VercelIcon width={30} />
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
