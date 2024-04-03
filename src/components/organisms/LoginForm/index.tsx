import { Devider } from '@/components/atoms'
import { MainButton } from '@/components/atoms'
import { OrdinaryAuthForm, SocialMediaAuthForm, } from '@/components/molecules'

export const LoginForm = () => {
    return (
        <form className="w-full mt-3 lg:px-20 md:px-0">
            <OrdinaryAuthForm
                input1Label="Email or Username"
                input2Label="Password"
                placeholder1='Enter Your Email or Username'
                placeholder2='Enter Your Password'
            />
            <div className="flex justify-center">
                <button className="text-blue text-sm my-3 hover:text-primary active:text-primary hover:font-semibold active:font-medium text focus:outline-none">
                    FORGOT PASSWORD?
                </button>
            </div>
            <MainButton
                customStyle=""
                label="Sign In"
                btnSize="Medium"
                btnStyle='Primary'
            />
            <Devider text="or" />
            <SocialMediaAuthForm />
            <p className='text-sm flex justify-center mt-8 mb-3'>DON`T HAVE AN ACCOUNT</p>
            <MainButton
                customStyle="mt-3 mb-12"
                label="Register"
                btnSize="Medium"
                btnStyle='Secondary'
            />
        </form >)
}
