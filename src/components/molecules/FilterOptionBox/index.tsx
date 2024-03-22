import React from "react";

interface Props {
  itemName: string;
}

export const FilterOptionBox = ({ itemName }: Props) => {
  return (
    <div className="border border-black px-2.5 py-2 rounded cursor-pointer hover:bg-black hover:text-white text-black/40">
      <p className="text-sm ">{itemName}</p>
    </div>
  );
};
