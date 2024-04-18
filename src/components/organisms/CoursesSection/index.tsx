import { InnerContainer, MainButton, SectionHeader } from "@/components/atoms";
import { RightArrowIcon } from "@/components/atoms/Icons";
import { CourseBox, GridWrapper } from "@/components/molecules";
import { ICourse } from "@/types/courses";
import { getCourses } from "@/utils/api-requests";

export const CoursesSection = async () => {
  const filterData = {
    limit: 4,
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
            description="Lorem ipsum dolor sit amet consectetur. Sit hendrerit eget est."
          />
          <div className="mt-10 w-full">
            <GridWrapper>
              {courseData?.data?.map((item: ICourse) => (
                <CourseBox
                  id={item.id}
                  course_name={item.course_name}
                  course_fee={item.course_fee}
                  country={item.country}
                  level_name={item.level_name}
                  rating={4.5}
                  key={item.id}
                  uni_logo={item.uni_logo}
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
