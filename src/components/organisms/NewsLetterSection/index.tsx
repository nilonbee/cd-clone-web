import { MainButton } from "@/components/atoms";
import { InputField } from "@/components/molecules";
import React from "react";

export const NewsLetterSection = () => {
  return (
    <div className="p-16 flex justify-between items-center bg-[#d4ebff] gap-4 mx-20">
      <div className="">
        <h2 className="leading-8 text-[32px] text-black">
          Subscribe newsletter and get new updates
        </h2>
      </div>
      <InputField
        placeholder="Enter your email"
        type="email"
        id="name"
        name="name"
        required
        noMargin
        customStyle="bg-transparent w-[450px]"
      />
      <MainButton
        label="Send"
        btnStyle="Secondary"
        btnSize="Medium"
        customStyle="w-[200px]"
      />
    </div>
  );
};
