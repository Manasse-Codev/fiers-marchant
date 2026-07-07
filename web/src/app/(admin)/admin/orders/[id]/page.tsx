import type { Metadata } from 'next'
export const metadata: Metadata = { title: 'Détail commande — Admin' }
export default function AdminOrderDetailPage({ params }: { params: { id: string } }) {
  return <div><h1 className="text-2xl font-bold">Commande #{params.id}</h1></div>
}
