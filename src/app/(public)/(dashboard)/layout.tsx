"use client";
import { useUserStore } from "@/store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProtectedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();

  const { authUser } = useUserStore();

  useEffect(() => {
    if (!authUser) {
      router.push("/login");
    }
  }, [authUser, router]);

  if (!authUser) {
    return null; // Return null while waiting for authentication
  }

  return <section>{children}</section>;
}
