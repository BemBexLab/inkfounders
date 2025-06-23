import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const { firstName, lastName, email, phone, message } = await req.json() as {
      firstName: string;
      lastName: string;
      email: string;
      phone: string;
      message: string;
    };

    const submission = await prisma.submission.create({
      data: { firstName, lastName, email, phone, message }
    });

    return NextResponse.json(submission, { status: 201 });
  } catch (error) {
    // Print error in your terminal!
    console.error("API /api/submit error:", error);
    let message = 'Unknown error';
    if (error && typeof error === 'object' && 'message' in error) {
      message = (error as { message: string }).message;
    }
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
