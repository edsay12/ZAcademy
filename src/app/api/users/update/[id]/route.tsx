import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { writeFileSync } from "fs";

export async function POST(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const data = await req.formData();
  const image: File | null = data.get("image") as unknown as File;
  const bio = data.get("bio") as string;
  const nome = data.get("nome") as string;
  const password = data.get("password") as unknown as File;
  const newPassword = data.get("newPassword") as String;
  const confirmPassword = data.get("confirmPassword") as String;

  const tiposImagensPermitidas = [
    "image/jpeg",
    "image/png",
    "image/gif",
    "image/webp",
  ];

  const isUserExists = await db.user.findUnique({
    where: {
      id: id,
    },
  });

  if (!isUserExists) {
    return NextResponse.json({ data: "user id not found" }, { status: 400 });
  }

  if (!image || !tiposImagensPermitidas.includes(image.type)) {
    return NextResponse.json(
      { erro: "imagem vazio ou no formato incorreto" },
      { status: 404 }
    );
  }

  if (!bio) {
    return NextResponse.json(
      { error: "bio deve ser adicionado" },
      { status: 404 }
    );
  }
  if (!nome) {
    return NextResponse.json(
      { error: "nome deve ser adicionado" },
      { status: 404 }
    );
  }
  if (!password) {
    return NextResponse.json(
      { error: "password deve ser adicionado" },
      { status: 404 }
    );
  }
  if (!newPassword) {
    return NextResponse.json(
      { error: "newPassword deve ser adicionado" },
      { status: 404 }
    );
  }
  if (!confirmPassword) {
    return NextResponse.json(
      { error: "confirmPassword deve ser adiocionada" },
      { status: 404 }
    );
  }

  // buffer

  // colocar aqui uma função que veja se a senha ta correta e que conpare as senhas
  // tambem e necessário uma função de hash passworsd
  

  const imagebytes = await image.arrayBuffer();
  const bufferImage = Buffer.from(imagebytes);
  const imagePath = `./upload/images/${image.name}`;
  await writeFileSync(imagePath, bufferImage);


  try {
    const couse = await db.user.update({
      where: {
        id: id,
      },
      data: {
        image: imagePath || null,
        bio: bio || null,
        name: nome || null,
        hashedPassword: password || null;
        
      },
    });

    return NextResponse.json({ data: couse }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ data: error }, { status: 500 });
  }
}
