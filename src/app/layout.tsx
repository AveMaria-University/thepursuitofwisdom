import './globals.css'
import type { Metadata } from 'next'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'The Pursuit of Wisdom by Ave Maria University',
  description: 'Watch short online courses from Ave Maria\'s esteemed faculty with practical insights to help you live a more inspired, meaningful, and joyful life',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  )
}
