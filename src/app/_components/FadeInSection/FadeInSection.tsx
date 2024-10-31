import { cn } from '@/lib/utils'
import { ReactNode, useEffect, useRef } from 'react'
import styles from './fadeInSelection.module.scss'
interface FadeInSectionProps {
  children: ReactNode
  disableAnimation?: boolean // Nueva prop para desactivar la animación
}

const FadeInSection: React.FC<FadeInSectionProps> = ({
  children,
  disableAnimation = false,
}) => {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (disableAnimation) return // No aplicar el observer si la animación está desactivada
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [disableAnimation])

  return (
    <div
      ref={sectionRef}
      className={cn(styles.fade__in, {
        [styles.noAnimation]: disableAnimation,
      })}
    >
      {children}
    </div>
  )
}

export default FadeInSection
