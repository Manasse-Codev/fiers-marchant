import { create } from 'zustand'

interface UIStore {
  isSidebarOpen: boolean
  isCartOpen: boolean
  toggleSidebar: () => void
  toggleCart: () => void
  closeAll: () => void
}

export const useUIStore = create<UIStore>((set) => ({
  isSidebarOpen: false,
  isCartOpen: false,
  toggleSidebar: () => set(s => ({ isSidebarOpen: !s.isSidebarOpen })),
  toggleCart: () => set(s => ({ isCartOpen: !s.isCartOpen })),
  closeAll: () => set({ isSidebarOpen: false, isCartOpen: false }),
}))
