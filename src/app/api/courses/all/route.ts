import { db } from "@/lib/db";


import { NextRequest, NextResponse } from "next/server";


export async function GET(
  req: NextRequest,
   
) {
 

  
  try {
    const couses = await db.course.findMany();
    return NextResponse.json({ data: couses }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ data: error }, { status: 500 });
  }
}
