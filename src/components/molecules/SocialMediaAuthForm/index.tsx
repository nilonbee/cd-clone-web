import { MainButton } from "@/components/atoms";
import { FBIcon, GoogleIcon } from "@/components/atoms/Icons";
import React from "react";

export function SocialMediaAuthForm() {
    return (
        <>
            <MainButton
                customStyle="my-4"
                label="Sign in with Google"
                iconPosition="Left"
                icon={<GoogleIcon />}
                btnSize="Block"
                btnStyle="Secondary"
            />
            <MainButton
                customStyle="my-3"
                label="Sign in with Facebook"
                iconPosition="Left"
                icon={<FBIcon />}
                btnSize="Block"
                btnStyle="Secondary"
            />
        </>
    );
}
