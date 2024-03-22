import { FilterIcon } from "@/components/atoms/Icons";
import React from "react";
import { FilterOptionBox } from "..";

export const FilterSideBar = () => {
  return (
    <div className="w-[300px] bg-white border-r border-grayLight">
      <div className="flex gap-2 items-center relative bg-transparent border-b border-grayLight pb-4">
        <FilterIcon />
        <p className="font-semibold text-base text-black/80">Filters</p>
      </div>
      <div className="mt-4">
        <p className="text-sm text-textColor">Filter by Country</p>
        <div className="flex gap-2 items-center relative w-full mt-2 flex-wrap">
            <FilterOptionBox itemName={'New Zealand'} />
            <FilterOptionBox itemName={'Australia'} />
            <FilterOptionBox itemName={'Canada'} />
            <FilterOptionBox itemName={'USA'} />
        </div>
      </div>

      <div className="mt-4">
        <p className="text-sm text-textColor">Filter by University</p>
        <div className="flex gap-2 items-center relative w-full mt-2 flex-wrap">
            <FilterOptionBox itemName={'Deakin University'} />
            <FilterOptionBox itemName={'Edith Cowan College'} />
            <FilterOptionBox itemName={'Edith Cowan University'} />
            <FilterOptionBox itemName={'Charles Darwin University'} />
        </div>
      </div>

      <div className="mt-4">
        <p className="text-sm text-textColor">Filter by Subject</p>
        <div className="flex gap-2 items-center relative w-full mt-2 flex-wrap">
            <FilterOptionBox itemName={'Accounting and Finance'} />
            <FilterOptionBox itemName={'Arts'} />
            <FilterOptionBox itemName={'Education'} />
            <FilterOptionBox itemName={'Engineering'} />
        </div>
      </div>

      <div className="mt-4">
        <p className="text-sm text-textColor">Filter by Intake Month</p>
        <div className="flex gap-2 items-center relative w-full mt-2 flex-wrap">
            <FilterOptionBox itemName={'January - March'} />
            <FilterOptionBox itemName={'April - May'} />
            <FilterOptionBox itemName={'June - July'} />
            <FilterOptionBox itemName={'August - September'} />
        </div>
      </div>

      <div className="mt-4">
        <p className="text-sm text-textColor">Filter by Filter by Course Level</p>
        <div className="flex gap-2 items-center relative w-full mt-2 flex-wrap">
            <FilterOptionBox itemName={'Undergraduate'} />
            <FilterOptionBox itemName={'Postgraduate'} />
            <FilterOptionBox itemName={'PhD/Doctorate'} />
            <FilterOptionBox itemName={'Diploma'} />
        </div>
      </div>

    </div>
  );
};
