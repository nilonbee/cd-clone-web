import { ContainerLayout, InnerContainer } from "@/components/atoms";
import { AuthHeader } from "@/components/molecules/AuthHeader";
import { LoginForm } from "@/components/organisms";

export default function LoginPage() {
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
