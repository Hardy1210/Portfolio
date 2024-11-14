import * as React from 'react'

interface EmailTemplateProps {
  message: string // Define `message` como una propiedad requerida
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  message,
}) => (
  <div>
    <p>nuevo mensaje de contacto</p>
    <p>{message}</p>
  </div>
)
