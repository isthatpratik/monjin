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

    const {
      fullName,
      countryCode,
      mobile,
      organization,
      jobTitle,
      email,
      numberOfHires,
      productSelection,
      message,
    } = body;

    if (!fullName || !countryCode || !mobile || !organization || !jobTitle || !email || !numberOfHires || !productSelection) {
      return NextResponse.json(
        { success: false, error: "All fields are required" },
        { status: 400 }
      );
    }

    await prisma.pricingForm.create({
      data: {
        fullName,
        countryCode,
        mobile,
        organization,
        jobTitle,
        email,
        numberOfHires,
        productSelection,
        message,
      },
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
