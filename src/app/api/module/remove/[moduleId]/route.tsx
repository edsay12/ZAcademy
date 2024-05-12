import { db } from "@/lib/db";
import { Course } from "@prisma/client";
import { NextResponse, NextRequest } from "next/server";

export async function DELETE(
  req: NextRequest,
  { params }: { params: { moduleId: string } }
) {
  const { moduleId } = params;

  const isModuleExists = await db.module.findUnique({
    where: {
      id: moduleId,
    },
  });

  if (!isModuleExists) {
    return NextResponse.json({ data: "module id not found" }, { status: 400 });
  }

  try {
    const moduleData = await db.module.delete({
      where: {
        id: moduleId,
      },
    });

    return NextResponse.json({ status: 204 });
  } catch (error) {
    return NextResponse.json({ data: error }, { status: 500 });
  }
}
