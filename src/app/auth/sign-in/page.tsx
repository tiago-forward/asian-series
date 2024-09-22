"use client"

import { Button } from "@/components/ui/button";
import Image from "next/image";

import CapaSignIn from "@/assets/images/capa-sign-in.jpg"
import { Heart } from "@phosphor-icons/react";

export default function SignInPage() {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="text-center">
        <span className="font-bold text-xl">AsianSeries</span>
        <Image src={CapaSignIn} alt={"Demonstração de algumas séries"} height={400} className="w-full rounded-lg" />
      </div>
      <form action="" className="mt-4">
        <h2 className="text-slate-100 text-xl">Boas vindas!</h2>
        <p className="text-slate-200 mb-10">Faça seu login ou acesse como visitante.</p>
        <div className="flex flex-col gap-4">
          <Button className="bg-slate-600 flex justify-start gap-4 hover:bg-slate-700">
            <Heart />
            Entrar com Google
          </Button>
          <Button className="bg-slate-600 flex justify-start gap-4 hover:bg-slate-700">
            <Heart />
            Entrar com GitHub</Button>
          <Button className="bg-slate-600 flex justify-start gap-4 hover:bg-slate-700">
            <Heart />
            Acessar como visitante
          </Button>
        </div>
      </form>
    </div>
  )
}
