import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata = {
  title: "David Sitompul",
  description: "Portfolio David Sitompul",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={`bg-neutral-100 dark:bg-[#0a0a0a] ${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  )
}
