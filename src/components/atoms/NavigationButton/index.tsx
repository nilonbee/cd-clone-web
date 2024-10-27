import Link from "next/link";
import React from "react";
import { ArrowRightIcon } from "../Icons";

export const NavigationButton = ({
  text,
  url,
  bgColor,
  textColor,
}: {
  text: string;
  url: string;
  bgColor: string;
  textColor: string;
}) => {
  return (
    <Link href={url}>
      <button
        className={`bg-${bgColor} text-${textColor} my-6 items-center gap-2 text-lg font-medium border-none py-3 px-5 flex justify-between
              hover:bg-blue-500 hover:shadow-lg hover:scale-105 transition-all duration-300`}
      >
        {text}
        <ArrowRightIcon />
      </button>
    </Link>
  );
};
