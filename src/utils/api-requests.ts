import { ICountriesRequest, ICountriesResponse } from "@/types/countries";
import { ICourseLevelsRequest, ICourseLevelsResponse } from "@/types/courseLevels";
import {
  ICourseRequest,
  ICourseResponse,
  ICourseSingleResponse,
} from "@/types/courses";
import { IEventResponse, IEventResponseTwo } from "@/types/events";
import { IIntakesRequest, IIntakesResponse } from "@/types/intakes";
import { IScholarshipRequest } from "@/types/scholarship";
import { ISubjectsRequest, ISubjectsResponse } from "@/types/subjects";
import {
  ILoginRequest,
  ILoginResponse,
  IPasswordResetRequest,
  IRegisterRequest,
  IRegisterResponse,
  IResetPasswordRequest,
} from "@/types/users";
import toast from "react-hot-toast";

/**
 * Get courses from the API
 * @param limit - number of courses to fetch
 * @returns - array of courses from the API response data property
 */

export async function getCourses(data: ICourseRequest) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/v1/user/courses`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        next: { revalidate: 10 }, // 10 seconds
        body: JSON.stringify(data),
      },
    );
    const courses = (await res.json()) as ICourseResponse;
    return courses.data;
  } catch (error) {
    console.error("Failed to fetch courses:", error);
    toast.error("Failed to fetch courses. API error");
  }
}

export async function getCountries(data: ICountriesRequest) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/v1/countries`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        next: { revalidate: 10 }, // 10 seconds
        body: JSON.stringify(data),
      },
    );
    const countries = (await res.json()) as ICountriesResponse;
    return countries.data;
  } catch (error) {
    console.error("Failed to fetch countries:", error);
    toast.error("Failed to fetch countries. API error");
  }
}

export async function getSubjects(data: ISubjectsRequest) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/v1/subjects`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        next: { revalidate: 10 }, // 10 seconds
        body: JSON.stringify(data),
      },
    );
    const subjects = (await res.json()) as ISubjectsResponse;
    return subjects.data;
  } catch (err) {
    console.error("Failed to fetch subjects:", err);
    toast.error("Failed to fetch subjects. API error");
  }
}

export async function getIntakes(data: IIntakesRequest) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/v1/admin/intake-months`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        next: { revalidate: 10 }, // 10 seconds
        body: JSON.stringify(data),
      },
    );
    const intakes = (await res.json()) as IIntakesResponse;
    return intakes.data;
  } catch (err) {
    console.error("Failed to fetch intakes:", err);
    toast.error("Failed to fetch intakes. API error");
  }
}

export async function getCourseLevels(data: ICourseLevelsRequest) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/v1/admin/course-levels`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        next: { revalidate: 10 }, // 10 seconds
        body: JSON.stringify(data),
      },
    );
    const courseLevels = (await res.json()) as ICourseLevelsResponse;
    return courseLevels.data;
  } catch (error) {
    console.error("Failed to fetch course levels:", error);
    toast.error("Failed to fetch courseLevels. API error");
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

export async function resetPassword(data: IResetPasswordRequest) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/v1/admin/reset-password`,
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
    console.error("Resetting Password failed:", error);
    toast.error("Resetting Password failed. API error");
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

export async function getCourseById(id: string) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/v1/user/single_course`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      },
    );
    const course = (await res.json()) as ICourseSingleResponse;
    return course.data;
  } catch (error) {
    console.error("Failed to fetch course:", error);
    toast.error("Failed to fetch course. API error");
  }
}

export async function getEvents() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/v1/user/events/lk`,
      {
        next: { revalidate: 10 }, // 10 seconds
      },
    );
    const events = (await res.json()) as IEventResponse;
    return events.data;
  } catch (error) {
    console.error("Failed to fetch events:", error);
    toast.error("Failed to fetch events. API error");
  }
}

export async function getEventBySlug(slug: string) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/v1/user/event-contents/${slug}`,
    );
    const event = (await res.json()) as IEventResponseTwo;
    return event.data;
  } catch (error) {
    console.error("Failed to fetch event:", error);
    toast.error("Failed to fetch event. API error");
  }
}

export async function getScholarships(data: IScholarshipRequest) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/v1/admin/scholarship/list`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        next: { revalidate: 10 }, // 10 seconds
      },
    );
    const scholarships = await res.json();
    return scholarships.data;
  } catch (error) {
    console.error("Failed to fetch scholarships:", error);
    toast.error("Failed to fetch scholarships. API error");
  }
}

export async function getCareers(country: string) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/v1/user/careers/${country}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        next: { revalidate: 10 }, // 10 seconds
      },
    );
    const careers = await res.json();
    return careers.data;
  } catch (error) {
    console.error("Failed to fetch careers:", error);
    toast.error("Failed to fetch careers. API error");
  }
}

export async function getCareerBySlug(slug: string) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/v2/admin/career/${slug}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    const career = await res.json();
    return career.data;
  } catch (error) {
    console.error("Failed to fetch career:", error);
    toast.error("Failed to fetch career. API error");
  }
}
