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

    // Vérifier si l'utilisateur a déjà liké
    if (hasLiked) {
      // L'utilisateur a déjà liké, retirer le like
      setLikes((prevLikes) => prevLikes - 1)
      setHasLiked(false)
      localStorage.setItem(`hasLiked_${slug}`, 'false')

      try {
        const res = await fetch(`/api/likes/like`, {
          method: 'DELETE', // Ou utilisez PUT si DELETE n'est pas supporté
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ slug }),
        })

        if (!res.ok) {
          console.error('Erreur lors de la suppression du like:', res.status)
          return
        }
      } catch (error) {
        console.error('Erreur lors de la suppression du like:', error)
      }
    } else {
      // L'utilisateur n'a pas encore liké, ajouter un like
      setLikes((prevLikes) => prevLikes + 1)
      setHasLiked(true)
      localStorage.setItem(`hasLiked_${slug}`, 'true')

      try {
        const res = await fetch(`/api/likes/like`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ slug }),
        })

        if (!res.ok) {
          console.error('Erreur lors de l’ajout du like:', res.status)
          return
        }
      } catch (error) {
        console.error('Erreur lors de l’ajout du like:', error)
      }
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
            aria-label={hasLiked ? 'Retirer le like' : 'Ajouter un like'}
          >
            <span className="sr-only">{hasLiked ? 'Unlike' : 'Like'}</span>
          </button>
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
