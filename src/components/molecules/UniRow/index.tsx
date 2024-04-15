import Image from "next/image";
import { PinIcon, TimeIcon, UniversityIcon } from "@/components/atoms/Icons";
import { ICourse } from "@/types/courses";

export const UniRow = ({
  country,
  university,
  uni_logo,
  uni_address,
  course_name,
}: ICourse) => {
  return (
    <div className="p-4 flex gap-5 items-center self-stretch relative w-full bg-[#eef7ff] rounded shadow border border-boxBorder">
      <div className="border-r border-grayText">
        <Image
          src={`${process.env.NEXT_PUBLIC_IMAGEKIT_URL}/${uni_logo}`}
          alt="university-logo"
          width={200}
          height={200}
        />
      </div>
      <div className="flex flex-col gap-1 justify-center items-start relative bg-transparent">
        <h2 className="text-2xl text-textColor">{course_name}</h2>
        <div className="flex gap-3 relative bg-transparent flex-row  justify-between flex-wrap">
          <div className="flex gap-2 items-center relative bg-transparent">
            <UniversityIcon />
            <p className="text-sm text-black/60">{university}</p>
          </div>
          <div className="flex gap-2 items-center relative bg-transparent">
            <PinIcon />
            <p className="text-sm text-black/60">{country}</p>
          </div>
          <div className="flex gap-2 items-center relative bg-transparent">
            <TimeIcon />
            <p className="text-sm text-black/60">{uni_address}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
