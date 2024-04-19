import {
  ContainerLayout,
  Hero,
  InnerContainer,
  MainButton,
} from "@/components/atoms";
import { LocationIcon2 } from "@/components/atoms/Icons";
import { CareerRow, CareersBanner } from "@/components/molecules";
import { InterestedSection } from "@/components/organisms";
import { ICareer } from "@/types/careers";
import { getCareers } from "@/utils/api-requests";

const CareersPage = async () => {
  const careersData = await getCareers("lk");

  return (
    <>
      <Hero />
      <CareersBanner />
      <ContainerLayout>
        <InnerContainer>
          <div className="my-14">
            <h1 className="font-semibold text-3xl md:text-2xl sm:text-2xl xs:text-xl text-textColor text-center">
              Our Job Openings
            </h1>
            <div className="flex flex-row justify-center items-center mt-4 gap-4">
              <MainButton
                label="All (20)"
                btnStyle="Primary"
                btnSize="Medium"
              />
              <MainButton
                label="My Location"
                btnStyle="Secondary"
                btnSize="Medium"
                icon={<LocationIcon2 />}
                iconPosition="Left"
              />
            </div>
            <div className="mt-10 flex flex-col gap-2">
              {careersData.data.map((item: ICareer) => (
                <CareerRow
                  title={item.title}
                  end_date={item.end_date}
                  key={item.id}
                  created_at={item.created_at}
                  description={item.description}
                  slug={item.slug}
                />
              ))}
            </div>
          </div>
        </InnerContainer>
      </ContainerLayout>
      <InterestedSection />
    </>
  );
};

export default CareersPage;
