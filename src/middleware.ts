import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === '/maintenance' || pathname === '/' && request.nextUrl.hash === '#contact') {
    return NextResponse.next();
  }

  if (pathname === '/') {
    return NextResponse.redirect(new URL('/maintenance', request.url));
  }

  return NextResponse.redirect(new URL('/maintenance', request.url));
}

export const config = {
  matcher: '/((?!_next|api|favicon.ico|.*\\..*).)*',
};
