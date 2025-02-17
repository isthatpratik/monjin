import { NextResponse } from "next/server";

export async function GET(request: Request, context: { params: { code: string } }) {
  try {
    const { code } = await context.params; // Await params before using

    if (!code) {
      return NextResponse.json({ error: "Missing job ID" }, { status: 400 });
    }

    // Fetch access token
    const tokenResponse = await fetch(process.env.MONJIN_AUTH_URL!, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
      },
      body: new URLSearchParams({
        client_id: process.env.MONJIN_CLIENT_ID!,
        client_secret: process.env.MONJIN_CLIENT_SECRET!,
        scope: process.env.MONJIN_SCOPE!,
        grant_type: process.env.MONJIN_GRANT_TYPE!,
      }),
    });

    if (!tokenResponse.ok) {
      return NextResponse.json({ error: "Failed to obtain access token" }, { status: 500 });
    }

    const { access_token } = await tokenResponse.json();

    // Fetch job details
    const jobResponse = await fetch(
      `https://api.monjin.com/f/22/1/1/list/published-job?filter=code[${code}]`,
      {
        headers: { Authorization: `Bearer ${access_token}` },
      }
    );

    if (!jobResponse.ok) {
      return NextResponse.json({ error: "Failed to fetch job details" }, { status: 500 });
    }

    const jobs = await jobResponse.json();
    if (jobs.length === 0) {
      return NextResponse.json({ error: "Job not found" }, { status: 404 });
    }

    return NextResponse.json(jobs[0]);
  } catch {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
