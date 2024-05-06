"use client";
import { MainButton } from "@/components/atoms";
import { InputSelectField, MediaUpload } from "@/components/molecules";
import { useApplicationStore } from "@/store";
import { ICountry } from "@/types/countries";
import { ICourseLevel } from "@/types/courseLevels";
import { IIntake } from "@/types/intakes";
import React, { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

type FormValues = {
  country_id: string;
};

interface StepOneProps {
  countries: ICountry[];
  courseLevels: ICourseLevel[];
  intakes: IIntake[];
}

export const StepOne = ({ countries, courseLevels, intakes }: StepOneProps) => {
  const [upFile, setUpFile] = useState("");
  const { setCurrentStep } = useApplicationStore();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    console.log(data);
    setCurrentStep(2);
  };

  return (
    <div className="w-full">
      <p className="text-sm text-textColor font-semibold">Apply For Course</p>
      <form className="w-full mt-5" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-5">
          <div className="w-1/2">
            <Controller
              name="country_id"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <div>
                  <InputSelectField
                    label="Country"
                    id="selectOption"
                    placeholder="Select Country"
                    options={countries?.map((country) => ({
                      value: country.id,
                      label: country.name,
                    }))}
                    error={errors.country_id?.message}
                    {...field}
                  />
                </div>
              )}
            />
            <InputSelectField
              label="University"
              id="selectOption"
              placeholder="Select University"
            />
            <InputSelectField
              label="Intake Month"
              id="selectOption"
              placeholder="Select Intake Month"
              options={intakes?.map((intake) => ({
                value: intake.id,
                label: intake.months,
              }))}
            />
            <InputSelectField
              label="Intake Year"
              id="selectOption"
              placeholder="Select Intake Year"
            />
            <InputSelectField
              label="Course Level"
              id="selectOption"
              placeholder="Select Course Level"
              options={courseLevels?.map((courseLevel) => ({
                value: courseLevel.id,
                label: courseLevel.level,
              }))}
            />
            <InputSelectField
              label="Applying Course"
              id="selectOption"
              placeholder="Select Applying Course"
            />
          </div>
          <div className="w-1/2">
            <MediaUpload
              type="file"
              title="Upload SOP"
              upFile={upFile}
              setUpFile={setUpFile}
              accept="application/pdf"
              prefix="sop"
              id="sop"
            />
          </div>
        </div>
        <div className="flex justify-end mt-5 gap-2">
          <MainButton
            label="Clear Form"
            btnSize="Medium"
            btnStyle="Secondary"
          />
          <MainButton label="Next" btnSize="Medium" btnStyle="Primary" submit />
        </div>
      </form>
    </div>
  );
};
