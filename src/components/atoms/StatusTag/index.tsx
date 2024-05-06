import React from "react";

type StatusTagProps = {
  status: string;
  statusColor: string;
};

export const StatusTag = ({ status, statusColor }: StatusTagProps) => {
  console.log("statusColor", statusColor);

  return (
    <span
      className={`${statusColor} inline-flex items-center gap-1 rounded-full px-4 py-1 text-xs font-semibold text-white `}
    >
      {status}
    </span>
  );
};
