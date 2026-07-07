import Link from 'next/link'

// Server Component
export function AdminSidebar() {
  const links = [
    { href: '/admin', label: 'Dashboard' },
    { href: '/admin/products', label: 'Produits' },
    { href: '/admin/users', label: 'Utilisateurs' },
    { href: '/admin/orders', label: 'Commandes' },
    { href: '/admin/reports', label: 'Rapports' },
    { href: '/admin/settings', label: 'Paramètres' },
  ]

  return (
    <aside className="w-64 shrink-0 bg-gray-900 text-white">
      <div className="p-6">
        <span className="text-xl font-bold">CashCoin Admin</span>
      </div>
      <nav className="px-4">
        {links.map(link => (
          <Link
            key={link.href}
            href={link.href}
            className="mb-1 block rounded px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </aside>
  )
}
