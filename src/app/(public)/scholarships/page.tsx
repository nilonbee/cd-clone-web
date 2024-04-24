import { ContainerLayout, Hero, InnerContainer } from "@/components/atoms";
import {
  GridWrapper,
  ScholarshipsBanner,
  ScholarshipsBox,
} from "@/components/molecules";
import { InterestedSection } from "@/components/organisms";
import { getScholarships } from "@/utils/api-requests";
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
              {scholarships?.map((item: any) => (
                <ScholarshipsBox
                  key={item.id}
                  title={item.title}
                  image={`${process.env["NEXT_PUBLIC_IMAGEKIT_URL"]}/${item.cover_url}`}
                  id={item.slug}
                  university={item.uni_name}
                  quantity={item.quantity}
                  country={item.country_name}
                />
              ))}
            </GridWrapper>
          </div>
        </InnerContainer>
      </ContainerLayout>
      <InterestedSection />
    </>
  );
};

export default Scholarships;
