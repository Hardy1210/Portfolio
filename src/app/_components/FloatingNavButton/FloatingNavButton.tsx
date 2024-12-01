import { cn } from '@/lib/utils'
import { X } from 'lucide-react'
import { MenuIcon } from '../icons/modals/MenuIcon'
//importamos las configuraciones del hook useMenuLogic
import { useMenuContext } from '../ContextNavbarFloatingNavButton/MenuContext'
import styles from './floatingNavButton.module.scss'

interface FloatingNavButtonProps {
  className?: string
}
export const FloatingNavButton: React.FC<FloatingNavButtonProps> = ({
  className,
}) => {
  const { isOpen, toggleMenu } = useMenuContext()

  return (
    <div
      className={cn(
        styles.floating__nav,
        'rounded-full bg-foreground/70 md:hidden flex items-center justify-center shadow-lg ',
        className,
      )}
    >
      <button
        onClick={toggleMenu}
        className="inline-flex w-14 h-14 items-center justify-center rounded-full text-neutral-800 dark:hover:bg-neutral-700 hover:bg-neutral-200/50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
        aria-expanded={isOpen ? 'true' : 'false'}
      >
        <span className="sr-only">Toggle menu</span>
        {isOpen ? (
          <X className="block  " aria-hidden="true" />
        ) : (
          <MenuIcon className="block stroke-[3]" aria-hidden="true" />
        )}
      </button>
    </div>
  )
}
