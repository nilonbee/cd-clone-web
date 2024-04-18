import { ContainerLayout } from "@/components/atoms";
import { AuthHeader } from "@/components/molecules/AuthHeader";
import { PasswordResetForm } from "@/components/organisms";

export default function ForgetPasswordPage() {
  return (
    <ContainerLayout>
      <div className="flex h-screen justify-center items-center ">
        <div className="mx-auto lg:w-[500px] md:w-[500px] sm:w-[100%] xs:w-[100%] pt-10">
          <AuthHeader title="Reset Password" />
          <PasswordResetForm />
        </div>
      </div>
    </ContainerLayout>
  );
}
