import { NextResponse } from "next/server";

export async function GET() {
    try {
      console.log("Fetching access token...");
  
      const tokenResponse = await fetch(process.env.MONJIN_AUTH_URL!, {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Accept": "application/json",
            "User-Agent": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Mobile Safari/537.36"
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
        return NextResponse.json(
          { error: "Failed to obtain access token", details: errorText },
          { status: 500 }
        );
      }
  
      const { access_token } = await tokenResponse.json();
      console.log("Access token obtained successfully!");
  
      console.log("Fetching jobs...");
      const jobsResponse = await fetch(
        "https://api.monjin.com/f/22/1/1/list/published-job", 
        {
          headers: { Authorization: `Bearer ${access_token}` },
        }
      );
  
      if (!jobsResponse.ok) {
        const errorText = await jobsResponse.text();
        console.error("Error fetching jobs:", errorText);
        return NextResponse.json(
          { error: "Failed to fetch jobs", details: errorText },
          { status: 500 }
        );
      }
  
      let jobs = await jobsResponse.json();
      console.log("Jobs fetched successfully!");
  
      if (!Array.isArray(jobs)) {
        return NextResponse.json(
          { error: "Invalid jobs data format", details: jobs },
          { status: 500 }
        );
      }
  
      jobs = jobs
        .sort((a, b) => new Date(b.createdOn).getTime() - new Date(a.createdOn).getTime())
        .slice(0, 50);
  
      return NextResponse.json(jobs);
    } catch (error) {
      console.error("Unexpected server error:", error);
      return NextResponse.json(
        { error: "Internal Server Error", details: (error as Error).message },
        { status: 500 }
      );
    }
  }
  