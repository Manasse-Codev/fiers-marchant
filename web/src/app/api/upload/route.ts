import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const formData = await request.formData()
  const response = await fetch(`${process.env.API_URL}/api/v1/upload`, {
    method: 'POST',
    body: formData,
  })
  const data = await response.json()
  return NextResponse.json(data)
}
