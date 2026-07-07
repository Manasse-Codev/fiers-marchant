import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { Product } from '@/types/product.types'

interface WishlistStore {
  items: Product[]
  addItem: (product: Product) => void
  removeItem: (productId: string) => void
  isInWishlist: (productId: string) => boolean
}

export const useWishlistStore = create<WishlistStore>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (product) =>
        set(state => ({
          items: state.items.some(i => i.id === product.id)
            ? state.items
            : [...state.items, product],
        })),
      removeItem: (productId) =>
        set(state => ({ items: state.items.filter(i => i.id !== productId) })),
      isInWishlist: (productId) => get().items.some(i => i.id === productId),
    }),
    { name: 'cashcoin-wishlist' }
  )
)
