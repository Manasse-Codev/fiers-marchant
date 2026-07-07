import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Commande confirmée' }

export default function OrderConfirmationPage({
  searchParams,
}: {
  searchParams: { orderId?: string }
}) {
  return (
    <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center">
      <h1 className="text-3xl font-bold text-green-600">Commande confirmée !</h1>
      <p className="mt-4 text-gray-600">Numéro de commande : #{searchParams.orderId}</p>
    </div>
  )
}
