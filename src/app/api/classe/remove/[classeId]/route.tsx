import { db } from "@/lib/db";
import { Course } from "@prisma/client";
import { NextResponse, NextRequest } from "next/server";

export async function DELETE(
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
    return NextResponse.json({ data: "couser id not found" }, { status: 400 });
  }

  try {
    const couse = await db.course.delete({
      where: {
        id: courseId,
      },
    });

    return NextResponse.json({ status: 204 });
  } catch (error) {
    return NextResponse.json({ data: error }, { status: 500 });
  }
}
