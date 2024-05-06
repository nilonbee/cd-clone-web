import React from "react";

export const TextRow = ({ label, value }: { label: string; value: any }) => {
  return (
    <div className="flex">
      <div className="w-1/4">
        <p className="text-sm text-black/60">{label}</p>
      </div>
      <div className="w-3/4">
        <p className="text-sm text-black/60">: {value}</p>
      </div>
    </div>
  );
};
