import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message, university } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // Log the contact form submission
    console.log("--- Contact Form Submission ---");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("University:", university || "Not provided");
    console.log("Message:", message);
    console.log("Timestamp:", new Date().toISOString());
    console.log("-------------------------------");

    return NextResponse.json({ success: true, message: "Message received successfully." });
  } catch {
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}
