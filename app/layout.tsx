import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Austin Xu — Full-Stack Developer',
  description:
    'Full-stack developer focused on iOS, Laravel, and data-driven systems. Building real-world applications with a systems-first mindset.',
  keywords: [
    'Austin Xu',
    'Full-Stack Developer',
    'iOS Developer',
    'Laravel',
    'Next.js',
    'Data Engineering',
    'SwiftUI',
    'System Design',
  ],
  authors: [{ name: 'Austin Xu' }],
  openGraph: {
    title: 'Austin Xu — Full-Stack Developer',
    description: 'Building systems, not just apps.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Austin Xu — Full-Stack Developer',
    description: 'Building systems, not just apps.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-black text-white antialiased">{children}</body>
    </html>
  )
}
