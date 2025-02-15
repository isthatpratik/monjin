import { NextResponse } from "next/server";

const MONJIN_API = "https://api.monjin.com/f/22/1/1";
const BEARER_TOKEN = process.env.MONJIN_AUTH_TOKEN!; // Use environment variable for security

export async function GET(
  req: Request,
  context: { params: { code: string } }
) {
  try {
    const { code } = context.params;

    const response = await fetch(
      `${MONJIN_API}/list/published-job?filter=code[${code}]`,
      {
        headers: { Authorization: `Bearer ${BEARER_TOKEN}` },
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Error fetching job details:", errorText);
      return NextResponse.json(
        { error: "Failed to fetch job details", details: errorText },
        { status: response.status }
      );
    }

    const jobDetails = await response.json();
    if (!jobDetails || jobDetails.length === 0) {
      return NextResponse.json({ error: "Job not found" }, { status: 404 });
    }

    return NextResponse.json(jobDetails[0], { status: 200 });
  } catch (error) {
    console.error("Unexpected server error:", error);
    return NextResponse.json(
      { error: "Internal Server Error", details: (error as Error).message },
      { status: 500 }
    );
  }
}
