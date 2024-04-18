"use client";
import { MainButton } from "@/components/atoms";
import { InputField } from "@/components/molecules";
import { sendForgotPasswordEmail, userLogin } from "@/utils/api-requests";
import validationSchema from "@/utils/validationSchema";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";

type FormValues = {
  email: string;
  password: string;
};

export const PasswordResetForm = () => {
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const router = useRouter();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setLoading(true);
    const response = await sendForgotPasswordEmail({ ...data, type: "WEB" });
    console.log("response", response);
    setLoading(false);
    if (response?.status === "success") {
      setIsSuccess(true);
      toast.success(response.message);
    } else {
      toast.error(response?.message ?? "Failed to send reset link");
    }
  };

  return (
    <form className="w-full mt-5" onSubmit={handleSubmit(onSubmit)}>
      {isSuccess ? (
        <p className="text-textColor text-sm mb-5">
          The link to reset your password has been sent to your email. If you do
          not receive it within a reasonable amount of time, check your
          spam/junk folders.
        </p>
      ) : (
        <p className="text-textColor text-sm">
          Enter your email address below and we’ll send you a link to reset your
          password. If you don’t receive an email shortly, please check the
          email address and try again.
        </p>
      )}

      {!isSuccess ? (
        <div className="flex justify-center items-center gap-1 sm:flex-col xs:flex-col mt-5">
          <div className="w-full">
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
                    type="email"
                    id="email"
                    error={errors.email?.message}
                    required
                    {...field}
                  />
                </div>
              )}
            />
          </div>
        </div>
      ) : null}
      {isSuccess ? (
        <MainButton
          label="Back to Login"
          btnSize="Medium"
          fullWith
          btnStyle="Primary"
          onClick={() => router.push("/login")}
        />
      ) : (
        <MainButton
          customStyle=""
          label="Submit"
          btnSize="Medium"
          fullWith
          btnStyle="Primary"
          submit
          loading={loading}
          disabled={loading}
        />
      )}
    </form>
  );
};
