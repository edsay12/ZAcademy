import { db } from "@/lib/db";
import { Class } from "@prisma/client";
import { error } from "console";
import { writeFile, writeFileSync } from "fs";
import { NextRequest, NextResponse } from "next/server";

export async function POST(
  req: NextRequest,
  { params }: { params: { moduleId: string } }
) {
  const data = await req.formData();
  const file: File | null = data.get("video") as unknown as File;
  const titulo = data.get("titulo");
  const descricao = data.get("descricao");
  const tiposVideoPermitidos = ["video/mp4", "video/webm", "video/ogg"];

  try {
    const moduleIdExists = await db.module.findUnique({
      where: {
        id: params.moduleId,
      },
    });

    if (!moduleIdExists) {
      return NextResponse.json(
        { error: "Modulo não encontrado" },
        { status: 404 }
      );
    }
  } catch (err) {
    return NextResponse.json({ error: "algo deu errado" }, { status: 500 });
  }
  // básic validations

  if (!file || !tiposVideoPermitidos.includes(file.type)) {
    return NextResponse.json(
      { erro: "Arquivo vazio ou no formato incorreto" },
      { status: 404 }
    );
  }
  if (!titulo) {
    return NextResponse.json(
      { error: "titulo deve ser adicionado" },
      { status: 404 }
    );
  }
  if (!descricao) {
    return NextResponse.json(
      { error: "descrição deve ser adiocionada" },
      { status: 404 }
    );
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const path = `./upload/classes/${file.name}`;

  await writeFileSync(path, buffer);

  try {
    const classeData: Class = {
      title: titulo as string,
      starNumber: 0,

      moduleId: params.moduleId,
      assessmentsNumber: 0,
      duration: 0,
      video: path,
      description: descricao as string,
    };

    const data = await db.class.create({
      data: { ...classeData },
    });

    return NextResponse.json({ data: data }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "algo deu errado" }, { status: 500 });
  }
}
