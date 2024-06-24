import React from "react";
import { IoFileTrayOutline } from "react-icons/io5";

export const EmptyState = () => {
  return (
    <div className="flex justify-center items-center h-40 flex-col gap-2">
      <IoFileTrayOutline size={40} color="#C5C5C5" />
      <p className="text-sm text-[#C5C5C5]">No Data Found</p>
    </div>
  );
};
