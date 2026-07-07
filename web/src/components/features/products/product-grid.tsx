import { Product } from '@/types/product.types'
import { ProductCard } from './product-card'

// Server Component
export function ProductGrid({ products }: { products: Product[] }) {
  if (!products.length) {
    return <p className="text-gray-500">Aucun produit trouvé.</p>
  }
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
