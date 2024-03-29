import axiosInstance from "@/utils/axiosInstance";

import {
  CourseBox,
  GridWrapper,
  Pagination,
} from "@/components/molecules";
import { ICourseRequest, ICourseResponse, ICourse } from "@/types/courses";

export const Courses = async () => {
  const filterData: ICourseRequest = {
    limit: 20,
    max_fee: 0,
    min_fee: 0,
    page: 1,
  }
  const response = await axiosInstance.post('/v1/user/courses', filterData);
  const courseData = response.data;

  return (
    <div className="w-full">
      {/* <div className="flex gap-2 items-center relative w-full mt-2 flex-wrap">
        <FilterOptionBox itemName={"New Zealand"} />
        <FilterOptionBox itemName={"Australia"} />
        <FilterOptionBox itemName={"Canada"} />
        <FilterOptionBox itemName={"USA"} />
      </div> */}
      <GridWrapper>
        {courseData.data.data.map((item: ICourse) => (
          <CourseBox
            id={item.id}
            course_name={item.course_name}
            course_fee={item.course_fee}
            country={item.country}
            level_name={item.level_name}
            rating={4.6}
            key={item.id}
            uni_logo={item.uni_logo}
            university={item.university}
            currency={item.currency}
          />
        ))}
      </GridWrapper>
      <Pagination />
    </div>
  );
};
