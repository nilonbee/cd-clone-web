import { MainButton } from '@/components/atoms'
import { FBIcon, GoogleIcon } from '@/components/atoms/Icons'
import React from 'react'

export function SocialMediaAuthForm() {
    return (
        <>
            <MainButton
                customStyle="my-3 hover:font-semibold active:font-semibold"
                label="Sign in with Google"
                iconPosition="Left"
                icon={<GoogleIcon />}
                key="forgetPasswordBtn"
                btnSize="Medium"
                btnStyle='Secondary'
            />
            <MainButton
                customStyle="my-3   hover:font-semibold  active:font-semibold"
                label="Sign in with Facebook"
                iconPosition="Left"
                icon={<FBIcon />}
                key="forgetPasswordBtn"
                btnSize="Medium"
                btnStyle='Secondary'
            />
        </>
    )
}
