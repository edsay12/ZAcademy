import { db } from "@/lib/db";
import { Class, Course } from "@prisma/client";
import { writeFileSync } from "fs";
import { NextResponse, NextRequest } from "next/server";

export async function POST(
  req: NextRequest,
  { params }: { params: { classeId: string } }
) {
  const { classeId } = params;
  const data = await req.formData();

  const titulo = data.get('titulo') as string
  const descricao = data.get('descricao') as string
  const file: File | null = data.get("video") as unknown as File;
  const tiposVideoPermitidos = ["video/mp4", "video/webm", "video/ogg"];

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
  const isClasseExists = await db.class.findUnique({
    where: {
      id: classeId,
    },
  });

  if (!file || !tiposVideoPermitidos.includes(file.type)) {
    return NextResponse.json(
      { erro: "Arquivo vazio ou no formato incorreto" },
      { status: 404 }
    );
  }

  if (!isClasseExists) {
    return NextResponse.json({ data: "couser id not found" }, { status: 400 });
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const path = `./upload/classes/${file.name}`;

  await writeFileSync(path, buffer);

  try {
    const couse = await db.class.update({
      where: {
        id: classeId,
      },
      data: {
        title: titulo,
        video: path,
        description: descricao,
      },
    });

    return NextResponse.json({ data: couse }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ data: error }, { status: 500 });
  }
}
