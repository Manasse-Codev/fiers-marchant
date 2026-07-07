import { AccountSidebar } from '@/components/layout/account-sidebar'

export default function AccountLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container mx-auto flex gap-8 px-4 py-8">
      <aside className="w-64 shrink-0">
        <AccountSidebar />
      </aside>
      <main className="flex-1">{children}</main>
    </div>
  )
}
