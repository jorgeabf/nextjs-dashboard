import './ui/global.css'
import { primaryFont } from './ui/fonts'

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='es'>
      <title>Next 14 Tutorial</title>
      <body className={`${primaryFont.className} antialiased font-semibold`}>
        {children}
      </body>
    </html>
  )
}
