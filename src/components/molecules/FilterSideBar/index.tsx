"use client";
import { useCourseFilterStore } from "@/store";
import { ICountry } from "@/types/countries";
import { ICourseLevel } from "@/types/courseLevels";
import { IIntake } from "@/types/intakes";
import { ISubject } from "@/types/subjects";
import { getCourses } from "@/utils/api-requests";
import { FilterBtn, MultiSelectDropdown } from "..";
import { SelectDropdown } from "../SelectDropDown";
import { SORT_OPTIONS, TUITION_FEES } from "./filterData";
import { MainButton } from "@/components/atoms";
import { useEffect, useState } from "react";
import { arrayFormatterForOptions } from "@/utils/arrayFormatterForOptions";

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
    loadingCourseData,
    refetch,
    setFilter,
    setLoadingCourseData,
    setCourseData,
    setTotalCourses,
    setIsEmpty,
    setSelectedCourseId,
    setRefetch,
  } = useCourseFilterStore();

  const [isClear, setIsClear] = useState<boolean>(false);

  const clearFilters = () => {
    setFilter({
      course_name: "",
      country_ids: [],
      course_level_ids: [],
      subject_ids: [],
      intake_month_ids: [],
      min_max_tuition_fee: 0,
      duration: 0,
      sort_option: 0,
    });
    setIsClear(true);
    setRefetch(!refetch);
  };

  useEffect(() => {
    if (isClear) {
      getFilteredData();
      setIsClear(false);
    }
    // eslint-disable-next-line
  }, [isClear]);

  useEffect(() => {
    if (refetch) {
      getFilteredData();
      setSelectedCourseId("");
    }
    return () => {
      setRefetch(false);
    };
    // eslint-disable-next-line
  }, [refetch]);

  const getFilteredData = async () => {
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
      // setSelectedCourseId(courses?.data[0].id || "");
      setLoadingCourseData(false);
    }
  };

  return (
    <div className="w-full">
      <div className="flex lg:justify-between md:justify-around">
        <div className="flex gap-1 flex-wrap">
          <MultiSelectDropdown
            formFieldName={"Location"}
            options={arrayFormatterForOptions(initCountries, "name")}
            selectedOptions={filter.country_ids}
            setSelectedOptions={(selectedOptions) => {
              setFilter({ country_ids: selectedOptions });
            }}
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
          <MainButton
            label="Apply"
            btnStyle="Primary"
            btnSize="Small"
            submit
            loading={loadingCourseData}
            disabled={loadingCourseData}
            customStyle="h-[36px] w-20"
            onClick={getFilteredData}
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
        <div className="flex gap-1 flex-wrap">
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
          onClick={clearFilters}
        >
          Clear All
        </button>
      </div>
    </div>
  );
};
