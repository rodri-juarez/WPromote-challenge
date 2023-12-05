import {Inter} from 'next/font/google'
import '../style/globals.css'
import Providers from './lib/core/providers'
import {Metadata} from 'next'

export const metadata: Metadata = {
  title: 'WPromote Shop',
  description: 'Find the best articles and all you need.',
}

const inter = Inter({subsets: ['latin']})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
