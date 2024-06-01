import { InnerContainer, MainButton, SectionHeader } from "@/components/atoms";
import { RightArrowIcon } from "@/components/atoms/Icons";
import { CourseBoxModel, GridWrapper } from "@/components/molecules";
import { ICourse } from "@/types/courses";
import { getCourses } from "@/utils/api-requests";
import Link from "next/link";

export const CoursesSection = async () => {
  const filterData = {
    limit: 8,
    max_fee: 0,
    min_fee: 0,
    page: 1,
  };
  const courseData = await getCourses(filterData);
  return (
    <InnerContainer>
      <div className="mt-20 mb-20">
        <div className="flex flex-col justify-center items-center relative bg-transparent w-full">
          <SectionHeader
            title="Trending Courses"
            description="Choose a course that will take you to your dream"
          />
          <div className="mt-10 w-full">
            <GridWrapper>
              {courseData?.data?.map((item: ICourse) => (
                <CourseBoxModel
                  key={item.id}
                  id={item.id}
                  course_name={item.course_name}
                  course_fee={item.course_fee}
                  country={item.country}
                  level_name={item.level_name}
                  uni_logo={item.uni_logo}
                  university={item.university}
                  currency={item.currency}
                  btnView={true}
                />
              ))}
            </GridWrapper>
          </div>
          <div className="flex justify-center items-center mt-10">
            <Link href="/courses">
              <MainButton
                label="See More"
                btnStyle="Secondary"
                btnSize="Medium"
                icon={<RightArrowIcon />}
                customStyle="w-[200px]"
              />
            </Link>
          </div>
        </div>
      </div>
    </InnerContainer>
  );
};
