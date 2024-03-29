/* eslint-disable @next/next/no-img-element */
import { MainButton, Rating } from "@/components/atoms";
import { HatIcon2, PinIcon, UniversityIcon } from "@/components/atoms/Icons";
import { TimeIcon } from "@/components/atoms/Icons/TimeIcon";
import Link from "next/link";
import React from "react";
import { CardWrapper } from "..";
import { ICourse } from "@/types/courses";
import Image from "next/image";

export const CourseBox = ({
  id,
  university,
  uni_logo,
  course_name,
  country,
  course_fee,
  level_name,
  rating
}: ICourse) => {
  return (
    <Link href={`/lk/courses/${id}`}>
      <CardWrapper>
        <div className="w-full h-24 sm:h-20 overflow-hidden border-b border-grayLight pb-2">
          {/* <img src={`${process.env.NEXT_PUBLIC_IMAGEKIT_URL}/${uni_logo}`} alt="logo" className="w-full h-full object-contain" /> */}
          <Image src={`${process.env.NEXT_PUBLIC_IMAGEKIT_URL}/${uni_logo}`} alt="Logo" className="w-full h-full object-contain" width={300} height={150} />
        </div>
        <div className="flex flex-col mt-5">
          <div className="flex gap-2.5 items-center relative bg-transparent h-12">
            <div className="min-w-4">
              <HatIcon2 />
            </div>
            <h5 className="font-semibold text-base text-primary line-clamp-2">
              {course_name}
            </h5>
          </div>
          <div className="flex flex-col gap-2 items-start relative bg-transparent mt-4">
            <div className="flex gap-2 items-center relative bg-transparent">
              <UniversityIcon />
              <p className="text-sm text-black/60 line-clamp-1">{university}</p>
            </div>
            <div className="flex gap-2 items-center relative bg-transparent">
              <PinIcon />
              <p className="text-sm text-black/60 line-clamp-1">{country}</p>
            </div>
            <div className="flex gap-2 items-center relative bg-transparent">
              <TimeIcon />
              <p className="text-sm text-black/60 line-clamp-1">{level_name}</p>
            </div>
            <div className="mt-2">
              <Rating rating={rating} />
            </div>
            <div className="flex gap-2 items-end relative bg-transparent mb-2 mt-2 xs:flex-col md:flex-row ">
              <h2 className="font-semibold text-2xl text-primary">
                {course_fee}
              </h2>
              <p className="font-medium text-xs text-grayText">
                (Total Amount)
              </p>
            </div>
            <div className="flex gap-2  justify-between items-center w-full">
              <MainButton
                label="Apply"
                btnStyle="Primary"
                btnSize="Medium"
                fullWith={true}
              />
              <MainButton
                label="More"
                btnStyle="Secondary"
                btnSize="Medium"
                fullWith={true}
              />
            </div>
          </div>
        </div>
      </CardWrapper>
    </Link>
  );
};
