import Link from 'next/link'
import Image from 'next/image'
import { Product } from '@/types/product.types'
import { formatCurrency } from '@/lib/utils/format-currency'

// Server Component
export function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.slug}`} className="group block rounded-lg border bg-white p-4 shadow-sm transition hover:shadow-md">
      <div className="relative mb-4 aspect-square overflow-hidden rounded-md bg-gray-100">
        <Image
          src={product.imageUrl || '/assets/images/placeholder-product.png'}
          alt={product.name}
          fill
          className="object-cover transition group-hover:scale-105"
        />
      </div>
      <h3 className="font-semibold text-gray-900">{product.name}</h3>
      <p className="mt-1 text-sm text-gray-500 line-clamp-2">{product.description}</p>
      <p className="mt-2 text-lg font-bold text-blue-600">{formatCurrency(product.price)}</p>
    </Link>
  )
}
