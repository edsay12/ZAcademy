import { db } from "@/lib/db";
import { Course, Module } from "@prisma/client";
import { NextResponse, NextRequest } from "next/server";

export async function POST(
  req: NextRequest,
  { params }: { params: { courseId: string } }
) {
  const { courseId } = params;
  const data = await req.json();

  const { title } = data as Module;

  const isCourseExists = await db.course.findUnique({
    where: {
      id: courseId,
    },
  });

  if (Object.keys(data).length === 0) {
    console.log(data);
    return NextResponse.json({ error: "Dados Invalidos" }, { status: 400 });
  }

  if (!isCourseExists) {
    return NextResponse.json({ data: "couser id not found" }, { status: 400 });
  }

  try {
    const couse = await db.course.update({
      where: {
        id: courseId,
      },
      data: {
        title: title,
        category: category,
        image: image,
        description: description,
        level: level,
        presentationVideo: presentationVideo,
        price: price,
        starNumber: starNumber,
        assessmentsNumber: assessmentsNumber,
        studentsNumber: studentsNumber,
      },
    });

    return NextResponse.json({ data: couse }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ data: error }, { status: 500 });
  }
}
