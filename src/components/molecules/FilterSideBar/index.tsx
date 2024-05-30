"use client";
import { ICountry } from "@/types/countries";
import { ICourseLevel } from "@/types/courseLevels";
import { IIntake } from "@/types/intakes";
import { ISubject } from "@/types/subjects";
import { FilterBtn, MultiSelectDropdown } from "..";
import { SelectDropdown } from "../SelectDropDown";
import { useCourseFilterStore } from "@/store";
import { SORT_OPTIONS, TUITION_FEES } from "./filterData";
import { useCallback, useEffect } from "react";
import { getCourses } from "@/utils/api-requests";

interface FilterSideBarProps {
  initCountries: ICountry[];
  initCourseLevels: ICourseLevel[];
  initSubjects: ISubject[];
  initIntakes: IIntake[];
}

export const FilterSideBar = ({
  initCountries,
  initCourseLevels,
  initSubjects,
  initIntakes,
}: FilterSideBarProps) => {
  const {
    filter,
    setFilter,
    setLoadingCourseData,
    setCourseData,
    setTotalCourses,
    setIsEmpty,
    setSelectedCourseId,
  } = useCourseFilterStore();

  const arrayFormatterForOptions = (array: any[], key: string) => {
    return array.map((item: any) => {
      return { value: item.id, label: item[key] };
    });
  };

  const submitFilters = () => {
    setFilter({
      country_ids: [],
      course_level_ids: [],
      subject_ids: [],
      intake_month_ids: [],
      min_max_tuition_fee: 0,
      duration: 0,
      sort_option: 0,
    });
  };

  //  If I change the filter should call the backend API to get the data
  const getFilteredData = useCallback(async () => {
    console.log("Filter Changed =======");
    setLoadingCourseData(true);
    const courses = await getCourses({ ...filter });
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  // Call the getFilteredData function when the filter changes not on the first render
  useEffect(() => {
    getFilteredData();
  }, [filter, getFilteredData]);

  return (
    <div className="w-full">
      <div className="flex lg:justify-between md:justify-around">
        <div className="flex gap-1 flex-wrap">
          <MultiSelectDropdown
            formFieldName={"Location"}
            options={arrayFormatterForOptions(initCountries, "name")}
            selectedOptions={filter.country_ids}
            setSelectedOptions={(selectedOptions) =>
              setFilter({ country_ids: selectedOptions })
            }
          />
          <MultiSelectDropdown
            formFieldName={"Program Level"}
            options={arrayFormatterForOptions(initCourseLevels, "level")}
            selectedOptions={filter.course_level_ids}
            setSelectedOptions={(selectedOptions) =>
              setFilter({ course_level_ids: selectedOptions })
            }
          />
          <MultiSelectDropdown
            formFieldName={"Subject"}
            options={arrayFormatterForOptions(initSubjects, "name")}
            selectedOptions={filter.subject_ids}
            setSelectedOptions={(selectedOptions) =>
              setFilter({ subject_ids: selectedOptions })
            }
          />
          <MultiSelectDropdown
            formFieldName={"Intakes"}
            options={arrayFormatterForOptions(initIntakes, "months")}
            selectedOptions={filter.intake_month_ids}
            setSelectedOptions={(selectedOptions) =>
              setFilter({ intake_month_ids: selectedOptions })
            }
          />
          <SelectDropdown
            formFieldName={"Tuition Fee (USD)"}
            options={TUITION_FEES}
            selectedOption={filter.min_max_tuition_fee}
            setSelectedOption={(selectedOption) =>
              setFilter({ min_max_tuition_fee: selectedOption })
            }
          />
          {/* <SelectDropdown
            formFieldName={"Duration"}
            options={DURATION}
            selectedOption={filter.duration}
            setSelectedOption={(selectedOption) =>
              setFilter({ duration: selectedOption })
            }
          /> */}
        </div>
        <div>
          <SelectDropdown
            formFieldName={"Sort"}
            options={SORT_OPTIONS}
            selectedOption={filter.sort_option}
            setSelectedOption={(selectedOption) =>
              setFilter({ sort_option: selectedOption })
            }
          />
        </div>
      </div>
      {/* Show Selected Filters */}
      <div className="flex gap-2 mt-4">
        <div className="flex gap-1">
          {filter.country_ids.map((item: number, index) => (
            <FilterBtn
              key={index}
              name={
                initCountries.find((country) => country.id === item)?.name ?? ""
              }
              handleRemove={() =>
                setFilter({
                  country_ids: filter.country_ids.filter(
                    (countryId) => countryId !== item,
                  ),
                })
              }
            />
          ))}
          {filter.course_level_ids.map((programmingLevel, index) => (
            <FilterBtn
              key={index}
              name={
                initCourseLevels.find(
                  (courseLevel) => courseLevel.id === programmingLevel,
                )?.level ?? ""
              }
              handleRemove={() =>
                setFilter({
                  course_level_ids: filter.course_level_ids.filter(
                    (courseLevel) => courseLevel !== programmingLevel,
                  ),
                })
              }
            />
          ))}
          {filter.subject_ids.map((subject, index) => (
            <FilterBtn
              key={index}
              name={
                initSubjects.find((subjectItem) => subjectItem.id === subject)
                  ?.name ?? ""
              }
              handleRemove={() =>
                setFilter({
                  subject_ids: filter.subject_ids.filter(
                    (subjectItem) => subjectItem !== subject,
                  ),
                })
              }
            />
          ))}
          {filter.intake_month_ids.map((intake, index) => (
            <FilterBtn
              key={index}
              name={
                initIntakes.find((intakeItem) => intakeItem.id === intake)
                  ?.months ?? ""
              }
              handleRemove={() =>
                setFilter({
                  intake_month_ids: filter.intake_month_ids.filter(
                    (intakeItem) => intakeItem !== intake,
                  ),
                })
              }
            />
          ))}
        </div>
        <button
          className="text-xs text-primary hover:underline"
          onClick={submitFilters}
        >
          Clear All
        </button>
      </div>
    </div>
  );
};
