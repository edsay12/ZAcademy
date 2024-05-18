import { db } from "@/lib/db";
import { Course, Module } from "@prisma/client";
import { NextResponse, NextRequest } from "next/server";

export async function POST(
  req: NextRequest,
  { params }: { params: { moduleId: string } }
) {
  const { moduleId } = params;
  const data = await req.formData();

  const title  = data.get('titulo') as string

  const isModuleExists = await db.module.findUnique({
    where: {
      id: moduleId,
    },
  });

if(!title){
  return NextResponse.json({data:"titulo deve ser adicionado"},{status: 400})
}

  if (!isModuleExists) {
    return NextResponse.json({ data: "module id not found" }, { status: 400 });
  }

  try {
    const couse = await db.module.update({
      where: {
        id: moduleId,
      },
      data: {
        title: title,
      },
    });

    return NextResponse.json({ data: couse }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ data: error }, { status: 500 });
  }
}
