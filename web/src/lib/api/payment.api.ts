import { apiFetch } from './client'

interface PaymentIntent {
  clientSecret: string
  paymentIntentId: string
}

export const paymentApi = {
  createIntent: (amount: number, currency = 'eur'): Promise<PaymentIntent> =>
    apiFetch<PaymentIntent>('/payment/create-intent', {
      method: 'POST',
      body: JSON.stringify({ amount, currency }),
    }),
}
