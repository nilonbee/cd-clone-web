import React from "react";
import { MainButton, SectionHeader } from "@/components/atoms";

export const SecondaryFooter = () => {
  return (
    <div className="flex flex-col justify-center items-center w-screen bg-[#D4EBFF] bg-opacity-40 m-auto py-8 mt-6">
      <SectionHeader
        title="Interested? Let's talk!"
        description="Send us a message with what we can help you."
      />
      <div className="flex justify-center items-center mt-10">
        <MainButton
          label="Let's Talk"
          btnStyle="Secondary"
          btnSize="Medium"
          customStyle="w-[200px]"
        />
      </div>
    </div>
  );
};
