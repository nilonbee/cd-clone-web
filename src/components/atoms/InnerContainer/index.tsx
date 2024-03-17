import React from "react";

export const InnerContainer = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <div className="pr-[5%] pl-[5%] xs:pr-2 xs:pl-2 sm:pr-2 sm:pl-2 md:pr-2 md:pl-2">{children}</div>;
};
