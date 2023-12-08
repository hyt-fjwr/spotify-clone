import type { Metadata } from 'next'
import { Noto_Sans_JP } from 'next/font/google'
import './globals.css'
import Sidebar from '@/components/Siderbar'

const font = Noto_Sans_JP({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Spotify Clone',
  description: 'Full Stack Spotify Clone with Next.js 14, React, Stripe, Supabase, PostgreSQL, TailwindCSS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={font.className}>
      <Sidebar>
        {children}
      </Sidebar>
      </body>
    </html>
  )
}
