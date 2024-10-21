import { cn } from '@/lib/utils'
import { ReactNode } from 'react'
import styles from './ModalProject.module.scss' // Estilos para el modal

interface ModalProps {
  onClose: () => void
  children: ReactNode
}
const Modal = ({ onClose, children }: ModalProps) => {
  return (
    <div className={cn(styles.modal__overlay)} onClick={onClose}>
      <div
        className={cn(styles.modal__content)}
        onClick={(e) => e.stopPropagation()} // Para evitar que al hacer clic en el modal mismo lo cierre
      >
        {children}
        <button className={cn(styles.close__button)} onClick={onClose}>
          X
        </button>
      </div>
    </div>
  )
}

export default Modal
