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

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(value: string) {
  return value.replace(
    /[&<>'\"]/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "'": "&#39;",
        '"': "&quot;",
      })[character] ?? character,
  );
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
    const lastName = getRequiredText(body.lastName) || "Not provided";
    const emailAddress = getRequiredText(body.email);
    const email = emailAddress || "Not provided";
    const phone = getRequiredText(body.phone) || "Not provided";
    const message = getRequiredText(body.message);

    if (!firstName || (!emailAddress && phone === "Not provided") || !message) {
      return NextResponse.json(
        { error: "Name, message, and either email or phone are required." },
        { status: 400 },
      );
    }

    if (emailAddress && !isValidEmail(emailAddress)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
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

    try {
      const transporter = createTransporter();
      const emailTo = process.env.EMAIL_TO || process.env.SMTP_USER;

      if (!transporter || !emailTo || !process.env.SMTP_USER) {
        console.error("Submit route: SMTP configuration is incomplete.");
        return NextResponse.json(
          { error: "Email service is not configured. Please try again later." },
          { status: 503 },
        );
      }

      await transporter.sendMail({
        from: `"Website Contact" <${process.env.SMTP_USER}>`,
        to: emailTo,
        ...(emailAddress ? { replyTo: emailAddress } : {}),
        subject: "New Contact Form Submission",
        text: [
          "New Message from Ink Founders Contact Form",
          `Name: ${firstName} ${lastName}`,
          `Email: ${email}`,
          `Phone: ${phone}`,
          "",
          message,
          "",
          `Submission ID: ${submission?.id ?? "Not saved"}`,
          `Submitted At: ${(submission?.createdAt ?? new Date()).toISOString()}`,
        ].join("\n"),
        html: `
            <h2>New Message from Ink Founders Contact Form</h2>
            <p><strong>Name:</strong> ${escapeHtml(firstName)} ${escapeHtml(lastName)}</p>
            <p><strong>Email:</strong> ${escapeHtml(email)}</p>
            <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
            <p><strong>Message:</strong><br>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
            <hr />
            <p><strong>Submission ID:</strong> ${escapeHtml(String(submission?.id ?? "Not saved"))}</p>
            <p><strong>Submitted At:</strong> ${(submission?.createdAt ?? new Date()).toISOString()}</p>
          `,
      });
    } catch (emailError) {
      console.error("Submit route email error:", emailError);
      return NextResponse.json(
        { error: "Failed to send your message. Please try again." },
        { status: 502 },
      );
    }

    return NextResponse.json({
      success: true,
      emailSent: true,
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
