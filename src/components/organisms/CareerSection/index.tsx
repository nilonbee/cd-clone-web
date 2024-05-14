/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useState, useEffect } from "react";
import { MainButton } from "@/components/atoms";
import { LocationIcon2 } from "@/components/atoms/Icons";
import { CareerRow } from "@/components/molecules";
import { IResponseData, ICareer } from "@/types/careers";
import { useIpStore } from "@/store/useIpStore";
import { getCareers } from "@/utils/api-requests";

type CareerSectionProps = {
  careerCount: string;
  careersData: IResponseData;
};

export const CareerSection = ({
  careerCount,
  careersData,
}: CareerSectionProps) => {
  const [isLocalData, setIsLocalData] = useState(false);
  const [selectedCareers, setSelectedCareers] = useState(careersData);
  const { countryCode } = useIpStore();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchLocalCareers = async () => {
      setLoading(true);
      try {
        let data;
        if (isLocalData) {
          data = await getCareers(countryCode);
        } else {
          data = careersData;
        }
        setSelectedCareers(data);
      } catch (error) {
        console.error("Error fetching local careers:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLocalCareers();
  }, [isLocalData, countryCode, careersData]);

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
          loading={loading}
          iconPosition="Left"
          onClick={() => setIsLocalData(true)}
          disabled={loading}
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
