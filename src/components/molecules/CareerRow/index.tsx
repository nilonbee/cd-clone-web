import { MainButton } from "@/components/atoms";
import Link from "next/link";
import React from "react";

export const CareerRow = () => {
  return (
    <div className="border border-boxBorder p-8 flex justify-between items-center self-stretch relative w-full bg-white rounded shadow">
      <div className="relative bg-transparent w-2/5">
        <p className="font-semibold leading-[26px] text-base text-textColor">
          Student Counselor
        </p>
        <p className="leading-[26px] text-sm text-textColor line-clamp-4">
          Bachelors or above qualifications Minimum 2 -3 years of counselling
          experience in the education industry (Not mandatory) Excellent
          communication skills and convincing power with students Ability to
          develop a strong relationship with overseas universities and instit..
        </p>
      </div>
      <div className="flex flex-col gap-2 items-start relative bg-transparent">
        <p className="leading-5 text-sm text-textColor">
          Posted Date: 2023-06-30 04:49:40
        </p>
        <p className="leading-5 text-sm text-textColor">
          End Date : 2023-11-30
        </p>
      </div>
      <Link href="/lk/careers/1">
        <MainButton label="Apply Now" btnStyle="Secondary" btnSize="Large" />
      </Link>
    </div>
  );
};
