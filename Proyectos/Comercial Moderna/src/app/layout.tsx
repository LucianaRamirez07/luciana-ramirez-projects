import type { Metadata } from 'next'
import { Inter, Fustat } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const fustat = Fustat({
  subsets: ['latin'],
  weight: ['400', '700', '800'],
  variable: '--font-fustat',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Comercial Moderna | Regalos Empresariales Medellín',
    template: '%s | Comercial Moderna',
  },
  description: 'Soluciones corporativas personalizadas: regalos empresariales, productos publicitarios y kits escolares. Medellín, Colombia.',
  metadataBase: new URL('https://www.comercialmoderna.com'),
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    url: 'https://www.comercialmoderna.com',
    siteName: 'Comercial Moderna',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${fustat.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
