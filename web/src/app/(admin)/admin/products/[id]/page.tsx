import type { Metadata } from 'next'
export const metadata: Metadata = { title: 'Détail produit' }
export default function AdminProductDetailPage({ params }: { params: { id: string } }) {
  return <div><h1 className="text-2xl font-bold">Produit #{params.id}</h1></div>
}
