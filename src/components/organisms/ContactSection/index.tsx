import { InnerContainer, MainButton, SectionHeader } from "@/components/atoms";
import {
  InputField,
  InputTextArea,
  PhoneInputField,
} from "@/components/molecules";

export const ContactSection = () => {
  return (
    <InnerContainer>
      <div className="pt-20 pb-20">
        <div className="flex flex-col justify-center items-center relative bg-transparent w-full">
          <SectionHeader
            title="Interested? Let's talk!"
            description="Send us a message with what we can help you."
          />
          <form className="w-full mt-10 lg:px-20 md:px-0">
            <div className="flex justify-center items-center md:gap-3 sm:gap-0 md:flex-row sm:flex-col xs:flex-col ">
              <div className="w-full">
                <InputField
                  label="Name"
                  placeholder="Enter your name"
                  type="text"
                  id="name"
                  name="name"
                  required
                />
              </div>
              <div className="w-full">
                <InputField
                  label="Email"
                  placeholder="Enter your email"
                  type="email"
                  id="name"
                  name="name"
                  required
                />
              </div>
            </div>
            <div className="flex justify-center items-center md:gap-3 sm:gap-0 md:flex-row sm:flex-col xs:flex-col">
              <div className="w-full">
                <InputField
                  label="Subject"
                  placeholder="Enter your subject"
                  type="text"
                  id="subject"
                  name="subject"
                  required
                />
              </div>
              <div className="w-full">
                <PhoneInputField
                  label="Phone Number"
                  placeholder="Enter your phone number"
                  id="number"
                  name="number"
                  required
                />
              </div>
            </div>
            <div className="flex justify-center items-center gap-4 flex-row">
              <div className="w-full">
                <InputTextArea
                  label="Message"
                  placeholder="Enter your message"
                  id="message"
                  name="message"
                />
              </div>
            </div>
            <div className="flex justify-center items-center mt-5">
              <MainButton
                label="Send"
                btnStyle="Secondary"
                btnSize="Medium"
                customStyle="w-[200px]"
              />
            </div>
          </form>
        </div>
      </div>
    </InnerContainer>
  );
};
