import { nextOptions } from "@/lib/auth";
import NextAuth from "next-auth";


const handdle = NextAuth(nextOptions);


  export {handdle as GET, handdle as POST}
