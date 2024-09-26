// import { NextResponse } from "next/server"
// import { prisma } from "@/lib/prisma"

// export async function GET(request: Request) {
//   const { searchParams } = new URL(request.url)
//   const userId = searchParams.get('userId')

//   if (!userId) {
//     return NextResponse.json({ error: 'Missing userId' }, { status: 400 })
//   }

//   const user = await prisma.user.findUnique({
//     where: {
//       id: String(userId),
//     },
//   })

//   if (!user) {
//     return NextResponse.json({ error: 'User not found' }, { status: 404 })
//   }

//   return NextResponse.json(user, { status: 200 })
// }

// // Adicionando o método POST para salvar o usuário
// export async function POST(request: Request) {
//   const body = await request.json()

//   const { name, avatar_url } = body

//   if (!name) {
//     return NextResponse.json({ error: 'Name is required' }, { status: 400 })
//   }

//   // Criação do usuário no banco de dados usando o Prisma
//   const user = await prisma.user.create({
//     data: {
//       name,
//       avatar_url: avatar_url || null, // Avatar é opcional
//     },
//   })

//   return NextResponse.json(user, { status: 201 })
// }




import { NextRequest } from "next/server"

import { UrlParams } from "@/@types"
import { prisma } from "@/lib/prisma"

export async function GET(request: NextRequest, { params }: UrlParams<"id">) {
  const book = request.nextUrl.searchParams.get("book") ?? ""

  const user = await prisma.user.findUnique({
    where: {
      id: params.id,
    },
  })

  if (!user) {
    return Response.json({ message: "user nao encontrado" }, { status: 404 })
  }

  // const ratings = await prisma.rating.findMany({
  //   where: {
  //     userId: user.id,
  //     book: {
  //       name: {
  //         contains: book,
  //       },
  //     },
  //   },
  //   select: {
  //     id: true,
  //     description: true,
  //     rate: true,
  //     createdAt: true,
  //     book: {
  //       select: {
  //         id: true,
  //         name: true,
  //         author: true,
  //         coverUrl: true,
  //       },
  //     },
  //   },
  //   orderBy: {
  //     createdAt: "desc",
  //   },
  // })

  // const { _count: count, _sum: sum } = await prisma.book.aggregate({
  //   where: {
  //     ratings: {
  //       some: {
  //         userId: user.id,
  //       },
  //     },
  //   },
  //   _sum: {
  //     totalPages: true,
  //   },
  //   _count: {
  //     _all: true,
  //   },
  // })

  // const countCategory = await prisma.categoriesOnBooks.groupBy({
  //   by: ["categoryId"],
  //   where: {
  //     book: {
  //       ratings: {
  //         some: {
  //           userId: user.id,
  //         },
  //       },
  //     },
  //   },
  //   _count: {
  //     categoryId: true,
  //   },
  //   orderBy: {
  //     _count: {
  //       categoryId: "desc",
  //     },
  //   },
  //   take: 1,
  // })

  // let category: { name: string } | null = null

  // if (countCategory.length > 0) {
  //   category = await prisma.category.findUnique({
  //     where: {
  //       id: countCategory[0].categoryId,
  //     },
  //     select: {
  //       name: true,
  //     },
  //   })
  // }

  return Response.json({
    user,
    // category: category?.name ?? undefined,
    // books: count._all,
    // pages: sum.totalPages ?? 0,
    // ratings,
  })
}
