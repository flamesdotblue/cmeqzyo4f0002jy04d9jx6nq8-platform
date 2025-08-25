import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Helix – AI Customer Support Agent',
  description: 'A minimalist YC-style landing page for an AI support agent that resolves tickets, chats with customers, and learns from your knowledge base.',
  icons: {
    icon: [{ url: '/favicon.ico', type: 'image/x-icon' }]
  }
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
