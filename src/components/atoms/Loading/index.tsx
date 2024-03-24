import Image from "next/image";
import React from "react";

export const Loading = () => {
  return (
    <div className="relative flex justify-center items-center">
      <div className="absolute animate-spin rounded-full h-20 w-20 border-t-4 border-b-4 border-primary"></div>
      <Image
        src="/images/fave.png"
        alt="Fave Logo"
        width={65}
        height={65}
        className="rounded-full"
      />
    </div>
  );
};
