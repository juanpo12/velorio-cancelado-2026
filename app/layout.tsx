import type { Metadata } from 'next'
import { Oswald, Open_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const oswald = Oswald({
  subsets: ["latin"],
  variable: '--font-heading',
  weight: ['400', '500', '600', '700']
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: '--font-body'
});

export const metadata: Metadata = {
  title: 'Velorio Cancelado | Cristo la Solución',
  description: 'Evento cristiano de Semana Santa - 2 al 5 de Abril. ¡Cristo ha resucitado!',
  icons: {
    icon: [
      {
        url: '/crown-of-thorns.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/crown-of-thorns.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${oswald.variable} ${openSans.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
