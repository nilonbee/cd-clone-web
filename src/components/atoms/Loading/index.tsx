import Image from "next/image";
import React from "react";

export const Loading = () => {
  return (
    <div>
      <div className="relative flex justify-center items-center">
        <div className="absolute animate-spin rounded-full h-[45px] w-[45px] border-t-4 border-b-4 border-primary"></div>
        <Image
          src="/images/fave.png"
          alt="Fave Logo"
          width={35}
          height={35}
          className="rounded-full"
        />
      </div>
      <p className="text-center text-primary mt-3 text-xs">Loading...</p>
    </div>
  );
};
