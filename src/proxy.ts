import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"

const CANONICAL_HOST = "worldspeak.pl"
const LEGACY_HOSTS = new Set(["wordspeak.pl", "www.wordspeak.pl"])

export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone()
  const host = request.headers.get("host")
  const normalizedHost = host?.toLowerCase().split(":")[0]
  const forwardedProto = request.headers.get("x-forwarded-proto")

  if (
    normalizedHost === `www.${CANONICAL_HOST}` ||
    (normalizedHost && LEGACY_HOSTS.has(normalizedHost))
  ) {
    url.host = CANONICAL_HOST
    url.protocol = "https"
    return NextResponse.redirect(url, 308)
  }

  if (normalizedHost === CANONICAL_HOST && forwardedProto === "http") {
    url.protocol = "https"
    return NextResponse.redirect(url, 308)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|icon.png|apple-icon.png|.*\\..*).*)",
  ],
}
