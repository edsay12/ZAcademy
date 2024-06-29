import { db } from "@/lib/db";

import { NextRequest, NextResponse } from "next/server";
import { Class, Module } from "../../../../../prisma/generated/client";

export interface Course {
  id: string;
  userId: string;
  title: string;
  description: string;
  image: string;
  level: string;
  price: number;
  category: string;
  subtitle: string;
  presentationVideo: string;
  starNumber: number;
  assessmentsNumber: number;
  studentsNumber: number;
  createdAt: Date;
  updatedAt: Date;
  user: User;
  Module: ModuleType[];
}

export interface User {
  id: string;
  name: string | null;
  image: string | null;
  bio: string | null;
  _count: {
    Course: number;
  };
}

export interface ModuleType extends Module {
  Class: Class[];
}

export interface ClassType extends Class {}

export async function GET(req: NextRequest) {
  try {
    const couses: Course[] = await db.course.findMany({
      include: {
        Module: {
          include: {
            Class: true,
          },
        },
        user: {
          select: {
            id: true,
            name: true,
            image: true,
            _count: {
              select: {
                Course: true,
              },
            },

            bio: true,
          },
        },
      },
    });
    return NextResponse.json({ data: couses }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ data: error }, { status: 500 });
  }
}
