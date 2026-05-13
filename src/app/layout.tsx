import { ClerkProvider } from '@clerk/nextjs'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Nexus Brain - SaaS de Elite',
  description: 'Gerenciamento inteligente via Termux',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="pt-br">
        <body className={`${inter.className} bg-slate-950 text-white antialiased`}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
