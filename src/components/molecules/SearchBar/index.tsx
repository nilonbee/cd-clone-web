import { InnerContainer } from "@/components/atoms";
import { BookIcon, HatIcon, LocationIcon, SearchIcon } from "@/components/atoms/Icons";
import React from "react";

export const SearchBar = () => {
  return (
    <InnerContainer>
      <div className=" shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)] rounded-[5px]  py-[18px]  grid gap-3 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1 -mt-10 w-full bg-white px-5">
        <div className="flex gap-4 items-center flex-1 relative w-full bg-transparent">
          <SearchIcon />
          <p className="text-base text-textColor">Search Course</p>
        </div>
        <div className="flex gap-4 items-center flex-1 relative w-full bg-transparent">
          <HatIcon />
          <p className="text-base text-textColor">Select Study Level</p>
        </div>
        <div className="flex gap-4 items-center flex-1 relative w-full bg-transparent">
          <LocationIcon />
          <p className="text-base text-textColor">Select Destination</p>
        </div>
        <div className="flex gap-4 items-center flex-1 relative w-full bg-transparent">
          <BookIcon />
          <p className="text-base text-textColor">Select Subject</p>
        </div>
      </div>
    </InnerContainer>
  );
};
