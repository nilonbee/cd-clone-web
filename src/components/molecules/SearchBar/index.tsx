"use client";
import { InnerContainer } from "@/components/atoms";
import {
  BookIcon,
  CloseIcon,
  HatIcon,
  LocationIcon,
  SearchIcon,
} from "@/components/atoms/Icons";
import React, { useState } from "react";

export const SearchBar = () => {
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
        <div className=" shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)] rounded-[5px]  py-[18px]  grid gap-3 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1 -mt-10 w-full bg-white px-5">
          {searchTypes.map((type) => (
            <div
              key={type.id}
              className={`flex gap-4 items-center flex-1 relative w-full bg-transparent ${selectedType === type.name ? "bg-red" : ""} cursor-pointer`}
              onClick={() => setSelectedType(type.name)}
            >
              {type.Icon}
              <p className="text-base text-textColor">{type.label}</p>
            </div>
          ))}
        </div>
      )}
      {selectedType !== null && (
        <div className=" shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)] rounded-[5px]  py-[18px]  -mt-10 w-full bg-white px-5">
          {selectedType === "searchLevel1" && (
            <div className="flex gap-4 items-center w-full cursor-pointer ">
              <SearchIcon />
              <input
                type="text"
                placeholder="Search Course"
                className=" w-full outline-none h-10"
              />
              <div
                onClick={() => setSelectedType(null)}
                className="cursor-pointer"
              >
                <CloseIcon />
              </div>
            </div>
          )}
          {selectedType === "searchLevel2" && (
            <div className="flex gap-4 items-center w-full cursor-pointer ">
              <HatIcon />
              <input
                type="text"
                placeholder="Select Study Level"
                className=" w-full outline-none h-10"
              />
              <div
                onClick={() => setSelectedType(null)}
                className="cursor-pointer"
              >
                <CloseIcon />
              </div>
            </div>
          )}
          {selectedType === "searchLevel3" && (
            <div className="flex gap-4 items-center w-full cursor-pointer ">
              <LocationIcon />
              <input
                type="text"
                placeholder="Select Destination"
                className=" w-full outline-none h-10"
              />
              <div
                onClick={() => setSelectedType(null)}
                className="cursor-pointer"
              >
                <CloseIcon />
              </div>
            </div>
          )}
          {selectedType === "searchLevel4" && (
            <div className="flex gap-4 items-center w-full cursor-pointer ">
              <BookIcon />
              <input
                type="text"
                placeholder="Select Subject"
                className=" w-full outline-none h-10"
              />
              <div
                onClick={() => setSelectedType(null)}
                className="cursor-pointer"
              >
                <CloseIcon />
              </div>
            </div>
          )}
        </div>
      )}
    </InnerContainer>
  );
};
