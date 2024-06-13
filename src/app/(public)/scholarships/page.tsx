import { ContainerLayout, Hero, InnerContainer } from "@/components/atoms";
import {
  GridWrapper,
  ScholarshipsBanner,
  ScholarshipsBox,
} from "@/components/molecules";
import { InterestedSection } from "@/components/organisms";
import { getScholarships } from "@/utils/api-requests";
import { rootImagePath } from "@/utils/rootImagePath";
import React from "react";

const Scholarships = async () => {
  const filterOptions = {
    page: 1,
    pageSize: 10,
    status: "all",
    country_id: "",
    uni_id: "",
  };
  const scholarships = await getScholarships(filterOptions);

  return (
    <>
      <Hero />
      <ScholarshipsBanner />
      <ContainerLayout>
        <InnerContainer>
          <div className="mb-20 mt-20">
            <GridWrapper>
              {scholarships?.map((item: any, index: number) => (
                <ScholarshipsBox
                  key={index}
                  title={item.title}
                  image={rootImagePath(item.cover_url as string)}
                  university={item.uni_name}
                  quantity={item.quantity}
                  country={item.country_name}
                  slug={item.slug}
                />
              ))}
            </GridWrapper>
            {scholarships.length === 0 && (
              <div className="flex justify-center items-center h-[100px]">
                <p className="text-base text-textColor/80">
                  - No Scholarships Found -
                </p>
              </div>
            )}
          </div>
        </InnerContainer>
      </ContainerLayout>
      <InterestedSection />
    </>
  );
};

export default Scholarships;
