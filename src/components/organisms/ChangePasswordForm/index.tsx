'use client';
import React, { useState } from "react";
import validationSchema from "@/utils/validationSchema";
import toast from "react-hot-toast";

import { InputField } from "@/components/molecules";
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { changePassword } from "@/utils/auth-api-requests";
import { MainButton } from "@/components/atoms";

type FormValueTypes = {
    current_password: string;
    password: string;
    confirm_password: string;
}

export const ChangePasswordForm = () => {
    const { control, handleSubmit, formState: { errors }, getValues, reset } = useForm<FormValueTypes>();
    const [loading, setLoading] = useState(false)

    const onSubmit: SubmitHandler<FormValueTypes> = async (data) => {
        setLoading(true);
        const response = await changePassword({
            ...data,
        });
        setLoading(false);
        if (response?.status === "success") {
            toast.success(response.message);
            reset();
        } else {
            toast.error(response?.message ?? "Failed to change password");
        }
    }

    return (
        <div className="w-full bg-white p-5 rounded-md shadow-md mb-8">
            <p className="text-sm text-textColor font-semibold">Change Password</p>
            <form className="w-full mt-5" onSubmit={handleSubmit(onSubmit)}>
                {/* <div className="flex gap-5"> */}
                <Controller
                    name="current_password"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <div>
                            <InputField
                                type="password"
                                label="Current Password"
                                id="current_password"
                                placeholder="Enter Your Current Password"
                                error={errors.current_password?.message}
                                {...field}
                            />
                        </div>
                    )}
                />
                <Controller
                    name="password"
                    control={control}
                    rules={validationSchema.strongPassword}
                    defaultValue=""
                    render={({ field }) => (
                        <div>
                            <InputField
                                type="password"
                                label="Password"
                                id="password"
                                placeholder="Enter Your Password"
                                error={errors.password?.message}
                                {...field}
                            />
                        </div>
                    )}
                />
                <Controller
                    name="confirm_password"
                    control={control}
                    rules={{
                        validate: (value) =>
                            value === getValues("password") || "The passwords do not match",
                    }}
                    defaultValue=""
                    render={({ field }) => (
                        <div>
                            <InputField
                                type="password"
                                label="Confirm Password"
                                id="confirm_password"
                                placeholder="Confirm Your Password"
                                error={errors.confirm_password?.message}
                                {...field}
                            />
                        </div>
                    )}
                />
                {/* </div> */}
                <div className="flex justify-end mt-5 gap-2">
                    <MainButton label="Next" btnSize="Medium" btnStyle="Primary" submit loading={loading} />
                </div>
            </form>
        </div>
    )
}
