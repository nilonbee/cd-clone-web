"use client";
import React, { useState } from "react";
import { InnerContainer, MainButton, SectionHeader } from "@/components/atoms";
import {
  InputField,
  InputTextArea,
  PhoneInputField,
} from "@/components/molecules";
import validationSchema from "@/utils/validationSchema";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { sendInquiry } from "@/utils/api-requests";
import toast from "react-hot-toast";

type FormValues = {
  name: string;
  email: string;
  subject: string;
  password: string;
  phone: string;
  message: string;
};

export const ContactSection = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const [loading, setLoading] = useState(false);

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setLoading(true);
    const response = await sendInquiry(data);
    setLoading(false);
    if (response?.status === "success") {
      toast.success(response.message);
    } else {
      toast.error(response?.message ?? "Sending Email failed");
    }
  };

  return (
    <InnerContainer>
      <div className="pt-20 pb-20">
        <div className="flex flex-col justify-center items-center relative bg-transparent w-full">
          <SectionHeader
            title="Interested? Let's talk!"
            description="Send us a message with what we can help you."
          />
          <form
            className="w-full mt-10 lg:px-20 md:px-0"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex justify-center items-top md:gap-3 sm:gap-0 md:flex-row sm:flex-col xs:flex-col ">
              <div className="w-full">
                <Controller
                  name="name"
                  control={control}
                  defaultValue=""
                  rules={validationSchema.name}
                  render={({ field }) => (
                    <div>
                      <InputField
                        label="Name"
                        placeholder="Enter your name"
                        type="text"
                        error={errors.name?.message}
                        id="name"
                        {...field}
                      />
                    </div>
                  )}
                />
              </div>
              <div className="w-full">
                <Controller
                  name="email"
                  control={control}
                  defaultValue=""
                  rules={validationSchema.email}
                  render={({ field }) => (
                    <div>
                      <InputField
                        label="Email"
                        placeholder="Enter your email"
                        type="email"
                        id="email"
                        error={errors.email?.message}
                        {...field}
                      />
                    </div>
                  )}
                />
              </div>
            </div>
            <div className="flex justify-center items-top md:gap-3 sm:gap-0 md:flex-row sm:flex-col xs:flex-col">
              <div className="w-full">
                <Controller
                  name="subject"
                  control={control}
                  defaultValue=""
                  rules={validationSchema.subject}
                  render={({ field }) => (
                    <div>
                      <InputField
                        label="Subject"
                        placeholder="Enter your subject"
                        type="text"
                        error={errors.subject?.message}
                        id="subject"
                        {...field}
                      />
                    </div>
                  )}
                />
              </div>
              <div className="w-full">
                <Controller
                  name="phone"
                  control={control}
                  rules={validationSchema.phone}
                  render={({ field }) => (
                    <div>
                      <PhoneInputField
                        label="Phone Number"
                        placeholder="Enter your phone number"
                        id="phone"
                        error={errors.phone?.message}
                        {...field}
                      />
                    </div>
                  )}
                />
              </div>
            </div>
            <div className="flex justify-center items-center gap-4 flex-row">
              <div className="w-full">
                <Controller
                  name="message"
                  control={control}
                  defaultValue=""
                  rules={validationSchema.message}
                  render={({ field }) => (
                    <div>
                      <InputTextArea
                        label="Message"
                        placeholder="Enter your message"
                        id="message"
                        error={errors.message?.message}
                        {...field}
                      />
                    </div>
                  )}
                />
              </div>
            </div>
            <div className="flex justify-center items-center mt-5">
              <MainButton
                label="Send"
                btnStyle="Secondary"
                btnSize="Medium"
                loading={loading}
                submit
                disabled={loading}
                customStyle="w-[200px]"
              />
            </div>
          </form>
        </div>
      </div>
    </InnerContainer>
  );
};
