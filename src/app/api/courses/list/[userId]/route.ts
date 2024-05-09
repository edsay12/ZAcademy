import { db } from "@/lib/db";
import { Course } from "@prisma/client";

import { NextRequest, NextResponse } from "next/server";


export async function GET(
  req: NextRequest,
  { params }: { params: { userId: string } }
) {
  const { userId } = params;

  const isUserExists = await db.user.findUnique({
    where: {
      id: userId,
    },
  });

  if (!isUserExists) {
    return NextResponse.json({ data: "user id not found" }, { status: 400 });
  }
  try {
    const couses = await db.course.findMany({
      where: {
        userId: userId,
      },
    });
    return NextResponse.json({ data: couses }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ data: error }, { status: 500 });
  }
}
