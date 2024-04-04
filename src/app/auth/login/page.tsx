import React from 'react'
import { ContainerLayout, InnerContainer, MainButton, SectionHeader } from '@/components/atoms'
import {
    InputField,
    PhoneInputField,
} from "@/components/molecules";
import Link from 'next/link';
import Image from 'next/image';
import { FBIcon, GoogleIcon } from '@/components/atoms/Icons';
import { LoginForm } from '@/components/organisms';
import { AuthHeader } from '@/components/molecules/AuthHeader';

const LoginPage = () => {

    return (
        <ContainerLayout>
            <div className="mt-[2rem]">
                <InnerContainer>
                    <div className="mx-auto md:w-[60%] sm:w-[80]">
                        <AuthHeader title="Sign In" />
                        < LoginForm />
                    </div>
                </InnerContainer>
            </div>
        </ContainerLayout>
    )
}

export default LoginPage