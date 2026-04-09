import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST() {
  try {
    await prisma.submission.deleteMany({});
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Delete all failed" }, { status: 500 });
  }
}
