import { cn } from '@/lib/utils'
import { ReactNode, useEffect, useRef } from 'react'
import styles from './fadeInSelection.module.scss'
interface FadeInSectionProps {
  children: ReactNode
}

const FadeInSection: React.FC<FadeInSectionProps> = ({ children }) => {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
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
  }, [])

  return (
    <div ref={sectionRef} className={cn(styles.fade__in, '')}>
      {children}
    </div>
  )
}

export default FadeInSection
