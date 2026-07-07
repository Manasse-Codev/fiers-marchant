import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Mon panier' }

export default function CartPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold">Mon panier</h1>
      {/* CartItems, CartSummary */}
    </div>
  )
}
