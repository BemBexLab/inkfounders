import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };

    return entities[character] ?? character;
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as { email?: unknown };
    const email = typeof body.email === "string" ? body.email.trim() : "";

    if (email.length > 254 || !isValidEmail(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 },
      );
    }

    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT || 465);
    const secure =
      (process.env.SMTP_SECURE || process.env.SMTP_SECUR || "true").toLowerCase() ===
      "true";
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const recipient = process.env.EMAIL_TO || user;

    if (!host || !user || !pass || !recipient) {
      console.error("Newsletter route: SMTP configuration is incomplete.");
      return NextResponse.json(
        { error: "Newsletter signup is unavailable right now. Please try again later." },
        { status: 503 },
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass },
    });

    await transporter.sendMail({
      from: `"Ink Founders Newsletter" <${user}>`,
      to: recipient,
      replyTo: email,
      subject: "New Newsletter Subscription - Ink Founders",
      text: `A new email address subscribed to the Ink Founders newsletter: ${email}`,
      html: `<p>A new email address subscribed to the Ink Founders newsletter:</p><p><strong>${escapeHtml(email)}</strong></p>`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Newsletter route error:", error);
    return NextResponse.json(
      { error: "Unable to subscribe right now. Please try again." },
      { status: 502 },
    );
  }
}
