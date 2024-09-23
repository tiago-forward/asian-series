"use client"

import { usePathname } from "next/navigation"
import Link, { LinkProps } from "next/link"
import { ReactNode } from "react"

export interface NavLinkProps extends LinkProps {
  children: ReactNode
  href: string
}

export const NavLink = ({ children, href, ...props }: NavLinkProps) => {
  const pathname = usePathname()

  const isActive = pathname === href

  return (
    <Link
      href={href} className={`flex items-center gap-3 py-2 hover:text-slate-100 ${isActive ? "text-slate-100 before:border-l-2 before:border-white before:border-2 before:h-4" : "text-slate-300 before:border-l-2git"} duration-300`}
      {...props}
    >
      {children}
    </Link>
  )
}
