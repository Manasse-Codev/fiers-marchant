import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { productsApi } from '@/lib/api/products.api'

type Props = { params: { slug: string } }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = await productsApi.getBySlug(params.slug)
  if (!product) return { title: 'Produit introuvable' }
  return { title: product.name, description: product.description }
}

export default async function ProductDetailPage({ params }: Props) {
  const product = await productsApi.getBySlug(params.slug)
  if (!product) notFound()

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold">{product.name}</h1>
      {/* ProductImages, ProductInfo, AddToCart, Reviews */}
    </div>
  )
}
