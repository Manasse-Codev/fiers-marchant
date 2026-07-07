import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Réinitialiser le mot de passe' }

export default function ResetPasswordPage({
  searchParams,
}: {
  searchParams: { token?: string }
}) {
  return (
    <div>
      <h1>Réinitialiser le mot de passe</h1>
      {/* ResetPasswordForm - token: {searchParams.token} */}
    </div>
  )
}
