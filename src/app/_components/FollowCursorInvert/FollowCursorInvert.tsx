'use client'

import { cn } from '@/lib/utils'
import { useEffect, useRef } from 'react'
import styles from './followCursorInvert.module.scss'

interface FollowCursorInvertProps {
  className?: string
}

export function FollowCursorInvert({ className }: FollowCursorInvertProps) {
  const followerRef = useRef<HTMLDivElement | null>(null)
  const targetPosition = useRef({ x: 0, y: 0 })
  const currentPosition = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      targetPosition.current = { x: event.clientX, y: event.clientY }
    }

    const handleMouseEnter = () => {
      if (followerRef.current) {
        followerRef.current.classList.remove(styles.expanded) // Elimina la clase inversa
        followerRef.current.classList.add(styles.hovered) // Aplica la reducción
      }
    }

    const handleMouseLeave = () => {
      if (followerRef.current) {
        followerRef.current.classList.remove(styles.hovered) // Elimina la reducción
        followerRef.current.classList.add(styles.expanded) // Aplica el efecto inverso
      }
    }

    window.addEventListener('mousemove', handleMouseMove)

    // Escuchar eventos en elementos interactivos
    const interactiveElements = document.querySelectorAll(
      'button, a, [role="button"], [tabindex]',
    )
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter)
      el.addEventListener('mouseleave', handleMouseLeave)
    })

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)

      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [])

  useEffect(() => {
    const followCursor = () => {
      const speed = 0.01

      currentPosition.current.x +=
        (targetPosition.current.x - currentPosition.current.x) * speed
      currentPosition.current.y +=
        (targetPosition.current.y - currentPosition.current.y) * speed

      if (followerRef.current) {
        followerRef.current.style.left = `${currentPosition.current.x}px`
        followerRef.current.style.top = `${currentPosition.current.y}px`
      }

      requestAnimationFrame(followCursor)
    }

    followCursor()
  }, [])

  return (
    <div className={cn(styles.cursorContainer, '', className)}>
      <div ref={followerRef} className={styles.cursor} />
    </div>
  )
}
