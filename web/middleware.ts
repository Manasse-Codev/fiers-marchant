import { auth } from '@/lib/auth/auth'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  const session = await auth()
  const { pathname } = request.nextUrl

  // Routes protégées - non authentifié → /login
  if (!session) {
    if (
      pathname.startsWith('/admin') ||
      pathname.startsWith('/cashier') ||
      pathname.startsWith('/account') ||
      pathname === '/checkout'
    ) {
      return NextResponse.redirect(new URL('/login', request.url))
    }
  }

  // Routes admin - rôle insuffisant → /
  if (session && pathname.startsWith('/admin')) {
    if (session.user?.role !== 'ADMIN') {
      return NextResponse.redirect(new URL('/', request.url))
    }
  }

  // Routes caissier - rôle insuffisant → /
  if (session && pathname.startsWith('/cashier')) {
    if (session.user?.role !== 'ADMIN' && session.user?.role !== 'CASHIER') {
      return NextResponse.redirect(new URL('/', request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/admin/:path*',
    '/cashier/:path*',
    '/account/:path*',
    '/checkout',
  ],
}
