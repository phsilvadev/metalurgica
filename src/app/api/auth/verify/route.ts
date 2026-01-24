import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function GET(request: NextRequest) {
  try {
    const token = request.cookies.get("token")?.value;

    if (!token) {
      return NextResponse.json({ error: "Token não encontrado" }, { status: 401 });
    }

    jwt.verify(token, process.env.JWT_SECRET || "metalurgica-super-secret-jwt-key-2024");
    
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Token inválido" }, { status: 401 });
  }
}