"use client";
import React from "react";
import { MultiSelectDropdown } from "..";

export const FilterSideBar = () => {
  const COUNTRIES = [
    "Austria",
    "Canada",
    "New Zealand",
    "United Kingdom",
    "United States",
  ];

  return (
    <div className="w-full">
      <div className="flex lg:justify-between md:justify-around xs:hidden">
        <div className="flex gap-1 flex-wrap">
          <MultiSelectDropdown
            formFieldName={"Location"}
            options={COUNTRIES}
            onChange={(selectedCountries) => {
              console.debug("selectedCountries", selectedCountries);
            }}
          />
          <MultiSelectDropdown
            formFieldName={"Program Level"}
            options={COUNTRIES}
            onChange={(selectedCountries) => {
              console.debug("selectedCountries", selectedCountries);
            }}
          />
          <MultiSelectDropdown
            formFieldName={"Subject"}
            options={COUNTRIES}
            onChange={(selectedCountries) => {
              console.debug("selectedCountries", selectedCountries);
            }}
          />
          <MultiSelectDropdown
            formFieldName={"Tuition Fee"}
            options={COUNTRIES}
            onChange={(selectedCountries) => {
              console.debug("selectedCountries", selectedCountries);
            }}
          />
          <MultiSelectDropdown
            formFieldName={"Intakes"}
            options={COUNTRIES}
            onChange={(selectedCountries) => {
              console.debug("selectedCountries", selectedCountries);
            }}
          />
          <MultiSelectDropdown
            formFieldName={"Duration"}
            options={COUNTRIES}
            onChange={(selectedCountries) => {
              console.debug("selectedCountries", selectedCountries);
            }}
          />
        </div>
        <div>
          <MultiSelectDropdown
            formFieldName={"Sort"}
            options={COUNTRIES}
            onChange={(selectedCountries) => {
              console.debug("selectedCountries", selectedCountries);
            }}
          />
        </div>
      </div>
    </div>
  );
};
