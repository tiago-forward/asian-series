'use client'

interface HomeClientProps {
  userName: string | null
}

export default function HomeClient({ userName }: HomeClientProps) {
  // Usar o nome da sessão ou o nome do visitante
  const name = userName || 'Visitante'

  return (
    <div>
      <h1>Bem-vindo à página Home, {name}!</h1>
    </div>
  )
}
