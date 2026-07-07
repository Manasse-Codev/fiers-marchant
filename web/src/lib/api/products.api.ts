import { apiFetch } from './client'
import { Product } from '@/types/product.types'

interface ProductQuery {
  page?: string
  category?: string
  q?: string
}

export const productsApi = {
  getAll: (query: ProductQuery = {}): Promise<Product[]> => {
    const params = new URLSearchParams(query as Record<string, string>).toString()
    return apiFetch<Product[]>(`/products${params ? `?${params}` : ''}`, {
      tags: ['products'],
      revalidate: 60,
    })
  },

  getBySlug: (slug: string): Promise<Product | null> =>
    apiFetch<Product>(`/products/slug/${slug}`, {
      tags: [`product-${slug}`],
      revalidate: 60,
    }).catch(() => null),

  getById: (id: string): Promise<Product> =>
    apiFetch<Product>(`/products/${id}`),

  create: (data: Partial<Product>): Promise<Product> =>
    apiFetch<Product>('/products', { method: 'POST', body: JSON.stringify(data) }),

  update: (id: string, data: Partial<Product>): Promise<Product> =>
    apiFetch<Product>(`/products/${id}`, { method: 'PATCH', body: JSON.stringify(data) }),

  delete: (id: string): Promise<void> =>
    apiFetch<void>(`/products/${id}`, { method: 'DELETE' }),
}
