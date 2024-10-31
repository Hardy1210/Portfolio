// components/Footer.tsx
//import { cn } from '@/lib/utils'
//import { Section } from '../Section/Section'
//import styles from './Footer.module.scss'
import { LinkedinIcon, MailIcon } from 'lucide-react'
import Link from 'next/link'
import FooterForm from '../Form/FooterForm'
import { GithubIcon } from '../icons/GithubIcon'

//import FooterForm from './FooterForm';

export type FooterProps = {
  year?: number // Opcional: permite definir un año específico
  //email?: string // Opcional: dirección de correo de contacto
}

export const Footer: React.FC<FooterProps> = ({
  year = new Date().getFullYear(),
  //email = 'harv2222@gmail.com',
}) => {
  return (
    <footer id="contact" className=" bg-[#171717] text-[#FAFAFA] p-6 pt-20">
      <div className="flex justify-center">
        <div className="flex flex-col gap-10 lg:w-1/3 md:w-3/6 w-full ">
          <h3 className="text-lg text-[#FAFAFA] font-bold mb-4">
            Contactez-moi
          </h3>
          <div className="">
            <FooterForm />
          </div>
          <div className="flex flex-row justify-center gap-5 m-0">
            <Link
              href="mailto:tu_correo@ejemplo.com"
              aria-label="Envoyer un e-mail"
            >
              <MailIcon className="transform transition duration-200 hover:scale-125" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/hardy-lino-30a616b1/"
              target="_blank"
              rel="noopener noreferrer"
              className="transform transition duration-200 hover:scale-125"
            >
              <LinkedinIcon />
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
      <div>
        <div className="pt-5 flex flex-col gap-3  md:flex-row justify-between items-center">
          <p className="">
            &copy; {year} - Hardy Lino. Tous droits réservés.{' '}
            {/* Contact: {email}*/}
          </p>
          <p>Développé avec Next.js et hébergé sur ....</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
