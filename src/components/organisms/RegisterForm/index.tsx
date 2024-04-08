'use client';
import Link from "next/link";
import axios from "axios";
import validationSchema from "@/utils/validationSchema";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Devider, MainButton } from "@/components/atoms";
import { InputField, PhoneInputField } from "@/components/molecules";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { SocialMediaAuthForm } from "@/components/molecules/SocialMediaAuthForm";

type FormValues = {
    first_name: string;
    email: string;
    password: string;
    phone: string;
}

export const RegisterForm = () => {

    const { control, handleSubmit, formState: { errors }, reset, trigger } = useForm<FormValues>();
    const router = useRouter();
    const [errorMessage, setErrorMessage] = useState<string>("");


    // const onSubmit: SubmitHandler<FormValues> = async (data) => {
    //     const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}v1/user/register`, data);
    //     const userData = response.data;

    //     if (userData.status === "success") {
    //         router.push("/");
    //     } else {
    //         setErrorMessage(userData.message); // Set the error message
    //         console.error("Login failed:", userData.message);
    //         reset();
    //     }

    // };

    const onSubmit: SubmitHandler<FormValues> = async (data) => {
        try {
            // This triggers validation for all fields
            const isValid = await trigger();

            if (isValid) {
                // If form data is valid, proceed with submission
                const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}v1/user/register`, data);
                const userData = response.data;

                if (userData.status === "success") {
                    router.push("/");
                } else {
                    setErrorMessage(userData.message); // Set the error message
                    console.error("Registration failed:", userData.message);
                    reset();
                }
            } else {
                // If form data is not valid, do not submit
                console.log("Form data is not valid");
                reset();
            }
        } catch (error) {
            console.error("Error occurred while submitting the form:", error);
        }
    };


    return (
        <>
            <form className="w-full mt-3 lg:px-20 md:px-0" onSubmit={handleSubmit(onSubmit)}>
                <SocialMediaAuthForm />
                <Devider text="or" />
                {errorMessage && <span className="text-red">{errorMessage}</span>}
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
                                    label="Email or Username"
                                    placeholder="Enter Your Email or Username"
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
                <div className="flex justify-center">
                    <div className="text-blue text-sm my-3 hover:text-primary active:text-primary hover:font-semibold active:font-medium text focus:outline-none cursor-pointer">
                        FORGOT PASSWORD?
                    </div>
                </div>
                <MainButton
                    customStyle=""
                    label="Register"
                    btnSize="Block"
                    btnStyle='Primary'
                    submit
                />
                <p className='text-sm flex justify-center mt-8 mb-3'>ALREADY HAVE AN ACCOUNT</p>
                <Link href="/auth/login">
                    <MainButton
                        customStyle="mt-3 mb-12"
                        label="Sign In"
                        btnSize="Block"
                        btnStyle='Secondary'
                    />
                </Link>
            </form >
        </>
    )
}
