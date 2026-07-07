import Link from 'next/link'

// Server Component
export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white shadow-sm">
      <nav className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link href="/shop" className="text-xl font-bold text-blue-600">CashCoin</Link>
        <div className="flex items-center gap-6">
          <Link href="/catalog" className="text-gray-600 hover:text-blue-600">Catalogue</Link>
          <Link href="/cart" className="text-gray-600 hover:text-blue-600">Panier</Link>
          <Link href="/account/profile" className="text-gray-600 hover:text-blue-600">Mon compte</Link>
        </div>
      </nav>
    </header>
  )
}
