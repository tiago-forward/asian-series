'use client'

import { signOut } from 'next-auth/react'
import { Button } from '@/components/ui/button'
import { SignOut } from '@phosphor-icons/react/dist/ssr'

export default function ButtonLogout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Button
      onClick={() => signOut()}
      title="Logout"
      className="group flex items-center gap-2 bg-inherit text-slate-100 hover:text-slate-400 outline-none p-0 hover:bg-inherit"
    >
      {children}
      <SignOut className="text-rose-500 group-hover:text-rose-800 duration-300" />
    </Button>
  )
}
