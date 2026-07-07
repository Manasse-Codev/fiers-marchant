export default function CatalogLoading() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="h-8 w-48 animate-pulse rounded bg-gray-200" />
      <div className="mt-6 grid grid-cols-3 gap-6">
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i} className="h-72 animate-pulse rounded-lg bg-gray-200" />
        ))}
      </div>
    </div>
  )
}
