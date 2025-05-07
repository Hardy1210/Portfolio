import { cn } from '@/lib/utils'
import { useEffect, useRef } from 'react'
import styles from './FollowCursor.module.scss'

interface FollowCursorProps {
  className?: string
  speed?: number
  threshold?: number
}

export function FollowCursor({
  className,
  speed = 0.15,
  threshold = 0.5,
}: FollowCursorProps) {
  const followerRef = useRef<HTMLDivElement | null>(null)
  const targetPosition = useRef({ x: 0, y: 0 })
  const currentPosition = useRef({ x: 0, y: 0 })
  const rafRef = useRef<number | null>(null)
  const isInitialized = useRef(false)

  useEffect(() => {
    // Inicializar la posición en la posición actual del mouse
    const handleMouseMove = (event: MouseEvent) => {
      targetPosition.current = { x: event.clientX, y: event.clientY }

      // Establecer posición inicial
      if (!isInitialized.current && followerRef.current) {
        currentPosition.current = { x: event.clientX, y: event.clientY }
        followerRef.current.style.transform = `translate3d(${currentPosition.current.x}px, ${currentPosition.current.y}px, 0)`
        isInitialized.current = true
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    // Asegurarse de que se inicie solo cuando el componente esté montado
    const followCursor = () => {
      const dx = targetPosition.current.x - currentPosition.current.x
      const dy = targetPosition.current.y - currentPosition.current.y

      // Actualizar posición con un cálculo más preciso
      currentPosition.current.x += dx * speed
      currentPosition.current.y += dy * speed

      if (followerRef.current) {
        // Centrar el elemento en el cursor restando la mitad del ancho/alto
        // (ajustar estos valores según el tamaño de tu elemento follower)
        const follower = followerRef.current
        const rect = follower.getBoundingClientRect()
        const offsetX = rect.width / 2
        const offsetY = rect.height / 2

        follower.style.transform = `translate3d(${currentPosition.current.x - offsetX}px, ${currentPosition.current.y - offsetY}px, 0)`
      }

      rafRef.current = requestAnimationFrame(followCursor)
    }

    // Iniciar la animación
    rafRef.current = requestAnimationFrame(followCursor)

    // Limpieza
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [speed, threshold])

  return (
    <div className={cn(styles.backgroundLayer, '', className)}>
      <div ref={followerRef} className={styles.backgroundFollower} />
    </div>
  )
}
