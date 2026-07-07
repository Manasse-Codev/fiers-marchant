'use client'

import { useRouter, useSearchParams } from 'next/navigation'

export function ProductFilters() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const handleCategory = (category: string) => {
    const params = new URLSearchParams(searchParams)
    if (category) params.set('category', category)
    else params.delete('category')
    router.push(`/catalog?${params.toString()}`)
  }

  return (
    <div className="space-y-4 rounded-lg border bg-white p-4">
      <h3 className="font-semibold">Filtres</h3>
      <div>
        <p className="mb-2 text-sm font-medium text-gray-700">Catégorie</p>
        {['Électronique', 'Vêtements', 'Alimentation', 'Maison'].map(cat => (
          <button
            key={cat}
            onClick={() => handleCategory(cat)}
            className="mb-1 block w-full rounded px-3 py-1 text-left text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600"
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  )
}
