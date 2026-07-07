import type { Metadata } from 'next'
export const metadata: Metadata = { title: 'Mes commandes' }
export default function MyOrdersPage() {
  return <div><h1 className="text-2xl font-bold">Mes commandes</h1></div>
}
