"use client";
import { useApplicationStore } from "@/store";
import React from "react";
import { GiCheckMark } from "react-icons/gi";

export const Stepper = () => {
  const { currentStep, setCurrentStep } = useApplicationStore();

  const steps = [
    {
      step: 1,
      title: "Apply For Course",
      description: "Apply for a course of your choice",
      active: true,
      isCompleted: true,
    },
    {
      step: 2,
      title: "Upload Documents",
      description: "Upload required documents",
      active: true,
      isCompleted: false,
    },
    {
      step: 3,
      title: "Personal Information",
      description: "Fill in your personal information",
      active: false,
      isCompleted: false,
    },
    {
      step: 4,
      title: "Address Details",
      description: "Fill in your address details",
      active: false,
      isCompleted: false,
    },
    {
      step: 5,
      title: "Education Details",
      description: "Fill in your education details",
      active: false,
      isCompleted: false,
    },
    {
      step: 6,
      title: "IELTS / PTE Details",
      description: "Fill in your IELTS / PTE details",
      active: false,
      isCompleted: false,
    },
  ];

  return (
    <ol className=" overflow-hidden space-y-11">
      {steps.map((step, index) => (
        <li
          key={index}
          className={`relative flex-1 after:content-['']  after:w-0.5 after:h-full ${step.step < currentStep ? "after:bg-primary" : "after:bg-gray/40"}  after:inline-block after:absolute after:-bottom-10 after:left-4 lg:after:left-4`}
          onClick={() => setCurrentStep(step.step)}
        >
          <div className="flex items-center font-medium w-full cursor-pointer">
            {step.step < currentStep ? (
              <span className="w-8 h-8 bg-primary border-2 border-transparent rounded-full flex justify-center items-center mr-3 text-sm text-white ">
                <GiCheckMark />
              </span>
            ) : (
              <span
                className={`w-8 h-8  border-2  rounded-full flex justify-center items-center mr-3 text-sm text-black/80 ${step.step < currentStep + 1 ? "border-primary bg-primary/20" : "border-gray/40 bg-black/10"}`}
              >
                {step.step}
              </span>
            )}

            <div className="flex flex-col">
              <h4 className="text-sm  text-primary">{step.title}</h4>
              <span className="text-xs text-black/60">{step.description}</span>
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
};
