import type { Metadata } from 'next'
import { Fraunces, Crimson_Pro, Manrope } from 'next/font/google'
import './globals.css'

const fraunces = Fraunces({ 
  subsets: ['latin'],
  weight: ['300', '600', '700', '900'],
  variable: '--font-display',
  display: 'swap',
})

const crimsonPro = Crimson_Pro({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'CedarRX | Expert Compounding Pharmacy in Twin Falls, ID',
  description: 'Personalized medications crafted by expert pharmacists for your unique health needs. Compounding, weight loss, dermatology, and more in Twin Falls, Idaho.',
  keywords: 'compounding pharmacy, Twin Falls pharmacy, personalized medication, weight loss, dermatology, erectile dysfunction, home delivery',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${crimsonPro.variable} ${manrope.variable}`}>
      <body className={manrope.className}>{children}</body>
    </html>
  )
}
