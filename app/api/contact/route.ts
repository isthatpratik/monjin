import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { fullName, countryCode, mobile, email, message } = await req.json();

    if (!fullName || !email || !mobile || !message) {
      return NextResponse.json(
        { success: false, error: "All fields are required" },
        { status: 400 }
      );
    }

    await prisma.contact.create({
      data: { fullName, countryCode, mobile, email, message },
    });

    return NextResponse.json({
      success: true,
      message: "Your message has been sent!",
    });
  } catch (error) {
    console.error("Database Error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to save contact data" },
      { status: 500 }
    );
  }
}
