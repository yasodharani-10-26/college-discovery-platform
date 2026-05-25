import { NextResponse } from "next/server";

let colleges: any[] = [];

export async function GET() {
  return NextResponse.json(colleges);
}

export async function POST(req: Request) {
  const body = await req.json();

  const newCollege = {
    id: Date.now(),
    ...body,
  };

  colleges.push(newCollege);

  return NextResponse.json(newCollege);
}