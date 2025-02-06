import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (!body) {
      return NextResponse.json(
        { success: false, error: "Request body is missing" },
        { status: 400 }
      );
    }

    const { fullName, countryCode, mobile, workMail, position, cvUrl } = body;

    if (
      !fullName ||
      !countryCode ||
      !mobile ||
      !workMail ||
      !position ||
      !cvUrl
    ) {
      return NextResponse.json(
        { success: false, error: "All fields are required" },
        { status: 400 }
      );
    }

    await prisma.jobApplication.create({
      data: {
        fullName,
        countryCode,
        mobile,
        workMail,
        position,
        cvUrl,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Application sent successfully!",
    });
  } catch (error) {
    console.error("Database Error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to save contact data" },
      { status: 500 }
    );
  }
}
