import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

type params = {
  params: {
    userId: string;
    courseId: string;
  };
};

export async function POST(req:NextRequest,{ params }: params) {
   
    if(!params.userId || !params.courseId){
        return NextResponse.json({data:"Alguns dados não estão corretos"},{status:404})
    }


    const isCourseExist = await db.course.findUnique({
        where:{
            id:params.courseId
        }
    })

    const isUserExist = await db.user.findUnique({
        where:{
            id:params.userId
        }
    })


    if(!isCourseExist){
        return NextResponse.json({data:'id do curso inexistente'},{status:404})
    }
    if(!isUserExist){
        return NextResponse.json({data:'id de usuario inexistente'},{status:404})
    }

    try {
        const shopping = await db.shopping.create({
            data:{
                userId:params.userId,
                courseId:params.courseId
            }
        })

        return NextResponse.json({data:'Sucesso'},{status:200})
        
    } catch (error) {
        return NextResponse.json({data:'Algo deu errado'},{status:500})
        
    }

   

}
