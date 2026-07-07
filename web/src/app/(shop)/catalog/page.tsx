import type { Metadata } from 'next'
import { ProductGrid } from '@/components/features/products/product-grid'
import { ProductFilters } from '@/components/features/products/product-filters'
import { productsApi } from '@/lib/api/products.api'

export const metadata: Metadata = { title: 'Catalogue' }
export const revalidate = 60

export default async function CatalogPage({
  searchParams,
}: {
  searchParams: { page?: string; category?: string; q?: string }
}) {
  const products = await productsApi.getAll(searchParams)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-6 text-3xl font-bold">Catalogue</h1>
      <div className="flex gap-6">
        <aside className="w-64 shrink-0">
          <ProductFilters />
        </aside>
        <main className="flex-1">
          <ProductGrid products={products} />
        </main>
      </div>
    </div>
  )
}
