import nextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      role: string | null;
    } & User;
  }
  interface User {
    role: string | null;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role: string | null;
  }
}
