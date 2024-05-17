import { InnerContainer, MainButton, SectionHeader } from "@/components/atoms";
import { RightArrowIcon } from "@/components/atoms/Icons";
import { GridWrapper, SubjectBox } from "@/components/molecules";
import { getSubjects } from "@/utils/api-requests";
import React from "react";

export const SubjectSection = async () => {
  const filterData = {
    status: 1,
  };
  const subjects = await getSubjects(filterData);
  return (
    <InnerContainer>
      <div className="mt-20 mb-20">
        <div className="flex flex-col justify-center items-center relative bg-transparent w-full">
          <SectionHeader
            title="Subjects To Choose From"
            description="Discover a variety of subjects tailored to your interests and ambitions"
          />
          <div className="mt-10 w-full">
            <GridWrapper>
              {subjects
                ?.slice(1, 5)
                .map((item) => (
                  <SubjectBox
                    title={item.name}
                    key={item.id}
                    img={item.cover_image}
                  />
                ))}
            </GridWrapper>
          </div>
          {/* See More Butn */}
          {/* <div className="flex justify-center items-center mt-10">
            <MainButton
              label="See More"
              btnStyle="Secondary"
              btnSize="Medium"
              icon={<RightArrowIcon />}
              customStyle="w-[200px]"
            />
          </div> */}
        </div>
      </div>
    </InnerContainer>
  );
};
