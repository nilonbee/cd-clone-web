import { IApplication } from "@/types/application";
import { ISendEmailRequest, ISendEmailResponse } from "@/types/contactForm";
import { ICountriesRequest, ICountriesResponse } from "@/types/countries";
import {
  ICourseLevelsRequest,
  ICourseLevelsResponse,
} from "@/types/courseLevels";
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

/**
 * Get courses from the API
 * @param limit - number of courses to fetch
 * @returns - array of courses from the API response data property
 */

const BaseUrl = process.env["NEXT_PUBLIC_API_URL"];

export async function getCourses(data: ICourseRequest) {
  try {
    const res = await fetch(`${BaseUrl}/v1/user/courses`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      next: { revalidate: 10 }, // 10 seconds
      body: JSON.stringify(data),
    });
    const courses = (await res.json()) as ICourseResponse;
    return courses.data;
  } catch (error) {
    console.error("Failed to fetch courses:", error);
  }
}

export async function getCountries(data: ICountriesRequest) {
  try {
    const res = await fetch(`${BaseUrl}/v1/countries`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      next: { revalidate: 10 }, // 10 seconds
      body: JSON.stringify(data),
    });
    const countries = (await res.json()) as ICountriesResponse;
    return countries.data;
  } catch (error) {
    console.error("Failed to fetch countries:", error);
  }
}

export async function getSubjects(data: ISubjectsRequest) {
  try {
    const res = await fetch(`${BaseUrl}/v1/subjects`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      next: { revalidate: 10 }, // 10 seconds
      body: JSON.stringify(data),
    });
    const subjects = (await res.json()) as ISubjectsResponse;
    return subjects.data;
  } catch (err) {
    console.error("Failed to fetch subjects:", err);
  }
}

export async function getIntakes(data: IIntakesRequest) {
  try {
    const res = await fetch(`${BaseUrl}/v1/admin/intake-months`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      next: { revalidate: 10 }, // 10 seconds
      body: JSON.stringify(data),
    });
    const intakes = (await res.json()) as IIntakesResponse;
    return intakes.data;
  } catch (err) {
    console.error("Failed to fetch intakes:", err);
  }
}

export async function getCourseLevels(data: ICourseLevelsRequest) {
  try {
    const res = await fetch(`${BaseUrl}/v1/admin/course-levels`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      next: { revalidate: 10 }, // 10 seconds
      body: JSON.stringify(data),
    });
    const courseLevels = (await res.json()) as ICourseLevelsResponse;
    return courseLevels.data;
  } catch (error) {
    console.error("Failed to fetch course levels:", error);
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
    const res = await fetch(`${BaseUrl}/v1/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const user = (await res.json()) as ILoginResponse;
    return user;
  } catch (error) {
    console.error("Login failed:", error);
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
    const res = await fetch(`${BaseUrl}/v1/user/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const user = (await res.json()) as IRegisterResponse;
    return user;
  } catch (error) {
    console.error("Registration failed:", error);
  }
}

export async function sendInquiry(data: ISendEmailRequest) {
  try {
    const res = await fetch(`${BaseUrl}/v1/user/contact-form`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const responseData = (await res.json()) as ISendEmailResponse;
    return responseData;
  } catch (error) {
    console.error("Email sending failed:", error);
  }
}

export async function resetPassword(data: IResetPasswordRequest) {
  try {
    const res = await fetch(`${BaseUrl}/v1/admin/reset-password`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const response = await res.json();
    return response;
  } catch (error) {
    console.error("Resetting Password failed:", error);
  }
}

export async function sendForgotPasswordEmail(data: IPasswordResetRequest) {
  try {
    const res = await fetch(`${BaseUrl}/v1/admin/forgot-password`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const response = await res.json();
    return response;
  } catch (error) {
    console.error("Failed to send reset link:", error);
  }
}

export async function getCourseById(id: string) {
  try {
    const res = await fetch(`${BaseUrl}/v1/user/single_course`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });
    const course = (await res.json()) as ICourseSingleResponse;
    return course.data;
  } catch (error) {
    console.error("Failed to fetch course:", error);
  }
}

export async function getEvents() {
  try {
    const res = await fetch(`${BaseUrl}/v1/user/events/lk`, {
      next: { revalidate: 10 }, // 10 seconds
    });
    const events = (await res.json()) as IEventResponse;
    return events.data;
  } catch (error) {
    console.error("Failed to fetch events:", error);
  }
}

export async function getEventBySlug(slug: string) {
  try {
    const res = await fetch(`${BaseUrl}/v1/user/event-contents/${slug}`);
    const event = (await res.json()) as IEventResponseTwo;
    return event.data;
  } catch (error) {
    console.error("Failed to fetch event:", error);
  }
}

export async function getScholarships(data: IScholarshipRequest) {
  try {
    const res = await fetch(`${BaseUrl}/v1/admin/scholarship/list`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      next: { revalidate: 10 }, // 10 seconds
    });
    const scholarships = await res.json();
    return scholarships.data;
  } catch (error) {
    console.error("Failed to fetch scholarships:", error);
  }
}

export async function getCareers(country: string) {
  try {
    const res = await fetch(`${BaseUrl}/v1/user/careers/${country}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      next: { revalidate: 10 }, // 10 seconds
    });
    const careers = await res.json();
    return careers.data;
  } catch (error) {
    console.error("Failed to fetch careers:", error);
  }
}

export async function getCareerBySlug(slug: string) {
  try {
    const res = await fetch(`${BaseUrl}/v2/admin/career/${slug}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const career = await res.json();
    return career.data;
  } catch (error) {
    console.error("Failed to fetch career:", error);
  }
}

export async function newsletterSubscribe(email: string) {
  try {
    const res = await fetch(`${BaseUrl}/v1/newsletter/subscribe`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });
    const response = await res.json();
    return response;
  } catch (error) {
    console.error("Failed to subscribe:", error);
  }
}

export async function getApplicants() {
  try {
    const token = JSON.parse(localStorage.getItem("CD-User") || "{}").state
      .access_token;

    const res = await fetch(`${BaseUrl}/v1/user/application/dashboard-list`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const applicants = await res.json();
    return applicants.data || ([] as IApplication[]);
  } catch (error) {
    console.error("Failed to fetch applicants:", error);
  }
}
