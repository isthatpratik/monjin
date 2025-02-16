import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { firstName, lastName, email, jobDescriptionId, dialCode, contactNumber, sourceType, apexBusinessModelId, aId, sCId } = await req.json();

    // Validate input
    if (!firstName || !lastName || !email || !jobDescriptionId || !dialCode || !contactNumber || !apexBusinessModelId || !aId || !sCId) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Get auth token
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

    // Determine environment URL
    const BASE_API_URL = `https://api.monjin.com/a/22/${aId}/1/${sCId}/Itv/Invite`

    // Send application request
    const applyResponse = await fetch(BASE_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${access_token}`,
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        jobDescriptionId,
        dialCode,
        contactNumber,
        apexBusinessModelId,
        sourceType: sourceType || "website",
      }),
    });

    const applyData = await applyResponse.json();

    if (applyData.infoList) {
      return NextResponse.json({ error: applyData.infoList[0].Info }, { status: 400 });
    }

    if (!applyData.code) {
      return NextResponse.json({ error: "Application failed" }, { status: 500 });
    }

    // Generate redirect URL
    const invitationURL = `https://uni.monjin.com/public/invitations/${applyData.code}`

    return NextResponse.json({ success: true, invitationURL });
  } catch (error) {
    console.error("Unexpected server error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
