import { NextRequest, NextResponse } from "next/server";

export function middleware(request:NextRequest) {
    console.log(request.nextUrl)
    
    return NextResponse.redirect(new URL('/auth/login'))
}
export const config = {
    matcher: ['/markets/:path', ],
  }