import { MainButton } from "@/components/atoms";
import { InputField } from "@/components/molecules";
import React from "react";

export const NewsLetterSection = () => {
  return (
    <div className="-mb-20 z-1 relative lg:px-10 md:px-0">
      <div className="lg:p-16 md:p-10 sm:p-10 xs:p-5 flex justify-between items-center bg-[#d4ebff] gap-4 lg:mx-20 md:mx-0 md:flex-row sm:flex-col xs:flex-col shadow-md rounded">
        <div className="">
          <h2 className="lg:text-3xl md:text-2xl sm:text-2xl xs:text-2xl  text-black">
            Subscribe newsletter and get new updates
          </h2>
        </div>
        <div className="lg:w-[450px] md:w-[450px] sm:w-full xs:w-full">
          <InputField
            placeholder="Enter your email"
            type="email"
            id="name"
            name="name"
            required
            noMargin
            customStyle="bg-transparent"
          />
        </div>
        <MainButton
          label="Send"
          btnStyle="Secondary"
          btnSize="Medium"
          customStyle="lg:w-[200px] md:w-[200px] sm:w-full xs:w-full"
        />
      </div>
    </div>
  );
};
