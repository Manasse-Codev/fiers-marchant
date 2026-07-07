import Link from 'next/link'

export function AccountSidebar() {
  const links = [
    { href: '/account/profile', label: 'Mon profil' },
    { href: '/account/orders', label: 'Mes commandes' },
    { href: '/account/addresses', label: 'Mes adresses' },
    { href: '/account/wishlist', label: 'Liste de souhaits' },
  ]

  return (
    <nav className="rounded-lg border bg-white p-4">
      {links.map(link => (
        <Link
          key={link.href}
          href={link.href}
          className="mb-1 block rounded px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  )
}
