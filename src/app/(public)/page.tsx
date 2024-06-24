import { ContainerLayout } from "@/components/atoms";
import { BannerCarousel, SearchBar } from "@/components/molecules";
import {
  BlogSection,
  ContactSection,
  CountrySection,
  CourseViewDrawer,
  CoursesSection,
  FAQSection,
  NewsLetterSection,
  StudentsSaysSection,
  SubjectSection,
  UniversitySection,
} from "@/components/organisms";
import { IBlogResponse } from "@/types/blogs";
import { ICountry } from "@/types/countries";
import { ICourseLevel } from "@/types/courseLevels";
import { IIntake } from "@/types/intakes";
import { ISubject } from "@/types/subjects";
import {
  getBlogs,
  getCountries,
  getCourseLevels,
  getIntakes,
  getSubjects,
} from "@/utils/api-requests";
import React from "react";

export const revalidate = 10;

export default async function Home() {
  const courseLevels = (await getCourseLevels({ status: 1 })) as ICourseLevel[];
  const countries = (await getCountries({ status: 1 })) as ICountry[];
  const subjects = (await getSubjects({ status: 1 })) as ISubject[];
  const blogs = (await getBlogs({ page: 1, pageSize: 4 })) as IBlogResponse;
  const intakes = (await getIntakes({ status: 1 })) as IIntake[];

  return (
    <>
      <BannerCarousel />
      <div className="from-[#1c37c1] to-[#089ea2] bg-gradient-to-r -mt-2">
        <ContainerLayout>
          <div className="flex flex-col gap-2 justify-center items-center self-stretch relative xs:h-[180px]  md:h-[200px] ">
            <h1 className="text-center font-semibold lg:text-4xl md:text-3xl sm:text-2xl xs:text-2xl text-white">
              Find Your Perfect Course
            </h1>
            <h4 className="text-center lg:text-1xl md:text-base sm:text-sm xs:text-xs text-white">
              Your Journey to the Perfect Course Starts Here!{" "}
            </h4>
          </div>
        </ContainerLayout>
      </div>
      <ContainerLayout>
        <SearchBar
          initCountries={countries}
          initCourseLevels={courseLevels}
          initSubjects={subjects}
        />
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
        <BlogSection initBlogs={blogs} />
        <ContactSection />
        <NewsLetterSection />
      </ContainerLayout>
      <CourseViewDrawer intakes={intakes} />
    </>
  );
}
