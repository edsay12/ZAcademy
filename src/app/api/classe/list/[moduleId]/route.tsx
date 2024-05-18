import { db } from "@/lib/db";
import { Course } from "@prisma/client";

import { NextRequest, NextResponse } from "next/server";


export async function GET(
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
    const couses = await db.class.findMany({
      where: {
        moduleId: moduleId,
      },
    });
    return NextResponse.json({ data: couses }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ data: error }, { status: 500 });
  }
}
