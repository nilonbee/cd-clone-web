import React from "react";

type SectionHeaderProps = {
  title: string;
};

export const CourseSubHeader = ({ title }: SectionHeaderProps) => {
  return (
    <div className="p-2 flex items-start self-stretch relative w-full bg-[#eef7ff] rounded">
      <h5 className="font-semibold text-base text-textColor">{title}</h5>
    </div>
  );
};
