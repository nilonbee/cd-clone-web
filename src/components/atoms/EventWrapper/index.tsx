import React from "react";
import Image from "next/image";

export const EventWrapper = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex flex-col justify-center rounded-md shadow hover:shadow-lg transition-all duration-300 hover:scale-105 bg-lightBlue bg-opacity-40 lg:p-6 p-8">
      {children}
    </div>
  );
};
