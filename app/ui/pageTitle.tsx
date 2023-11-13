import { lusitana } from './fonts'

export default function PageTitle({ children }: { children: React.ReactNode }) {
  return (
    <h1
      className={`text-5xl text-center tracking-tighter font-bold ${lusitana.className}`}
    >
      {children}
    </h1>
  )
}
