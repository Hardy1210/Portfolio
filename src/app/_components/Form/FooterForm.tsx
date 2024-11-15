'use client'
import { cn } from '@/lib/utils'
import { useI18n } from '@/locales/client'
import React, { useState } from 'react'
import styles from './footerForm.module.scss'
//mensageria funciona con Resend
const FooterForm: React.FC = () => {
  const [userEmail, setUserEmail] = useState('')
  const [message, setMessage] = useState('')
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userEmail,
          message,
        }),
      })

      if (response.ok) {
        setSuccess(true)
        setError(false)

        setUserEmail('')
        setMessage('')
      } else {
        throw new Error('Failed to send email')
      }
    } catch (err) {
      console.error(err)
      setSuccess(false)
      setError(true)
    }
  }

  const t = useI18n()

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(styles.form, 'flex flex-col text-black')}
    >
      <div>
        <label className="inline-block mb-2 text-[#FAFAFA]">Email</label>
        <div>
          <input
            type="email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            required
            className="border rounded px-2 py-2 w-full text-foreground"
            placeholder="vitoria@email.com"
          />
        </div>
      </div>

      <div className="mt-5">
        <label className="inline-block mb-2 text-[#FAFAFA]">Message</label>
        <div>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="border rounded px-2 py-2 w-full text-foreground"
            placeholder={t('landing.footerForm.placehoderText')}
          />
        </div>
      </div>

      <div className="flex justify-center mt-5">
        <button type="submit" className={cn(styles.button, 'w-40')}>
          {t('landing.footerForm.buttonSend')}
        </button>
      </div>

      {success && (
        <p className="text-green-500 mt-5">
          {t('landing.footerForm.sendMessage')}
        </p>
      )}
      {error && (
        <p className="text-red-500 mt-5">
          {t('landing.footerForm.errorMessage')}
        </p>
      )}
    </form>
  )
}

export default FooterForm

{
  /*
  // components/FooterForm.tsx
//import emailjs from 'emailjs-com'
'use client'
import { cn } from '@/lib/utils'
import { useI18n } from '@/locales/client'
import React, { useState } from 'react'
import styles from './footerForm.module.scss'

const FooterForm: React.FC = () => {
  const [userEmail, setUserEmail] = useState('')
  const [message, setMessage] = useState('')
  //const [success, setSuccess] = useState(false)
  //const [error, setError] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    {
      /* emailjs
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
  }
  //internationalisation
  const t = useI18n()

  return (
    <form onSubmit={handleSubmit} className={cn(styles.form, 'text-black')}>
      <div className="">
        <label className="inline-block mb-2 text-[#FAFAFA]">Email</label>
        <div>
          <input
            type="email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            required
            className="border rounded px-2 py-2 w-full text-foreground"
            placeholder="vitoria@email.com"
          />
        </div>
      </div>

      <div className="mt-5">
        <label className="inline-block mb-2 text-[#FAFAFA] ">Message</label>
        <div>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="border rounded px-2 py-2 w-full text-foreground"
            placeholder={t('landing.footerForm.placehoderText')}
          />
        </div>
      </div>

      <div className="flex justify-center mt-5">
        <button type="submit" className={cn(styles.button, 'w-40')}>
          {t('landing.footerForm.buttonSend')}
        </button>

        {/**{success && (
          <p className="text-green-500">
            {t('landing.footerForm.sendMessage')}
          </p>
        )}
        {error && (
          <p className="text-red-500">{t('landing.footerForm.errorMessage')}</p>
        )} }
      </div>
    </form>
  )
}

export default FooterForm
  */
}
