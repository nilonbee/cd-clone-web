import { ContainerLayout, Hero, InnerContainer } from "@/components/atoms";
import { CareersBanner } from "@/components/molecules";
import { CareerSection, InterestedSection } from "@/components/organisms";
import { getCareers } from "@/utils/api-requests";

const CareersPage = async () => {
  const careersData = await getCareers("all");
  const careerDataLocal = await getCareers("lk");
  const careerCount = careersData?.total;

  return (
    <>
      <Hero />
      <CareersBanner />
      <ContainerLayout>
        <InnerContainer>
          <CareerSection careerCount={careerCount} careersData={careersData} />
        </InnerContainer>
      </ContainerLayout>
      <InterestedSection />
    </>
  );
};

export default CareersPage;
