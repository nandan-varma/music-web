import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from '@/components/ui/toaster'
import { CommandBar } from '@/components/command'
import PlayerProvider from '@/components/PlayerProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Music App',
  description: 'Music Application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="">
          <div className="border-t">
            <div className="bg-background">
              <CommandBar />
              <PlayerProvider>
              {children}
              </PlayerProvider>
            </div>
          </div>
        </div>
        <Toaster />
      </body>
    </html>
  )
}
