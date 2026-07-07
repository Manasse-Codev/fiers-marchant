import { apiFetch } from './client'
import { Order } from '@/types/order.types'

export const ordersApi = {
  getAll: (): Promise<Order[]> => apiFetch<Order[]>('/orders'),
  getById: (id: string): Promise<Order> => apiFetch<Order>(`/orders/${id}`),
  getMyOrders: (): Promise<Order[]> => apiFetch<Order[]>('/orders/my'),
  create: (data: Partial<Order>): Promise<Order> =>
    apiFetch<Order>('/orders', { method: 'POST', body: JSON.stringify(data) }),
  updateStatus: (id: string, status: string): Promise<Order> =>
    apiFetch<Order>(`/orders/${id}/status`, { method: 'PATCH', body: JSON.stringify({ status }) }),
}
