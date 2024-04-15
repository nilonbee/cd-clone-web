import {
  ContainerLayout,
  Hero,
  InnerContainer,
  SectionHeader,
} from "@/components/atoms";
import { CarbonLocationIcon } from "@/components/atoms/Icons";
import { ContactBox } from "@/components/molecules";
import {
  ContactSection,
  InterestedSection,
  AddressSection,
} from "@/components/organisms";
import React from "react";

const ContactPage = () => {
  return (
    <>
      <Hero />
      <ContainerLayout>
        <div className="my-12">
          <SectionHeader
            title="Contact Us"
            description="Campus Direct is passionate about empowering students"
          />
        </div>
        <InnerContainer>
          <div className="w-full mt-10 lg:px-20 md:px-0">
            <div className="grid grid-cols-3 gap-4">
              <ContactBox
                label="Location"
                value={
                  "Campus Direct Head Office Sri Lanka 36B, Gower St, Colombo 05"
                }
                icon={<CarbonLocationIcon />}
              />

              <ContactBox
                label="Email Address"
                value={"info@cduk.lk"}
                icon={<CarbonLocationIcon />}
              />

              <ContactBox
                label="Phone Number"
                value={"+94 77 900 5555"}
                icon={<CarbonLocationIcon />}
              />
            </div>
          </div>
        </InnerContainer>
        <ContactSection />
        <InnerContainer>
          <div className="w-full mt-10 lg:px-20 md:px-0 mb-10">
            <AddressSection />
          </div>
        </InnerContainer>
      </ContainerLayout>
      <InterestedSection />
    </>
  );
};

export default ContactPage;
