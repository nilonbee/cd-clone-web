"use client";
import { MainButton } from "@/components/atoms";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export const MultiStepForm = () => {
  const { register, handleSubmit } = useForm();
  const [step, setStep] = useState(1);

  // Handling form submission (final submission)
  const onSubmit = (data: any) => {
    console.log(data);
  };

  // Proceed to the next step
  const nextStep = () => {
    if (step < 2) setStep(step + 1);
  };

  // Go back to the previous step
  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  // Step 1: Age options
  const ageOptions = [21, 22, 23];

  return (
    <div className="flex justify-center items-center flex-col">
      <div className="mx-auto p-6 bg-white rounded-md">
        {/* Step Indicators */}
        <div className="static flex justify-between top-[10%] mb-6">
          <div
            className={`h-2 flex-1 mx-1 ${step >= 1 ? "bg-primary" : "bg-gray-500"}`}
          ></div>
          <div
            className={`h-2 flex-1 mx-1 ${step >= 2 ? "bg-primary" : "bg-gray-500"}`}
          ></div>
        </div>

        {/* Step 1: Age Selection */}
        {step === 1 && (
          <div className="step-1">
            <h2 className="text-xl font-bold mb-4">I&apos;m ... years old</h2>
            <div className="mb-4">
              {/* Predefined Age Options */}
              {ageOptions.map((age) => (
                <label
                  key={age}
                  className="block mb-2 bg-[#D4EBFF] bg-opacity-75 rounded-none px-3 py-2"
                >
                  <input
                    type="radio"
                    {...register("age")}
                    value={age}
                    className="mr-2"
                  />
                  {age}
                </label>
              ))}
            </div>

            {/* Custom Age Input */}
            <div className="mb-4">
              <input
                type="number"
                placeholder="Enter your age"
                {...register("age")}
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>

            {/* <button
                            onClick={nextStep}
                            className="w-full bg-primary text-whiteGray py-2 rounded-none"
                            type="button"
                        >
                            
                        </button> */}
            <MainButton
              onClick={nextStep}
              fullWith
              btnSize="Large"
              btnStyle="Primary"
              label="Next Question"
            />
          </div>
        )}

        {/* Step 2: Course Selection */}
        {step === 2 && (
          <div className="step-2">
            <h2 className="text-xl font-bold mb-4">
              I&apos;m looking for courses
            </h2>
            <div className="mb-12">
              <label className="block mb-2 bg-[#D4EBFF] bg-opacity-75 rounded-none px-3 py-2">
                <input
                  type="radio"
                  {...register("course")}
                  value="Bachelors"
                  className="mr-2"
                />
                Bachelors
              </label>
              <label className="block mb-2 bg-[#D4EBFF] bg-opacity-75 rounded-none px-3 py-2">
                <input
                  type="radio"
                  {...register("course")}
                  value="Masters"
                  className="mr-2"
                />
                Masters
              </label>
              <label className="block mb-2 bg-[#D4EBFF] bg-opacity-75 rounded-none px-3 py-2">
                <input
                  type="radio"
                  {...register("course")}
                  value="Research"
                  className="mr-2"
                />
                Research
              </label>
            </div>

            <div className="flex justify-between items-center">
              <button
                onClick={prevStep}
                className="w-1/2 bg-gray-500 text-primary py-2 rounded-md mr-2 border-2"
                type="button"
              >
                Back
              </button>
              {/* <MainButton
                btnSize="Large"
                btnStyle="Secondary"
                label="Back"
                onClick={prevStep}
              /> */}
              {/* <button
                                onClick={handleSubmit(onSubmit)}
                                className="w-full bg-primary text-whiteGray py-2 rounded-none"
                                type="submit"
                            >
                                Submit
                            </button> */}
              <MainButton
                fullWith
                btnSize="Large"
                btnStyle="Primary"
                label="Submit"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
