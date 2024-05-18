import { db } from "@/lib/db";
import { Course } from "@prisma/client";
import { NextResponse, NextRequest } from "next/server";

export async function DELETE(
  req: NextRequest,
  { params }: { params: { classeId: string } }
) {
  const { classeId } = params;

  const isClasseExists = await db.class.findUnique({
    where: {
      id: classeId,
    },
  });

  if (!isClasseExists) {
    return NextResponse.json({ data: "class id not found" }, { status: 400 });
  }

  try {
    const classe = await db.class.delete({
      where: {
        id: classeId,
      },
    });

    return NextResponse.json({ status: 204 });
  } catch (error) {
    return NextResponse.json({ data: error }, { status: 500 });
  }
}
