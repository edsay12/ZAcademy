import { db } from "@/lib/db";


import { NextRequest, NextResponse } from "next/server";
import { Course } from "../../../all/route";

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
    const couses= await db.stared.findMany({
      where: {
        userId: userId,
      },
      include: {
        course:{
          include:{
            Stared:true
          }
        },
        user:true,
      },
    });
    
    const courseDetails = couses.map(stared => ({
        course: stared.course,
        user: stared.user,
      }));

    return NextResponse.json({ data: courseDetails }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ data: error }, { status: 500 });
  }
}
