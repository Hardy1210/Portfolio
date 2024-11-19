import { ReactNode, useEffect, useRef, useState } from 'react'
//este componente es excluisivo para evitar la carga anticipada de los compnentes que estaran
//abarazados por este
interface LazyLoadWrapperProps {
  children: ReactNode
}

const LazyLoadWrapper: React.FC<LazyLoadWrapperProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const currentRef = ref.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Desactiva el observador después de la primera intersección
          if (currentRef) observer.unobserve(currentRef)
        }
      },
      { threshold: 0.1 },
    )

    if (currentRef) observer.observe(currentRef)

    return () => {
      if (currentRef) observer.unobserve(currentRef)
    }
  }, [])

  return <div ref={ref}>{isVisible && children}</div>
}

export default LazyLoadWrapper
