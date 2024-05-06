"use client";
import { MainButton } from "@/components/atoms";
import { InputField } from "@/components/molecules";
import { resetPassword } from "@/utils/api-requests";
import validationSchema from "@/utils/validationSchema";
import { useParams } from "next/navigation";
import { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";

type FormValues = {
  password: string;
  password_confirmation: string;
};

export const NewPasswordForm = () => {
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setLoading(true);
    const response = await resetPassword({
      ...data,
      type: "WEB",
      code: params?.id,
    });
    setLoading(false);
    if (response?.status === "success") {
      toast.success(response.message);
    } else {
      toast.error(response?.message ?? "Failed to send reset link");
    }
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
                  placeholder="New Password"
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
            name="password_confirmation"
            control={control}
            defaultValue=""
            //check weather it's matching password field or not
            rules={{
              validate: (value) =>
                value === getValues("password") || "The passwords do not match",
            }}
            render={({ field }) => (
              <div>
                <InputField
                  label="Confirm Password"
                  placeholder="Confirm Password"
                  type="password"
                  id="password_confirmation"
                  error={errors.password_confirmation?.message}
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
