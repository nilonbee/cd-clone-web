"use client";
import React, { useEffect, useState } from "react";
import { MultiSelectDropdown } from "..";
import { getCountries, getCourseLevels, getSubjects, getIntakes } from "@/utils/api-requests";
import { ICountry } from "@/types/countries";
import { ICourseLevel } from "@/types/courseLevels";
import { ISubject } from "@/types/subjects";
import { IIntake } from "@/types/intakes";
import { fetchData } from "@/utils/fetchRequest";
import { SelectDropdown } from "../SelectDropDown";

export const FilterSideBar = () => {

  // use uppercase for hard-coded values
  const COUNTRIES = [
    "Austria",
    "Canada",
    "New Zealand",
    "United Kingdom",
    "United States",
  ];

  const TUITIONFEES = [
    '1000-5000',
    '5000-10000',
    '10000-20000',
    '20000-30000',
    '30000-40000',
    '40000+'
  ]

  const DURATION = [
    '1-2 years',
    '2-3 years',
    '2-4 years',
    '5 years',
    '6 years',
  ]

  const SORT_OPTIONS = [
    "Relevance",
    "Price: Low to High",
    "Price: High to Low",
    "Rating: Low to High",
    "Rating: High to Low",
    "Date: Newest",
    "Date: Oldest",
  ];

  const [countryNames, setCountryNames] = useState<string[]>([]);
  const [courseLevels, setCourseLevels] = useState<string[]>([]);
  const [subjects, setSubjects] = useState<string[]>([]);
  const [intakes, setIntakes] = useState<string[]>([]);

  useEffect(() => {
    fetchData(getCountries, setCountryNames, (item: ICountry) => item.name);
    fetchData(getCourseLevels, setCourseLevels, (item: ICourseLevel) => item.level);
    fetchData(getSubjects, setSubjects, (item: ISubject) => item.name);
    fetchData(getIntakes, setIntakes, (item: IIntake) => item.months);
  }, []);

  return (
    <div className="w-full">
      <div className="flex lg:justify-between md:justify-around">
        <div className="flex gap-1 flex-wrap">
          <MultiSelectDropdown
            formFieldName={"Location"}
            options={countryNames}
            onChange={(selectedCountries) => {
              console.debug("selectedCountries", selectedCountries);
            }}
          />
          <MultiSelectDropdown
            formFieldName={"Program Level"}
            options={courseLevels}
            onChange={(selectedlevels) => {
              console.debug("selectedlevels", selectedlevels);
            }}
          />
          <MultiSelectDropdown
            formFieldName={"Subject"}
            options={subjects}
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
            options={intakes}
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
