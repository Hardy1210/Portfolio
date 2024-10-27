// components/Footer.tsx
import { Section } from '../Section/Section'
//import React from 'react'
//import FooterForm from './FooterForm';

export type FooterProps = {
  year?: number // Opcional: permite definir un año específico
  email?: string // Opcional: dirección de correo de contacto
}

export const Footer: React.FC<FooterProps> = ({
  year = new Date().getFullYear(),
  email = 'contacto@ejemplo.com',
}) => {
  return (
    <Section>
      <footer className="bg-[#1f1f1f] text-[#fafafa] py-6">
        <div className="container mx-auto text-center">
          <h3 className="text-lg font-bold mb-4">Contactez-moi</h3>

          <p className="mt-4">
            &copy; {year} - Tous droits réservés. Contact: {email}
          </p>
        </div>
      </footer>
    </Section>
  )
}

export default Footer
