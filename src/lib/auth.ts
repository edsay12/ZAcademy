import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { compare } from "bcrypt";
import { db } from "./db";

export const nextOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "jssmith" },
        password: { label: "Password", type: "password" },
        username: { label: "Name", type: "text", placeholder: "jhon lenon" },
      },

      async authorize(credentials, req): Promise<any> {
        if (!credentials?.email || !credentials.password) {
          throw new Error("Dados nulos");
        }
        const user = await db.user.findUnique({
          where: {
            email: credentials?.email,
          },
        });

        if (!user || !user.hashedPassword) {
          throw new Error("usuario ou senha incorretos");
        }
        const machPassword = await compare(
          credentials.password,
          user.hashedPassword
        );

        if (!machPassword) {
          throw new Error("Login ou senha incorretos");
        } else {
          return user;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  debug: true,
  secret: process.env.SESSION_SECRET,
  pages: {
    signIn: "/auth",
    signOut: "/", // Definindo a Pagina de Login.
  },
  callbacks: {
    jwt({ user, account, token }) {
      if (user) {
        token.role = user.role;
        if (user?.id) {
          token.id = user.id;
        }
      }
      return token;
    },
    session({ session, token }) {
      session.user.id = token.id

      session.user.role = token.role;
      return session;
    },
  },
};
