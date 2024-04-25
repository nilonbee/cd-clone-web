import React from 'react';
import {
  ContainerLayout,
  Hero,
  InnerContainer,
  SectionHeader,
} from "@/components/atoms";
import {
  ContactSection,
  InterestedSection,
  AddressSection,
  ContactInfoSection
} from "@/components/organisms";

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
          <ContactInfoSection />
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
