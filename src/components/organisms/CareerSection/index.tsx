/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useState, useEffect } from "react";
import { MainButton } from "@/components/atoms";
import { LocationIcon2 } from "@/components/atoms/Icons";
import { CareerRow } from "@/components/molecules";
import { IResponseData, ICareer } from "@/types/careers";

type CareerSectionProps = {
  careerCount: string;
  careersData: IResponseData;
  careersDataLocal: IResponseData;
};

export const CareerSection = ({
  careerCount,
  careersData,
  careersDataLocal,
}: CareerSectionProps) => {
  const [isLocalData, setIsLocalData] = useState(false);
  const [selectedCareers, setSelectedCareers] = useState(careersData);

  useEffect(() => {
    setSelectedCareers(isLocalData ? careersDataLocal : careersData);
  }, [isLocalData]);

  return (
    <div className="my-14">
      <h1 className="font-semibold text-3xl md:text-2xl sm:text-2xl xs:text-xl text-textColor text-center">
        Our Job Openings
      </h1>
      <div className="flex flex-row justify-center items-center mt-4 gap-4">
        <MainButton
          label={`All (${careerCount})`}
          btnStyle={`${isLocalData ? "Secondary" : "Primary"}`}
          btnSize="Medium"
          onClick={() => setIsLocalData(false)}
        />
        <MainButton
          label="My Location"
          btnStyle={`${isLocalData ? "Primary" : "Secondary"}`}
          btnSize="Medium"
          icon={<LocationIcon2 />}
          iconPosition="Left"
          onClick={() => setIsLocalData(true)}
        />
      </div>
      <div className="mt-10 flex flex-col gap-2">
        {selectedCareers?.data.map((item: ICareer) => (
          <CareerRow
            title={item.title}
            end_date={item.end_date}
            key={item.id}
            created_at={item.created_at}
            description={item.description}
            slug={item.slug}
          />
        ))}
      </div>
    </div>
  );
};
