import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'iSpeak Africa Languages - Connect Across Cultures',
  description: 'Learn, translate, and connect with African languages and communities',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
