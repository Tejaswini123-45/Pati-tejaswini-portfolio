import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pati Tejaswini — Developer Portfolio',
  description: 'Full-stack developer building AI-powered products, data systems, and practical software.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>
}
