import { PinIcon, TimeIcon, UniversityIcon } from "@/components/atoms/Icons";
import Image from "next/image";
import React from "react";

export const UniRow = () => {
  return (
    <div className="p-4 flex gap-5 items-center self-stretch relative w-full bg-[#eef7ff] rounded shadow border border-boxBorder">
      <div className="border-r border-grayText">
        <Image
          src="/images/Frame 19.png"
          alt="university-logo"
          width={200}
          height={200}
        />
      </div>
      <div className="flex flex-col gap-1 justify-center items-start relative bg-transparent">
        <h2 className="text-2xl text-textColor">Msc Finance</h2>
        <div className="flex gap-3 relative bg-transparent flex-row  justify-between flex-wrap">
          <div className="flex gap-2 items-center relative bg-transparent">
            <UniversityIcon />
            <p className="text-sm text-black/60">Nottingham Trent University</p>
          </div>
          <div className="flex gap-2 items-center relative bg-transparent">
            <PinIcon />
            <p className="text-sm text-black/60">United Kindom</p>
          </div>
          <div className="flex gap-2 items-center relative bg-transparent">
            <TimeIcon />
            <p className="text-sm text-black/60">4 Years / 8 Semester</p>
          </div>
        </div>
      </div>
    </div>
  );
};
