import type { Metadata } from "next"
import "./globals.css"
import Footer from "../components/layout/Footer"
import Header from "../components/layout/Header"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://worldspeak.pl"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Worldspeak | Szkoła językowa w Warszawie",
  description:
    "Worldspeak to szkoła językowa w Warszawie. Zajęcia online i stacjonarne dla dzieci, młodzieży i dorosłych.",
  openGraph: {
    title: "Worldspeak | Szkoła językowa w Warszawie",
    description:
      "Zajęcia online i stacjonarne dla dzieci, młodzieży i dorosłych.",
    url: siteUrl,
    siteName: "Worldspeak",
    locale: "pl_PL",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl">
      <body id="top">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
