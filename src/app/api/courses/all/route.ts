import { db } from "@/lib/db";


import { NextRequest, NextResponse } from "next/server";


export interface Course {
  id: string
  userId: string
  title: string
  description: string
  image: string
  level: string
  price: number
  category: string
  presentationVideo: string
  starNumber: number
  assessmentsNumber: number
  studentsNumber: number
  createdAt: Date
  updatedAt: Date
  user: User
}

export interface User {
  name: string | null
  image: string | null
  bio: string | null
}



export async function GET(
  req: NextRequest,
   
) {
  
  try {
    const couses:Course[] = await db.course.findMany({
      include:{
        user:{
          select:{
            name:true,
            image:true,
            bio:true
          }
        }
      }
    });
    return NextResponse.json({ data: couses }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ data: error }, { status: 500 });
  }
}
