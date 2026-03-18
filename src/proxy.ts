import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"

const CANONICAL_HOST = "wordspeak.pl"

export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone()
  const host = request.headers.get("host")
  const forwardedProto = request.headers.get("x-forwarded-proto")

  if (host === `www.${CANONICAL_HOST}`) {
    url.host = CANONICAL_HOST
    url.protocol = "https"
    return NextResponse.redirect(url, 308)
  }

  if (host === CANONICAL_HOST && forwardedProto === "http") {
    url.protocol = "https"
    return NextResponse.redirect(url, 308)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|icon.jpg|apple-icon.jpg|.*\\..*).*)",
  ],
}
