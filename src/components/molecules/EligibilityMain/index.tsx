import React from "react";
import Image from "next/image";
import { NavigationButton, Writer } from "@/components/atoms";

export const EligibilityBanner = () => {
  return (
    <div className="bg-[url('/images/surway.png')] bg-cover bg-center bg-no-repeat w-screen max-h-min">
      {/* Container for logo and writer text */}
      <div className="flex justify-center items-center flex-col">
        {/* Logo Image */}
        <div className="pt-[5%]">
          <Image
            src="/images/logo-white.png"
            alt="logo-white"
            width={200}
            height={200}
            className="object-contain"
          />
        </div>
        {/* Writer component for text */}
        <div className="text-center my-3 h-12">
          <Writer text="Navigate Your Future: Personalized Course Insights!" />
        </div>
        {/* text */}
        <p className="text-white text-balance text-center my-3">
          Discover the best courses for your goals and interests! Just answer a
          few quick questions, <br />
          and we``ll recommend personalized learning options to guide your
          journey.
        </p>
        <NavigationButton
          url="/eligibility-test/steps"
          text="Continue"
          bgColor="white"
          textColor="primary"
        />
      </div>
    </div>
  );
};
