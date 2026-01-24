import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const content = await prisma.content.findMany();
    return NextResponse.json(content);
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao buscar conteúdo' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const content = await prisma.content.upsert({
      where: { key: data.key },
      update: data,
      create: data,
    });
    return NextResponse.json(content);
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao salvar conteúdo' }, { status: 500 });
  }
}