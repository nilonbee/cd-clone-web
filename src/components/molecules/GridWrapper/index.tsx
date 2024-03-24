import React from "react";

type Props = {
  children: React.ReactNode;
  gap?: string;
};

export const GridWrapper = ({ children, gap }: Props) => {
  const customGap = gap ? `gap-${gap}` : "gap-3";

  return (
    <div
      className={`grid ${customGap} lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1 w-full`}
    >
      {children}
    </div>
  );
};
