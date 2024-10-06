import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { writeFileSync } from "fs";
import { compare,hash } from "bcrypt";

export async function POST(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const data = await req.formData();
  const image: File | null = data.get("image") as unknown as File;
  const bio = data.get("bio") as string;
  const nome = data.get("nome") as string;
  const password = data.get("password") as unknown as string;
  const newPassword = data.get("newPassword") as string;
  const confirmPassword = data.get("confirmPassword") as string;
  // cade o clean code meu filho
  const tiposImagensPermitidas = [
    "image/jpeg",
    "image/png",
    "image/gif",
    "image/webp",
  ];

  const user = await db.user.findUnique({
    where: {
      id: id,
    },
  });

  if (!user) {
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

  // colocar aqui uma função que veja se a senha ta correta e que compare as senhas
  // tambem e necessário uma função de hash passworsd

  // buffer

  const imagebytes = await image.arrayBuffer();
  const bufferImage = Buffer.from(imagebytes);
  const imagePath = `./upload/images/${image.name}`;
  await writeFileSync(imagePath, bufferImage); // resolver isso depois ;/

  // verifica se a senha ta de fato correta
  const machPassword = await compare(password, user.hashedPassword!);
  if (!machPassword) {
    return NextResponse.json(
      { error: "Senha incorreta" },
      { status: 404 }
    );
  }else{
    // se as senhas forem diferentes retorna
    if(newPassword != confirmPassword) return

    var hashedPassword = await hash(newPassword, 10);


  }

  try {
    const couse = await db.user.update({
      where: {
        id: id,
      },
      data: {
        image: imagePath || null,
        bio: bio || null,
        name: nome || null,
        hashedPassword: (hashedPassword ? hashedPassword : null),
      },
    });

    return NextResponse.json({ data: couse }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ data: error }, { status: 500 });
  }
}
