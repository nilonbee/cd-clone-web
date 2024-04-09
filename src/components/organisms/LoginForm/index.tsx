'use client';
import Link from 'next/link';
import axios from 'axios';
import validationSchema from '@/utils/validationSchema';
import axiosInstance from '@/utils/axiosInstance';

import { useState } from 'react';
import { useRouter } from "next/navigation";
import { Devider } from '@/components/atoms';
import { MainButton } from '@/components/atoms';
import { InputField } from '@/components/molecules';
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { SocialMediaAuthForm } from '@/components/molecules/SocialMediaAuthForm';

type FormValues = {
    email: string;
    password: string;
}

export const LoginForm = () => {
    const { control, handleSubmit, formState: { errors }, reset } = useForm<FormValues>();
    const [errorMessage, setErrorMessage] = useState<string>("");
    const router = useRouter();

    const onSubmit: SubmitHandler<FormValues> = async (data) => {
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}v1/user/login`, data);
            // const response = await axiosInstance.post('/vi/user/login');
            const userData = response.data;

            if (userData.status === "success") {
                localStorage.setItem("accessToken", userData.access_token);
                localStorage.setItem("userData", JSON.stringify(userData.user));
                console.log("User data:", userData.user);
                // Notify user about successful login
                router.push("/");
            } else {
                setErrorMessage(userData.message); // Set the error message
                console.error("Login failed:", userData.message);
                // Notify user about failed login
                reset(); // Reset form fields
            }
        } catch (error) {
            // Handle error from axios request
            console.error("An error occurred during login:", error);
            setErrorMessage("An error occurred during login. Please try again later."); // Set a generic error message
            // Notify user about generic error
            reset(); // Reset form fields
        }
    };


    return (
        <form className="w-full mt-3 lg:px-20 md:px-0" onSubmit={handleSubmit(onSubmit)}>
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
                <div className="text-blue text-sm my-3 hover:text-primary active:text-primary hover:font-semibold active:font-medium text focus:outline-none cursor-pointer">
                    FORGOT PASSWORD?
                </div>
            </div>
            <MainButton
                customStyle=""
                label="Sign In"
                btnSize="Medium"
                fullWith
                btnStyle='Primary'
                submit
            />
            <Devider text="or" />
            <SocialMediaAuthForm />
            <p className='text-sm flex justify-center mt-8 mb-3'>DON`T HAVE AN ACCOUNT</p>
            <Link href="/auth/register">
                <MainButton
                    customStyle="mt-3 mb-12"
                    label="Register"
                    btnSize="Medium"
                    fullWith
                    btnStyle='Secondary'
                />
            </Link>
        </form >
    );
}
