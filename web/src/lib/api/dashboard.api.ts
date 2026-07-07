import { apiFetch } from './client'

interface DashboardStats {
  totalRevenue: number
  totalOrders: number
  totalProducts: number
  totalUsers: number
  recentOrders: unknown[]
  revenueByMonth: unknown[]
}

export const dashboardApi = {
  getStats: (): Promise<DashboardStats> =>
    apiFetch<DashboardStats>('/dashboard', { revalidate: 30 }),
}
