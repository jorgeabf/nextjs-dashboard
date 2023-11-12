import { lusitana } from './fonts'

export default function PageTitle({ children }) {
  return (
    <h1 className={`text-4xl text-center font-bold ${lusitana.className}`}>
      {children}
    </h1>
  )
}
