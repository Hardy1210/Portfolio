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
      if (!slug) {
        console.error('Le slug est undefined!')
        return
      }
      // Vérifier l'URL dans la console pour s'assurer que le slug est bien présent
      console.log('Requête GET URL:', `/api/likes/like?slug=${slug}`)
      const res = await fetch(`/api/likes/like?slug=${slug}`, {
        // Utilisation de GET avec slug en paramètre
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      })
      const data = await res.json()
      setLikes(data.likes)
    }
    fetchLikes()
  }, [slug])

  // Ajouter un like avec POST
  const handleLike = async () => {
    // Débogage pour s'assurer que slug est présent
    if (!slug) {
      console.error('Le slug est undefined!')
      return
    }
    //stockee les likes par utilisateur
    //if (localStorage.getItem('hasLiked')) {
    // return
    //}
    const res = await fetch(`/api/likes/like`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ slug }), // Envoi du slug pour incrémenter
    })
    const data = await res.json()
    setLikes(data.likes) // Mettre à jour les likes
    setHasLiked(true)

    //setear el localStorage para impedir otro like del usuario
    // localStorage.setItem('hasLiked', 'true')
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
