import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const services = await prisma.service.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(services);
  } catch (error) {
    return NextResponse.json({ error: "Erro ao buscar serviços" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const { title, description, items } = await request.json();

    const service = await prisma.service.create({
      data: { title, description, items },
    });

    return NextResponse.json(service);
  } catch (error) {
    return NextResponse.json({ error: "Erro ao criar serviço" }, { status: 500 });
  }
}