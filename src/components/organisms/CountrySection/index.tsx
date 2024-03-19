import { InnerContainer, SectionHeader } from "@/components/atoms";
import { CountryBox, GridWrapper, GridWrapperTwo } from "@/components/molecules";
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
      <div className="mt-20 mb-20">
        <div className="flex flex-col justify-center items-center relative bg-transparent w-full">
          <SectionHeader
            title="Which Country Do You Prefer?"
            description="Lorem ipsum dolor sit amet consectetur. Sit hendrerit eget est."
          />

          <GridWrapperTwo>
            {countries.map((country, index) => (
              <CountryBox
                key={index}
                country={country.name}
                img={country.img}
                url={country.url}
              />
            ))}
          </GridWrapperTwo>
        </div>
      </div>
    </InnerContainer>
  );
};
