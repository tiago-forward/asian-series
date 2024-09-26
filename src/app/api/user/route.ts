import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(req: Request) {
  try {
    // Parse do corpo da requisição para obter os dados
    const { name, avatar_url } = await req.json()

    // Criação do utilizador na base de dados
    const newUser = await prisma.user.create({
      data: {
        name,
        avatar_url,
      },
    })

    // Retorna a resposta com sucesso (201)
    return NextResponse.json(newUser, { status: 201 })
  } catch (error) {
    console.error('Erro ao criar usuário visitante:', error)
    return NextResponse.json({ message: 'Erro ao criar usuário' }, { status: 500 })
  }
}
