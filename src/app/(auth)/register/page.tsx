import { ContainerLayout, InnerContainer } from "@/components/atoms";
import { AuthHeader } from "@/components/molecules";
import { RegisterForm } from "@/components/organisms";

const RegisterPage = () => {
  return (
    <ContainerLayout>
      <div className="mx-auto md:w-[40%] sm:w-[80] mt-20">
        <AuthHeader title="Register" />
        <RegisterForm />
      </div>
    </ContainerLayout>
  );
};

export default RegisterPage;
