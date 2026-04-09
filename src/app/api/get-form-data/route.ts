import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const submissions = await prisma.submission.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json({ data: submissions });
  } catch (err) {
    // Log the error for debugging (shows in your terminal or Vercel logs)
    console.error("API ERROR in get-form-data:", err);
    return NextResponse.json(
      { error: "Error fetching submissions" },
      { status: 500 },
    );
  }
}
