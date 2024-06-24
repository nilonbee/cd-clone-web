import React from "react";

export const TextRow = ({ label, value }: { label: string; value: any }) => {
  return (
    <div className="flex">
      <div className="xs:w-2/4 sm:w-2/4 md:w-1/4">
        <p className="text-sm text-black/60">{label}</p>
      </div>
      <div className="xs:w-2/4 sm:w-2/4 md:w-3/4">
        <p className="text-sm text-black/60">: {value}</p>
      </div>
    </div>
  );
};
