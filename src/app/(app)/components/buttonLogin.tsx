import { SignIn } from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'

export default function ButtonLogin() {
  return (
    <Link
      href="/auth/sign-in"
      className="group flex items-center duration-300 space-x-2 text-slate-100 hover:text-slate-200"
      aria-label="Fazer login"
    >
      <span className="text-sm">Fazer login</span>
      <SignIn className="text-green-500 group-hover:text-green-700" />
    </Link>
  )
}
