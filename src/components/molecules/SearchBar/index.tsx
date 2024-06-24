"use client";
import { InnerContainer } from "@/components/atoms";
import {
  BookIcon,
  HatIcon,
  LocationIcon,
  SearchIcon,
} from "@/components/atoms/Icons";
import React, { useState } from "react";
import SearchByName from "./SearchByName";
import SearchByStudyLevel from "./SearchByStudyLevel";
import { ICountry } from "@/types/countries";
import { ICourseLevel } from "@/types/courseLevels";
import { ISubject } from "@/types/subjects";
import SearchByDestination from "./SearchByDestination";
import SearchBySubject from "./SearchBySubject";

interface SearchBarProps {
  initCountries: ICountry[];
  initCourseLevels: ICourseLevel[];
  initSubjects: ISubject[];
}

export const SearchBar = ({
  initCountries,
  initCourseLevels,
  initSubjects,
}: SearchBarProps) => {
  const searchTypes = [
    {
      id: 1,
      name: "searchLevel1",
      label: "Search Course",
      Icon: <SearchIcon />,
    },
    {
      id: 2,
      name: "searchLevel2",
      label: "Select Study Level",
      Icon: <HatIcon />,
    },
    {
      id: 3,
      name: "searchLevel3",
      label: "Select Destination",
      Icon: <LocationIcon />,
    },
    {
      id: 4,
      name: "searchLevel4",
      label: "Select Subject",
      Icon: <BookIcon />,
    },
  ];
  const [selectedType, setSelectedType] = useState<string | null>(null);
  return (
    <InnerContainer>
      {selectedType === null && (
        <div className=" shadow-lg rounded-md  py-[18px]  grid gap-3 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1 -mt-10 w-full bg-white px-5">
          {searchTypes.map((type) => (
            <div
              key={type.id}
              className={`flex gap-4 items-center flex-1 relative w-full cursor-pointer`}
              onClick={() => setSelectedType(type.name)}
            >
              <div className="xs:w-[25px] xs:h-[25px] sm:w-[30px] sm:h-[30px] md:w-[40px] md:h-[40px]  ">
                {type.Icon}
              </div>
              <p className="xs:text-sm sm:text-sm  md:text-base  text-textColor/70">
                {type.label}
              </p>
            </div>
          ))}
        </div>
      )}
      {selectedType !== null && (
        <div className=" shadow-lg rounded-md  py-[15px]  -mt-10 w-full bg-white px-5">
          {selectedType === "searchLevel1" && (
            <SearchByName setSelectedType={setSelectedType} />
          )}
          {selectedType === "searchLevel2" && (
            <SearchByStudyLevel
              setSelectedType={setSelectedType}
              initCourseLevels={initCourseLevels}
            />
          )}
          {selectedType === "searchLevel3" && (
            <SearchByDestination
              setSelectedType={setSelectedType}
              initCountries={initCountries}
            />
          )}
          {selectedType === "searchLevel4" && (
            <SearchBySubject
              setSelectedType={setSelectedType}
              initSubjects={initSubjects}
            />
          )}
        </div>
      )}
    </InnerContainer>
  );
};
