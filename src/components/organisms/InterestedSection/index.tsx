import React from "react";
import Link from "next/link";
import { MainButton } from "@/components/atoms";

export const InterestedSection = () => {
  return (
    <div className="py-16 flex flex-col gap-6 justify-center items-center relative w-full from-[#d4ebff] to-[#d4ebff] bg-gradient-to-b">
      <h1 className="font-semibold text-3xl text-black/80">
        INTERESTED? LET&apos;S TALK!
      </h1>
      <h5 className="text-center text-base text-textColor">
        Reach out to us so that we can help you with the right information.
      </h5>
      <Link href="/contact">
        <MainButton
          label="Let’s Talk"
          btnStyle="Secondary"
          btnSize="Medium"
          customStyle="w-[197px]"
        />
      </Link>
    </div>
  );
};
