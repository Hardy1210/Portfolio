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
        'rounded-full border-2 border-foreground bg-[#FFFF] dark:bg-neutral-100  md:hidden flex items-center justify-center shadow-xl ',
        className,
      )}
    >
      <button
        onClick={toggleMenu}
        className="inline-flex items-center justify-center rounded-full text-neutral-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
        aria-expanded={isOpen ? 'true' : 'false'}
      >
        <span className="sr-only">Toggle menu</span>
        {isOpen ? (
          <X className="block  " aria-hidden="true" />
        ) : (
          <MenuIcon
            width={40}
            className="block stroke-[3]"
            aria-hidden="true"
          />
        )}
      </button>
    </div>
  )
}
