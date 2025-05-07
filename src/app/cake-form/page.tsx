// app/demande-gateau/page.tsx
import CakeOrderForm from '../_components/n8n-form/CakeOrderForm'

export const metadata = {
  title: 'Demande de gâteau personnalisé | Pâtisserie Végétalienne',
  description:
    'Commandez votre gâteau végétalien personnalisé pour toutes vos occasions spéciales.',
}

export default function CakeOrderPage() {
  return (
    <main className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">
          Commandez votre gâteau végétalien personnalisé
        </h1>
        <p className="text-lg text-center mb-8">
          Partagez-nous vos envies et nous créerons le gâteau parfait pour votre
          occasion spéciale.
        </p>
        <CakeOrderForm />
      </div>
    </main>
  )
}
