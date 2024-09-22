"use client"

import { signOut } from "next-auth/react"
import { Button } from "@/components/ui/button"

export default function ButtonLogout() {
    function handleSignOut() {
      signOut()
    }

    return <Button onClick={() => handleSignOut()}>Logout</Button>
}
