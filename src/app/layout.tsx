import { Inter } from 'next/font/google'

import '@/styles/globals.css'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { FooterCTA } from '@/components/FooterCTA'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body className={inter.className}>
        <Navbar />
        {children}
        <FooterCTA />
        <Footer />
      </body>
    </html>
  )
}
