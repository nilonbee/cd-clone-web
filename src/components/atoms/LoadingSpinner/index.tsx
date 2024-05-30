import React from "react";

export const LoadingSpinner = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="border-gray/30 h-8 w-8 animate-spin rounded-full border-4 border-t-primary" />
      <p className="text-xs mt-1 text-black/50">Loading</p>
    </div>
  );
};
