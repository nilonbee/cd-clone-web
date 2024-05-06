"use client";
import { MainButton } from "@/components/atoms";
import { useApplicationStore } from "@/store";
import React from "react";

export const StepSix = () => {
  const { currentStep, setCurrentStep } = useApplicationStore();

  return (
    <div className="w-full">
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
