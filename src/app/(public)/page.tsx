import { ContainerLayout } from "@/components/atoms";
import { BannerCarousel, SearchBar } from "@/components/molecules";
import {
  BlogSection,
  ContactSection,
  CountrySection,
  CoursesSection,
  FAQSection,
  NewsLetterSection,
  StudentsSaysSection,
  SubjectSection,
  UniversitySection,
} from "@/components/organisms";
import React from "react";

export default function Home() {
  return (
    <>
      <BannerCarousel />
      <div className="from-[#1c37c1] to-[#089ea2] bg-gradient-to-r -mt-2">
        <ContainerLayout>
          <div className="flex flex-col gap-2 justify-center items-center self-stretch relative xs:h-[180px]  md:h-[200px] ">
            <h1 className="text-center font-semibold lg:text-4xl md:text-3xl sm:text-2xl xs:text-2xl text-white">
              FIND YOUR PERFECT COURSE
            </h1>
            <h4 className="text-center lg:text-1xl md:text-base sm:text-sm xs:text-xs text-white">
              Your Journey to the Perfect Course Starts Here!{" "}
            </h4>
          </div>
        </ContainerLayout>
      </div>
      <ContainerLayout>
        <SearchBar />
        <CountrySection />
        <CoursesSection />
        <SubjectSection />
      </ContainerLayout>
      <div className="relative w-full bg-[#d4ebff]">
        <ContainerLayout>
          <UniversitySection />
        </ContainerLayout>
      </div>
      <ContainerLayout>
        <StudentsSaysSection />
        <FAQSection />
        <BlogSection />
        <ContactSection />
        <NewsLetterSection />
      </ContainerLayout>
    </>
  );
}
