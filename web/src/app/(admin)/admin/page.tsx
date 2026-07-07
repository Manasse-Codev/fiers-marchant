import type { Metadata } from 'next'
import { StatsCard } from '@/components/features/dashboard/stats-card'
import { RevenueChart } from '@/components/features/dashboard/revenue-chart'
import { RecentOrdersTable } from '@/components/features/dashboard/recent-orders-table'

export const metadata: Metadata = { title: 'Tableau de bord' }
export const revalidate = 30

export default async function AdminDashboardPage() {
  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold">Tableau de bord</h1>
      <div className="mb-6 grid grid-cols-4 gap-4">
        <StatsCard title="Revenus" value="0 €" />
        <StatsCard title="Commandes" value="0" />
        <StatsCard title="Produits" value="0" />
        <StatsCard title="Clients" value="0" />
      </div>
      <div className="grid grid-cols-2 gap-6">
        <RevenueChart />
        <RecentOrdersTable />
      </div>
    </div>
  )
}
