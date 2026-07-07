import type { Metadata } from 'next'
export const metadata: Metadata = { title: 'Détail commande' }
export default function OrderDetailPage({ params }: { params: { id: string } }) {
  return <div><h1 className="text-2xl font-bold">Commande #{params.id}</h1></div>
}
