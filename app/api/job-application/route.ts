import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  // Parse multipart/form-data
  const formData = await req.formData();
  const fullName = formData.get('fullName') as string;
  const countryCode = formData.get('countryCode') as string;
  const mobile = formData.get('mobile') as string;
  const workMail = formData.get('workMail') as string;
  const position = formData.get('position') as string;
  const cvFile = formData.get('cv') as File | null;

  // Configure transporter
  const transporter = nodemailer.createTransport({
    host: process.env.GMAIL_SMTP_HOST,
    port: Number(process.env.GMAIL_SMTP_PORT) || 465,
    secure: true,
    auth: {
      user: process.env.GMAIL_SMTP_USER,
      pass: process.env.GMAIL_SMTP_PASS,
    },
  });

  // Premium HTML email
  const html = `
    <div style="background: #f4f6fb; padding: 40px 0; font-family: 'Segoe UI', 'Roboto', 'Arial', sans-serif;">
      <table style="max-width: 520px; margin: 0 auto; background: #fff; border-radius: 16px; box-shadow: 0 4px 24px rgba(0,0,0,0.07); overflow: hidden;">
        <tr>
          <td style="background: #1B1B1B; color: #fff; padding: 32px 40px 16px 40px; text-align: center;">
            <h2 style="margin: 0; font-size: 28px; font-weight: 700; letter-spacing: 1px;">Job Application Submission</h2>
            <p style="margin: 8px 0 0 0; font-size: 16px; font-weight: 400; color: #e0e0e0;">You have received a new job application</p>
          </td>
        </tr>
        <tr>
          <td style="padding: 32px 40px;">
            <table style="width: 100%; font-size: 16px; color: #222;">
              <tr>
                <td style="padding: 12px 0; font-weight: 600; width: 140px;">Name:</td>
                <td style="padding: 12px 0;">${fullName}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; font-weight: 600;">Country Code:</td>
                <td style="padding: 12px 0;">${countryCode}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; font-weight: 600;">Mobile:</td>
                <td style="padding: 12px 0;">${mobile}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; font-weight: 600;">Work Mail:</td>
                <td style="padding: 12px 0;">${workMail}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; font-weight: 600;">Position:</td>
                <td style="padding: 12px 0;">${position}</td>
              </tr>
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

  // Prepare attachments if CV is present
  const attachments = [];
  if (cvFile) {
    const arrayBuffer = await cvFile.arrayBuffer();
    attachments.push({
      filename: cvFile.name,
      content: Buffer.from(arrayBuffer),
      contentType: cvFile.type,
    });
  }

  try {
    await transporter.sendMail({
      from: `Monjin Careers <${process.env.SMTP_USER}>`,
      to: 'sales@monjin.com',
      subject: `New Job Application: ${fullName} (${position})`,
      html,
      attachments,
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 500 });
  }
}
