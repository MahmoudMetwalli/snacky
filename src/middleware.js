import { NextResponse } from 'next/server';
import { cookies } from "next/headers";
 
export function middleware(request) {
  const cookieStore = cookies();
  const hasCookie = cookieStore.has('authjs.session-token');
  if (hasCookie) {
    if (request.nextUrl.pathname.startsWith('/login')) {
      return NextResponse.redirect(new URL('/', request.url))};
    if (request.nextUrl.pathname.startsWith('/register')) {
      return NextResponse.redirect(new URL('/', request.url))};
  return NextResponse.next();
  };
  if (request.nextUrl.pathname.startsWith('/login')) {
    return NextResponse.next();};
  if (request.nextUrl.pathname.startsWith('/register')) {
    return NextResponse.next();};
  return NextResponse.redirect(new URL('/login', request.url));
}
 
export const config = {
  matcher: ['/order', '/login', '/register']
}
