const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'

interface FetchOptions extends RequestInit {
  tags?: string[]
  revalidate?: number
}

export async function apiFetch<T>(
  endpoint: string,
  options: FetchOptions = {}
): Promise<T> {
  const { tags, revalidate, ...fetchOptions } = options
  const res = await fetch(`${API_URL}/api/v1${endpoint}`, {
    headers: {
      'Content-Type': 'application/json',
      ...fetchOptions.headers,
    },
    next: {
      ...(tags ? { tags } : {}),
      ...(revalidate !== undefined ? { revalidate } : {}),
    },
    ...fetchOptions,
  })

  if (!res.ok) {
    const error = await res.json().catch(() => ({ message: res.statusText }))
    throw new Error(error.message || 'API Error')
  }

  return res.json()
}
