"use client";
import { MainButton } from "@/components/atoms";
import { MediaUpload } from "@/components/molecules";
import { useApplicationStore } from "@/store";
import React, { useState } from "react";

export const StepTwo = () => {
  const { currentStep, setCurrentStep } = useApplicationStore();
  const [upFile, setUpFile] = useState("");

  return (
    <div className="w-full">
      <p className="text-sm text-textColor font-semibold">Upload Documents</p>
      <div className="flex gap-4 mt-4 flex-wrap">
        <MediaUpload
          title="OL MarkSheet"
          upFile={upFile}
          setUpFile={setUpFile}
          accept="application/pdf"
          prefix="ol"
          type="file"
        />
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
