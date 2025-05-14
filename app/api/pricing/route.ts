import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

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

    const transporter = nodemailer.createTransport({
      host: process.env.GMAIL_SMTP_HOST,
      port: Number(process.env.GMAIL_SMTP_PORT) || 465,
      secure: true,
      auth: {
        user: process.env.GMAIL_SMTP_USER,
        pass: process.env.GMAIL_SMTP_PASS,
      },
    });

    const html = `
      <div style="background: #f4f6fb; padding: 40px 0; font-family: 'Segoe UI', 'Roboto', 'Arial', sans-serif;">
        <table style="max-width: 520px; margin: 0 auto; background: #fff; border-radius: 16px; box-shadow: 0 4px 24px rgba(0,0,0,0.07); overflow: hidden;">
          <tr>
            <td style="background: #1B1B1B; color: #fff; padding: 32px 40px 16px 40px; text-align: center;">
              <h2 style="margin: 0; font-size: 28px; font-weight: 700; letter-spacing: 1px;">Pricing Form Submission</h2>
              <p style="margin: 8px 0 0 0; font-size: 16px; font-weight: 400; color: #e0e0e0;">A new pricing inquiry has been submitted</p>
            </td>
          </tr>
          <tr>
            <td style="padding: 32px 40px;">
              <table style="width: 100%; font-size: 16px; color: #222;">
                <tr><td style="padding: 12px 0; font-weight: 600; width: 180px;">Full Name:</td><td style="padding: 12px 0;">${fullName}</td></tr>
                <tr><td style="padding: 12px 0; font-weight: 600;">Country Code:</td><td style="padding: 12px 0;">${countryCode}</td></tr>
                <tr><td style="padding: 12px 0; font-weight: 600;">Mobile:</td><td style="padding: 12px 0;">${mobile}</td></tr>
                <tr><td style="padding: 12px 0; font-weight: 600;">Organization:</td><td style="padding: 12px 0;">${organization}</td></tr>
                <tr><td style="padding: 12px 0; font-weight: 600;">Job Title:</td><td style="padding: 12px 0;">${jobTitle}</td></tr>
                <tr><td style="padding: 12px 0; font-weight: 600;">Email:</td><td style="padding: 12px 0;">${email}</td></tr>
                <tr><td style="padding: 12px 0; font-weight: 600;">Number of Hires:</td><td style="padding: 12px 0;">${numberOfHires}</td></tr>
                <tr><td style="padding: 12px 0; font-weight: 600;">Product Selection:</td><td style="padding: 12px 0;">${productSelection}</td></tr>
                <tr><td style="padding: 12px 0; font-weight: 600; vertical-align: top;">Message:</td><td style="padding: 12px 0; white-space: pre-line;">${message || "-"}</td></tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="background: #f4f6fb; color: #888; text-align: center; padding: 18px 40px 18px 40px; font-size: 13px; border-top: 1px solid #eee;">
              &copy; ${new Date().getFullYear()} Monjin. All rights reserved.
            </td>
          </tr>
        </table>
      </div>
    `;

    await transporter.sendMail({
      from: `Monjin Pricing <${process.env.GMAIL_SMTP_USER}>`,
      to: "sales@monjin.com",
      subject: `New Pricing Inquiry from ${fullName}`,
      html,
    });

    return NextResponse.json({
      success: true,
      message: "Your message has been sent!",
    });
  } catch (error) {
    console.error("Email Error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send email" },
      { status: 500 }
    );
  }
}
