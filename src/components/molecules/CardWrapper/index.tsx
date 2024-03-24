import React from "react";

interface Props {
  children: React.ReactNode;
}

export const CardWrapper = ({ children }: Props) => {
  return (
    <div className="flex flex-col  bg-white rounded-md p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 md:p-4 sm:p-4 border border-boxBorder">
      {children}
    </div>
  );
};
