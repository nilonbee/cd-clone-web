import Image from "next/image";
import React from "react";
import { CardWrapper } from "../CardWrapper";
import { PinIcon, UniversityIcon } from "@/components/atoms/Icons";
import { FiUsers } from "react-icons/fi";
interface EventBoxProps {
  id: string;
  image: string;
  title: string;
  university: string;
  quantity: number;
  country: string;
}

export const ScholarshipsBox = ({
  image,
  title,
  id,
  university,
  quantity,
  country,
}: EventBoxProps) => {
  return (
    <CardWrapper bgColor="bg-lightBlue" cssCustom="bg-opacity-40">
      <Image
        src={image}
        alt={`event-image-${title}`}
        className="rounded-lg h-[200px] w-full object-cover border border-boxBorder"
        width={300}
        height={300}
      />
      <p className="text-sm font-semibold mt-3 line-clamp-2 h-10 text-textColor">
        {title}
      </p>
      <div className="flex flex-col gap-1">
        <div className="flex gap-2 items-center relative">
          <div className="w-[18px] h-[18px]">
            <UniversityIcon />
          </div>
          <p className="text-sm text-black/60 line-clamp-1">{university}</p>
        </div>
        <div className="flex gap-2 items-center relative">
          <div className="w-[18px] h-[18px]">
            <PinIcon />
          </div>
          <p className="text-sm text-black/60 line-clamp-1">{country}</p>
        </div>
        <div className="flex gap-2 items-center relative">
          <div className="w-[18px] h-[18px] text-black/60">
            <FiUsers />
          </div>
          <p className="text-sm text-black/60 line-clamp-1">
            <b>{quantity}</b> Scholarships
          </p>
        </div>
      </div>
    </CardWrapper>
  );
};
