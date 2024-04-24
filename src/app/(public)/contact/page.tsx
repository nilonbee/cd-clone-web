'use client';
import React, { useState } from 'react';
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
import { COLOMBO, DUBAI } from "@/mockData/contact"
import { useIpStore } from '@/store/useIpStore';

const ContactPage = () => {
  const { countryCode } = useIpStore(state => ({
    countryCode: state.countryCode,
  }));
  const country = countryCode === "UAE" ? DUBAI : COLOMBO;

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
              {country.map((item) => (<ContactBox label={item.label} value={item.value} />))}
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
