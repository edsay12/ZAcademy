// import { nextOptions } from "@/lib/auth";
// import NextAuth from "next-auth";

import { NextRequest, NextResponse } from "next/server";

// const handdle = NextAuth(nextOptions);

// export {handdle as GET, handdle as POST}
export async function GET(req: NextRequest) {
  return NextResponse.json({ error: "tudo certo" }, { status: 200 });
}
