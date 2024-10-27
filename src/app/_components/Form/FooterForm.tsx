// components/FooterForm.tsx
//import emailjs from 'emailjs-com'
import React, { useState } from 'react'

const FooterForm: React.FC = () => {
  const [userEmail, setUserEmail] = useState('')
  const [message, setMessage] = useState('')
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    emailjs
      .send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          user_email: userEmail,
          message,
        },
        'YOUR_USER_ID',
      )
      .then(
        () => {
          setSuccess(true)
          setUserEmail('')
          setMessage('')
        },
        (error) => {
          console.error('Failed to send email:', error)
          setError(true)
        },
      )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <label>
        Email:
        <input
          type="email"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
          required
          className="border rounded px-2 py-1 w-full"
        />
      </label>
      <label>
        Message:
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className="border rounded px-2 py-1 w-full"
        />
      </label>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Envoyer
      </button>
      {success && (
        <p className="text-green-500">Votre message a été envoyé !</p>
      )}
      {error && (
        <p className="text-red-500">
          Une erreur est survenue. Veuillez réessayer.
        </p>
      )}
    </form>
  )
}

export default FooterForm
