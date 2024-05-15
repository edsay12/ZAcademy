import { writeFile, writeFileSync } from "fs";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest,{params}:{params:{moduleId:string}}) {
    
  const data = await req.formData();
  const file: File | null = data.get("video") as unknown as File;
  if (!file) {
    return NextResponse.json({ success: false }, { status: 404 });
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const path =`./upload/classes/${file.name}`

  await writeFileSync(path,buffer)

  return NextResponse.json({success:true})
}
