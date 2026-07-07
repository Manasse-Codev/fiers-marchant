import type { Metadata } from 'next'
export const metadata: Metadata = { title: 'Nouveau produit' }
export default function NewProductPage() {
  return <div><h1 className="text-2xl font-bold">Nouveau produit</h1></div>
}
