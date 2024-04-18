import React from "react";

interface Props {
  children: React.ReactNode;
  cssCustom?: string;
  bgColor?: string;
}

export const CardWrapper = ({
  children,
  cssCustom,
  bgColor = "bg-white",
}: Props) => {
  return (
    <div
      className={`flex flex-col rounded-md p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 md:p-4 sm:p-4 border border-boxBorder ${cssCustom} ${bgColor}`}
    >
      {children}
    </div>
  );
};
