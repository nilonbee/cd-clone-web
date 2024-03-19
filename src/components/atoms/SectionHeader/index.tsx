import React from "react";

type SectionHeaderProps = {
  title: string;
  description: string;
};

export const SectionHeader = ({ title, description }: SectionHeaderProps) => {
  return (
    <div className="flex flex-col gap-1 justify-center items-center self-stretch relative bg-transparent">
      <h1 className="font-semibold text-3xl md:text-2xl sm:text-2xl xs:text-xl text-textColor">{title}</h1>
      <h5 className="text-center text-base sm:text-sm xs:text-sm text-textColor">{description}</h5>
    </div>
  );
};
