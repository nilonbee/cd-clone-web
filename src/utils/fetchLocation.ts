import { IP_INFO_TOKEN } from "./config";

export default async function fetchLocation() {
  try {
    const res = await fetch(`https://ipinfo.io/?token=${IP_INFO_TOKEN}`);
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    const data = await res.json();
    const country = data.country;
    return country;
  } catch (error) {
    console.error("Error fetching location:", error);
    throw error;
  }
}
