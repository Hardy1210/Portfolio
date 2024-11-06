import { FC, ReactNode } from 'react'
import { cn } from '../../../lib/utils'
import styles from './ButtonLink.module.scss'

interface ButtonLinkProps {
  text: string
  href: string
  icon: ReactNode //ReactNode pra utilizar cualquier componente como icino
  className?: string //para classes css adicionales
}
export const ButtonLink: FC<ButtonLinkProps> = ({
  text,
  href,
  icon,
  className = '',
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        styles.button__link,
        className,
        'text-neutral-700 dark:text-neutral-200 dark:border-neutral-400 ',
      )}
    >
      {text}
      {icon}
    </a>
  )
}
