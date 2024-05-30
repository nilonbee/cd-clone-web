"use client";
import { MainButton } from "@/components/atoms";
import { useApplicationStore } from "@/store";
import React, { useState } from "react";
import OLDetailsForm from "./OLDetailsForm";
import ALDetailsForm from "./ALDetailsForm";
import DiplomaDetailsForm from "./DiplomaDetailsForm";
import UnderGraduateDetailsForm from "./UnderGraduateDetailsForm";
import PostGraduateDetailsForm from "./PostGraduateDetailsForm";
import PHDDetailsForm from "./PHDDetailsForm";

export const StepFive = () => {
  const { currentStep, setCurrentStep } = useApplicationStore();
  const [openTab, setOpenTab] = useState(1);

  const SwitchTabs = () => {
    switch (openTab) {
      case 1:
        return <OLDetailsForm />;
      case 2:
        return <ALDetailsForm />;
      case 3:
        return <DiplomaDetailsForm />;
      case 4:
        return <UnderGraduateDetailsForm />;
      case 5:
        return <PostGraduateDetailsForm />;
      case 6:
        return <PHDDetailsForm />;
      default:
        return <OLDetailsForm />;
    }
  };

  return (
    <div className="w-full">
      <p className="text-sm text-textColor font-semibold mb-5">
        Education Details
      </p>
      <div className="flex gap-4 xs:flex-col sm:flex-col md:flex-row">
        <div className="xs:w-full sm:w-full md:w-[250px]">
          <div className="flex gap-1 xs:flex-row sm:flex-row md:flex-col flex-wrap">
            <div
              className={`p-2 px-4 rounded-full text-white text-center cursor-pointer ${openTab == 1 ? "bg-primary" : "bg-gray/50"} hover:bg-primary transition-all duration-300 ease-in-out `}
              onClick={() => setOpenTab(1)}
            >
              <p className="text-sm">OL Details</p>
            </div>
            <div
              className={`p-2 px-4 rounded-full text-white text-center cursor-pointer ${openTab == 2 ? "bg-primary" : "bg-gray/50"}  hover:bg-primary transition-all duration-300 ease-in-out`}
              onClick={() => setOpenTab(2)}
            >
              <p className="text-sm">AL Details</p>
            </div>
            <div
              className={`p-2 px-4 rounded-full text-white text-center cursor-pointer ${openTab == 3 ? "bg-primary" : "bg-gray/50"}  hover:bg-primary transition-all duration-300 ease-in-out`}
              onClick={() => setOpenTab(3)}
            >
              <p className="text-sm">Diploma Details</p>
            </div>
            <div
              className={`p-2 px-4 rounded-full text-white text-center cursor-pointer ${openTab == 4 ? "bg-primary" : "bg-gray/50"}  hover:bg-primary transition-all duration-300 ease-in-out`}
              onClick={() => setOpenTab(4)}
            >
              <p className="text-sm">Under-Graduate Details</p>
            </div>
            <div
              className={`p-2 px-4 rounded-full text-white text-center cursor-pointer ${openTab == 5 ? "bg-primary" : "bg-gray/50"}  hover:bg-primary transition-all duration-300 ease-in-out`}
              onClick={() => setOpenTab(5)}
            >
              <p className="text-sm">Post-Graduate Details</p>
            </div>
            <div
              className={`p-2 px-4 rounded-full text-white text-center cursor-pointer ${openTab == 6 ? "bg-primary" : "bg-gray/50"}  hover:bg-primary transition-all duration-300 ease-in-out`}
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

      <div className="flex justify-end mt-5 gap-2">
        <MainButton
          label="Back"
          btnSize="Medium"
          btnStyle="Secondary"
          onClick={() => setCurrentStep(currentStep - 1)}
        />
        <MainButton
          label="Next"
          btnSize="Medium"
          btnStyle="Primary"
          onClick={() => setCurrentStep(currentStep + 1)}
        />
      </div>
    </div>
  );
};
