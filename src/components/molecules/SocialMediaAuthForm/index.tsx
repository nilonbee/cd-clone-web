import { MainButton } from "@/components/atoms";
import { FBIcon, GoogleIcon } from "@/components/atoms/Icons";
import React from "react";

export function SocialMediaAuthForm() {
  return (
    <>
      <MainButton
        customStyle="my-4"
        label="Sign In With Google"
        iconPosition="Left"
        icon={<GoogleIcon />}
        btnSize="Medium"
        fullWith
        btnStyle="Secondary"
      />
      <MainButton
        customStyle="my-3"
        label="Sign In With Facebook"
        iconPosition="Left"
        icon={<FBIcon />}
        btnSize="Medium"
        fullWith
        btnStyle="Secondary"
      />
    </>
  );
}
