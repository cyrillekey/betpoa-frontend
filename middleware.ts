import { NextRequest, NextResponse } from "next/server";

export function middleware(request:NextRequest) {
    console.log(request.nextUrl)
    return NextResponse.redirect(new URL('/auth/login',request.url))
    
}
export const config = {
    matcher: ['/account/:path*','/admin/:path*'],
  }