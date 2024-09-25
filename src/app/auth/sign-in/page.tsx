'use client'

import Image from 'next/image'
import capaSignIn from '@/assets/images/capa-sign-in.jpg'
import { SignInOptions } from './components/sign-in-options'

export default function SignInPage() {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="text-center">
        <span className="font-bold text-xl">AsianSeries</span>
        <Image
          src={capaSignIn}
          alt={'Demonstração de algumas séries'}
          height={400}
          className="w-full rounded-lg"
        />
      </div>

      <section className="mt-4">
        <h2 className="text-slate-100 text-xl">Boas vindas!</h2>
        <p className="text-slate-200 mb-10">
          Faça seu login ou acesse como visitante.
        </p>
        <SignInOptions />
      </section>
    </div>
  )
}
