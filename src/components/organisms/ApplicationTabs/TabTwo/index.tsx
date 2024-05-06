"use client";
import React, { useState } from "react";
import { OLDetails } from "./EduDetails/OLDetails";
import { ALDetails } from "./EduDetails/ALDetails";
import { DiplomaDetails } from "./EduDetails/DiplomaDetails";
import { UnderGraduateDetails } from "./EduDetails/UnderGraduateDetails";
import { PostGraduateDetails } from "./EduDetails/PostGraduateDetails";
import { PHDDetails } from "./EduDetails/PHDDetails";

export const TabTwo = ({ application }: any) => {
  const [openTab, setOpenTab] = useState(1);

  const SwitchTabs = () => {
    switch (openTab) {
      case 1:
        return <OLDetails data={JSON.parse(application?.details_one)} />;
      case 2:
        return <ALDetails data={JSON.parse(application?.details_two)} />;
      case 3:
        return (
          <DiplomaDetails data={JSON.parse(application?.diploma_details)} />
        );
      case 4:
        return (
          <UnderGraduateDetails
            data={JSON.parse(application?.graduate_details)}
          />
        );
      case 5:
        return (
          <PostGraduateDetails
            data={JSON.parse(application?.post_graduate_details)}
          />
        );
      case 6:
        return <PHDDetails data={JSON.parse(application?.phd_details)} />;
      default:
        return <OLDetails data={JSON.parse(application?.details_one)} />;
    }
  };

  return (
    <div className="w-full">
      <p className="text-sm text-textColor font-semibold mb-4">
        Education Details
      </p>
      <div className="flex gap-4">
        <div className="w-[250px]">
          <div className="flex gap-1 flex-col">
            <div
              className={`p-2  rounded-full text-white text-center cursor-pointer ${openTab == 1 ? "bg-primary" : "bg-gray/50"} hover:bg-primary transition-all duration-300 ease-in-out`}
              onClick={() => setOpenTab(1)}
            >
              <p className="text-sm">OL Details</p>
            </div>
            <div
              className={`p-2  rounded-full text-white text-center cursor-pointer ${openTab == 2 ? "bg-primary" : "bg-gray/50"}  hover:bg-primary transition-all duration-300 ease-in-out`}
              onClick={() => setOpenTab(2)}
            >
              <p className="text-sm">AL Details</p>
            </div>
            <div
              className={`p-2  rounded-full text-white text-center cursor-pointer ${openTab == 3 ? "bg-primary" : "bg-gray/50"}  hover:bg-primary transition-all duration-300 ease-in-out`}
              onClick={() => setOpenTab(3)}
            >
              <p className="text-sm">Diploma Details</p>
            </div>
            <div
              className={`p-2  rounded-full text-white text-center cursor-pointer ${openTab == 4 ? "bg-primary" : "bg-gray/50"}  hover:bg-primary transition-all duration-300 ease-in-out`}
              onClick={() => setOpenTab(4)}
            >
              <p className="text-sm">Under-Graduate Details</p>
            </div>
            <div
              className={`p-2  rounded-full text-white text-center cursor-pointer ${openTab == 5 ? "bg-primary" : "bg-gray/50"}  hover:bg-primary transition-all duration-300 ease-in-out`}
              onClick={() => setOpenTab(5)}
            >
              <p className="text-sm">Post-Graduate Details</p>
            </div>
            <div
              className={`p-2  rounded-full text-white text-center cursor-pointer ${openTab == 6 ? "bg-primary" : "bg-gray/50"}  hover:bg-primary transition-all duration-300 ease-in-out`}
              onClick={() => setOpenTab(6)}
            >
              <p className="text-sm">PHD/Doctorate Details</p>
            </div>
          </div>
        </div>
        <div className="w-full">
          <SwitchTabs />
        </div>
      </div>
    </div>
  );
};
