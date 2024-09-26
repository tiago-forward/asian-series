'use client'

import { Button } from '@/components/ui/button'
import googleIcon from '@/assets/icons/google-icon.svg'
import githubIcon from '@/assets/icons/github-icon.svg'
import { PersonSimpleRun } from '@phosphor-icons/react/dist/ssr'
import { signIn } from 'next-auth/react'
import { api } from '@/lib/axios'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { BuiltInProviderType } from 'next-auth/providers/index'

export function SignInOptions() {
  const router = useRouter()

  // Função para lidar com login via provedores (Google ou GitHub)
  function handleSignIn(provider: BuiltInProviderType) {
    signIn(provider, { callbackUrl: '/home' })
  }

  // Função para registrar o usuário como visitante
  async function handleRegisterVisitor() {
    try {
      const response = await api.post('/user', {
        name: 'Visitante',
        avatar_url: ''
      })
      console.log('API Response:', response)  // Loga a resposta para debug
      if (response.status === 201) {
        console.log('Usuário Visitante criado com sucesso, redirecionando...')
        await router.push(`/home`)
      } else {
        console.error('Erro inesperado na criação do usuário Visitante:', response.status)
      }

    } catch (err) {
      console.log('Erro ao registrar o usuário visitante:', err)
    }
  }
  
  return (
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
      onClick={handleRegisterVisitor}
      className="bg-slate-600 flex justify-start gap-4 hover:bg-slate-700"
    >
      <PersonSimpleRun className="size-4" />
      <span className="">Acessar como visitante</span>
    </Button>
    </div>
  )
}
