import { Devider, MainButton } from "@/components/atoms"
import { OrdinaryAuthForm, SocialMediaAuthForm, } from "@/components/molecules"

export const RegisterForm = () => {
    return (
        <>
            <form className="w-full mt-3 lg:px-20 md:px-0">
                <SocialMediaAuthForm />
                <Devider text="or" />
                <OrdinaryAuthForm
                    input1Label="Email or Username"
                    input2Label="Password"
                    placeholder1='Enter Your Email or Username'
                    placeholder2='Enter Your Password'
                />
                <MainButton
                    customStyle="text-sm tracking-wide bg-transparent border-none hover:bg-transparent hover:font-semibold"
                    label='FORGOT PASSWORD'
                    key="forgetPasswordBtn"
                    btnSize="Medium"
                    btnStyle="Secondary"
                />
                <MainButton
                    customStyle=""
                    label="Sign In"
                    key="forgetPasswordBtn"
                    btnSize="Medium"
                    btnStyle='Primary'
                />
                <p className='text-sm flex justify-center mt-8 mb-3'>ALREADY HAVE AN ACCOUNT</p>
                <MainButton
                    customStyle="mt-3 mb-12"
                    label="Sign In"
                    key="forgetPasswordBtn"
                    btnSize="Medium"
                    btnStyle='Secondary'
                />
            </form >
        </>
    )
}
