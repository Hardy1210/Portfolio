import { cn } from '@/lib/utils'
import { X } from 'lucide-react'
import { ReactNode } from 'react'
import styles from './ModalProject.module.scss' // Estilos para el modal

interface ModalProps {
  onClose: () => void
  isModalOpen: boolean //por el momento funciona sin utilisar el pro en la animation de la modal fade-i, fade-put
  isClosing: boolean
  children: ReactNode
}
const Modal = ({ onClose, isClosing, children }: ModalProps) => {
  return (
    <div
      className={cn(
        styles.blur__overlay,
        'fixed p-3  sm:p-10 inset-0 bg-black bg-opacity-50 backdrop-blur-lg flex justify-center items-center z-40',
        isClosing ? 'animate-fadeOut' : 'animate-fadeIn', // Controla la animación de entrada/salida
      )}
      onClick={onClose}
    >
      <div
        className={cn(
          styles.modal__overlay,
          'z-50',
          isClosing ? 'animate-modalClose3D' : 'animate-modalOpen3D',
        )}
      >
        <div
          className={cn(
            styles.modal__content,
            'relative rounded-xl bg-white max-w-5xl max-h-screen p-5 overflow-y-auto',
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
