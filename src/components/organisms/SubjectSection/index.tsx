import { InnerContainer, MainButton, SectionHeader } from "@/components/atoms";
import { RightArrowIcon } from "@/components/atoms/Icons";
import { SubjectBox } from "@/components/molecules";
import React from "react";

export const SubjectSection = () => {
  const subjects = [
    {
      title: "Engineering",
      subjects: [
        "General Engineering and Technology",
        "Civil Engineering",
        "Manufacturing and Production",
        "Mechanical Engineering",
      ],
    },
    {
      title: "Engineering",
      subjects: [
        "General Engineering and Technology",
        "Civil Engineering",
        "Manufacturing and Production",
        "Mechanical Engineering",
      ],
    },
    {
      title: "Engineering",
      subjects: [
        "General Engineering and Technology",
        "Civil Engineering",
        "Manufacturing and Production",
        "Mechanical Engineering",
      ],
    },
    {
      title: "Engineering",
      subjects: [
        "General Engineering and Technology",
        "Civil Engineering",
        "Manufacturing and Production",
        "Mechanical Engineering",
      ],
    },
  ];

  return (
    <InnerContainer>
      <div className="mt-20 mb-20">
        <div className="flex flex-col justify-center items-center relative bg-transparent w-full">
          <SectionHeader
            title="Subjects You Can Study"
            description="Lorem ipsum dolor sit amet consectetur. Sit hendrerit eget est."
          />

          <div className="grid gap-3 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 mt-10 w-full">
            {subjects.map((item, index) => (
              <SubjectBox key={index} title={item.title} subjects={item.subjects}/>
            ))}
          </div>
          {/* See More Butn */}
          <div className="flex justify-center items-center mt-10">
            <MainButton
              label="See More"
              btnStyle="Secondary"
              btnSize="Medium"
              icon={<RightArrowIcon />}
              customStyle="w-[200px]"
            />
          </div>
        </div>
      </div>
    </InnerContainer>
  );
};
