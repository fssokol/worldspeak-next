import "./globals.css"
import Header from "../components/layout/Header"

export const metadata = {
  title: "Worldspeak",
  description: "Szkola jezykowa",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl">
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}