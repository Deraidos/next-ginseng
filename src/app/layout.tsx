import '../styles/globals.css'
import { Inconsolata } from 'next/font/google'

const inconsolata = Inconsolata({ subsets: ['latin'] })

export const metadata = {
  title: 'Ginseng Strip',
  description: 'Ginseng Strip. Selling Silk to Pay the Milk',
}

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inconsolata.className}>{children}</body>
    </html>
  )
}
