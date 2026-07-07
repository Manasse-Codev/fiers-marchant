import { auth } from './auth'

export async function getSession() {
  return auth()
}

export async function requireAuth() {
  const session = await auth()
  if (!session) throw new Error('Non authentifié')
  return session
}

export async function requireAdmin() {
  const session = await requireAuth()
  if (session.user?.role !== 'ADMIN') throw new Error('Accès refusé')
  return session
}
