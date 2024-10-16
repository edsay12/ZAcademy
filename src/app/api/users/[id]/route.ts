import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import { Course } from "../../../../../prisma/generated/client";

export interface User {
  id: string;
  bio: string;
  email: string;
  name: string;
  image: string;
  role:boolean
  Course:Course[]
}

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const user = await db.user.findUnique({
    where: {
      id: params.id,
    },
    select: {
      id: true,
      bio: true,
      email: true,
      image: true,
      name: true,
      Course:true
    },
  });

  if (!user) {
    return NextResponse.json({ data: "user id not found" }, { status: 400 });
  }
  
  return NextResponse.json({ data: user }, { status: 200 });
}
