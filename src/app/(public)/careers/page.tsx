import axiosInstance from "@/utils/axiosInstance";
import {
  ContainerLayout,
  Hero,
  InnerContainer,
  MainButton,
} from "@/components/atoms";
import { LocationIcon2 } from "@/components/atoms/Icons";
import { CareerRow } from "@/components/molecules";
import { InterestedSection } from "@/components/organisms";
import { ICareer } from "@/types/careers";

const CareersPage = async () => {
  const response = await axiosInstance.get("/v1/user/careers/lk");
  const careersData = response.data.data.data;

  return (
    <>
      <Hero />
      <ContainerLayout>
        <InnerContainer>
          <div className="my-12">
            <div className="flex flex-col gap-1 justify-center items-center self-stretch relative bg-transparent">
              <h1 className="font-semibold text-3xl md:text-2xl sm:text-2xl xs:text-xl text-textColor">
                Careers at Campus Direct
              </h1>
              <div className="w-3/4">
                <p className="text-center text-sm text-textColor mb-4 mt-4 leading-6">
                  Join Campus Direct and embark on a fulfilling career in the
                  field of education. At Campus Direct, we are passionate about
                  guiding students towards their educational aspirations and
                  making a positive impact on their lives.
                </p>
                <p className="text-center text-sm text-textColor leading-6">
                  As part of our team, you will have the opportunity to
                  contribute to the success stories of students, work in a
                  collaborative environment, continuously learn and grow, and be
                  part of a vibrant and student-centric culture. Take the next
                  step in your career journey and explore the exciting career
                  opportunities available at Campus Direct. Current Job
                  Opportunities:
                </p>
              </div>
            </div>
          </div>
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
            <div className="mt-10 flex flex-col gap-4">
              {careersData.map((item: ICareer) => (
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
