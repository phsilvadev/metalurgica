import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const gallery = await prisma.gallery.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(gallery);
  } catch (error) {
    return NextResponse.json({ error: "Erro ao buscar galeria" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const { title, image, slug } = await request.json();

    const galleryItem = await prisma.gallery.create({
      data: { title, image, slug },
    });

    return NextResponse.json(galleryItem);
  } catch (error) {
    return NextResponse.json({ error: "Erro ao criar item da galeria" }, { status: 500 });
  }
}