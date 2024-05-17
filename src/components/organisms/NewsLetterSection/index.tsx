"use client";
import { MainButton } from "@/components/atoms";
import { InputField } from "@/components/molecules";
import { newsletterSubscribe } from "@/utils/api-requests";
import validationSchema from "@/utils/validationSchema";
import { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { BsSend } from "react-icons/bs";

type FormValues = {
  email: string;
};

export const NewsLetterSection = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>();

  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setLoading(true);
    const response = await newsletterSubscribe(data.email);
    setLoading(false);
    if (response?.status === "success") {
      toast.success(response.message);
      reset();
    } else {
      toast.error(response?.message ?? "Sending Email failed");
    }
  };

  return (
    <div className="-mb-20 z-1 relative lg:px-10 md:px-0">
      <div className="lg:p-16 md:p-10 sm:p-10 xs:p-5 flex justify-between items-center bg-[#d4ebff] gap-4 lg:mx-20 md:mx-0 md:flex-row sm:flex-col xs:flex-col shadow-md rounded">
        <h2 className="lg:text-3xl md:text-2xl sm:text-2xl xs:text-2xl  text-textColor font-semibold">
          Subscribe to our Newsletter for latest news and updates.
        </h2>
        <form
          className="w-full flex gap-4 justify-center items-top lg:flex-row md:flex-col sm:flex-col xs:flex-col"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="sm:w-full xs:w-full">
            <div className="w-full">
              <Controller
                name="email"
                control={control}
                defaultValue=""
                rules={validationSchema.email}
                render={({ field }) => (
                  <div>
                    <InputField
                      placeholder="Enter your email"
                      type="email"
                      id="email"
                      customStyle="bg-transparent"
                      noMargin
                      error={errors.email?.message}
                      {...field}
                    />
                  </div>
                )}
              />
            </div>
          </div>
          <MainButton
            label="Send"
            submit
            btnStyle="Secondary"
            btnSize="Medium"
            customStyle=""
            loading={loading}
            disabled={loading}
            icon={<BsSend />}
            iconPosition="Left"
          />
        </form>
      </div>
    </div>
  );
};
