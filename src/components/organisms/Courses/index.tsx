"use client";
import { LoadingSpinner, MainButton } from "@/components/atoms";
import { CourseBoxModel } from "@/components/molecules";
import { useCourseFilterStore } from "@/store";
import { ICourse } from "@/types/courses";
import { getCourses } from "@/utils/api-requests";
import { useEffect, useState } from "react";
import { IIntake } from "@/types/intakes";

export const Courses = ({
  initialCourseData,
  initialTotalCourses,
}: {
  initialCourseData: ICourse[];
  initialTotalCourses: number;
  intakes: IIntake[];
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const {
    filter,
    totalCourses,
    courseData,
    loadingCourseData,
    isEmpty,
    setFilter,
    setCourseData,
    setTotalCourses,
    setIsEmpty,
    setSelectedCourseId,
  } = useCourseFilterStore();

  const [loadingMore, setLoadingMore] = useState<boolean>(false);

  useEffect(() => {
    if (initialCourseData.length !== 0) {
      setIsEmpty(false);
      setCourseData(initialCourseData);
      setSelectedCourseId(initialCourseData[0].id || "");
      setTotalCourses(initialTotalCourses);
    } else {
      setIsEmpty(true);
      setCourseData([]);
      setSelectedCourseId("");
      setTotalCourses(0);
    }
    // eslint-disable-next-line
  }, [initialCourseData]);

  //choose the screen size
  const handleResize = () => {
    if (window.innerWidth < 770) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  // create an event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  const loadMoreCourses = async () => {
    setLoadingMore(true);
    const courses = await getCourses(filter);
    setCourseData([...courseData, ...(courses?.data ?? [])]);
    setTotalCourses(courses?.total || 0);
    setLoadingMore(false);
  };

  if (loadingCourseData) {
    return (
      <div className="md:w-[400px] sm:w-full relative">
        <LoadingSpinner />
      </div>
    );
  }

  if (isEmpty) {
    return (
      <div className="md:w-[400px] sm:w-full relative">
        <div className="flex justify-center items-center">
          <p className="text-sm text-center text-textColor">No courses found</p>
        </div>
      </div>
    );
  }

  return (
    <div className="md:w-[400px] sm:w-full relative">
      <p className="text-xs text-textColor mb-2">
        <b>{totalCourses} </b>courses found
      </p>

      <div className="w-full sticky top-[100px] left-0 h-[1000px] overflow-y-auto">
        <div className="sm:grid sm:grid-cols-2 sm:gap-2 md:grid md:grid-cols-1 md:gap-2 fadeIn">
          {courseData?.map((item: ICourse, index: number) => (
            <div className="mb-2 cursor-pointer" key={index}>
              <CourseBoxModel
                id={item.id}
                course_name={item.course_name}
                course_fee={item.course_fee}
                country={item.country}
                level_name={item.level_name}
                uni_logo={item.uni_logo}
                university={item.university}
                currency={item.currency}
                isMobile={isMobile}
              />
            </div>
          ))}
        </div>
        {courseData?.length !== 0 && totalCourses > 20 && (
          <div className="flex justify-center my-4">
            <MainButton
              label="Load More"
              btnSize="Small"
              onClick={() => {
                setFilter({ page: filter.page + 1 });
                loadMoreCourses();
              }}
              loading={loadingMore}
              disabled={loadingMore}
            />
          </div>
        )}
      </div>
    </div>
  );
};
