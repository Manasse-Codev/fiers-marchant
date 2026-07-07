import type { Metadata } from 'next'
import { CheckoutForm } from '@/components/features/checkout/checkout-form'

export const metadata: Metadata = { title: 'Paiement' }

export default function CheckoutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-6 text-3xl font-bold">Finaliser la commande</h1>
      <CheckoutForm />
    </div>
  )
}
