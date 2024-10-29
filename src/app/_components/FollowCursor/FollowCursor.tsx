// components/FollowCursor.tsx
import { useEffect, useRef } from 'react'
import styles from './FollowCursor.module.scss'

export const FollowCursor = () => {
  const followerRef = useRef<HTMLDivElement | null>(null)
  const targetPosition = useRef({ x: 0, y: 0 })
  const currentPosition = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      targetPosition.current = { x: event.clientX, y: event.clientY }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
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
    <div className={styles.backgroundLayer}>
      <div ref={followerRef} className={styles.backgroundFollower} />
    </div>
  )
}
