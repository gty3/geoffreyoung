import "./globals.css"
import { Inter } from "next/font/google"
import { Analytics } from '@vercel/analytics/react'
import Header from "./header"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Geoffrey Young",
  description: "Geoff's developer portfolio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
