import { Product } from './product.types'
import { User } from './user.types'

export type OrderStatus = 'PENDING' | 'CONFIRMED' | 'SHIPPED' | 'DELIVERED' | 'CANCELLED'

export interface OrderItem {
  id: string
  product: Product
  quantity: number
  unitPrice: number
}

export interface Order {
  id: string
  user: User
  items: OrderItem[]
  status: OrderStatus
  totalAmount: number
  shippingAddress: string
  createdAt: string
  updatedAt: string
}
