import React from "react";
import { StarIconEmpty, StarIconFull } from "../Icons";

interface Props {
  rateNumber: number;
}

export const Rating = ({ rateNumber }: Props) => {
  return (
    <>
      <div className="flex gap-2 flex-row  w-full md:flex-row sm:flex-col xs:flex-col justify-start">
        <div className="flex gap-0 flex-1 relative items-center">
          <p className="font-semibold text-base text-primary">{rateNumber}</p>
          <p className="font-medium text-sm text-grayText mr-2 line-clamp-1">
            /5.0 rating
          </p>
        </div>
        <div className="flex gap-0 flex-1 relative items-center">
          <StarIconFull />
          <StarIconFull />
          <StarIconFull />
          <StarIconFull />
          <StarIconEmpty />
        </div>
      </div>
    </>
  );
};
