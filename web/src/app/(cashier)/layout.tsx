import { CashierHeader } from '@/components/layout/cashier-header'

export default function CashierLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col bg-gray-900">
      <CashierHeader />
      <main className="flex-1 overflow-y-auto p-4">{children}</main>
    </div>
  )
}
