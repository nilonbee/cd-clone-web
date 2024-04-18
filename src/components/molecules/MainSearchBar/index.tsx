"use client";
import { InnerContainer, MainButton } from "@/components/atoms";
import {
  BookIcon,
  CloseIcon,
  HatIcon,
  LocationIcon,
  SearchIcon,
} from "@/components/atoms/Icons";
import React, { useState } from "react";

export const MainSearchBar = () => {
  return (
    <InnerContainer>
      <div className=" shadow-lg rounded-md  py-[10px] -mt-10 w-full bg-white px-[10px]">
        <div className="flex gap-4 items-center w-full cursor-pointer ">
          <div className="md:w-[35px] md:h-[35px] sm:w-[30px] sm:h-[30px] xs:w-[30px] xs:h-[30px]">
            <SearchIcon />
          </div>
          <input
            type="text"
            placeholder="Search Course"
            className=" w-full outline-none h-10 z-20"
          />
          <MainButton label="Search" btnStyle="Primary" btnSize="Large" />
        </div>
      </div>
    </InnerContainer>
  );
};
