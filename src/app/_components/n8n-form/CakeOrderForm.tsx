// components/CakeOrderForm.tsx
'use client'

import { ChangeEvent, FormEvent, useState } from 'react'

interface FormData {
  nom: string
  email: string
  telephone: string
  type_gateau: string
  description: string
  date_livraison: string
  allergies: string
  commentaires: string
}

interface FormStatus {
  submitting: boolean
  success: boolean
  error: boolean
  message: string
}

export default function CakeOrderForm() {
  const [formData, setFormData] = useState<FormData>({
    nom: '',
    email: '',
    telephone: '',
    type_gateau: '',
    description: '',
    date_livraison: '',
    allergies: '',
    commentaires: '',
  })

  const [status, setStatus] = useState<FormStatus>({
    submitting: false,
    success: false,
    error: false,
    message: '',
  })

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus({ submitting: true, success: false, error: false, message: '' })

    try {
      // Structure des données pour correspondre à ce que n8n attend
      const response = await fetch(
        'https://kalevs.app.n8n.cloud/webhook/commande-gateau',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            body: formData,
          }), // Envoyer les données dans un objet body pour correspondre à la structure attendue
        },
      )

      if (!response.ok) {
        const errorText = await response.text()
        throw new Error(`Erreur ${response.status}: ${errorText}`)
      }

      const result = await response.json()

      if (result.success) {
        setStatus({
          submitting: false,
          success: true,
          error: false,
          message: result.message || 'Votre demande a été envoyée avec succès!',
        })
        // Réinitialiser le formulaire
        setFormData({
          nom: '',
          email: '',
          telephone: '',
          type_gateau: '',
          description: '',
          date_livraison: '',
          allergies: '',
          commentaires: '',
        })
      } else {
        setStatus({
          submitting: false,
          success: false,
          error: true,
          message: result.message || 'Une erreur est survenue',
        })
      }
    } catch (error) {
      console.error('Erreur:', error)
      setStatus({
        submitting: false,
        success: false,
        error: true,
        message:
          error instanceof Error
            ? error.message
            : "Une erreur de connexion s'est produite",
      })
    }
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Demande de gâteau personnalisé
      </h2>

      {status.success && (
        <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
          {status.message}
        </div>
      )}

      {status.error && (
        <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
          {status.message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="nom"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Nom *
            </label>
            <input
              type="text"
              id="nom"
              name="nom"
              value={formData.nom}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="telephone"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Téléphone *
          </label>
          <input
            type="tel"
            id="telephone"
            name="telephone"
            value={formData.telephone}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="type_gateau"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Type de gâteau *
          </label>
          <input
            type="text"
            id="type_gateau"
            name="type_gateau"
            value={formData.type_gateau}
            onChange={handleChange}
            required
            placeholder="Ex: Anniversaire, Mariage, Baptême..."
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Description détaillée *
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            placeholder="Décrivez le gâteau souhaité (saveurs, décorations, taille...)"
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="date_livraison"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Date de livraison souhaitée *
          </label>
          <input
            type="date"
            id="date_livraison"
            name="date_livraison"
            value={formData.date_livraison}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="allergies"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Allergies éventuelles
          </label>
          <input
            type="text"
            id="allergies"
            name="allergies"
            value={formData.allergies}
            onChange={handleChange}
            placeholder="Ex: Noix, Gluten, Soja..."
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="commentaires"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Commentaires supplémentaires
          </label>
          <textarea
            id="commentaires"
            name="commentaires"
            value={formData.commentaires}
            onChange={handleChange}
            placeholder="Informations complémentaires, préférences de livraison..."
            rows={3}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <button
            type="submit"
            disabled={status.submitting}
            className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-blue-300"
          >
            {status.submitting ? 'Envoi en cours...' : 'Envoyer ma demande'}
          </button>
        </div>
      </form>
    </div>
  )
}
