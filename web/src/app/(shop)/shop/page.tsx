import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Boutique',
  description: 'Découvrez tous nos produits',
}

export default function ShopPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold">Bienvenue sur CashCoin</h1>
      {/* HeroSection, FeaturedProducts, etc. */}
    </div>
  )
}
