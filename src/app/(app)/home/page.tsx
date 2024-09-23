import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

export default async function Home() {
  const session = await getServerSession()

  if (!session) {
    redirect('/auth/sign-in')
  }

  return <main className="col-span-5">Main</main>
}
