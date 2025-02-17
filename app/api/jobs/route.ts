import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const page = Number(searchParams.get("page")) || 1;
    const limit = Number(searchParams.get("limit")) || 10;

    console.log(`Fetching jobs - Page: ${page}, Limit: ${limit}`);

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
      const errorText = await tokenResponse.text();
      console.error("Error fetching token:", errorText);
      return NextResponse.json({ error: "Failed to obtain access token" }, { status: 500 });
    }

    const { access_token } = await tokenResponse.json();

    // Fetch total count of jobs
    const countResponse = await fetch("https://api.monjin.com/f/22/1/1/list/published-job", {
      headers: { Authorization: `Bearer ${access_token}` },
    });

    if (!countResponse.ok) {
      return NextResponse.json({ error: "Failed to fetch job count" }, { status: 500 });
    }

    const totalJobs = parseInt(countResponse.headers.get("Content-Range")?.split("/")[1] || "0", 10);

    // Reverse pagination logic
    const start = totalJobs - (page * limit) + 1;
    const end = totalJobs - ((page - 1) * limit);
    
    if (start < 1) return NextResponse.json({ jobs: [], pagination: { page, limit, total: totalJobs } });

    console.log(`Fetching jobs range: ${start}-${end}`);

    const jobsResponse = await fetch("https://api.monjin.com/f/22/1/1/list/published-job", {
      headers: {
        Authorization: `Bearer ${access_token}`,
        Range: `items=${start}-${end}`,
      },
    });

    if (!jobsResponse.ok) {
      return NextResponse.json({ error: "Failed to fetch jobs" }, { status: 500 });
    }

    const jobs = await jobsResponse.json();

    return NextResponse.json({
      jobs,
      pagination: {
        page,
        limit,
        total: totalJobs,
      },
    });
  } catch (error) {
    console.error("Unexpected server error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
