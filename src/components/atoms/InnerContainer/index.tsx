import React from "react";

export const InnerContainer = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <div className="pr-[5%] pl-[5%]">{children}</div>;
};
