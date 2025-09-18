// app/api/user/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch(process.env.USER_API ?? "");
  const data = await res.json();
  return NextResponse.json(data);
}
