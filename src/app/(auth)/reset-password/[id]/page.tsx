import { ContainerLayout } from "@/components/atoms";
import { AuthHeader } from "@/components/molecules/AuthHeader";
import { NewPasswordForm } from "@/components/organisms";

export default function ResetPasswordPage() {
  return (
    <ContainerLayout>
      <div className="flex h-screen justify-center items-center">
        <div className="mx-auto lg:w-[500px] md:w-[500px] sm:w-[100%] xs:w-[100%] pt-10">
          <AuthHeader title="New Password" />
          <NewPasswordForm />
        </div>
      </div>
    </ContainerLayout>
  );
}
