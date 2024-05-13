import { IApplication } from "@/types/application";
import { fetchData } from "./fetchData";
import { BASE_URL } from "./config";

type filterType = {
  status?: string;
  page?: number;
  pageSize?: number;
  dataTable?: boolean;
  id?: string;
};

/**
 * Get applicants from the API
 * @returns - array of applicants from the API response data property
 */
export async function getApplicants() {
  try {
    const data = await fetchData("/v1/user/application/dashboard-list", "POST");
    return data.data || ([] as IApplication[]);
  } catch (error) {
    console.error("Failed to fetch applicants:", error);
  }
}

/**
 * Get applicants by id from the API
 * @returns - object of applicants from the API response data property
 */

export async function getEnquiriesById(id: string) {
  try {
    const data = await fetchData(`/v1/admin/enquiries/${id}`, "GET");
    return data.data;
  } catch (error) {
    console.error("Failed to fetch applicants:", error);
  }
}

export async function getApplicantsById(id: string) {
  try {
    const data = await fetchData(`/v1/admin/application/${id}`, "GET");
    return data.data;
  } catch (error) {
    console.error("Failed to fetch applicants:", error);
  }
}

export async function getApplicationStatusHistory(data: filterType) {
  try {
    const responseData = await fetchData(
      `/v1/admin/application/history`,
      "POST",
      JSON.stringify(data),
    );
    return responseData.data;
  } catch (error) {
    console.error("Failed to fetch applicants:", error);
  }
}

export async function updateEnquiry(data: any) {
  try {
    const responseData = await fetchData(
      `/v1/admin/enquiries/update`,
      "POST",
      JSON.stringify(data),
    );
    return responseData.data;
  } catch (error) {
    console.error("Failed to fetch applicants:", error);
  }
}

export async function fileUploader(
  file: File | Blob,
  type: string,
  location: string,
  prefix: string,
) {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("type", type);
  formData.append("location", location);
  formData.append("prefix", prefix);

  try {
    const res = await fetch(`${BASE_URL}/file-upload`, {
      method: "POST",
      headers: {
        token: "dad#lecture#Charger#lot7",
      },
      body: formData,
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Failed to upload file:", error);
  }
}
