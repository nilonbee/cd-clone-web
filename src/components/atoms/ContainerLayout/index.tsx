import React from "react";

export const ContainerLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <div className="xl:container lg:px-4 md:px-4 sm:px-4">{children}</div>;
};
