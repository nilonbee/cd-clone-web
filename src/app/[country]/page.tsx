import { ContainerLayout } from "@/components/atoms";
import { BannerCarousel, SearchBar } from "@/components/molecules";
import { CountrySection } from "@/components/organisms";
import React from "react";

export default function Home() {
  return (
    <>
      <BannerCarousel />
      <div className="from-[#1c37c1] to-[#089ea2] bg-gradient-to-r -mt-2">
        <ContainerLayout>
          <div className="flex flex-col gap-2 justify-center items-center self-stretch relative h-[268px] ">
            <h1 className="text-center font-semibold text-4xl text-white">
              FIND YOUR PERFECT COURSE
            </h1>
            <h4 className="text-center text-1xl text-white">
              We can help you apply and study at top Universities
            </h4>
          </div>
        </ContainerLayout>
      </div>
      <ContainerLayout>
        <SearchBar />
        <CountrySection />
      </ContainerLayout>
    </>
  );
}
