import { ICourseResponse } from "@/types/courses";
import { ILoginRequest, ILoginResponse } from "@/types/users";

export async function getCourses(limit: number) {
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
}

export async function userLogin(data: ILoginRequest) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/v1/user/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const user = (await res.json()) as ILoginResponse;
  return user;
}
