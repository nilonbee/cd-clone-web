"use client";
import { MainButton } from "@/components/atoms";
import {
  InputDatePicker,
  InputField,
  InputRadio,
} from "@/components/molecules";
import { useApplicationStore } from "@/store";
import validationSchema from "@/utils/validationSchema";
import moment from "moment";
import React, { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";

type FormValues = {
  first_name: string;
  middle_name: string;
  last_name: string;
  email: string;
  phone: string;
  first_language: string;
  dob: string;
  country_citizen: string;
  passport_number: string;
  gender: string;
  marital_status: string;
};

export const StepThree = () => {
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormValues>();
  const { enquiryData, setCurrentStep, setEnquiryData } = useApplicationStore();
  const [gender, setGender] = React.useState<string>("");
  const [maritalStatus, setMaritalStatus] = React.useState<string>("");
  const [dob, onChange] = React.useState<string>("");

  useEffect(() => {
    console.log("enquiryData?.personalData", enquiryData?.personalData);

    setValue("first_name", enquiryData.personalData.first_name);
    setValue("middle_name", enquiryData.personalData.middle_name);
    setValue("last_name", enquiryData.personalData.last_name);
    setValue("email", enquiryData.personalData.email);
    setValue("phone", enquiryData.personalData.phone);
    setValue("first_language", enquiryData.personalData.first_language);
    setValue("country_citizen", enquiryData.personalData.country_citizen);
    setValue("passport_number", enquiryData.personalData.passport_number);
    setValue("gender", enquiryData.personalData.gender);
    setValue("marital_status", enquiryData.personalData.marital_status);
    setGender(enquiryData.personalData.gender);
    setMaritalStatus(enquiryData.personalData.marital_status);
    onChange(
      enquiryData?.personalData?.dob &&
        moment(enquiryData?.personalData?.dob).format("YYYY-MM-DD"),
    );
    // eslint-disable-next-line
  }, []);
  const onSubmit = (data: FormValues) => {
    setEnquiryData({
      ...enquiryData,
      personalData: {
        first_name: data.first_name,
        middle_name: data.middle_name,
        last_name: data.last_name,
        email: data.email,
        phone: data.phone,
        first_language: data.first_language,
        dob: dob,
        country_citizen: data.country_citizen,
        passport_number: data.passport_number,
        gender: gender,
        marital_status: maritalStatus,
      },
    });
    setCurrentStep(4);
  };

  return (
    <div className="w-full">
      <p className="text-sm text-textColor font-semibold mb-5">
        Personal Information
      </p>
      <form className="w-full mt-5" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-5 xs:flex-col sm:flex-col md:flex-row">
          <div className="xs:w-full sm:w-full md:w-1/2">
            <Controller
              name="first_name"
              control={control}
              defaultValue=""
              rules={validationSchema.first_name}
              render={({ field }) => (
                <div>
                  <InputField
                    label="First Name"
                    placeholder="Enter Your First Name"
                    type="text"
                    id="first_name"
                    error={errors.first_name?.message}
                    {...field}
                  />
                </div>
              )}
            />
            <Controller
              name="middle_name"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <div>
                  <InputField
                    label="Middle Name"
                    placeholder="Enter Your Middle Name"
                    type="text"
                    id="middle_name"
                    {...field}
                  />
                </div>
              )}
            />
            <Controller
              name="last_name"
              control={control}
              defaultValue=""
              rules={validationSchema.last_name}
              render={({ field }) => (
                <div>
                  <InputField
                    label="Last Name"
                    placeholder="Enter Your Last Name"
                    type="text"
                    id="last_name"
                    error={errors.last_name?.message}
                    {...field}
                  />
                </div>
              )}
            />
            <Controller
              name="email"
              control={control}
              defaultValue=""
              rules={validationSchema.email}
              render={({ field }) => (
                <div>
                  <InputField
                    label="Email Address"
                    placeholder="Enter Your Email Address"
                    type="text"
                    id="email"
                    disabled={true}
                    error={errors.email?.message}
                    {...field}
                  />
                </div>
              )}
            />
            <Controller
              name="phone"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <div>
                  <InputField
                    label="Contact Number"
                    placeholder="Enter Your Contact Number"
                    type="text"
                    id="email"
                    {...field}
                  />
                </div>
              )}
            />
            <Controller
              name="first_language"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <div>
                  <InputField
                    label="First Language"
                    placeholder="Enter Your First Language"
                    type="text"
                    id="first_language"
                    {...field}
                  />
                </div>
              )}
            />
          </div>
          <div className="xs:w-full sm:w-full md:w-1/2">
            <InputDatePicker
              value={dob}
              onChange={onChange}
              label="Date Of Exam"
            />

            <Controller
              name="country_citizen"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <div>
                  <InputField
                    label="Country Citizenship"
                    placeholder="Country Citizenship"
                    type="text"
                    id="country_citizen"
                    {...field}
                  />
                </div>
              )}
            />
            <Controller
              name="passport_number"
              control={control}
              defaultValue=""
              rules={validationSchema.passport_number}
              render={({ field }) => (
                <div>
                  <InputField
                    label="Passport Number"
                    placeholder="Passport Number"
                    type="text"
                    id="passport_number"
                    error={errors.passport_number?.message}
                    {...field}
                  />
                </div>
              )}
            />
            <div className="border border-borderGray p-2 rounded-md">
              <p className="text-gray font-medium text-sm mb-2 "> Gender </p>
              <div className="flex gap-5">
                <InputRadio
                  id="Male"
                  name="gender"
                  label="Male"
                  value="Male"
                  onChange={(e) => setGender(e.target.value)}
                  selectedValue={gender}
                />
                <InputRadio
                  id="Female"
                  name="gender"
                  label="Female"
                  value="Female"
                  onChange={(e) => setGender(e.target.value)}
                  selectedValue={gender}
                />
              </div>
            </div>
            <div className="border border-borderGray p-2 rounded-md mt-4">
              <p className="text-gray font-medium text-sm mb-2 ">
                Marital Status
              </p>
              <div className="flex gap-5">
                <InputRadio
                  id="Married"
                  name="marital_status"
                  label="Married"
                  value="Married"
                  onChange={(e) => setMaritalStatus(e.target.value)}
                  selectedValue={maritalStatus}
                />
                <InputRadio
                  id="Unmarried"
                  name="marital_status"
                  label="Unmarried"
                  value="Unmarried"
                  onChange={(e) => setMaritalStatus(e.target.value)}
                  selectedValue={maritalStatus}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end mt-5 gap-2">
          <MainButton
            label="Back"
            btnSize="Medium"
            btnStyle="Secondary"
            onClick={() => setCurrentStep(2)}
          />
          <MainButton label="Next" btnSize="Medium" btnStyle="Primary" submit />
        </div>
      </form>
    </div>
  );
};
