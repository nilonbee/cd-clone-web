"use client";
import { Loading, MainButton } from "@/components/atoms";
import { CourseBoxModel } from "@/components/molecules";
import { useCourseStore } from "@/store";
import { ICourse, ICourseRequest } from "@/types/courses";
import { getCourses } from "@/utils/api-requests";
import { useEffect, useState } from "react";
import { CourseViewDrawer } from "../CourseViewDrawer";

export const Courses = () => {
  const { setIsCourse, setSelectedCourseId } = useCourseStore();
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState(false);

  const [filterData, setFilterData] = useState<ICourseRequest>({
    limit: 20,
    max_fee: 0,
    min_fee: 0,
    page: 1,
  });
  const [courseData, setCourseData] = useState<ICourse[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    setIsCourse(false);
    getCourses(filterData).then((response) => {
      setCourseData([...courseData, ...(response?.data || [])]);
      setSelectedCourseId(response?.data[0].id || "");
      setLoading(false);
      setIsCourse(true);
    });
  }, [filterData]);

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

  return (
    <div className="md:w-[400px] sm:w-full relative">
      <p className="text-xs text-textColor mb-2">
        <b>{courseData?.length} </b>courses found
      </p>
      <div className="w-full sticky top-[100px] left-0 h-[1000px] overflow-y-auto">
        <div className="sm:grid sm:grid-cols-2 sm:gap-2 md:grid md:grid-cols-1 md:gap-2">
          {courseData?.map((item: ICourse) => (
            <div className="mb-2 cursor-pointer">
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
                setOpenDrawer={setOpenDrawer}
              />
            </div>
          ))}
        </div>
        {loading && (
          <div className="flex justify-center mt-4">
            <Loading />
          </div>
        )}
        {courseData?.length !== 0 && (
          <div className="flex justify-center my-4">
            <MainButton
              label="Load More"
              btnSize="Small"
              onClick={() =>
                setFilterData({ ...filterData, page: filterData.page + 1 })
              }
              loading={loading}
              disabled={loading}
            />
          </div>
        )}
      </div>
      <div className="w-full md:hidden sm:block xs:block">
        {openDrawer && isMobile && (
          <CourseViewDrawer open={openDrawer} setOpen={setOpenDrawer} />
        )}
      </div>
    </div>
  );
};
