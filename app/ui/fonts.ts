import { Poppins } from 'next/font/google'
import { Lusitana } from 'next/font/google'

export const primaryFont = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
})

export const lusitana = Lusitana({ subsets: ['latin'], weight: ['400', '700'] })
