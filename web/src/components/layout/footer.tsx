// Server Component
export function Footer() {
  return (
    <footer className="border-t bg-gray-50 py-8">
      <div className="container mx-auto px-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} CashCoin. Tous droits réservés.
      </div>
    </footer>
  )
}
