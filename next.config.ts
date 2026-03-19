import path from "node:path"
import { fileURLToPath } from "node:url"
import type { NextConfig } from "next"

const rootDir = path.dirname(fileURLToPath(import.meta.url))

const securityHeaders = [
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=31536000; includeSubDomains; preload",
  },
]

const nextConfig: NextConfig = {
  turbopack: {
    root: rootDir,
  },
  async redirects() {
    return [
      {
        source: "/kontakt",
        destination: "/#kontakt",
        permanent: true,
      },
      {
        source: "/o-nas",
        destination: "/#dlaczegomy",
        permanent: true,
      },
      {
        source: "/konwersacje-online",
        destination: "/zajecia-online",
        permanent: true,
      },
      {
        source: "/kursy-indywidualne",
        destination: "/#kontakt",
        permanent: true,
      },
      {
        source: "/kursy-grupowe",
        destination: "/#dlaczegomy",
        permanent: true,
      },
      {
        source: "/dla-firm",
        destination: "/#kontakt",
        permanent: true,
      },
      {
        source: "/przedszkola",
        destination: "/#kontakt",
        permanent: true,
      },
      {
        source: "/egzaminy",
        destination: "/#faq",
        permanent: true,
      },
    ]
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ]
  },
}

export default nextConfig
