/* eslint-disable @next/next/no-img-element */
import { MainButton } from "@/components/atoms";
import { InputField } from "@/components/molecules";
import React from "react";

export const ApplicationForm = () => {
  return (
    <div className="bg-[#eef7ff] shadow rounded p-5 border border-boxBorder sticky top-[120px]">
      <img
        src="/images/applyNow.png"
        alt="careers-form"
        className="w-20 h-20 absolute top-0 right-0 -mt-10  animate-bounce"
      />
      <h4 className="text-base font-semibold text-primary">
        Apply for the course
      </h4>
      <form className="flex flex-col mt-6">
        <InputField
          label="First Name"
          placeholder="Enter your name"
          type="text"
          id="fName"
          customStyle="bg-transparent"
          required
        />
        <InputField
          label="Middle Name"
          placeholder="Enter your name"
          type="text"
          id="fName"
          customStyle="bg-transparent"
          required
        />
        <InputField
          label="Last Name"
          placeholder="Enter your name"
          type="text"
          id="fName"
          customStyle="bg-transparent"
          required
        />
        <InputField
          label="Email Address"
          placeholder="Enter your email"
          type="email"
          id="email"
          customStyle="bg-transparent"
          required
        />
        <InputField
          label="Select Intake"
          placeholder="Enter your phone number"
          type="text"
          id="phone"
          customStyle="bg-transparent"
          required
        />
        <InputField
          label="Phone Number"
          placeholder="Enter your phone number"
          type="text"
          id="phone"
          customStyle="bg-transparent"
          required
        />
        <MainButton
          label="Submit"
          btnStyle="Primary"
          btnSize="Large"
          customStyle="mt-2"
        />
      </form>
    </div>
  );
};
