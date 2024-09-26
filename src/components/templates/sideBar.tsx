import { Binoculars, ChartLineUp, User } from '@phosphor-icons/react/dist/ssr'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import Image from 'next/image'
import ButtonLogin from '@/app/(app)/components/buttonLogin'
import ButtonLogout from '@/app/(app)/components/buttonLogout'
import { NavLink } from '@/app/(app)/components/navLink'


export default async function SideBar() {
  // Obter a sessão de utilizador
  const session = await getServerSession()

  // Verificar se o utilizador está autenticado ou é um visitante
  if (!session && typeof window !== "undefined") {
    const queryParams = new URLSearchParams(window.location.search)
    console.log(queryParams)
    const isVisitor = queryParams.get('name') === 'Visitante'

    if (!isVisitor) {
      // Se não for visitante e não houver sessão, redireciona para sign-in
      redirect('/auth/sign-in')
    }

  }

  return (
    <aside className="col-span-1 gradient-vertical rounded-xl min-h-[95vh] py-9 flex flex-col justify-between">
    <header className="text-center space-y-10">
        <span>AsianSeries</span>
        <nav className="pl-7">
        <ul className="flex flex-col items-start">
            <li>
            <NavLink href='/home'>
                <ChartLineUp />
                <span>Início</span>
            </NavLink>
            </li>
            <li>
            <NavLink href='/explore'>
                <Binoculars />
                <span>Explorar</span>
            </NavLink>
            </li>
            <li>
            <NavLink href='/profile'>
                <User />
                <span>Perfil</span>
            </NavLink>
            </li>
        </ul>
        </nav>
    </header>
    <footer className="flex items-center justify-center gap-2">
        {session ? (
        <>
            <Image
            src={session.user?.image}
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
  )
}
