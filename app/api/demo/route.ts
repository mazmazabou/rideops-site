import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface DemoRequest {
  name: string;
  email: string;
  university: string;
  role: string;
  phone?: string;
  message?: string;
}

export async function POST(request: Request) {
  let body: DemoRequest;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { name, email, university, role, phone, message } = body;

  // Validate required fields
  if (!name?.trim() || !email?.trim() || !university?.trim() || !role?.trim()) {
    return NextResponse.json(
      { error: "Name, email, university, and role are required." },
      { status: 400 }
    );
  }

  // Validate email format
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: Number(process.env.SMTP_PORT) === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const htmlBody = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #4682B4; margin-bottom: 24px;">New Demo Request</h2>
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 12px 16px; border-bottom: 1px solid #eee; color: #666; width: 140px;">Name</td>
          <td style="padding: 12px 16px; border-bottom: 1px solid #eee; color: #1a1a2e;">${escapeHtml(name)}</td>
        </tr>
        <tr>
          <td style="padding: 12px 16px; border-bottom: 1px solid #eee; color: #666;">Email</td>
          <td style="padding: 12px 16px; border-bottom: 1px solid #eee; color: #1a1a2e;"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td>
        </tr>
        <tr>
          <td style="padding: 12px 16px; border-bottom: 1px solid #eee; color: #666;">University</td>
          <td style="padding: 12px 16px; border-bottom: 1px solid #eee; color: #1a1a2e;">${escapeHtml(university)}</td>
        </tr>
        <tr>
          <td style="padding: 12px 16px; border-bottom: 1px solid #eee; color: #666;">Role</td>
          <td style="padding: 12px 16px; border-bottom: 1px solid #eee; color: #1a1a2e;">${escapeHtml(role)}</td>
        </tr>
        ${phone?.trim() ? `<tr>
          <td style="padding: 12px 16px; border-bottom: 1px solid #eee; color: #666;">Phone</td>
          <td style="padding: 12px 16px; border-bottom: 1px solid #eee; color: #1a1a2e;">${escapeHtml(phone)}</td>
        </tr>` : ""}
        ${message?.trim() ? `<tr>
          <td style="padding: 12px 16px; border-bottom: 1px solid #eee; color: #666; vertical-align: top;">Message</td>
          <td style="padding: 12px 16px; border-bottom: 1px solid #eee; color: #1a1a2e;">${escapeHtml(message)}</td>
        </tr>` : ""}
      </table>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: "hello@ride-ops.com",
      replyTo: email,
      subject: `Demo Request — ${university} — ${name}`,
      html: htmlBody,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Failed to send demo email:", err);
    return NextResponse.json(
      { error: "Failed to send your request. Please try again later." },
      { status: 500 }
    );
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
