import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-6xl font-bold text-gray-900">404</h1>
      <p className="mt-4 text-xl text-gray-600">Page non trouvée</p>
      <Link href="/shop" className="mt-6 rounded bg-blue-600 px-6 py-3 text-white hover:bg-blue-700">
        Retour à la boutique
      </Link>
    </div>
  )
}
