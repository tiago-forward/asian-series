import { PrismaAdapter } from "@auth/prisma-adapter"
import { AuthOptions } from "next-auth"
// import { Adapter } from "next-auth/adapters"
import GitHubProvider from "next-auth/providers/github"
// import GoogleProvider from "next-auth/providers/google"

import { prisma } from "./prisma"

export const authOptions: AuthOptions = {
//   adapter: PrismaAdapter(prisma) as Adapter,
  debug: true,
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID ?? "",
      clientSecret: process.env.GITHUB_SECRET ?? "",
    }),
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_ID ?? "",
    //   clientSecret: process.env.GOOGLE_SECRET ?? "",
    //   authorization: {
    //     params: {
    //       prompt: "consent",
    //       access_type: "offline",
    //       response_type: "code",
    //       scope:
    //         "https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email",
    //     },
    //   },
    // }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async session({ session, user }) {
      return {
        ...session,
        user,
      }
    },
  },
}
