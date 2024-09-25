import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const userId = searchParams.get('userId')

  if (!userId) {
    return NextResponse.json({ error: 'Missing userId' }, { status: 400 })
  }

  const user = await prisma.user.findUnique({
    where: {
      id: String(userId),
    },
  })

  if (!user) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 })
  }

  return NextResponse.json(user, { status: 200 })
}

// Adicionando o método POST para salvar o usuário
export async function POST(request: Request) {
  const body = await request.json()

  const { name, avatar_url } = body

  if (!name) {
    return NextResponse.json({ error: 'Name is required' }, { status: 400 })
  }

  // Criação do usuário no banco de dados usando o Prisma
  const user = await prisma.user.create({
    data: {
      name,
      avatar_url: avatar_url || null, // Avatar é opcional
    },
  })

  return NextResponse.json(user, { status: 201 })
}
