import React from "react";

type SectionHeaderProps = {
  title: string;
  description: string;
};

export const SectionHeader = ({ title, description }: SectionHeaderProps) => {
  return (
    <div className="flex flex-col gap-1 justify-center items-center self-stretch relative bg-transparent">
      <h1 className="font-semibold text-3xl text-black/80">{title}</h1>
      <h5 className="text-center text-base text-black/60">{description}</h5>
    </div>
  );
};
