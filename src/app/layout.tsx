import type { ReactNode } from 'react'
import './global.css';

import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

export const metadata = {
  title: 'CALQ - UFSC',
  description: 'Centro Acadêmico Livre de Química',
  icons: {
    shortcut: '../../public/icon.svg'
  },
  themeColor: 'black',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="pt-br">
      <body>
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  )
}
