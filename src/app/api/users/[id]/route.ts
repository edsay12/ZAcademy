import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const user = await db.user.findUnique({
    where: {
      id: params.id,
    },
    select: {
      id:true,
      bio:true,
      email:true,
      image:true,
      name:true,
    },
  });

  if (!user) {
    return NextResponse.json({ date: "user id not found" }, { status: 400 });
  }

  return NextResponse.json({ data: user }, { status: 200 });
}
