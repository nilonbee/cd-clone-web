import React from 'react'
import { ContainerLayout, InnerContainer } from '@/components/atoms'
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