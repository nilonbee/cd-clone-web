import { InnerContainer, MainButton, SectionHeader } from "@/components/atoms";
import { RightArrowIcon } from "@/components/atoms/Icons";
import { CourseBox, GridWrapper } from "@/components/molecules";
import React from "react";

export const CoursesSection = () => {
  const courses = [
    {
      university: "Nottingham Trent University",
      slug: "computer-science",
      courseTitle: "Computer Science",
      country: "United States",
      duration: "4 years & 8 semester",
      rating: 4.5,
      tuitionFee: "$20000",
      logo: "/images/Frame 19.png",
    },
    {
      university: "Nottingham Trent University",
      slug: "electrical-engineering",
      courseTitle: "Electrical Engineering",
      country: "Canada",
      duration: "3 years & 6 semester",
      rating: 4.2,
      tuitionFee: "$18000",
      logo: "/images/Frame 19.png",
    },
    {
      university: "Nottingham Trent University",
      slug: "computer-science",
      courseTitle: "Computer Science",
      country: "United States",
      duration: "4 years & 8 semester",
      rating: 4.5,
      tuitionFee: "$20000",
      logo: "/images/Frame 19.png",
    },
    {
      university: "Nottingham Trent University",
      slug: "electrical-engineering",
      courseTitle: "Electrical Engineering",
      country: "Canada",
      duration: "3 years & 6 semester",
      rating: 4.2,
      tuitionFee: "$18000",
      logo: "/images/Frame 19.png",
    },
    // Add more mock data as needed
  ];

  return (
    <InnerContainer>
      <div className="mt-20 mb-20">
        <div className="flex flex-col justify-center items-center relative bg-transparent w-full">
          <SectionHeader
            title="Trending Courses"
            description="Lorem ipsum dolor sit amet consectetur. Sit hendrerit eget est."
          />
          <div className="mt-10">
            <GridWrapper>
              {courses.map((item, index) => (
                <CourseBox
                  slug={item.slug}
                  courseTitle={item.courseTitle}
                  tuitionFee={item.tuitionFee}
                  country={item.country}
                  duration={item.duration}
                  rating={item.rating}
                  key={index}
                  logo={item.logo}
                  university={item.university}
                />
              ))}
            </GridWrapper>
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
