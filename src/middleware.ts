import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === '/card') {
    return NextResponse.redirect(new URL('/about', request.url))
  }
}

export const config = {
  matcher: '/card',
}