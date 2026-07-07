import type { Metadata } from 'next'
export const metadata: Metadata = { title: 'Modifier produit' }
export default function EditProductPage({ params }: { params: { id: string } }) {
  return <div><h1 className="text-2xl font-bold">Modifier produit #{params.id}</h1></div>
}
