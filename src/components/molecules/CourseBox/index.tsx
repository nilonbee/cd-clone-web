import { MainButton } from "@/components/atoms";
import { HatIcon, PinIcon, UniversityIcon } from "@/components/atoms/Icons";
import { TimeIcon } from "@/components/atoms/Icons/TimeIcon";
import { ICourse } from "@/types/courses";
import Image from "next/image";
import { CardWrapper } from "..";
import Link from "next/link";
import { rootImagePath } from "@/utils/rootImagePath";

export const CourseBox = ({
  id,
  university,
  uni_logo,
  course_name,
  country,
  course_fee,
  level_name,
  currency,
}: ICourse) => {
  return (
    <CardWrapper>
      <div className="w-full h-24 sm:h-20 overflow-hidden border-b border-grayLight pb-2">
        <Image
          src={`${rootImagePath(uni_logo as string)}`}
          alt="Logo"
          className="w-full h-full object-contain"
          width={300}
          height={150}
        />
      </div>
      <div className="flex flex-col mt-5">
        <div className="flex gap-2.5 relative h-12">
          <div className="min-w-4 w-[24px] h-[24px] mt-1">
            <HatIcon />
          </div>
          <h5 className="font-semibold text-base text-primary line-clamp-2">
            {course_name}
          </h5>
        </div>
        <div className="flex flex-col gap-2 items-start relative mt-4">
          <div className="flex gap-2 items-center relative">
            <div className="w-[22px] h-[22px]">
              <UniversityIcon />
            </div>
            <p className="text-sm text-black/60 line-clamp-1">{university}</p>
          </div>
          <div className="flex gap-2 items-center relative">
            <div className="w-[22px] h-[22px]">
              <PinIcon />
            </div>
            <p className="text-sm text-black/60 line-clamp-1">{country}</p>
          </div>
          <div className="flex gap-2 items-center relative">
            <div className="w-[22px] h-[22px]">
              <TimeIcon />
            </div>
            <p className="text-sm text-black/60 line-clamp-1">{level_name}</p>
          </div>
          {/* <div className="mt-2">
              <Rating rating={rating} />
            </div> */}
          <div className="flex gap-2 items-end relative mb-2 mt-2 xs:flex-col md:flex-row ">
            <h2 className="font-bold text-1xl text-primary">
              {currency ? currency : "$"}
              {Number(course_fee).toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </h2>
            <p className="text-xs text-grayText">(Total Amount)</p>
          </div>
          <div className="flex gap-2  justify-between items-center w-full">
            <Link href={`/courses/${id}`} className="w-full">
              <MainButton
                label="Apply"
                btnStyle="Primary"
                btnSize="Medium"
                fullWith={true}
              />
            </Link>
            <Link href={`/courses/${id}`} className="w-full">
              <MainButton
                label="More"
                btnStyle="Secondary"
                btnSize="Medium"
                fullWith={true}
              />
            </Link>
          </div>
        </div>
      </div>
    </CardWrapper>
  );
};
