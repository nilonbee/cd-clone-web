"use client";
import { ContainerLayout, Hero, InnerContainer } from "@/components/atoms";
import { BriefcaseIcon } from "@/components/atoms/Icons";
import { Stepper } from "@/components/molecules";
import { StepOne } from "@/components/organisms";
import { useRouter } from "next/navigation";
import React from "react";
import { IoMdArrowBack } from "react-icons/io";
const ApplicationEditPage = () => {
  const router = useRouter();

  return (
    <React.Fragment>
      <Hero />
      <div className="bg-whiteSmoke">
        <ContainerLayout>
          <InnerContainer>
            <div className="py-10">
              <div className="fadeIn flex gap-2 items-center justify-between">
                <div className="flex gap-2 items-center">
                  <div className="w-12 h-12">
                    <BriefcaseIcon />
                  </div>
                  <div>
                    <p className="text-base text-textColor font-bold">
                      ID : APL-71026555
                    </p>
                    <p className="text-xs text-black/60">
                      Edit your application here
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 items-center">
                  <div
                    className="flex gap-2 items-center text-black/60 cursor-pointer hover:text-primary"
                    onClick={() => router.push("/applications")}
                  >
                    <IoMdArrowBack />
                    <p className="text-xs ">Back to dashboard</p>
                  </div>
                </div>
              </div>
              <div className="w-full flex gap-4 mt-5">
                <div className="py-4 rounded-md w-1/5">
                  <Stepper currentStep={1} />
                </div>
                <div className="w-4/5">
                  <div className="w-full bg-white flex p-5 rounded-md shadow-md">
                    <StepOne />
                  </div>
                </div>
              </div>
            </div>
          </InnerContainer>
        </ContainerLayout>
      </div>
    </React.Fragment>
  );
};

export default ApplicationEditPage;
