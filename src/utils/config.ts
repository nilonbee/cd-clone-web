export const BASE_URL = process.env["NEXT_PUBLIC_API_URL"];
export const IP_INFO_TOKEN = process.env["NEXT_PUBLIC_IP_INFO_TOKEN"];

export const configCountryCode = (code: string) => {
  switch (code) {
    case "GB":
      return "GB";
    case "AE":
      return "AE";
    default:
      return "LK";
  }
};
