import { db } from "@/lib/db";
import { Course, Module } from "@prisma/client";
import { NextResponse, NextRequest } from "next/server";

export async function POST(
  req: NextRequest,
  { params }: { params: { courseId: string } }
) {
  const { courseId } = params;
  const data = await req.formData();

  const title = data.get("titulo") as string;

  const isCourseExists = await db.course.findUnique({
    where: {
      id: courseId,
    },
  });

  if (!title) {
    return NextResponse.json(
      { data: "titulo deve ser adicionado" },
      { status: 400 }
    );
  }
  if (!isCourseExists) {
    return NextResponse.json({ data: "couser id not found" }, { status: 400 });
  }

  try {
    const moduleData = await db.module.create({
      data: {
        courseId: courseId,
        title: title,
      },
    });

    return NextResponse.json({ data: moduleData }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ data: error }, { status: 500 });
  }
}
