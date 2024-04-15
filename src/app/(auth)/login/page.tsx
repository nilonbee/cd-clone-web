import { ContainerLayout } from "@/components/atoms";
import { AuthHeader } from "@/components/molecules/AuthHeader";
import { LoginForm } from "@/components/organisms";

export default function LoginPage() {
  return (
    <ContainerLayout>
      <div className="mx-auto md:w-[40%] sm:w-[80] mt-20">
        <AuthHeader title="Sign In" />
        <LoginForm />
      </div>
    </ContainerLayout>
  );
}
