import { CourseLevels } from "@/app/@types";
import { db } from "@/lib/db";
import { Class } from "@prisma/client";
import { error } from "console";
import { writeFile, writeFileSync } from "fs";
import { NextRequest, NextResponse } from "next/server";
import { Category, Level } from "../../../../../../prisma/generated/client";

export async function POST(
  req: NextRequest,
  { params }: { params: { userId: string } }
) {
  const data = await req.formData();
  const file: File | null = data.get("video") as unknown as File;
  const titulo = data.get("titulo") as string;
  const descricao = data.get("descricao") as string;
  const imagem = data.get("imagem") as unknown as File;
  const level = data.get("nivel") as Level;
  const price = Number(data.get("preco"));
  const category =  data.get("categoria") as Category;
  

  const tiposVideoPermitidos = ["video/mp4", "video/webm", "video/ogg"];
  const tiposImagensPermitidas = [
    "image/jpeg",
    "image/png",
    "image/gif",
    "image/webp",
  ];

  try {
    const userIdExists = await db.user.findUnique({
      where: {
        id: params.userId,
      },
    });

    if (!userIdExists) {
      return NextResponse.json(
        { error: "user não encontrado" },
        { status: 404 }
      );
    }
  } catch (err) {
    return NextResponse.json({ error: "algo deu errado" }, { status: 500 });
  }
  // básic validations

  

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

  const path = `./public/upload/classes/${file.name}`;

  await writeFileSync(path, buffer);

  const imagebytes = await imagem.arrayBuffer();
  const bufferImage = Buffer.from(imagebytes);
  const imagePath = `./public/upload/images/${imagem.name}`;
  await writeFileSync(imagePath, bufferImage);

  try {
    const data = await db.course.create({
      data: {
        userId: params.userId,
        description: descricao,
        image: imagePath.replace("./public",""),
        starNumber: 0,
        title: titulo,
        presentationVideo: path.replace("./public",""),
        level: level,
        category:  category,
        price: price,
        assessmentsNumber: 0,
        studentsNumber: 0,
      },
    });

    return NextResponse.json({ data: data }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "algo deu errado" }, { status: 500 });
  }
}
