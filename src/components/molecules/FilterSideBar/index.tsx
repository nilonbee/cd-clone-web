"use client";
import { ICountry } from "@/types/countries";
import { ICourseLevel } from "@/types/courseLevels";
import { IIntake } from "@/types/intakes";
import { ISubject } from "@/types/subjects";
import { MultiSelectDropdown } from "..";
import { SelectDropdown } from "../SelectDropDown";

interface FilterSideBarProps {
  countries: ICountry[];
  courseLevels: ICourseLevel[];
  subjects: ISubject[];
  intakes: IIntake[];
}

export const FilterSideBar = ({
  countries,
  courseLevels,
  subjects,
  intakes,
}: FilterSideBarProps) => {
  const TUITIONFEES = [
    "1000-5000",
    "5000-10000",
    "10000-20000",
    "20000-30000",
    "30000-40000",
    "40000+",
  ];

  const DURATION = [
    "1-2 years",
    "2-3 years",
    "2-4 years",
    "5 years",
    "6 years",
  ];

  const SORT_OPTIONS = ["A to Z", "Z to A", "Low to High", "High to Low"];

  return (
    <div className="w-full">
      <div className="flex lg:justify-between md:justify-around">
        <div className="flex gap-1 flex-wrap">
          <MultiSelectDropdown
            formFieldName={"Location"}
            options={countries?.map((item: ICountry) => item.name) ?? []}
            onChange={(selectedCountries) => {
              console.debug("selectedCountries", selectedCountries);
            }}
          />
          <MultiSelectDropdown
            formFieldName={"Program Level"}
            options={
              courseLevels?.map((item: ICourseLevel) => item.level) ?? []
            }
            onChange={(selectedlevels) => {
              console.debug("selectedlevels", selectedlevels);
            }}
          />
          <MultiSelectDropdown
            formFieldName={"Subject"}
            options={subjects?.map((item: ISubject) => item.name) ?? []}
            onChange={(selectedCountries) => {
              console.debug("selectedCountries", selectedCountries);
            }}
          />
          <MultiSelectDropdown
            formFieldName={"Tuition Fee"}
            options={TUITIONFEES}
            onChange={(selectedTuitionFees) => {
              console.debug("selectedTuitionFees", selectedTuitionFees);
            }}
          />
          <MultiSelectDropdown
            formFieldName={"Intakes"}
            options={intakes?.map((item: IIntake) => item.months) ?? []}
            onChange={(selectedIntakes) => {
              console.debug("selectedIntakes", selectedIntakes);
            }}
          />
          <MultiSelectDropdown
            formFieldName={"Duration"}
            options={DURATION}
            onChange={(selectedDuration) => {
              console.debug("selectedDuration", selectedDuration);
            }}
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
    </div>
  );
};
