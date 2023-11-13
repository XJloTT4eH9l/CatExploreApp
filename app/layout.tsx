import type { Metadata } from 'next'
import { Jost } from 'next/font/google';
import { Navigation, Header } from '@/components';
import './globals.scss';

export const metadata: Metadata = {
  title: 'Cat explore app',
  description: 'Discover cats',
}
const jost = Jost({
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={jost.className}>
      <body>
        <div className="container">
          <div className="left">
            <Header />
            <Navigation />
          </div>
          {children}
        </div>
      </body>
    </html>
  )
}
