/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import { MainButton } from "@/components/atoms";
import {
  InputField,
  MediaUpload,
  PhoneInputField,
} from "@/components/molecules";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import validationSchema from "@/utils/validationSchema";
import { sendCareerApplication } from "@/utils/api-requests";
import { useRouter } from "next/navigation";

type FormValues = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  phone: string;
};

type CareerFormProps = {
  slug?: string;
};

export const CareersForm = ({ slug }: CareerFormProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const [loading, setLoading] = useState(false);
  const [upFile, setUpFile] = useState("");
  const router = useRouter();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const applicationRequest = {
      ...data,
      slug,
      resume: upFile,
    };
    if (!upFile) {
      toast.error("Please upload your CV...");
    }
    setLoading(true);
    const response = await sendCareerApplication(applicationRequest);
    setLoading(false);
    if (response?.status === "success") {
      toast.success("successfully applied. We will get back to you soon.");
      // router.push("/dashboard");
    } else {
      toast.error("Send Application failed");
    }
  };

  return (
    <div className="bg-[#eef7ff] shadow rounded p-5 border border-boxBorder sticky top-[120px]">
      <img
        src="/images/applyNow.png"
        alt="careers-form"
        className="w-20 h-20 absolute top-0 right-0 -mt-10 mr-5 animate-bounce"
      />
      <h4 className="text-base font-semibold text-primary">
        Apply for this position
      </h4>
      <form className="flex flex-col mt-6" onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="first_name"
          control={control}
          rules={validationSchema.first_name}
          defaultValue=""
          render={({ field }) => (
            <InputField
              label="Fast Name"
              placeholder="Enter your first name"
              type="text"
              error={errors.first_name?.message}
              id="first-name"
              customStyle="bg-transparent"
              required
              {...field}
            />
          )}
        />
        <Controller
          name="last_name"
          control={control}
          rules={validationSchema.last_name}
          defaultValue=""
          render={({ field }) => (
            <InputField
              label="Last Name"
              placeholder="Enter your last name"
              type="text"
              id="last-name"
              customStyle="bg-transparent"
              error={errors.last_name?.message}
              required
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
              required
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
              required
              error={errors.phone?.message}
              backgroundColor="#eef7ff"
              {...field}
            />
          )}
        />
        <MediaUpload
          type="file"
          title="Upload CV"
          upFile={upFile}
          required
          setUpFile={setUpFile}
          accept="application/pdf"
          prefix="CV"
          backgroundColor="#eef7ff"
        />
        <MainButton
          label="Submit"
          btnStyle="Primary"
          btnSize="Large"
          customStyle="mt-2"
          submit
          loading={loading}
          disabled={loading}
        />
      </form>
    </div>
  );
};
