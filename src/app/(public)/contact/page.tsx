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
import { useIpStore } from '@/store/useIpStore';
import ContactInfoSection from '@/components/organisms/ContactInfoSection';

const ContactPage = () => {
  const { countryCode } = useIpStore(state => ({
    countryCode: state.countryCode,
  }));

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
