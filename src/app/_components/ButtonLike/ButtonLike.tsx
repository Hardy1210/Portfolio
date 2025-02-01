//cette composant gere les likes dans le footer et fonctione apvec l'api pages/api/likes/like.ts
//tu peut remetre a cero le compteur dans prisùa studio pou dnas la base de donnees
import { cn } from '@/lib/utils'
import { useEffect, useState } from 'react'
import styles from './buttonLike.module.scss'
interface ButtonLikeProps {
  slug: string
}

// Función para obtener o generar el `visitorId`
const getVisitorId = () => {
  if (typeof window !== 'undefined') {
    let visitorId = localStorage.getItem('visitorId')
    if (!visitorId) {
      visitorId = crypto.randomUUID()
      localStorage.setItem('visitorId', visitorId)
    }
    return visitorId
  }
  return null // Devuelve null si no está en el cliente
}

const ButtonLike: React.FC<ButtonLikeProps> = ({ slug }) => {
  const [likes, setLikes] = useState(0)
  const [hasLiked, setHasLiked] = useState(false)

  // Obtener o generar el visitorId al cargar el componente
  const visitorId = getVisitorId()

  // Cargar los likes y el estado inicial del botón
  useEffect(() => {
    const fetchLikes = async () => {
      try {
        const res = await fetch(
          `/api/likes/like?slug=${slug}&visitorId=${visitorId}`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Cache-Control': 'no-store', // Desactiva el caché
            },
          },
        )

        if (!res.ok) {
          console.error(`Error al obtener los likes: ${res.status}`)
          return
        }

        const data = await res.json()
        setLikes(data.count || 0) // Total de likes
        setHasLiked(data.hasLiked || false) // Si ya dio like
      } catch (error) {
        console.error('Error al obtener los likes:', error)
      }
    }

    fetchLikes()
  }, [slug, visitorId])

  // Manejar el click para dar o quitar like
  const handleToggleLike = async () => {
    if (!visitorId) {
      console.error('visitorId no definido.')
      return
    }

    const method = hasLiked ? 'DELETE' : 'POST'

    try {
      const res = await fetch('/api/likes/like', {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ slug, visitorId }),
      })

      if (!res.ok) {
        console.error(
          `Error al ${hasLiked ? 'eliminar' : 'añadir'} el like:`,
          res.status,
        )
        return
      }

      const data = await res.json()
      setLikes(data.count || 0)
      setHasLiked(!hasLiked)
    } catch (error) {
      console.error(
        `Error al ${hasLiked ? 'eliminar' : 'añadir'} el like:`,
        error,
      )
    }
  }

  {
    /* dan lanimation du coeur lanimation va se decalnche juste avec le []
     et non avec ${}*/
  }
  return (
    <>
      <div className="py-10">
        <div className={cn(styles.bg, '')}>
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
            `${hasLiked ? 'visible opacity-100 animate-modalOpen3D' : 'invisible opacity-0'}`,
          )}
        >
          Merci !
        </p>
      </div>
    </>
  )
}

export default ButtonLike
