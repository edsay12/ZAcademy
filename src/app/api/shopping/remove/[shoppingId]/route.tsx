import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  req: NextRequest,
  { params }: { params: { shoppingId: string } }
) {
  const isShoppingExists = await db.shopping.findUnique({
    where: {
      id: params.shoppingId,
    },
  });


  if (!isShoppingExists) {
    return NextResponse.json(
      { data: "id do shopping inexistente" },
      { status: 404 }
    );
  }

  try {
    const data = await db.shopping.delete({
      where:{
        id:params.shoppingId
      }
    });

    return NextResponse.json({ data: "suceso" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ data: "erro no servidor" }, { status: 500 });
  }
}
