'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'

import capaSignIn from '@/assets/images/capa-sign-in.jpg'
import googleIcon from '@/assets/icons/google-icon.svg'
import githubIcon from '@/assets/icons/github-icon.svg'
import { PersonSimpleRun } from '@phosphor-icons/react/dist/ssr'
import { signIn } from 'next-auth/react'
// import { Form, useForm } from 'react-hook-form'

export default function SignInPage() {
  function handleSignIn(provider: string) {
    signIn(provider, { callbackUrl: '/' })
  }

  // const { handleSubmit } = useForm()

  // async function handleLoginAccount(data: any) {
  //   console.log(data)
  // }

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

      {/* onSubmit={handleSubmit(handleLoginAccount)} */}
      <form onSubmit={(e) => e.preventDefault()} className="mt-4">
        <h2 className="text-slate-100 text-xl">Boas vindas!</h2>
        <p className="text-slate-200 mb-10">
          Faça seu login ou acesse como visitante.
        </p>
        <div className="flex flex-col gap-4">
          <Button
            onClick={() => handleSignIn('google')}
            className="bg-slate-600 flex justify-start gap-4 hover:bg-slate-700"
          >
            <Image src={googleIcon} alt="" className="size-4" />
            <span className="">Entrar com Google</span>
          </Button>
          <Button
            onClick={() => handleSignIn('github')}
            className="bg-slate-600 flex justify-start gap-4 hover:bg-slate-700"
          >
            <Image src={githubIcon} alt="" className="size-4" />
            <span className="">Entrar com GitHub</span>
          </Button>
          <Button
            className="bg-slate-600 flex justify-start gap-4 hover:bg-slate-700"
          >
            <PersonSimpleRun className="size-4" />
            <span className="">Acessar como visitante</span>
          </Button>
        </div>
      </form>
    </div>
  )
}
