import { revalidatePath, revalidateTag } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get('secret')
  if (secret !== process.env.REVALIDATION_SECRET) {
    return NextResponse.json({ error: 'Invalid secret' }, { status: 401 })
  }
  const { path, tag } = await request.json()
  if (path) revalidatePath(path)
  if (tag) revalidateTag(tag)
  return NextResponse.json({ revalidated: true, now: Date.now() })
}
