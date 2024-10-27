import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(
  req: NextRequest,
  { params }: { params: { userId: string; courseId: string } }
) {

  try {
    const isStaredExists = await db.stared.findUnique({
      where: {
        courseId_userId: { userId: params.userId, courseId: params.courseId },
      },
    });

    if (isStaredExists) {
      await db.stared.delete({
        where: {
          courseId_userId: { userId: params.userId, courseId: params.courseId },
        },
      });
      return NextResponse.json({ msg: "estela removida" }, { status: 200 });
    } else {
      await db.stared.create({
        data: {
          courseId: params.courseId,
          userId: params.userId,
        },
      });
      return NextResponse.json({ msg: "estrela adicionada" }, { status: 200 });
    }
  } catch (err) {
    return NextResponse.json(
      { error: "não e possivel responder a solicitação" },
      { status: 500 }
    );
  }
}
