// import { redirect } from "next/navigation";

import { Binoculars, ChartLineUp, User } from '@phosphor-icons/react/dist/ssr'
import ButtonLogout from './components/buttonLogout'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import Image from 'next/image'
import ButtonLogin from './components/buttonLogin'

export default async function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // if (!isAuthenticated()) {
  //   redirect('/auth/sign-in')
  // }

  const session = await getServerSession()

  if (!session) {
    redirect('/auth/sign-in')
  }

  return (
    <div className="grid grid-cols-6 py-4 px-4">
      <aside className="col-span-1 gradient-vertical rounded-xl min-h-[95vh] py-9 flex flex-col justify-between">
        <header className="text-center space-y-10">
          <span>AsianSeries</span>
          <nav className="pl-7">
            <ul className="flex flex-col items-start">
              <li>
                <a
                  href="#"
                  className="flex items-center gap-3 py-2 text-slate-300 hover:text-slate-100"
                >
                  <ChartLineUp />
                  <span>Início</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-3 py-2 text-slate-300 hover:text-slate-100"
                >
                  <Binoculars />
                  <span>Explorar</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-3 py-2 text-slate-300 hover:text-slate-100"
                >
                  <User />
                  <span>Perfil</span>
                </a>
              </li>
            </ul>
          </nav>
        </header>
        <footer className="flex items-center justify-center gap-2">
          {session ? (
            <>
              <Image
                src={session.user.image}
                alt="Avatar"
                width={32}
                height={32}
                className="rounded-full"
              />
              <ButtonLogout>
                <span className="text-sm">{session?.user?.name}</span>
              </ButtonLogout>
            </>
          ) : (
            <ButtonLogin />
          )}
        </footer>
      </aside>
      {children}
    </div>
  )
}
