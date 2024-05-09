import { NextResponse,NextRequest } from "next/server";





function DELETE(req:NextRequest,{params}:{ params: { courseId: string }}){
    return NextResponse.json({ error: "Deu metade certo" }, { status: 400 });

}