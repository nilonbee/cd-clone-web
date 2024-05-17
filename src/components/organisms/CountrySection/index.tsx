import { InnerContainer, SectionHeader } from "@/components/atoms";
import { CountryBox, GridWrapperTwo } from "@/components/molecules";

export const CountrySection = () => {
  const countries = [
    {
      name: "USA",
      img: "/images/country/usa.png",
      url: "/",
      country_id: 12,
    },
    {
      name: "Australia",
      img: "/images/country/australia.png",
      url: "/",
      country_id: 13,
    },
    {
      name: "Canada",
      img: "/images/country/canada.png",
      url: "/",
      country_id: 38,
    },
    {
      name: "UK",
      img: "/images/country/uk.png",
      url: "/",
      country_id: 230,
    },
  ];

  return (
    <InnerContainer>
      <div className="mt-20 mb-20">
        <div className="flex flex-col justify-center items-center relative bg-transparent w-full">
          <SectionHeader
            title="CHOOSE YOUR DREAM DESTINATION"
            description="Choose from a range of destinations based on your preference."
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
