import parse from "html-react-parser";
import { ContainerLayout, Hero, InnerContainer } from "@/components/atoms";
import { CareersForm } from "@/components/organisms";
import { ICareer } from "@/types/careers";
import { getCareerBySlug } from "@/utils/api-requests";

const CareerSinglePage = async ({ params }: any) => {
  const careersData = await getCareerBySlug(params.slug);

  const { title, description }: ICareer = careersData;

  return (
    <>
      <Hero />
      <ContainerLayout>
        <InnerContainer>
          <div className="my-12 flex lg:flex-row md:flex-col sm:flex-col xs:flex-col w-full gap-4 relative">
            <div className="lg:w-[70%] md:w-full">
              <div className=" border border-boxBorder p-5 flex flex-col items-start self-stretch relative  bg-[#d4ebff]/[0.15] rounded-md w-full">
                <h2 className="font-semibold text-1xl text-textColor">
                  {title}
                </h2>
                <div className="flex flex-col gap-3 justify-center items-start self-stretch relative w-full bg-transparent mt-4">
                  <p className="text-sm text-textColor leading-6">
                    {description ? parse(description) : ""}
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-[30%] md:w-full relative">
              <CareersForm slug={params.slug} />
            </div>
          </div>
        </InnerContainer>
      </ContainerLayout>
    </>
  );
};

export default CareerSinglePage;
