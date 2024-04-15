import parse from "html-react-parser";
import axiosInstance from "@/utils/axiosInstance";

import { ContainerLayout, Hero, InnerContainer } from "@/components/atoms";
import { CareersForm } from "@/components/organisms";
import { ICareer } from "@/types/careers";

const CareerSinglePage = async ({ params }: any) => {
  const response = await axiosInstance.get(`/v2/admin/career/${params.slug}`);
  const career = response.data.data;
  console.log(career, "data");
  const {
    title,
    description,
    tags,
    created_at,
    created_by,
    end_date,
    status,
  }: ICareer = career;

  return (
    <>
      <Hero />
      <ContainerLayout>
        <InnerContainer>
          <div className="my-12 flex flex-row w-full gap-4 relative">
            <div className="w-[70%]">
              <div className=" border border-boxBorder p-8 flex flex-col items-start self-stretch relative  bg-[#d4ebff]/[0.15] rounded w-full">
                <h2 className="font-semibold text-2xl text-textColor">
                  {title}
                </h2>
                <div className="flex flex-col gap-3 justify-center items-start self-stretch relative w-full bg-transparent mt-4">
                  <p className="text-sm text-textColor leading-6">
                    {description ? parse(description) : ""}
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[30%] relative">
              <CareersForm />
            </div>
          </div>
        </InnerContainer>
      </ContainerLayout>
    </>
  );
};

export default CareerSinglePage;
