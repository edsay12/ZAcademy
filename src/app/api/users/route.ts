// import { db } from "@/lib/db";
// import { NextRequest, NextResponse } from "next/server";
// import { hash } from "bcrypt";

import { NextRequest, NextResponse } from "next/server";

// export async function POST(req: NextRequest) {
//   const data = await req.json();
  
  
 
//   const { name, email, password } = data;
  
//   if (!name || !email || !password) {
//     return NextResponse.json({error:"Dados Invalidos"}, { status: 400 });
//   }

//   const isUserExists = await db.user.findUnique({
//     where: {
//       email: email,
//     },
//   });

//   if (isUserExists) {
//     return NextResponse.json({error:"email ja cadastrado"}, { status: 400 });
//   }

//   const hashedPassword = await hash(password, 10);

//   const user = await db.user.create({
//     data: {
//       email,
//       name,
//       hashedPassword,
//     },
//   });

//   return NextResponse.json({user});
// }


export async function GET(req: NextRequest){

  return  NextResponse.json({error:"tudo certo"}, { status: 200 })

}