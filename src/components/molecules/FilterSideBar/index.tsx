"use client";
import { ICountry } from "@/types/countries";
import { ICourseLevel } from "@/types/courseLevels";
import { IIntake } from "@/types/intakes";
import { ISubject } from "@/types/subjects";
import { FilterBtn, MultiSelectDropdown } from "..";
import { SelectDropdown } from "../SelectDropDown";
import { useCourseStore } from "@/store";
import { useState } from "react";

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
    locations,
    programmingLevels,
    subjects,
    tuitionFees,
    intakes,
    durations,
    setLocations,
    setProgrammingLevels,
    setSubjects,
    setTuitionFees,
    setIntakes,
    setDurations,
  } = useCourseStore();
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const TUITION_FEES = [
    "0 - 10,000 / year",
    "10,000 - 20,000 / year",
    "20,000 - 30,000 / year",
    "over 30,000 / year",
  ];

  const DURATION = ["1-2 years", "2-3 years", "3-4 years", "4 years or above"];

  const SORT_OPTIONS = ["A to Z", "Z to A", "Low to High", "High to Low"];

  return (
    <div className="w-full">
      <div className="flex lg:justify-between md:justify-around">
        <div className="flex gap-1 flex-wrap">
          <MultiSelectDropdown
            formFieldName={"Location"}
            options={initCountries?.map((item: ICountry) => item.name) ?? []}
            selectedOptions={locations}
            setSelectedOptions={setLocations}
          />
          <MultiSelectDropdown
            formFieldName={"Program Level"}
            options={
              initCourseLevels?.map((item: ICourseLevel) => item.level) ?? []
            }
            selectedOptions={programmingLevels}
            setSelectedOptions={setProgrammingLevels}
          />
          <MultiSelectDropdown
            formFieldName={"Subject"}
            options={initSubjects?.map((item: ISubject) => item.name) ?? []}
            selectedOptions={subjects}
            setSelectedOptions={setSubjects}
          />
          <MultiSelectDropdown
            formFieldName={"Tuition Fee (USD)"}
            options={TUITION_FEES}
            selectedOptions={tuitionFees}
            setSelectedOptions={setTuitionFees}
          />
          <MultiSelectDropdown
            formFieldName={"Intakes"}
            options={initIntakes?.map((item: IIntake) => item.months) ?? []}
            selectedOptions={intakes}
            setSelectedOptions={setIntakes}
          />
          <MultiSelectDropdown
            formFieldName={"Duration"}
            options={DURATION}
            selectedOptions={durations}
            setSelectedOptions={setDurations}
          />
        </div>
        <div>
          <SelectDropdown
            formFieldName={"Sort"}
            options={SORT_OPTIONS}
            onChange={(selectedCountries) => {
              console.debug("selectedCountries", selectedCountries);
            }}
          />
        </div>
      </div>
      {/* Show Selected Filters */}
      <div className="flex gap-2 mt-4">
        <div className="flex gap-1">
          {locations.map((location, index) => (
            <FilterBtn
              key={index}
              name={location}
              handleRemove={() =>
                setLocations(locations.filter((item) => item !== location))
              }
            />
          ))}
          {programmingLevels.map((programmingLevel, index) => (
            <FilterBtn
              key={index}
              name={programmingLevel}
              handleRemove={() =>
                setProgrammingLevels(
                  programmingLevels.filter((item) => item !== programmingLevel),
                )
              }
            />
          ))}
          {subjects.map((subject, index) => (
            <FilterBtn
              key={index}
              name={subject}
              handleRemove={() =>
                setSubjects(subjects.filter((item) => item !== subject))
              }
            />
          ))}
          {tuitionFees.map((tuitionFee, index) => (
            <FilterBtn
              key={index}
              name={tuitionFee}
              handleRemove={() =>
                setTuitionFees(
                  tuitionFees.filter((item) => item !== tuitionFee),
                )
              }
            />
          ))}
          {intakes.map((intake, index) => (
            <FilterBtn
              key={index}
              name={intake}
              handleRemove={() =>
                setIntakes(intakes.filter((item) => item !== intake))
              }
            />
          ))}
          {durations.map((duration, index) => (
            <FilterBtn
              key={index}
              name={duration}
              handleRemove={() =>
                setDurations(durations.filter((item) => item !== duration))
              }
            />
          ))}
        </div>
        {/* <button className="text-xs text-primary hover:underline">Clear All</button> */}
      </div>
    </div>
  );
};
