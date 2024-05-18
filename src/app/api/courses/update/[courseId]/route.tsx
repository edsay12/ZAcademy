import { db } from "@/lib/db";
import { Category, Course, Level } from "@prisma/client";
import { writeFileSync } from "fs";
import { NextResponse, NextRequest } from "next/server";

export async function POST(
  req: NextRequest,
  { params }: { params: { courseId: string } }
) {
  const { courseId } = params;
  const data = await req.formData();
  const file: File | null = data.get("video") as unknown as File;
  const titulo = data.get("titulo") as string;
  const descricao = data.get("descricao") as string;
  const imagem = data.get("imagem") as unknown as File;
  const level = data.get("nivel") as Level;
  const price = Number(data.get("preco"));
  const category = data.get("categoria") as Category;

  const tiposVideoPermitidos = ["video/mp4", "video/webm", "video/ogg"];
  const tiposImagensPermitidas = [
    "image/jpeg",
    "image/png",
    "image/gif",
    "image/webp",
  ];

  const isCourseExists = await db.course.findUnique({
    where: {
      id: courseId,
    },
  });



  if (!isCourseExists) {
    return NextResponse.json({ data: "couser id not found" }, { status: 400 });
  }

  if (!titulo) {
    return NextResponse.json(
      { error: "titulo deve ser adicionado" },
      { status: 404 }
    );
  }
  if (!level) {
    return NextResponse.json(
      { error: "nivel deve ser adicionado" },
      { status: 404 }
    );
  }
  if (!price) {
    return NextResponse.json(
      { error: "preço deve ser adicionado" },
      { status: 404 }
    );
  }
  if (!category) {
    return NextResponse.json(
      { error: "categoria deve ser adicionado" },
      { status: 404 }
    );
  }
  if (!descricao) {
    return NextResponse.json(
      { error: "descrição deve ser adiocionada" },
      { status: 404 }
    );
  }

  if (!file || !tiposVideoPermitidos.includes(file.type)) {
    return NextResponse.json(
      { erro: "video vazio ou no formato incorreto" },
      { status: 404 }
    );
  }

  if (!imagem || !tiposImagensPermitidas.includes(imagem.type)) {
    return NextResponse.json(
      { erro: "imagem vazio ou no formato incorreto" },
      { status: 404 }
    );
  }
  
  // buffer
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const path = `./upload/classes/${file.name}`;

  await writeFileSync(path, buffer);

  const imagebytes = await file.arrayBuffer();
  const bufferImage = Buffer.from(imagebytes);
  const imagePath = `./upload/images/${imagem.name}`;
  await writeFileSync(imagePath, bufferImage);

  try {
    const couse = await db.course.update({
      where: {
        id: courseId,
      },
      data: {
        title: titulo || undefined,
        category: category || undefined,
        image: imagePath || undefined,
        description: descricao || undefined,
        level: level || undefined,
        presentationVideo: path || undefined,
        price: price || undefined,
      },
    });

    return NextResponse.json({ data: couse }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ data: error }, { status: 500 });
  }
}
