import { InnerContainer, MainButton, SectionHeader } from "@/components/atoms";
import { RightArrowIcon } from "@/components/atoms/Icons";
import { CourseBox, GridWrapper } from "@/components/molecules";
import axiosInstance from "@/utils/axiosInstance";
import { ApiResponse } from "@/types"

export const CoursesSection = async () => {
  const response = await axiosInstance.post<ApiResponse>('/v1/user/courses', { limit: 4 });
  const courseData = response.data.data.data;
  console.log(courseData)
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
              {courseData?.map((item) => (
                <CourseBox
                  slug={item.id}
                  courseTitle={item.course_name}
                  tuitionFee={item.course_fee}
                  country={item.country}
                  duration={item.level_name}
                  rating={4.5}
                  key={item.id}
                  logo={`${process.env.NEXT_PUBLIC_IMAGEKIT_URL}/${item.uni_logo}`}
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
