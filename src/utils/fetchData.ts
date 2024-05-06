import { BASE_URL } from "./config";

export async function fetchData(url: string, method: string, body?: any) {
  try {
    const token = JSON.parse(localStorage.getItem("CD-User") || "{}").state
      .access_token;
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };

    const options: RequestInit = {
      method,
      headers,
    };

    if (body) {
      options.body = body;
    }

    const res = await fetch(`${BASE_URL}${url}`, options);
    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.statusText}`);
    }

    return res.json();
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}
