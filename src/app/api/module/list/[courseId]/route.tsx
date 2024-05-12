import { db } from "@/lib/db";


import { NextRequest, NextResponse } from "next/server";


export async function GET(
  req: NextRequest,
  { params }: { params: { courseId: string } }
) {
  const { courseId } = params;

  const isCourseExists = await db.course.findUnique({
    where: {
      id: courseId,
    },
  });

  if (!isCourseExists) {
    return NextResponse.json({ data: "course id not found" }, { status: 400 });
  }
  try {
    const couses = await db.module.findMany({
      where: {
        courseId: courseId,
      },
    });
    return NextResponse.json({ data: couses }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ data: error }, { status: 500 });
  }
}
