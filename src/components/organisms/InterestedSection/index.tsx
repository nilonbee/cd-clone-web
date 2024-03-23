import { MainButton } from "@/components/atoms";
import React from "react";

export const InterestedSection = () => {
  return (
    <div className="py-16 flex flex-col gap-6 justify-center items-center relative w-full from-[#d4ebff] to-[#d4ebff] bg-gradient-to-b">
      <h1 className="font-semibold text-3xl text-black/80">
        Interested? Let&apos;s talk!
      </h1>
      <h5 className="text-center text-base text-textColor">
        Send us a message with what we can help you.
      </h5>
      <MainButton
        label="Let’s Talk"
        btnStyle="Secondary"
        btnSize="Medium"
        customStyle="w-[197px]"
      />
    </div>
  );
};
