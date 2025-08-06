import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Tanzil Education and Welfare Trust",
  description: "Empowering communities through education, welfare programs, and sustainable development initiatives.",
  generator: 'v0.dev',
  icons: {
    icon: '/TEWET.png',
    shortcut: '/TEWET.png',
    apple: '/TEWET.png',
  },
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
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
