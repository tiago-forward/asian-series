import { getServerSession } from 'next-auth'
import ButtonLogout from './components/buttonLogout'

export default async function Home() {
  const session = await getServerSession()

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {session?.user?.name ? (
        <>
          <span>Olá {session?.user?.name}</span>
          <ButtonLogout />
        </>
      ) : (
        <span>Você desconectou!</span>
      )}
    </div>
  )
}
