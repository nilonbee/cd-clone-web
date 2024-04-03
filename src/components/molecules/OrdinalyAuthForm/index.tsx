import { InputField } from "@/components/molecules";

type OrdinaryAuthFormProps = {
    input1Label: string;
    placeholder1: string;
    placeholder2: string;
    input2Label: string;
    // more props as needed goes here
}

export const OrdinaryAuthForm = ({ input1Label, input2Label, placeholder2, placeholder1 }: OrdinaryAuthFormProps) => {
    return (
        <div className="flex justify-center items-center gap-1 sm:flex-col xs:flex-col ">
            <div className="w-full">
                <InputField
                    label={input1Label}
                    placeholder={placeholder1}
                    type="email"
                    id="email"
                    name="email"
                    required
                />
            </div>
            <div className="w-full">
                <InputField
                    label={input2Label}
                    placeholder={placeholder2}
                    type="password"
                    id="password"
                    name="password"
                    required
                />
            </div>
        </div>
    )
}
