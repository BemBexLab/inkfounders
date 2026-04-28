import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { prisma } from "@/lib/prisma";

type SubmissionPayload = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  message?: string;
};

type SavedSubmission = {
  id: number | string;
  createdAt: Date;
};

function getRequiredText(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function createTransporter() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 465);
  const secure =
    (process.env.SMTP_SECURE || process.env.SMTP_SECUR || "true").toLowerCase() ===
    "true";
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    return null;
  }

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: {
      user,
      pass,
    },
  });
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as SubmissionPayload;
    const firstName = getRequiredText(body.firstName);
    const lastName = getRequiredText(body.lastName);
    const email = getRequiredText(body.email);
    const phone = getRequiredText(body.phone);
    const message = getRequiredText(body.message);

    if (!firstName || !lastName || !email || !phone || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 },
      );
    }

    let submission: SavedSubmission | null = null;

    try {
      if (process.env.DATABASE_URL) {
        submission = await prisma.submission.create({
          data: {
            firstName,
            lastName,
            email,
            phone,
            message,
          },
        });
      } else {
        console.warn(
          "Submit route: DATABASE_URL is not configured, skipping database save.",
        );
      }
    } catch (databaseError) {
      console.error("Submit route database error:", databaseError);
    }

    let emailSent = false;

    try {
      const transporter = createTransporter();
      const emailTo = process.env.EMAIL_TO || process.env.SMTP_USER;

      if (transporter && emailTo) {
        await transporter.sendMail({
          from: `"Website Contact" <${process.env.SMTP_USER}>`,
          to: emailTo,
          subject: "New Contact Form Submission",
          html: `
            <h2>New Message from Ink Founders Contact Form</h2>
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Message:</strong><br>${message.replace(/\n/g, "<br>")}</p>
            <hr />
            <p><strong>Submission ID:</strong> ${submission?.id ?? "Not saved"}</p>
            <p><strong>Submitted At:</strong> ${(submission?.createdAt ?? new Date()).toISOString()}</p>
          `,
        });
        emailSent = true;
      } else {
        console.warn("Submit route: SMTP configuration is incomplete, skipping email.");
      }
    } catch (emailError) {
      console.error("Submit route email error:", emailError);
    }

    return NextResponse.json({
      success: true,
      emailSent,
      submissionId: submission?.id ?? null,
    });
  } catch (error) {
    console.error("Submit route error:", error);
    return NextResponse.json(
      { error: "Failed to submit message. Please try again." },
      { status: 500 },
    );
  }
}
