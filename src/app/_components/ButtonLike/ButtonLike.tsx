//cette composant gere les likes dans le footer et fonctione apvec l'api pages/api/likes/like.ts
//tu peut remetre a cero le compteur dans prisùa studio pou dnas la base de donnees
import { cn } from '@/lib/utils'
import { useEffect, useState } from 'react'
import styles from './buttonLike.module.scss'
interface ButtonLikeProps {
  slug: string
}

const ButtonLike: React.FC<ButtonLikeProps> = ({ slug }) => {
  const [likes, setLikes] = useState(0)
  const [hasLiked, setHasLiked] = useState(false)

  // Charger les likes au chargement avec GET
  useEffect(() => {
    const fetchLikes = async () => {
      try {
        const res = await fetch(`/api/likes/like?slug=${slug}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Cache-Control': 'no-store', // Desactiva el caché
          },
        })
        if (!res.ok) {
          console.error('Error al obtener los likes:', res.status)
          return
        }
        const data = await res.json()
        setLikes(data.likes)
      } catch (error) {
        console.error('Error al realizar el fetch de likes:', error)
      }
    }
    fetchLikes()
  }, [slug])
  {
  }
  const handleLike = async () => {
    if (!slug) {
      console.error('Le slug est undefined!')
      return
    }

    const maxLikes = 1
    const currentLikes = Number(localStorage.getItem('likesCount')) || 0

    if (currentLikes >= maxLikes) {
      alert('Tu as déjà liké ma page, merci beaucoup pour ton soutien ❤️ !')
      return
    }

    // Actualizar localmente antes de la solicitud
    setLikes((prevLikes) => prevLikes + 1)
    setHasLiked(true)
    const updatedLocalLikes = currentLikes + 1
    localStorage.setItem('likesCount', String(updatedLocalLikes))
    localStorage.setItem(`hasLiked_${slug}`, 'true')

    try {
      // Realizar la solicitud POST
      const res = await fetch(`/api/likes/like`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ slug }),
      })

      if (!res.ok) {
        console.error('Error en la respuesta POST:', res.status)
        return
      }

      {
        /*
        // Opcional: sincronizar likes reales desde el servidor
      const fetchRes = await fetch(`/api/likes/like?slug=${slug}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-store',
        },
      })

      if (fetchRes.ok) {
        const data = await fetchRes.json()
        setLikes(data.likes)
      } else {
        console.error('Error en la respuesta GET:', fetchRes.status)
      } */
      }
    } catch (error) {
      console.error('Error al enviar like:', error)
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
            onClick={handleLike}
            className={cn(styles.heart, { [styles.liked]: hasLiked })}
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
