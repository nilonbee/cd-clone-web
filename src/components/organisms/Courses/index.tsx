import { CourseBoxModel } from "@/components/molecules";
import { ICourse, ICourseRequest } from "@/types/courses";
import { getCourses } from "@/utils/api-requests";

export const Courses = async () => {
  const filterData: ICourseRequest = {
    limit: 20,
    max_fee: 0,
    min_fee: 0,
    page: 1,
  };
  const courseData = await getCourses(4);

  return (
    <div className="w-full">
      {courseData?.data?.map((item: ICourse) => (
        <CourseBoxModel
          id={item.id}
          course_name={item.course_name}
          course_fee={item.course_fee}
          country={item.country}
          level_name={item.level_name}
          key={item.id}
          uni_logo={item.uni_logo}
          university={item.university}
          currency={item.currency}
        />
      ))}
      {/* <Pagination /> */}
    </div>
  );
};
