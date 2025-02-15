import { NextResponse } from "next/server";

export async function POST() {
  const {
    MONJIN_AUTH_URL,
    MONJIN_CLIENT_ID,
    MONJIN_CLIENT_SECRET,
    MONJIN_SCOPE,
    MONJIN_GRANT_TYPE,
  } = process.env;

  if (!MONJIN_AUTH_URL || !MONJIN_CLIENT_ID || !MONJIN_CLIENT_SECRET) {
    return NextResponse.json({ error: "Missing API credentials" }, { status: 500 });
  }

  try {
    const response = await fetch(MONJIN_AUTH_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        client_id: MONJIN_CLIENT_ID,
        client_secret: MONJIN_CLIENT_SECRET,
        scope: MONJIN_SCOPE!,
        grant_type: MONJIN_GRANT_TYPE!,
      }),
    });

    if (!response.ok) {
      return NextResponse.json({ error: "Failed to fetch token" }, { status: 500 });
    }

    const data = await response.json();
    return NextResponse.json({ access_token: data.access_token });
  } catch (error) {
    console.error("Token fetch error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
