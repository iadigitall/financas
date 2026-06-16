import { Inter } from 'next/font/google'
import LenisProvider from '@/components/LenisProvider'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata = {
  title: 'Finanças — Controle Financeiro Inteligente',
  description: 'Controle financeiro inteligente. Saiba exatamente para onde vai cada centavo do seu dinheiro.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body>
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  )
}
