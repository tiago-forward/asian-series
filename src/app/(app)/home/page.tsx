import { getServerSession } from 'next-auth';
import HomeClient from '@/app/(app)/home/components/homeClient'

export default async function HomePage() {
  // Obter a sessão de utilizador no lado do servidor
  const session = await getServerSession()

  // Passar o nome do utilizador autenticado (se existir) como prop para o componente de cliente
  const userName = session?.user?.name || null

  return <HomeClient userName={userName} />
}
