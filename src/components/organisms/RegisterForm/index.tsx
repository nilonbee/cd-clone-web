"use client";
import { Divider, MainButton } from "@/components/atoms";
import { InputField, SocialMediaAuthForm } from "@/components/molecules";
import { userRegister } from "@/utils/api-requests";
import validationSchema from "@/utils/validationSchema";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";

type FormValues = {
  first_name: string;
  email: string;
  password: string;
  phone: string;
};

export const RegisterForm = () => {
  const [loading, setLoading] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const router = useRouter();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setLoading(true);
    const response = await userRegister(data);
    setLoading(false);
    if (response?.status === "success") {
      toast.success("Successful, Please check your email! 🎉");
      router.push("/");
    } else {
      toast.error(response?.message ?? "Registration failed");
    }
  };

  return (
    <>
      <form className="w-full mt-5" onSubmit={handleSubmit(onSubmit)}>
        <SocialMediaAuthForm />
        <Divider text="or" />
        <div className="flex justify-center items-center gap-1 sm:flex-col xs:flex-col ">
          <div className="w-full">
            <Controller
              name="first_name"
              control={control}
              defaultValue=""
              rules={validationSchema.first_name}
              render={({ field }) => (
                <InputField
                  label="First Name"
                  placeholder="Enter Your First Name"
                  type="text"
                  id="name"
                  error={errors.first_name?.message}
                  required
                  {...field}
                />
              )}
            />
          </div>
          <div className="w-full">
            <Controller
              name="email"
              control={control}
              rules={validationSchema.email}
              defaultValue=""
              render={({ field }) => (
                <InputField
                  label="Email Address"
                  placeholder="Enter Your Email Address"
                  type="email"
                  id="email"
                  error={errors.email?.message}
                  required
                  {...field}
                />
              )}
            />
          </div>
          <div className="w-full">
            <Controller
              name="phone"
              control={control}
              rules={validationSchema.phone}
              defaultValue=""
              render={({ field }) => (
                <InputField
                  label="Contact Number"
                  placeholder="Enter Your Phone Number"
                  type="phoneNumber"
                  id="phoneNumber"
                  error={errors.phone?.message}
                  required
                  {...field}
                />
              )}
            />
          </div>
          <div className="w-full">
            <Controller
              name="password"
              control={control}
              rules={validationSchema.password}
              defaultValue=""
              render={({ field }) => (
                <InputField
                  label="Password"
                  placeholder="Enter Your Password"
                  type="password"
                  id="password"
                  error={errors.password?.message}
                  required
                  {...field}
                />
              )}
            />
          </div>
        </div>
        <MainButton
          customStyle="mt-3"
          label="Register"
          btnSize="Medium"
          fullWith
          btnStyle="Primary"
          submit
          loading={loading}
          disabled={loading}
        />
        <p className="text-sm text-textColor text-center my-5">
          Already have an account?
        </p>
        <Link href="/login">
          <MainButton
            customStyle="mt-3 mb-12"
            label="Sign In"
            btnSize="Medium"
            fullWith
            btnStyle="Secondary"
          />
        </Link>
      </form>
    </>
  );
};
