import { Inter, JetBrains_Mono } from 'next/font/google'
import { Toaster } from 'sonner'
import './globals.css'
import { Metadata } from 'next'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
})

export const metadata: Metadata = {
  title: 'SoftBake.dev',
  description: 'Baking Innovation in the Cloud',
  icons: {
    icon: [
      {
        url: '/logo.ico',
        sizes: '32x32',
        type: 'image/x-icon',
      },
      {
        url: '/logo-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        url: '/logo-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
    ],
    apple: [
      {
        url: '/apple-touch-logo.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
    other: [
      {
        rel: 'android-chrome-192x192',
        url: '/android-chrome-192x192.png',
      },
      {
        rel: 'android-chrome-512x512',
        url: '/android-chrome-512x512.png',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        {/* <style>{`
          :root {
            --font-inter: ${inter.style.fontFamily};
            --font-jetbrains-mono: ${jetbrainsMono.style.fontFamily};
          }
          body {
            font-family: var(--font-inter);
          }
          code, pre {
            font-family: var(--font-jetbrains-mono);
          }
        `}</style> */}
      </head>
      <body>
        <Toaster />
        {children}
      </body>
    </html>
  )
}