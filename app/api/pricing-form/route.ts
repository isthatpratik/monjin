import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = await req.json();

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

    const newSubmission = await prisma.pricingFormSubmission.create({
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

    return NextResponse.json(
      { message: "Form submitted successfully", data: newSubmission },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error submitting form:", error);
    return NextResponse.json(
      { message: "Failed to submit form", error },
      { status: 500 }
    );
  }
}
