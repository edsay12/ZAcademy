import { db } from "@/lib/db";
import { Course } from "@prisma/client";

import { NextRequest, NextResponse } from "next/server";

export async function POST(
  req: NextRequest,
  { params }: { params: { userId: string } }
) {
  const { userId } = params;
  const data = await req.json();

  const {
    title,
    description,
    category,
    presentationVideo,
    level,
    price,
    video,
    image,
  } = data as Course;

  const isUserExists = await db.user.findUnique({
    where: {
      id: userId,
    },
  });

  if (
    !title ||
    !description ||
    !category ||
    !presentationVideo ||
    !level ||
    !price
  ) {
    return NextResponse.json({ error: "Dados Invalidos" }, { status: 400 });
  }

  if (!isUserExists) {
    return NextResponse.json({ data: "user id not found" }, { status: 400 });
  }

  try {
    const couse = await db.course.create({
      data: {
        title: title,
        video:video,
        userId: userId,
        category: category,
        image: image,
        description: description,
        level: level,
        presentationVideo: presentationVideo,
        price: price,
        starNumber: 0,
        assessmentsNumber: 0,
        studentsNumber: 0,
      },
    });

    return NextResponse.json({ data: couse }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ data: error }, { status: 500 });
  }
}
