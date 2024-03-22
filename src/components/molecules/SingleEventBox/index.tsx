import { MainButton, SingleEventDetailBox } from "@/components/atoms";
import {
  CarbonLocationIcon,
  FormKitDateTimeIcon,
} from "@/components/atoms/Icons";
import Image from "next/image";
import React from "react";

interface SingleEventBoxProps {
  title: string;
  subtitle: string;
  image: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string;
}

export const SingleEventBox = ({
  title,
  subtitle,
  image,
  startDate,
  endDate,
  location,
  description,
}: SingleEventBoxProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 mx-auto mb-6">
      <div className="col-span-1 flex justify-center py-4">
        <div className="p-4 bg-lightBlue bg-opacity-40 h-max">
          <Image height={24} width={280} src={image} alt="event-img" />
          <p className="ml-6 py-3 font-semibold">{title}</p>
        </div>
      </div>
      <div className="col-span-2 mt-6 ml-4">
        <div className="pb-4 text-lg font-semibold">{subtitle}</div>
        <div className="pb-4 text-sm">{description}</div>
        <div className="grid grid-cols-3 gap-2 pb-4">
          <SingleEventDetailBox
            label={location}
            value=" Campus Direct, Kandy"
            icon={<CarbonLocationIcon />}
          />

          <SingleEventDetailBox
            label="Start Date"
            value={startDate}
            icon={<FormKitDateTimeIcon />}
          />

          <SingleEventDetailBox
            label="End Date"
            value={endDate}
            icon={<FormKitDateTimeIcon />}
          />
        </div>
        <MainButton
          label="Register Now"
          btnStyle="Primary"
          btnSize="Medium"
          customStyle="w-[200px]"
        />
      </div>
    </div>
  );
};
