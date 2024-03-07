import { InnerContainer } from "@/components/atoms";
import { CountryBox } from "@/components/molecules";
import React from "react";

export const CountrySection = () => {

  const countries = [
    {
      name: "USA",
      img: "/images/country/usa.png",
      url: "/",
    },
    {
      name: "Australia",
      img: "/images/country/australia.png",
      url: "/",
    },
    {
      name: "Canada",
      img: "/images/country/canada.png",
      url: "/",
    },
    {
      name: "UK",
      img: "/images/country/uk.png",
      url: "/",
    },
  ];

  return (
    <InnerContainer>
      <div className="mt-20 mb-10">
        <div className="flex flex-col justify-center items-center relative bg-transparent w-full">
          <div className="flex flex-col gap-2.5 justify-center items-center self-stretch relative bg-transparent">
            <h1 className="font-semibold text-3xl text-black/80">
              Which Country Do You Prefer?
            </h1>
            <h5 className="text-center text-base text-black/60">
              Lorem ipsum dolor sit amet consectetur. Sit hendrerit eget est.
            </h5>
          </div>

          <div className="grid gap-3 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 mt-10 w-full">
            {countries.map((country, index) => (
              <CountryBox
                key={index}
                country={country.name}
                img={country.img}
                url={country.url}
              />
            ))}
          </div>
        </div>
      </div>
    </InnerContainer>
  );
};
