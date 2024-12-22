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
    /*
  // Ajouter un like avec POST
  const handleLike = async () => {
    // Débogage pour s'assurer que slug est présent
    //if (!slug) {
    //  console.error('Le slug est undefined!')
    //  return
    //}
    //stockee les likes par utilisateur
    //if (localStorage.getItem('hasLiked')) {
    // return
    //}
    const res = await fetch(`/api/likes/like`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ slug }), // Envoi du slug pour incrémenter
    })
    if (!res.ok) {
      // Manejar errores HTTP
      console.error('Error en la respuesta:', res.status)
      return
    }
    const data = await res.json()
    setLikes(data.likes) // Mettre à jour les likes
    setHasLiked(true)

    //setear el localStorage para impedir otro like del usuario
    // localStorage.setItem('hasLiked', 'true')
  }
  */
  }
  const handleLike = async () => {
    if (!slug) {
      console.error('Le slug est undefined!')
      return
    }
    const maxLikes = 3
    const currentLikes = Number(localStorage.getItem('likesCount')) || 0
    if (currentLikes >= maxLikes) {
      alert('Merci de ton enthousiasme 😅')
      return
    }
    try {
      const res = await fetch(`/api/likes/like`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ slug }),
      })

      if (!res.ok) {
        // Manejar errores HTTP
        console.error('Error en la respuesta:', res.status)
        return
      }
      // Incrementar likes en localStorage
      const updatedLocalLikes = currentLikes + 1
      localStorage.setItem('likesCount', String(updatedLocalLikes))
      //volver a extraer los likes para una actualizacion del cobntador de likes
      // Hacer una solicitud GET para obtener el valor actualizado
      const fetchRes = await fetch(`/api/likes/like?slug=${slug}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-store', // Desactivar la caché
        },
      })

      if (fetchRes.ok) {
        const data = await fetchRes.json()
        setLikes(data.likes) // Actualizar el contador
      } else {
        console.error('Error en la respuesta GET:', fetchRes.status)
      }

      setHasLiked(true)
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
