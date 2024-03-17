import React from "react";

type Props = {
  children: React.ReactNode;
};

export const GridWrapper = ({ children }: Props) => {
  return (
    <div className="grid gap-3 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1 mt-10 w-full">
      {children}
    </div>
  );
};
