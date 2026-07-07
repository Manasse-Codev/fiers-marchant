'use client'

import { useEffect } from 'react'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h2 className="text-2xl font-bold">Une erreur est survenue</h2>
      <button onClick={reset} className="mt-4 rounded bg-blue-600 px-4 py-2 text-white">
        Réessayer
      </button>
    </div>
  )
}
