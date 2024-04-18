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

export const NewPasswordForm = () => {
  const [loading, setLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const router = useRouter();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    console.log("data", data);

    // setLoading(true);
    // const response = await sendForgotPasswordEmail({ ...data, type: "WEB" });
    // console.log("response", response);
    // setLoading(false);
    // if (response?.status === "success") {
    //   toast.success(response.message);
    // } else {
    //   toast.error(response?.message ?? "Failed to send reset link");
    // }
  };

  return (
    <form className="w-full mt-5" onSubmit={handleSubmit(onSubmit)}>
      <p className="text-textColor text-sm mb-5">
        Enter your new password and confirm password to reset your password.
      </p>
      <div className="flex justify-center items-center gap-1 sm:flex-col xs:flex-col mt-5">
        <div className="w-full">
          <Controller
            name="password"
            control={control}
            defaultValue=""
            rules={validationSchema.strongPassword}
            render={({ field }) => (
              <div>
                <InputField
                  label="New Password"
                  placeholder="●●●●●●●"
                  type="password"
                  id="password"
                  error={errors.password?.message}
                  required
                  {...field}
                />
              </div>
            )}
          />
        </div>
        <div className="w-full">
          <Controller
            name="password"
            control={control}
            defaultValue=""
            rules={validationSchema.passwordConfirmation}
            render={({ field }) => (
              <div>
                <InputField
                  label="Confirm Password"
                  placeholder="●●●●●●●"
                  type="password"
                  id="password_confirmation"
                  error={errors.password?.message}
                  {...field}
                />
              </div>
            )}
          />
        </div>
      </div>
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
    </form>
  );
};
