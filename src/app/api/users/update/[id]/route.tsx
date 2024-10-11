import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { writeFileSync } from "fs";
import { compare, hash } from "bcrypt";
import { User } from "../../../../../../prisma/generated/client";

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
  let imagePath = "";
  const dataToUpdate: User = {};

  const user = await db.user.findUnique({
    where: {
      id: id,
    },
  });

  if (!user) {
    return NextResponse.json({ data: "user id not found" }, { status: 400 });
  }

  if (image && image.name) {

    console.log("imagem",image)
    
    const imagebytes = await image.arrayBuffer();
    const bufferImage = Buffer.from(imagebytes);
    imagePath = `./public/upload/images/${image.name}`;
    await writeFileSync(imagePath, bufferImage); // resolver isso depois ;/
    imagePath = `/upload/images/${image.name}`
    console.log("cheguei na imagem");
    dataToUpdate.image = imagePath;
  }
  

  if (bio) dataToUpdate.bio = bio;
  if (nome) dataToUpdate.name = nome;

  if (!user.hashedPassword) {
    var hashedPassword = await hash(newPassword, 10);
  } else {
    if(password){

      const machPassword = await compare(password, user.hashedPassword!);
      // verifica se a senha ta de fato correta
      if (!machPassword) {
        return NextResponse.json({ error: "Senha incorreta" }, { status: 404 });
      } else {
        // se as senhas forem diferentes retorna
        if(!newPassword || !confirmPassword){
          return NextResponse.json({ error: "Senhas difentes ou nulas" }, { status: 404 });
        }
        if (newPassword != confirmPassword) {
          return NextResponse.json({ error: "Senhas difentes" }, { status: 404 });
        }
  
        var hashedPassword = await hash(newPassword, 10);
        if (hashedPassword) dataToUpdate.hashedPassword = hashedPassword;
      }
    }
  }


  try {
    const couse = await db.user.update({
      where: {
        id: id,
      },
      data: dataToUpdate,
    });

    return NextResponse.json({ data: couse }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ data: error }, { status: 500 });
  }
}
