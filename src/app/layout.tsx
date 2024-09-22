import type { Metadata } from 'next'
import './globals.css'
import { Nunito } from 'next/font/google'

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
})

export const metadata: Metadata = {
  title: 'asian-series',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${nunito.className} antialiased`}>{children}</body>
    </html>
  )
}
