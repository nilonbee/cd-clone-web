import { ContainerLayout } from "@/components/atoms";
import { FilterSideBar, MainSearchBar } from "@/components/molecules";
import {
  CourseViewModel,
  Courses,
  InterestedSection,
} from "@/components/organisms";

const CoursePage = () => {
  return (
    <>
      <div className="from-[#1c37c1] to-[#089ea2] bg-gradient-to-r -mt-2">
        <ContainerLayout>
          <div className="flex flex-col gap-2 justify-center items-center self-stretch relative xs:h-[180px]  md:h-[200px] ">
            <h1 className="text-center font-semibold lg:text-4xl md:text-3xl sm:text-2xl xs:text-2xl text-white">
              FIND YOUR PERFECT COURSE
            </h1>
            <h4 className="text-center lg:text-1xl md:text-base sm:text-sm xs:text-xs text-white">
              We can help you apply and study at top Universities
            </h4>
          </div>
        </ContainerLayout>
      </div>
      <ContainerLayout>
        <MainSearchBar />
        <div className="my-10">
          <FilterSideBar />
        </div>
        <div className="w-full flex md:flex-row  sm:flex-col my-10 gap-4 relative">
          <Courses />
          <div className="w-full md:block sm:hidden xs:hidden">
            <CourseViewModel />
          </div>
        </div>
      </ContainerLayout>
      <InterestedSection />
    </>
  );
};

export default CoursePage;
