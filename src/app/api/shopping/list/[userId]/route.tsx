import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { userId: string } }
) {
  const isUserExists = db.user.findUnique({
    where: {
      id: params.userId,
    },
  });

  if (!isUserExists) {
    return NextResponse.json(
      { data: "id do curso inexistente" },
      { status: 404 }
    );
  }

  const data = await db.shopping.findMany({
    where:{
        userId:params.userId
    }
  })

  return NextResponse.json({data},{status:200})


}
