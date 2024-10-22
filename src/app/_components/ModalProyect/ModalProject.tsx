import { cn } from '@/lib/utils'
import { X } from 'lucide-react'
import { ReactNode } from 'react'
import styles from './ModalProject.module.scss' // Estilos para el modal

interface ModalProps {
  onClose: () => void
  children: ReactNode
}
const Modal = ({ onClose, children }: ModalProps) => {
  return (
    <div
      className={cn(
        styles.blur__overlay,
        'fixed p-5 sm:p-10 inset-0 bg-black bg-opacity-50 backdrop-blur-lg flex justify-center items-center z-50',
      )}
      onClick={onClose}
    >
      <div className={cn(styles.modal__overlay, '')}>
        <div
          className={cn(
            styles.modal__content,
            'relative rounded-xl bg-white max-w-5xl p-5 ',
          )}
          onClick={(e) => e.stopPropagation()} // Para evitar que al hacer clic en el modal mismo lo cierre
        >
          <button
            className={cn(
              styles.close__button,
              'absolute top-5 right-5 text-gray-400 hover:text-gray-500',
            )}
            onClick={onClose}
          >
            <X className="stroke-[3]" />
          </button>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Modal
