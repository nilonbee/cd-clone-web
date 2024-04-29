"use client";
import { HatIcon, PinIcon, UniversityIcon } from "@/components/atoms/Icons";
import { TimeIcon } from "@/components/atoms/Icons/TimeIcon";
import { useCourseStore } from "@/store";
import { ICourse } from "@/types/courses";
import { rootImagePath } from "@/utils/rootImagePath";
import Image from "next/image";

export const CourseBoxModel = ({
  id,
  university,
  uni_logo,
  course_name,
  country,
  course_fee,
  level_name,
  currency,
  setOpenDrawer = () => {},
}: ICourse) => {
  const { setSelectedCourseId, selectedCourseId } = useCourseStore();

  const activeBox =
    selectedCourseId === id
      ? "bg-[#eef7ff] border-primary"
      : "bg-white border-boxBorder";

  return (
    <div
      className={`flex flex-col  rounded-md p-6 shadow-sm md:p-4 sm:p-4 border  ${activeBox} hover:bg-[#eef7ff] hover:border-primary`}
      onClick={() => {
        setSelectedCourseId(id);
        window.scrollTo({ top: 0, behavior: "smooth" });
        setOpenDrawer(true);
      }}
    >
      <div className="w-full flex gap-3">
        <Image
          src={rootImagePath(uni_logo as string)}
          alt="Logo"
          className="h-[55px] w-[55px] rounded-full ring-1 ring-primary shadow-md object-contain bg-white"
          width={300}
          height={150}
        />
        <div className="flex flex-col gap-1">
          <div className="flex gap-2 items-center relative">
            <div className="w-[14px] h-[14px]">
              <UniversityIcon />
            </div>
            <p className="text-xs text-black/60 line-clamp-1">{university}</p>
          </div>
          <div className="flex gap-2 items-center relative">
            <div className="w-[14px] h-[14px]">
              <PinIcon />
            </div>
            <p className="text-xs text-black/60 line-clamp-1">{country}</p>
          </div>
          <div className="flex gap-2 items-center relative">
            <div className="w-[14px] h-[14px]">
              <TimeIcon />
            </div>
            <p className="text-xs text-black/60 line-clamp-1">{level_name}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-3">
        <div className="flex gap-2.5 relative h-12">
          <div className="min-w-4 w-[20px] h-[20px] mt-1">
            <HatIcon />
          </div>
          <h5 className="font-semibold text-sm text-primary line-clamp-2">
            {course_name}
          </h5>
        </div>
        <div className="flex flex-col gap-2 items-start relative mt-1">
          <div className="flex gap-2 items-end relative mb-2 mt-2 xs:flex-col md:flex-row ">
            <h2 className="font-bold text-sm text-primaryDark">
              {currency ? currency : "$"}
              {Number(course_fee).toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </h2>
            <p className="text-xs text-grayText">(Total Amount)</p>
          </div>
        </div>
      </div>
    </div>
  );
};
