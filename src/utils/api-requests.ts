import { ICourseResponse } from "@/types/courses";
import {
  ILoginRequest,
  ILoginResponse,
  IPasswordResetRequest,
  IRegisterRequest,
  IRegisterResponse,
} from "@/types/users";
import toast from "react-hot-toast";

/**
 * Get courses from the API
 * @param limit - number of courses to fetch
 * @returns - array of courses from the API response data property
 */

export async function getCourses(limit: number) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/v1/user/courses`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        next: { revalidate: 10 }, // 10 seconds
        body: JSON.stringify({ limit: limit }),
      },
    );
    const courses = (await res.json()) as ICourseResponse;
    return courses.data;
  } catch (error) {
    console.error("Failed to fetch courses:", error);
    toast.error("Failed to fetch courses. API error");
  }
}

/**
 * Login user using the API
 * @param data - user login data
 * @property email - user email
 * @property password - user password
 * @returns - user login response
 */

export async function userLogin(data: ILoginRequest) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/v1/user/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      },
    );
    const user = (await res.json()) as ILoginResponse;
    return user;
  } catch (error) {
    console.error("Login failed:", error);
    toast.error("Login failed. API error");
  }
}

/**
 * Register user using the API
 * @param data - user registration data
 * @property first_name - user first name
 * @property email - user email
 * @property password - user password
 * @property phone - user phone number
 * @returns - user registration response
 */

export async function userRegister(data: IRegisterRequest) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/v1/user/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      },
    );
    const user = (await res.json()) as IRegisterResponse;
    return user;
  } catch (error) {
    console.error("Registration failed:", error);
    toast.error("Registration failed. API error");
  }
}

export async function sendForgotPasswordEmail(data: IPasswordResetRequest) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/v1/admin/forgot-password`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      },
    );
    const response = await res.json();
    return response;
  } catch (error) {
    console.error("Failed to send reset link:", error);
    toast.error("Failed to send reset link. API error");
  }
}
