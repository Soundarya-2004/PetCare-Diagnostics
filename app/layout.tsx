import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Pet Care Education',
  description: 'A collection of resources and information to help you take care of your pets.',
  keywords: ['pet care', 'education', 'resources', 'dogs', 'cats'],
  generator: 'v.dev',

}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
