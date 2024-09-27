import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth, { AuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import { prisma } from "./prisma";

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma), // Usando o PrismaAdapter
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID ?? "",
      clientSecret: process.env.GITHUB_SECRET ?? "",
    }),
  ],
  callbacks: {
    async session({ session, user }) {
      // Adicionar o user.id à sessão
      session.user = { ...session.user, id: user.id };
      return session;
    },

    async signIn({ user, account, profile }) {
      console.log("ID do usuário GitHub:", user.id); // Log para verificar o ID retornado
      console.log("Conta GitHub:", account);         // Log para verificar a conta

      console.log("Email do GitHub:", user.email);         // Log para verificar a conta

      try {
        // Verificar se o usuário existe no banco de dados pelo e-mail
        const existingUser = await prisma.user.findUnique({
          where: {
            email: user.email,  // Verifica o usuário pelo e-mail
          },
        });

        if (!existingUser) {
          console.log("Usuário não encontrado. Será criado um novo.");
          // Se o usuário não existir, o PrismaAdapter cuida da criação
          await prisma.user.create({
            data: {
              name: user.name,
              email: user.email,
              image: user.image || "",
              emailVerified: null,
            },
          })
        } else {
          console.log("Usuário encontrado:", existingUser);
        }

        return true; // Continua o login normalmente
      } catch (error) {
        console.error("Erro ao verificar ou criar usuário:", error);
        return false; // Retorna falso se algo der errado
      }
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);