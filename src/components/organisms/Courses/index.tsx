import { CourseBox, FilterOptionBox, GridWrapper, Pagination } from "@/components/molecules";
import React from "react";

export const Courses = () => {
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
    {
      university: "Nottingham Trent University",
      slug: "computer-science",
      courseTitle: "Electrical Engineering",
      country: "Canada",
      duration: "3 years & 6 semester",
      rating: 4.2,
      tuitionFee: "$18000",
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
      courseTitle: "Electrical Engineering",
      country: "Canada",
      duration: "3 years & 6 semester",
      rating: 4.2,
      tuitionFee: "$18000",
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
      courseTitle: "Electrical Engineering",
      country: "Canada",
      duration: "3 years & 6 semester",
      rating: 4.2,
      tuitionFee: "$18000",
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
      courseTitle: "Electrical Engineering",
      country: "Canada",
      duration: "3 years & 6 semester",
      rating: 4.2,
      tuitionFee: "$18000",
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
    <div className="-mt-10 w-full">
      {/* <div className="flex gap-2 items-center relative w-full mt-2 flex-wrap">
        <FilterOptionBox itemName={"New Zealand"} />
        <FilterOptionBox itemName={"Australia"} />
        <FilterOptionBox itemName={"Canada"} />
        <FilterOptionBox itemName={"USA"} />
      </div> */}
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
      <Pagination />
    </div>
  );
};
