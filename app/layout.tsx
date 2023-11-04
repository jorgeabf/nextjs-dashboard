import './ui/global.css'
import { primaryFont } from './ui/fonts'
import SideNav from './ui/dashboard/sidenav'

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='es'>
      <title>Next 14 Tutorial</title>
      <body className={`${primaryFont.className} antialiased`}>
        <SideNav />
        {children}
      </body>
    </html>
  )
}
