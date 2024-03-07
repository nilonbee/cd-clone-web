/* eslint-disable @next/next/no-img-element */
import { MainButton } from "@/components/atoms";
import { HatIcon2, PinIcon, UniversityIcon } from "@/components/atoms/Icons";
import { TimeIcon } from "@/components/atoms/Icons/TimeIcon";
import Link from "next/link";
import React from "react";

interface CourseBoxProps {
  university: string;
  logo?: string;
  country: string;
  duration: string;
  rating: number;
  tuitionFee: string;
  courseTitle: string;
}

export const CourseBox = ({
  university,
  logo,
  courseTitle,
  country,
  tuitionFee,
  duration,
  rating,
}: CourseBoxProps) => {
  return (
    <Link href="/lk">
      <div className="flex flex-col  bg-white rounded-md p-6 shadow">
        <div className="w-full h-24 overflow-hidden border-b border-grayLight pb-2">
          <img src={logo} alt="logo" className="w-full h-full object-contain" />
        </div>
        <div className="flex flex-col mt-5">
          <div className="flex gap-2.5 items-center relative bg-transparent">
            <HatIcon2 />
            <h5 className="font-semibold text-base text-primary">
              {courseTitle}
            </h5>
          </div>

          <div className="flex flex-col gap-2 items-start relative bg-transparent mt-4">
            <div className="flex gap-2 items-center relative bg-transparent">
              <UniversityIcon />
              <p className="text-sm text-black/60">
                Nottingham Trent University
              </p>
            </div>
            <div className="flex gap-2 items-center relative bg-transparent">
              <PinIcon />
              <p className="text-sm text-black/60">United Kindom</p>
            </div>
            <div className="flex gap-2 items-center relative bg-transparent">
              <TimeIcon />
              <p className="text-sm text-black/60">4 Years & 8 Semester</p>
            </div>
            <div className="flex gap-2 items-end relative bg-transparent">
              <h2 className="font-semibold text-3xl text-primary">$6000</h2>
              <p className="font-semibold text-sm text-[#b2b2b2]">
                (Total Amount)
              </p>
            </div>
            <div className="flex gap-2  justify-between items-center w-full">
              <MainButton label="Apply" btnStyle="Primary" btnSize="Medium" />
              <MainButton label="More" btnStyle="Secondary" btnSize="Medium" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
