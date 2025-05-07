'use client'

import { cn } from '@/lib/utils'
import { useEffect, useState } from 'react'
import styles from './buttonLike.module.scss'

interface ButtonLikeProps {
  slug: string
}

const ButtonLike: React.FC<ButtonLikeProps> = ({ slug }) => {
  const [likes, setLikes] = useState(0)
  const [hasLiked, setHasLiked] = useState(false)
  const [visitorId, setVisitorId] = useState<string | null>(null)

  // Initialiser le visitorId une seule fois côté client
  useEffect(() => {
    if (typeof window !== 'undefined') {
      let storedId = localStorage.getItem('visitorId')
      if (!storedId) {
        storedId = crypto.randomUUID()
        localStorage.setItem('visitorId', storedId)
      }
      setVisitorId(storedId)
    }
  }, [])

  // Charger les likes une fois le visitorId disponible
  useEffect(() => {
    if (!visitorId) return

    const fetchLikes = async () => {
      try {
        const res = await fetch(
          `/api/likes/like?slug=${slug}&visitorId=${visitorId}`,
        )
        if (!res.ok) throw new Error(`Status ${res.status}`)

        const data = await res.json()
        setLikes(data.count || 0)
        setHasLiked(data.hasLiked || false)
      } catch (error) {
        console.error('Erreur lors du chargement des likes :', error)
      }
    }

    fetchLikes()
  }, [slug, visitorId])

  const handleToggleLike = async () => {
    if (!visitorId) return

    const method = hasLiked ? 'DELETE' : 'POST'

    try {
      const res = await fetch('/api/likes/like', {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ slug, visitorId }),
      })

      if (!res.ok) {
        console.error('Erreur API:', res.status)
        return
      }

      const data = await res.json()
      setLikes(data.count || 0)
      setHasLiked(!hasLiked)
    } catch (error) {
      console.error('Erreur lors du like:', error)
    }
  }

  return (
    <div className="py-10">
      <div className={cn(styles.bg)}>
        <button
          onClick={handleToggleLike}
          className={cn(styles.heart, { [styles.liked]: hasLiked })}
          aria-label={hasLiked ? 'Quitar like' : 'Dar like'}
        ></button>
      </div>
      <p className="mt-2">
        {likes} {likes === 1 ? 'Like' : 'Likes'}
      </p>
      <p
        className={cn(
          styles.likedText,
          hasLiked
            ? 'visible opacity-100 animate-modalOpen3D'
            : 'invisible opacity-0',
        )}
      >
        Merci !
      </p>
    </div>
  )
}

export default ButtonLike
