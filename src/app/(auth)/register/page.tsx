import Link from "next/link";
import Image from "next/image";

import {
  ContainerLayout,
  InnerContainer,
  MainButton,
  SectionHeader,
} from "@/components/atoms";
import { AuthHeader } from "@/components/molecules";
import { RegisterForm } from "@/components/organisms";

const RegisterPage = () => {
  return (
    <ContainerLayout>
      <div className="mt-[2rem]">
        <InnerContainer>
          <div className="mx-auto md:w-[60%] sm:w-[80]">
            <AuthHeader title="Register" />
            <RegisterForm />
          </div>
        </InnerContainer>
      </div>
    </ContainerLayout>
  );
};

export default RegisterPage;
