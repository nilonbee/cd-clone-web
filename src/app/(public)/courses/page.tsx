import { ContainerLayout } from "@/components/atoms";
import { FilterSideBar, MainSearchBar } from "@/components/molecules";
import {
  CourseViewModel,
  Courses,
  InterestedSection,
} from "@/components/organisms";
import { ICountry } from "@/types/countries";
import { ICourseLevel } from "@/types/courseLevels";
import { IIntake } from "@/types/intakes";
import { ISubject } from "@/types/subjects";
import {
  getCountries,
  getCourseLevels,
  getCourses,
  getIntakes,
  getSubjects,
} from "@/utils/api-requests";

const CoursePage = async () => {
  const filterData = {
    limit: 20,
    max_fee: 0,
    min_fee: 0,
    page: 1,
  };
  const initialCourseData = await getCourses(filterData);
  const countries = (await getCountries({ status: 1 })) as ICountry[];
  const courseLevels = (await getCourseLevels({ status: 1 })) as ICourseLevel[];
  const subjects = (await getSubjects({ status: 1 })) as ISubject[];
  const intakes = (await getIntakes({ status: 1 })) as IIntake[];

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
          <FilterSideBar
            initCountries={countries}
            initCourseLevels={courseLevels}
            initSubjects={subjects}
            initIntakes={intakes}
          />
        </div>
        <div className="w-full flex md:flex-row  sm:flex-col my-10 gap-4 relative">
          <Courses initialCourseData={initialCourseData?.data ?? []} />
          <div className="w-full md:block sm:hidden xs:hidden">
            <CourseViewModel intakes={intakes} />
          </div>
        </div>
      </ContainerLayout>
      <InterestedSection />
    </>
  );
};

export default CoursePage;
