'use client';
import Link from "next/link";

import { Devider, MainButton } from "@/components/atoms";
import { FBIcon, GoogleIcon } from "@/components/atoms/Icons";
import { InputField } from "@/components/molecules";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { SocialMediaAuthForm } from "@/components/molecules/SocialMediaAuthForm";

type FormValues = {
    email: string;
    password: string;
}

export const RegisterForm = () => {

    const { control, handleSubmit, register } = useForm<FormValues>();
    const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);

    return (
        <>
            <form className="w-full mt-3 lg:px-20 md:px-0" onSubmit={handleSubmit(onSubmit)}>
                <SocialMediaAuthForm />
                <Devider text="or" />
                <div className="flex justify-center items-center gap-1 sm:flex-col xs:flex-col ">
                    <div className="w-full">
                        <Controller
                            name="email"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <InputField
                                    label="Email or Username"
                                    placeholder="Enter Your Email or Username"
                                    type="email"
                                    id="email"
                                    // name="email"
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
                            defaultValue=""
                            render={({ field }) => (
                                <InputField
                                    label="password"
                                    placeholder="Enter Your Password"
                                    type="password"
                                    id="password"
                                    // name="password"
                                    required
                                    {...field}
                                />
                            )}
                        />
                    </div>
                </div>
                <MainButton
                    customStyle="text-sm tracking-wide bg-transparent border-none hover:bg-transparent hover:font-semibold"
                    label='FORGOT PASSWORD'
                    btnSize="Block"
                    btnStyle="Secondary"
                />
                <MainButton
                    customStyle=""
                    label="Sign In"
                    btnSize="Block"
                    btnStyle='Primary'
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
