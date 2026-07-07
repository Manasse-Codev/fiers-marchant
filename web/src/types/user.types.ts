export type UserRole = 'ADMIN' | 'CASHIER' | 'CLIENT'

export interface User {
  id: string
  email: string
  firstName: string
  lastName: string
  role: UserRole
  avatarUrl?: string
  createdAt: string
  updatedAt: string
}
