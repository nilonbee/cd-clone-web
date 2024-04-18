import React from "react";

export const ContainerLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="2xl:container lg:px-4 md:px-4 sm:px-4 xs:px-3">
      {children}
    </div>
  );
};
