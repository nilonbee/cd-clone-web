"use client";
import { ContainerLayout, InnerContainer } from "@/components/atoms";
import { AuthHeader } from "@/components/molecules/AuthHeader";
import { LoginForm } from "@/components/organisms";
import { useUserStore } from "@/store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LoginPage() {
  const router = useRouter();

  const { authUser } = useUserStore();

  useEffect(() => {
    if (authUser) {
      router.push("/applications");
    }
  }, [authUser, router]);

  if (authUser) {
    return router.push("/applications");
  }

  return (
    <ContainerLayout>
      <InnerContainer>
        <div className="flex justify-center items-center">
          <div className="mx-auto lg:w-[500px] md:w-[500px] sm:w-[100%] xs:w-[100%] pt-10">
            <AuthHeader title="Sign In" />
            <LoginForm />
          </div>
        </div>
      </InnerContainer>
    </ContainerLayout>
  );
}
