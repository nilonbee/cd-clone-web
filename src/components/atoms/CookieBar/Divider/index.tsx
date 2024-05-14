import React from "react";

type DividerProps = {
  text: string;
};
export const Divider = ({ text }: DividerProps) => {
  return (
    <div className="flex items-center w-full my-6">
      <div className="flex-grow h-px bg-grayMedium"></div>
      <div className="mx-4 text-grayMedium">{text}</div>
      <div className="flex-grow h-px bg-grayMedium"></div>
    </div>
  );
};
