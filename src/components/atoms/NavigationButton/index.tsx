import Link from "next/link";
import React from "react";

export const NavigationButton = ({
  text,
  url,
  bgColor,
  textColor,
  icon,
}: {
  text: string;
  url: string;
  bgColor: string;
  textColor: string;
  icon: React.ReactNode;
}) => {
  return (
    <Link href={url}>
      <button
        className={`bg-${bgColor} text-${textColor} my-6 items-center gap-2 text-lg font-medium border-none py-3 px-5 flex justify-between
              hover:bg-blue-500 hover:shadow-lg hover:scale-105 transition-all duration-300`}
      >
        {text}
        {icon && icon}
      </button>
    </Link>
  );
};
