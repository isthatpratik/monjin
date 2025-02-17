export const fetchAuthToken = async (): Promise<string> => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });
  
    if (!res.ok) {
      throw new Error("Failed to fetch authentication token");
    }
  
    const data = await res.json();
    return data.access_token;
  };
  