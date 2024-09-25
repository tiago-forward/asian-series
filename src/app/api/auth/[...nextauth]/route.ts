import NextAuth from 'next-auth'
import GitHubProvider, { GithubProfile } from 'next-auth/providers/github'
// import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { PrismaClient } from '@prisma/client'
// import { prisma } from '@/lib/prisma'

// const prisma = new PrismaClient()

const handler = NextAuth({
  // adapter: PrismaAdapter(prisma),

  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID ?? '',
      clientSecret: process.env.GITHUB_SECRET ?? '',
      // profile(profile: GithubProfile) {
      //   return {
      //     id: String(profile.id),
      //     name: String(profile.name),
      //     email: String(profile.email),
      //     avatar_url: String(profile.avatar_url)
      //   }
      // }
    }),
  ],
  callbacks: {
    // async session({ session, user }) {
    //   session.user.id = user.id
    //   return session
    // },
    async session({ session, user }) {
      // Adiciona o ID do usuário na sessão
      return {
        ...session,
        user
      }
    },
  },
})

export { handler as GET, handler as POST }
