import type { Metadata } from 'next'
export const metadata: Metadata = { title: 'Détail utilisateur' }
export default function AdminUserDetailPage({ params }: { params: { id: string } }) {
  return <div><h1 className="text-2xl font-bold">Utilisateur #{params.id}</h1></div>
}
