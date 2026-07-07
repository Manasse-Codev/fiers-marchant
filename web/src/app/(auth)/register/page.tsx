import type { Metadata } from 'next'
import { RegisterForm } from '@/components/features/auth/register-form'

export const metadata: Metadata = { title: 'Créer un compte' }

export default function RegisterPage() {
  return <RegisterForm />
}
