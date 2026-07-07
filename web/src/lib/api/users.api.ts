import { apiFetch } from './client'
import { User } from '@/types/user.types'

export const usersApi = {
  getAll: (): Promise<User[]> => apiFetch<User[]>('/users'),
  getById: (id: string): Promise<User> => apiFetch<User>(`/users/${id}`),
  getMe: (): Promise<User> => apiFetch<User>('/users/me'),
  update: (id: string, data: Partial<User>): Promise<User> =>
    apiFetch<User>(`/users/${id}`, { method: 'PATCH', body: JSON.stringify(data) }),
  delete: (id: string): Promise<void> =>
    apiFetch<void>(`/users/${id}`, { method: 'DELETE' }),
}
