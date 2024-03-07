import { InnerContainer, SectionHeader } from "@/components/atoms";
import { CountryBox, CourseBox } from "@/components/molecules";
import React from "react";

export const CoursesSection = () => {
  const courses = [
    {
      university: "University of Example",
      courseTitle: "Computer Science",
      country: "United States",
      duration: "4 years & 8 semester",
      rating: 4.5,
      tuitionFee: "$ 20000",
      logo: "/images/Frame 19.png",
    },
    {
      university: "Example Tech Institute",
      courseTitle: "Electrical Engineering",
      country: "Canada",
      duration: "3 years & 6 semester",
      rating: 4.2,
      tuitionFee: "$ 18000",
      logo: "/images/Frame 19.png",
    },
    {
      university: "University of Example",
      courseTitle: "Computer Science",
      country: "United States",
      duration: "4 years & 8 semester",
      rating: 4.5,
      tuitionFee: "$ 20000",
      logo: "/images/Frame 19.png",
    },
    {
      university: "Example Tech Institute",
      courseTitle: "Electrical Engineering",
      country: "Canada",
      duration: "3 years & 6 semester",
      rating: 4.2,
      tuitionFee: "$ 18000",
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

          <div className="grid gap-3 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 mt-10 w-full">
            {courses.map((item, index) => (
              <CourseBox
                courseTitle={item.courseTitle}
                tuitionFee={item.tuitionFee}
                country={item.country}
                duration={item.duration}
                rating={item.rating}
                key={index}
                logo={item.logo}
                university={item.university}
                // url={item.url}
              />
            ))}
          </div>
        </div>
      </div>
    </InnerContainer>
  );
};
