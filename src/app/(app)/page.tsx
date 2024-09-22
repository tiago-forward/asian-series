import { getServerSession } from 'next-auth'

export default async function Home() {
  const session = await getServerSession()

  return (
    <>
      <h1>Hello World</h1>
      <div>Olá {session?.user?.name}</div>
    </>
  )
}
