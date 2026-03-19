import type { Metadata } from "next"
import "./globals.css"
import Footer from "../components/layout/Footer"
import Header from "../components/layout/Header"

const siteUrl = "https://worldspeak.pl"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Worldspeak | Szkoła językowa w Warszawie",
  description:
    "Worldspeak to szkoła językowa w Warszawie. Zajęcia online i stacjonarne dla dzieci, młodzieży i dorosłych.",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        type: "image/x-icon",
      },
      {
        url: "/icon.png",
        type: "image/png",
      },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Worldspeak | Szkoła językowa w Warszawie",
    description:
      "Zajęcia online i stacjonarne dla dzieci, młodzieży i dorosłych.",
    url: siteUrl,
    siteName: "Worldspeak",
    locale: "pl_PL",
    type: "website",
    images: [
      {
        url: "/logo.jpg",
      },
    ],
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
