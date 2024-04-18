import Image from "next/image";
import {
  HatIcon,
  PinIcon,
  TimeIcon,
  UniversityIcon,
} from "@/components/atoms/Icons";
import { ICourse } from "@/types/courses";

export const UniRow = ({
  country,
  university,
  uni_logo,
  uni_address,
  course_name,
  id,
}: ICourse) => {
  return (
    <div className="p-4 flex gap-5 items-center self-stretch relative w-full bg-[#eef7ff] rounded-md  border border-boxBorder">
      <div className="">
        <Image
          src={`${process.env.NEXT_PUBLIC_IMAGEKIT_URL}/${uni_logo}`}
          alt="university-logo"
          className="h-[100px] w-[100px]  ring-1 ring-primary shadow-md object-contain rounded-md bg-white"
          width={200}
          height={200}
        />
      </div>
      <div className="flex flex-col gap-1 justify-center items-start relative bg-transparent">
        <div className="flex gap-2">
          <div className="min-w-4 w-[20px] h-[20px] mt-1">
            <HatIcon />
          </div>
          <h5 className="font-semibold text-sm text-primary">{course_name}</h5>
        </div>
        <div className="flex gap-1 relative bg-transparent flex-col  justify-between">
          <div className="flex gap-2 items-center relative bg-transparent">
            <div className="w-[14px] h-[14px]">
              <UniversityIcon />
            </div>
            <p className="text-xs text-black/60">{university}</p>
          </div>
          <div className="flex gap-2 items-center relative bg-transparent">
            <div className="w-[14px] h-[14px]">
              <PinIcon />
            </div>
            <p className="text-xs text-black/60">{country}</p>
          </div>
          <div className="flex gap-2 items-center relative bg-transparent">
            <div className="w-[14px] h-[14px]">
              <TimeIcon />
            </div>
            <p className="text-xs text-black/60">{uni_address}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
