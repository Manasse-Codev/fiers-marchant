'use client'

export function CheckoutForm() {
  return (
    <div className="grid grid-cols-2 gap-8">
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Livraison</h2>
        {/* Formulaire adresse */}
        <h2 className="mt-6 text-xl font-semibold">Paiement</h2>
        {/* Stripe Elements */}
      </div>
      <div>
        <h2 className="text-xl font-semibold">Récapitulatif</h2>
        {/* CartSummary */}
      </div>
    </div>
  )
}
