import * as React from 'react'
//base html para la reception del mensaje que llega a la badeja de entrada
//debe ser importado por api/send/route.ts
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
