/* eslint-disable @next/next/no-img-element */
'use client';
import React, { useState } from "react";
import toast from "react-hot-toast";
import validationSchema from "@/utils/validationSchema";

import { useUserStore } from "@/store";
import { ConfirmationDialog, MainButton } from "@/components/atoms";
import { useCourseStore } from "@/store";
import { InputField, InputSelectField, PhoneInputField } from "@/components/molecules";
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { sendApplication } from "@/utils/auth-api-requests";
import { IIntake } from "@/types/intakes";
import { useRouter } from "next/navigation";


type FormValues = {
  first_name: string;
  middle_name: string;
  last_name: string;
  email: string;
  password: string;
  phone: string;
  intake_id: number;
}

type ApplicationFormProps = {
  intakes?: IIntake[];
}

export const ApplicationForm = ({ intakes }: ApplicationFormProps) => {
  const router = useRouter();
  const { authUser } = useUserStore();
  const { selectedCourseId } = useCourseStore();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const [isOpen, setIsOpen] = useState(false);

  const [loading, setLoading] = useState(false);

  const handleNavigate = () => {
    router.push("/login")
    setIsOpen(false);
  }

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    if (!authUser) {
      setIsOpen(true);

      return;
    }
    const applicationRequest = {
      ...data, course_id: selectedCourseId
    }
    setLoading(true);
    const response = await sendApplication(applicationRequest);
    setLoading(false);
    if (response?.status === "success") {
      toast.success("Successfully Applied. We will get back to you soon...");
    } else {
      toast.error("Send Application Failed...!");
    }
  }

  return (
    <>
      <div className="bg-[#eef7ff] shadow rounded p-5 border border-boxBorder sticky top-[120px]">
        <img
          src="/images/applyNow.png"
          alt="careers-form"
          className="w-20 h-20 absolute top-0 right-0 -mt-10  animate-bounce"
        />
        <h4 className="text-base font-semibold text-primary">
          Apply for the course
        </h4>
        <form className="flex flex-col mt-6" onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="first_name"
            control={control}
            rules={validationSchema.first_name}
            defaultValue=""
            render={({ field }) => (
              <InputField
                label="First Name"
                placeholder="Enter your first name"
                type="text"
                error={errors.first_name?.message}
                id="first-name"
                customStyle="bg-transparent"
                // required
                {...field}
              />
            )}
          />
          <Controller
            name="middle_name"
            control={control}
            rules={validationSchema.first_name}
            defaultValue=""
            render={({ field }) => (
              <InputField
                label="Middle Name"
                placeholder="Enter your first name"
                type="text"
                error={errors.middle_name?.message}
                id="middle-name"
                customStyle="bg-transparent"
                // required
                {...field}
              />
            )}
          />
          <Controller
            name="last_name"
            control={control}
            rules={validationSchema.first_name}
            defaultValue=""
            render={({ field }) => (
              <InputField
                label="Last Name"
                placeholder="Enter your last name"
                type="text"
                id="last-name"
                customStyle="bg-transparent"
                error={errors.last_name?.message}
                // required
                {...field}
              />
            )}
          />
          <Controller
            name="email"
            control={control}
            rules={validationSchema.email}
            defaultValue=""
            render={({ field }) => (
              <InputField
                label="Email Address"
                placeholder="Enter your email"
                type="email"
                id="email"
                customStyle="bg-transparent"
                error={errors.email?.message}
                // required
                {...field}
              />
            )}
          />
          <Controller
            name="phone"
            control={control}
            rules={validationSchema.phone}
            defaultValue=""
            render={({ field }) => (
              <PhoneInputField
                label="Phone Number"
                placeholder="Enter your phone number"
                id="phone"
                // required
                error={errors.phone?.message}
                backgroundColor="#eef7ff"
                {...field}
              />
            )}
          />
          <Controller
            name="intake_id"
            control={control}
            rules={validationSchema.intake}
            render={({ field }) => (
              <InputSelectField
                label="Intake Month"
                id="intake_id"
                backgroundColor="#eef7ff"
                placeholder="Select Intake Month"
                error={errors.intake_id?.message}
                options={intakes?.map((intake) => ({
                  value: intake.id,
                  label: intake.months,
                }))}
                {...field}
              />
            )}
          />
          <MainButton
            label="Submit"
            submit
            btnStyle="Primary"
            btnSize="Large"
            loading={loading}
            disabled={loading}
            customStyle="mt-2"
          />
        </form>
      </div>
      {isOpen && (
        <ConfirmationDialog
          isOpen={isOpen}
          closeModal={() => setIsOpen(false)}
          onConfirm={handleNavigate}
          title="Please Login"
          description="Kindly Login or Register to send Applications"
          submitText="Confirm"
        />
      )}
    </>
  );
};
