import React from "react";
import { StarIconEmpty, StarIconFull } from "../Icons";

interface Props {
  rateNumber: number;
}

export const Rating = ({ rateNumber }: Props) => {
  return (
    <>
      <div className="flex gap-0 flex-1 relative w-full bg-transparent items-center">
        <p className="font-semibold text-base text-primary">{rateNumber}</p>
        <p className="font-semibold text-sm text-grayText mr-2">/5.0 rating</p>
        <StarIconFull />
        <StarIconFull />
        <StarIconFull />
        <StarIconFull />
        <StarIconEmpty />
      </div>
    </>
  );
};
