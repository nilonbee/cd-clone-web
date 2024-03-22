import Image from "next/image";
import React from "react";
import GMap from "@/utils/googleMaps";

import {
  MainButton,
  SecondaryFooter,
  SectionHeader,
  ContainerLayout,
  InnerContainer,
  Hero,
} from "@/components/atoms";
import { SingleEventBox } from "@/components/molecules";

const mapData = [
  { location_name: "Campus Direct", lat: "6.8937533", lng: "79.8708282" },
];

const singleEventMockData = {
  title: "Canada Application week",
  subtitle: "   Ready to live your Canadian Dream?",
  image: "/images/events/events-1.png",
  startDate: " 2024/10/23-10:00:00am",
  endDate: "2024/10/23 05:00:00 pm",
  location: "Campus Direct, Kandy",
  description:
    "Join us Canada Application week.where you can apply for january, May and September 2024 intakes from October 23th to 27th, make your dreamsa reality",
};

const SingleEventPage = () => {
  const { title, subtitle, image, startDate, endDate, location, description } =
    singleEventMockData;
  return (
    <ContainerLayout>
      <Hero />
      <div className="my-12">
        <SectionHeader
          title="Canada Application Week"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          architecto placeat non"
        />
      </div>
      <InnerContainer>
        <SingleEventBox
          title={title}
          subtitle={subtitle}
          image={image}
          startDate={startDate}
          endDate={endDate}
          location={location}
          description={description}
        />
      </InnerContainer>
      <div className="my-12">
        <SectionHeader
          title="Location Map"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          architecto placeat non"
        />
      </div>

      <div className="p-4 mx-auto w-[64rem] my-12 bg-lightBlue bg-opacity-40">
        <GMap mapData={mapData} />
      </div>
      <SecondaryFooter />
    </ContainerLayout>
  );
};

export default SingleEventPage;
