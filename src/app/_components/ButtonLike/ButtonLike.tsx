import { useEffect, useState } from 'react'

interface ButtonLikeProps {
  slug: string
}

const ButtonLike: React.FC<ButtonLikeProps> = ({ slug }) => {
  const [likes, setLikes] = useState(0)

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
    if (!slug) {
      console.error('Le slug est undefined!') // Débogage pour s'assurer que slug est présent
      return
    }
    const res = await fetch(`/api/likes/like`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ slug }), // Envoi du slug pour incrémenter
    })
    const data = await res.json()
    setLikes(data.likes) // Mettre à jour les likes
  }

  return (
    <div>
      <button
        onClick={handleLike}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Like
      </button>
      <p>
        {likes} {likes === 1 ? 'Like' : 'Likes'}
      </p>
    </div>
  )
}

export default ButtonLike
