import React from "react";

type SingleEventDetailBoxProps = {
  icon: React.ReactElement;
  value: string[];
  label: string;
};

export const SingleEventDetailBox = ({
  icon,
  label,
  value,
}: SingleEventDetailBoxProps) => {
  return (
    <div className="bg-lightBlue bg-opacity-40  p-6 rounded-md  border border-boxBorder">
      <div className="flex mb-6">
        {icon}
        <p className="ml-2 text-sm">{label}</p>
      </div>
      <p className="ml-1 font-semibold text-sm truncate">{value}</p>
    </div>
  );
};
