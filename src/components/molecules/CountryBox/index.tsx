import React from "react";

interface CountryBoxProps {
  country: string;
  img?: string;
  url: string;
}

export const CountryBox: React.FC<CountryBoxProps> = ({ country, img }) => {
  return (
    <div
      className="relative h-[200px] overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg rounded-md"
      style={{
        backgroundImage: img ? `url(${img})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute pl-7 pr-2.5 py-2.5 flex gap-2.5 items-center  w-full h-12 bg-black bottom-0 bg-opacity-40">
        <p className="font-semibold text-base text-white">{country}</p>
      </div>
    </div>
  );
};
