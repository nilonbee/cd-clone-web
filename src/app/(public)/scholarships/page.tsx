import {
  ContainerLayout,
  Hero,
  InnerContainer,
  SectionHeader,
} from "@/components/atoms";
import { InterestedSection } from "@/components/organisms";
import React from "react";

const Scholarships = () => {
  return (
    <>
      <Hero />
      <ContainerLayout>
        <div className="my-12">
          <SectionHeader
            title="Scholarships"
            description="Campus Direct is passionate about empowering students"
          />
        </div>
        <InnerContainer>
          <div className="mb-12"></div>
        </InnerContainer>
      </ContainerLayout>
      <InterestedSection />
    </>
  );
};

export default Scholarships;
