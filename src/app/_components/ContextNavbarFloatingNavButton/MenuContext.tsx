//este es un contexto de react que sirve para pasar los estados y propiedades de desaparicion
//a FloatingNavButton y NavBarComponent solo para eso sirve
//es como un Hooke pero mas quye nada para pasar los estados mas que lmas propiedades de parametros
//por ejemplo las animaciones y la funcionalidad de TOGGLE
import React, { createContext, useContext, useEffect, useState } from 'react'

// Define la interfaz del contexto
interface MenuContextProps {
  isOpen: boolean
  isVisible: boolean
  toggleMenu: () => void
}

// Crea el contexto
const MenuContext = createContext<MenuContextProps | undefined>(undefined)

// Hook personalizado para usar el contexto
export const useMenuContext = () => {
  const context = useContext(MenuContext)
  if (!context) {
    throw new Error('useMenuContext debe ser usado dentro de MenuProvider')
  }
  return context
}

// Proveedor del contexto
export const MenuProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  const toggleMenu = () => {
    if (isOpen) {
      setTimeout(() => setIsVisible(false), 300) // Animación de cierre
      setIsOpen(false)
    } else {
      setIsVisible(true)
      setIsOpen(true)
    }
  }

  // Manejo del scroll del body
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  return (
    <MenuContext.Provider value={{ isOpen, isVisible, toggleMenu }}>
      {children}
    </MenuContext.Provider>
  )
}
