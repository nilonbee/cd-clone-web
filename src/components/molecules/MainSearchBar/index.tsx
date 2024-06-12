"use client";
import { InnerContainer, MainButton } from "@/components/atoms";
import { SearchIcon } from "@/components/atoms/Icons";
import { useCourseFilterStore } from "@/store";
import { getCourses } from "@/utils/api-requests";
import { useEffect, useState } from "react";

export const MainSearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const {
    filter,
    refetch,
    loadingCourseData,
    setFilter,
    setCourseData,
    setTotalCourses,
    setLoadingCourseData,
    setIsEmpty,
    setSelectedCourseId,
  } = useCourseFilterStore();

  const handleSearch = async (e: any) => {
    e.preventDefault();
    setLoadingCourseData(true);
    setFilter({ course_name: searchValue });
    const courses = await getCourses({ ...filter, course_name: searchValue });
    if (courses?.data.length === 0) {
      setLoadingCourseData(false);
      setCourseData([]);
      setTotalCourses(0);
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
      setCourseData(courses?.data || []);
      setTotalCourses(courses?.total || 0);
      setSelectedCourseId(courses?.data[0].id || "");
      setLoadingCourseData(false);
    }
  };

  useEffect(() => {
    if (refetch) {
      setSearchValue(filter.course_name || "");
    }
    // eslint-disable-next-line
  }, [refetch]);

  return (
    <InnerContainer>
      <div className=" shadow-lg rounded-md  py-[10px] -mt-10 w-full bg-white px-[10px]">
        <form className="w-full" onSubmit={(e) => handleSearch(e)}>
          <div className="flex gap-4 items-center w-full cursor-pointer ">
            <div>
              <div className="xs:w-[25px] xs:h-[25px] sm:w-[30px] sm:h-[30px] md:w-[40px] md:h-[40px]">
                <SearchIcon />
              </div>
            </div>
            <input
              type="text"
              placeholder="Search Here..."
              className=" w-full outline-none h-10 z-10 xs:text-sm sm:text-sm  md:text-lg text-black/80"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <MainButton
              label="Search"
              btnStyle="Primary"
              btnSize="Large"
              submit
              loading={loadingCourseData}
              disabled={loadingCourseData}
            />
          </div>
        </form>
      </div>
    </InnerContainer>
  );
};
