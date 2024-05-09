"use client";
import { MainButton, Switch } from "@/components/atoms";
import { MediaUpload } from "@/components/molecules";
import { useApplicationStore } from "@/store";
import React, { useState } from "react";

export const StepTwo = () => {
  const { enquiryData, setCurrentStep } = useApplicationStore();
  const [refDoc, setRefDoc] = useState<string>(enquiryData?.refusedDoc || "");
  const [isRefused, setIsRefused] = useState<boolean>(
    enquiryData?.refusedDoc ? true : false,
  );
  const [upFiles, setUpFiles] = useState(enquiryData?.uploadDocuments || []);

  const addNewDoc = () => {
    setUpFiles((prev) => [
      ...prev,
      {
        name: "Other Documents " + (prev.length + 1),
        doc_url: "",
        prefix_doc: "other_doc",
      },
    ]);
  };

  const nextStep = () => {
    enquiryData.uploadDocuments = upFiles;
    enquiryData.refusedDoc = refDoc;
    console.log("enquiryData", enquiryData);
    setCurrentStep(3);
  };

  return (
    <div className="w-full">
      <p className="text-sm text-textColor font-semibold">Upload Documents</p>
      <div className="flex gap-4 mt-4 flex-wrap items-end">
        {upFiles.map((file, index) => (
          <MediaUpload
            key={index}
            title={file.name}
            upFile={file.doc_url}
            setUpFile={(file) =>
              setUpFiles((prev) => {
                const newFiles = [...prev];
                newFiles[index].doc_url = file;
                return newFiles;
              })
            }
            accept="application/pdf"
            prefix={file.prefix_doc}
            type="file"
            titleHeight="h-8"
            location="documents/dynamic-documents"
          />
        ))}
        <div
          className="w-[180px] h-[180px] flex items-center text-grayMedium rounded-md tracking-wide uppercase border border-dashed border-grayMedium cursor-pointer hover:text-textColor justify-center hover:border-textColor bg-gray/10"
          onClick={addNewDoc}
        >
          <p className="text-xs text-gray">Add other Document</p>
        </div>
      </div>

      <div className="flex mt-8 gap-2 mb-4">
        <Switch isChecked={isRefused} setIsChecked={setIsRefused} />
        <p className="text-sm text-textColor">
          Have You been Refused Visa from USA, UK, NZ or Australia?
        </p>
      </div>
      {isRefused && (
        <MediaUpload
          upFile={refDoc}
          setUpFile={(file) => setRefDoc(file)}
          accept="application/pdf"
          prefix={"refused_doc"}
          type="file"
          titleHeight="h-8"
          location="documents/dynamic-documents"
        />
      )}

      <div className="flex justify-end mt-5 gap-2">
        <MainButton
          label="Back"
          btnSize="Medium"
          btnStyle="Secondary"
          onClick={() => setCurrentStep(1)}
        />
        <MainButton
          label="Next"
          btnSize="Medium"
          btnStyle="Primary"
          onClick={() => nextStep()}
        />
      </div>
    </div>
  );
};
