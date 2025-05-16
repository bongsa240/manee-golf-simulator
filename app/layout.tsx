import type React from "react"
import "./globals.css"
import { Inter, Playfair_Display } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Sidebar } from "@/components/sidebar"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700"],
  display: "swap",
})

export const metadata = {
  title: "Golf Simulator Reservations",
  description: "Book your premium golf simulator experience with ease",
    generator: 'v0.dev'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} bg-gray-50`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <div className="flex min-h-screen">
            <Sidebar />
            <div className="flex-1">{children}</div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
