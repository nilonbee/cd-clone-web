"use client";
import validationSchema from "@/utils/validationSchema";
import Link from "next/link";
import { Divider, MainButton } from "@/components/atoms";
import { InputField, SocialMediaAuthForm } from "@/components/molecules";
import { userLogin } from "@/utils/api-requests";
import { useRouter } from "next/navigation";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useUserStore } from "@/store";
import { useState } from "react";

type FormValues = {
  email: string;
  password: string;
};

export const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const {
    setAccessToken,
    setExpiresIn,
    setRefreshToken,
    setUser,
    setAuthUser,
  } = useUserStore();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const router = useRouter();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setLoading(true);
    const response = await userLogin(data);
    setLoading(false);
    if (response?.status === "success") {
      setAccessToken(response.access_token);
      setExpiresIn(response.expires_in);
      setRefreshToken(response.refresh_token);
      setUser(response.user);
      setAuthUser(true);
      toast.success(response.message);
      router.push("/");
    } else {
      toast.error(response?.message ?? "Login failed");
    }
  };

  return (
    <form className="w-full mt-5" onSubmit={handleSubmit(onSubmit)}>
      {/* Render error message if it exists */}
      {/* {errorMessage && <span className="text-red">{errorMessage}</span>} */}
      <div className="flex justify-center items-center gap-1 sm:flex-col xs:flex-col">
        <div className="w-full">
          <Controller
            name="email"
            control={control}
            defaultValue=""
            rules={validationSchema.email}
            render={({ field }) => (
              <div>
                <InputField
                  label="Email or Username"
                  placeholder="Enter Your Email or Username"
                  type="email"
                  id="email"
                  error={errors.email?.message}
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
            rules={validationSchema.password}
            render={({ field }) => (
              <div>
                <InputField
                  label="Password"
                  placeholder="Enter Your Password"
                  type="password"
                  id="password"
                  error={errors.password?.message}
                  {...field}
                />
              </div>
            )}
          />
        </div>
      </div>
      <div className="flex justify-center">
        <Link
          href="/forget-password"
          className="text-primary text-xs mb-5 font-medium"
        >
          FORGOT PASSWORD?
        </Link>
      </div>
      <MainButton
        customStyle=""
        label="Sign In"
        btnSize="Medium"
        fullWith
        btnStyle="Primary"
        submit
        loading={loading}
        disabled={loading}
      />
      <Divider text="or" />
      <SocialMediaAuthForm />
      <p className="text-textColor text-center my-5 text-xs font-medium ">
        DON'T HAVE AN ACCOUNT?
      </p>
      <Link href="/register">
        <MainButton
          customStyle="mt-3 mb-12"
          label="Register"
          btnSize="Medium"
          fullWith
          btnStyle="Secondary"
        />
      </Link>
    </form>
  );
};
