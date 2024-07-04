import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from '@/components/ui/toaster'
import { CommandBar } from '@/components/command'
import PlayerProvider from '@/components/PlayerProvider'
import SearchProvider from '@/components/search/SearchProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Music App',
  description: 'Music Application with super powers',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CommandBar />
        <PlayerProvider>
          <SearchProvider>
            {children}
          </SearchProvider>
        </PlayerProvider>
        <Toaster />
      </body>
    </html>
  )
}
