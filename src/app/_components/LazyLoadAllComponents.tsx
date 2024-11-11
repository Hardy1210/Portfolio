'use client'
// cuidado no lo estas utilisando
import { ElementType, ReactNode, useEffect, useRef, useState } from 'react'

interface LazyLoadWrapperAllComponentsProps {
  children: ReactNode
  as?: ElementType // Tipo genérico para cualquier elemento
}

const LazyLoadWrapperAllComponents: React.FC<
  LazyLoadWrapperAllComponentsProps
> = ({ children, as: Component = 'div' }) => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const currentRef = ref.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
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

  return <Component ref={ref}>{isVisible && children}</Component>
}

export default LazyLoadWrapperAllComponents
