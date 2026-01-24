import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const features = await prisma.feature.findMany();
    return NextResponse.json(features);
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao buscar features' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const feature = await prisma.feature.create({ data });
    return NextResponse.json(feature);
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao criar feature' }, { status: 500 });
  }
}